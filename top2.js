'user strict'

{
    const todos = [];
    const addBtn = document.getElementById("addbtn");
    const textMessage = document.getElementById("content");

    const outputElem = document.getElementById("output");

    const radioWork = document.getElementById("work");
    const radioComplete = document.getElementById("complete");

    // 作業中・完了の応じて表示を切り替えるもの、switchBtnを引数にする事で、作業中なのか完了なのかを判別させる。

    const change = function (tr, switchBtn) {
        tr.classList.remove('hidden');
        if (radioWork.checked === true) {
            tr.classList.remove('hidden');
            if (switchBtn.textContent === "完了") {
                tr.classList.add('hidden')
            };
        } else if (radioComplete.checked === true) {
            tr.classList.remove('hidden');
            if (switchBtn.textContent === "作業中") {
                tr.classList.add('hidden');
            }
        }
    }

    // todo内容に記入があったものを取得し、配列に追加。
    addBtn.addEventListener('click', function () {

        const todoComment = textMessage.value;
        const workingBtn = document.createElement('button');
        workingBtn.textContent = "作業中";
        // workingBtnの表示切り替え
        workingBtn.addEventListener('click', function () {
            if (workingBtn.textContent === "作業中") {
                workingBtn.textContent = "完了";
            } else {
                workingBtn.textContent = "作業中";
            }
        })

        const todosObject = {
            comment: todoComment,
            state: workingBtn,
        };

        todos.push(todosObject);
        showTodo();
        textMessage.value = "";

    });

    // 配列のtodoを表示する関数
    const showTodo = function () {
        // outputElemに事前に要素が入っていた場合、その内容は表示しないもの
        while (outputElem.firstChild) {
            outputElem.textContent = "";
        }

        // 配列のものに対して繰り返し作業をするもの
        todos.forEach(function (todosObject, index) {
            const tr = document.createElement('tr');
            const idNumber = document.createElement('td');
            const comment = document.createElement('td');
            const state = document.createElement('td');
            const del = document.createElement('td');

            idNumber.textContent = index + 1;
            comment.textContent = todosObject.comment;
            const switchBtn = todosObject.state;

            const deleatBtn = document.createElement('button');
            deleatBtn.textContent = "削除";

            deleatBtn.addEventListener('click', function () {
                deleatTodo(index);
            })

            const displayBtn = document.getElementsByName('status');
            for (let i = 0; i < displayBtn.length; i++) {
                displayBtn[i].addEventListener('change', function () {
                    change(tr, switchBtn);
                });
            }

            change(tr, switchBtn);

            outputElem.appendChild(tr);
            tr.appendChild(idNumber);
            tr.appendChild(comment);
            tr.appendChild(state);
            tr.appendChild(del);
            state.appendChild(switchBtn);
            del.appendChild(deleatBtn);

        });
    };

    // 削除ボタンで、todoに表示されているものを削除する関数
    const deleatTodo = function (index) {
        todos.splice(index, 1);
        showTodo();
    }



    //     let deleat = document.createElement('button');
    //     deleat.textContent = "削除";

    //     deleat.addEventListener('click', function () {
    //         idTag.innerHTML = "";
    //         taskTag.innerHTML = "";
    //         trTag.removeChild(workingBtn);
    //         this.remove(deleat);
    //         // buttonTag.innerHTML = "";
    //     });

    //     trTag.appendChild(idTag);
    //     trTag.appendChild(taskTag);
    //     trTag.appendChild(working);
    //     trTag.appendChild(deleat);
    //     outputElem.appendChild(trTag);


    //     const todosObject = {
    //         id: idNumber,
    //         commnet: textMessage,
    //         firstBtn: working,
    //         secondBtn: deleat
    //     };

    //     todos.push(todosObject);
    //     idTag.innerHTML = todosObject.id;
    //     taskTag.innerHTML = todosObject.commnet;
    //     console.log(todos);

    //     const topDone = document.getElementsByClassName('done');
    //     const topDoing = document.getElementsByClassName('doing');
    //     const radioAll = document.getElementById("all");
    //     const radioWork = document.getElementById("work");
    //     const radioComplete = document.getElementById("complete");

    //     if (radioAll.checked === true) {

    //         addBtn.addEventListener('click', function () {
    //             const addTarget = topDoing[topDoing.length - 1].parentNode;
    //             addTarget.style.display = "";
    //         });

    //         for (i = 0; i < topDone.length; i++) {

    //             const topDoneTarget = topDone[i].parentNode;
    //             topDoneTarget.style.display = "";
    //             console.log(topDoneTarget);
    //         }
    //         for (i = 0; i < topDoing.length; i++) {

    //             const topDoingTarget = topDoing[i].parentNode;
    //             topDoingTarget.style.display = "";

    //             console.log(todos);
    //         }

    //     }
    //     if (radioWork.checked === true) {

    //         for (i = 0; i < topDone.length; i++) {

    //             const topDoneTarget = topDone[i].parentNode;
    //             topDoneTarget.style.display = "none";
    //         }
    //         for (i = 0; i < topDoing.length; i++) {

    //             const topDoingTarget = topDoing[i].parentNode;
    //             topDoingTarget.style.display = "";

    //             topDoing[i].addEventListener('click', function () {
    //                 topDoingTarget.style.display = "none"
    //             })
    //         }

    //         addBtn.addEventListener('click', function () {
    //             if (topDoing.textContent === "作業中") {
    //                 const addTarget = topDoing[topDoing.length - 1].parentNode;
    //                 addTarget.style.display = "";
    //             }
    //         });
    //     }
    //     if (radioComplete.checked === true) {

    //         addBtn.addEventListener('click', function () {
    //             console.log(topDoing[topDoing.length - 1].parentNode);
    //             const addTarget = topDoing[topDoing.length - 1].parentNode;
    //             addTarget.style.display = "none";
    //         });

    //         for (i = 0; i < topDone.length; i++) {

    //             const topDoneTarget = topDone[i].parentNode;
    //             topDoneTarget.style.display = "";
    //             console.log(topDoneTarget);
    //             topDone[i].addEventListener('click', function () {
    //                 topDoneTarget.style.display = "none";
    //             })
    //         }
    //         for (i = 0; i < topDoing.length; i++) {

    //             const topDoingTarget = topDoing[i].parentNode;
    //             topDoingTarget.style.display = "none";


    //             console.log(todos);
    //         }
    //     }
    // });

    // }
}

