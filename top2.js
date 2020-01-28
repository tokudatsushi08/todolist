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

        // 作業中ボタンを作成する定数
        const workingBtn = document.createElement('button');
        workingBtn.textContent = "作業中";
        workingBtn.classList.add('doing');

        // 作業中ボタンに動作を加える
        workingBtn.addEventListener('click', function () {
            if (workingBtn.textContent === "作業中") {
                workingBtn.textContent = "完了";
                workingBtn.classList.add('done');
                workingBtn.classList.remove('doing');
            } else {
                workingBtn.textContent = "作業中";
                workingBtn.classList.remove('done');
                workingBtn.classList.add('doing');
            }
        });

        // 削除ボタンを作成する定数
        const deleatBtn = document.createElement('button');
        deleatBtn.textContent = "削除";

        // 削除ボタンに動作を加える
        deleatBtn.addEventListener('click', function () {
            idTag.innerHTML = "";
            taskTag.innerHTML = "";
            trTag.removeChild(workingBtn);
            trTag.removeChild(deleatBtn);
        });


        // オブジェクトを作成する
        const todosObject = {
            id: idNumber,
            commnet: textMessage,
            firstBtn: workingBtn,
            secondBtn: deleatBtn
        };

        // オブジェクトの内容を配列に入れる
        todos.push(todosObject);
        idTag.innerHTML = todosObject.id;
        taskTag.innerHTML = todosObject.commnet;
        console.log(todos);

        // 各要素で親子関係を作り、最後にhtmlに表示する
        trTag.appendChild(idTag);
        trTag.appendChild(taskTag);
        trTag.appendChild(workingBtn);
        trTag.appendChild(deleatBtn);
        outputElem.appendChild(trTag);

    }


    function pushstatus() {

        // 各ラジオボタンの要素を取得する
        const topDone = document.getElementsByClassName('done');
        const topDoing = document.getElementsByClassName('doing');
        const radioStatus = document.getElementsByName('status');

        // 『全て』を選択した場合
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

                console.log(todos);
            }
            topDoing[topDoingNumber].addEventListener('click', function () {
                for (topDoingNumber = 0; topDoingNumber < topDoing.length; topDoingNumber++) {
                    const topDoingTarget = topDoing[topDoingNumber].parentNode;
                    topDoingTarget.style.display = "none";
                }
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

