'user strict'

{
    const todos = [];

    function addStringToTextare() {
        const idNumber = todos.length + 1;
        const textMessage = document.getElementById("content").value;
        const trTag = document.createElement('tr');
        const idTag = document.createElement('td');
        const taskTag = document.createElement('td');
        const outputElem = document.getElementById("output");


        function createWorkingBtn() {
            let working = document.createElement('button');
            working.textContent = "作業中";
            working.classList.add('doing');

            working.addEventListener('click', function () {
                if (working.textContent === "作業中") {
                    working.textContent = "完了";
                    working.classList.remove('doing');
                    working.classList.add('done');

                } else {
                    working.textContent = "作業中";
                    working.classList.remove('done');
                    working.classList.add('doing');
                }
            });
            return working;
        };

        const workingBtn = createWorkingBtn();

        function createDeleatBtn() {

            let deleat = document.createElement('button');
            deleat.textContent = "削除";

            deleat.addEventListener('click', function () {
                idTag.innerHTML = "";
                taskTag.innerHTML = "";
                trTag.removeChild(workingBtn);
                this.remove(deleat);
                // buttonTag.innerHTML = "";
            });

            return deleat;
        };
        const deleatBtn = createDeleatBtn();

        trTag.appendChild(idTag);
        trTag.appendChild(taskTag);
        trTag.appendChild(workingBtn);
        trTag.appendChild(deleatBtn);
        outputElem.appendChild(trTag);


        const todosObject = {
            id: idNumber,
            commnet: textMessage,
            firstBtn: workingBtn,
            secondBtn: deleatBtn
        };

        todos.push(todosObject);
        idTag.innerHTML = todosObject.id;
        taskTag.innerHTML = todosObject.commnet;
        console.log(todos);
    }


    function pushstatus() {
        const topDone = document.getElementsByClassName('done');
        const topDoing = document.getElementsByClassName('doing');
        const radioStatus = document.getElementsByName('status');


        if (radioStatus[0].checked) {
            for (topDoneNumber = 0; topDoneNumber < topDone.length; topDoneNumber++) {

                const topDoneTarget = topDone[topDoneNumber].parentNode;
                topDoneTarget.style.display = "";
                console.log(topDoneTarget);
            }
            for (topDoingNumber = 0; topDoingNumber < topDoing.length; topDoingNumber++) {

                const topDoingTarget = topDoing[topDoingNumber].parentNode;
                topDoingTarget.style.display = "";

                console.log(todos);
            }

        }
        if (radioStatus[1].checked) {
            for (topDoneNumber = 0; topDoneNumber < topDone.length; topDoneNumber++) {

                const topDoneTarget = topDone[topDoneNumber].parentNode;
                topDoneTarget.style.display = "none";
                console.log(topDoneTarget);
            }
            for (topDoingNumber = 0; topDoingNumber < topDoing.length; topDoingNumber++) {

                const topDoingTarget = topDoing[topDoingNumber].parentNode;
                topDoingTarget.style.display = "";
            }
            topDoing.addEventListener('click', function () {
                alert('クリックされたよ');
            })
        }
        if (radioStatus[2].checked) {
            for (topDoneNumber = 0; topDoneNumber < topDone.length; topDoneNumber++) {

                const topDoneTarget = topDone[topDoneNumber].parentNode;
                topDoneTarget.style.display = "";
                console.log(topDoneTarget);
            }
            for (topDoingNumber = 0; topDoingNumber < topDoing.length; topDoingNumber++) {

                const topDoingTarget = topDoing[topDoingNumber].parentNode;
                topDoingTarget.style.display = "none";

                console.log(todos);
            }
        }
    }
}

