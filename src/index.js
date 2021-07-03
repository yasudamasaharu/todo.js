// const addBtn = document.querySelector(".add-btn");
// const inputText = document.querySelector(".add-text");
// const incompleteArea = document.querySelector(".incomplete-area");
// const completeArea = document.querySelector(".complete-area");

// const onClickAdd = function () {
//   let addtext = inputText.value;
//   inputText.value = "";
//   // addtext = "";

//   // div生成
//   const div = document.createElement("div");
//   div.className = "list-item";

//   // ul生成
//   const ul = document.createElement("ul");
//   ul.className = "list-wrap";

//   // liタグ生成
//   const li = document.createElement("li");
//   li.className = "list-items";
//   li.innerText = addtext;

//   // 完了btnの生成
//   const completeBtn = document.createElement("button");
//   completeBtn.innerText = "完了";

//   // 「未完了のTODO」の完了ボタンを押したイベント
//   completeBtn.addEventListener("click", () => {
//     // 「完了したTODO」に要素を代入する
//     console.log("ccc", completeBtn);
//     // const addTarget = completeBtn.closest("ul");
//     const aaa = completeBtn.parentNode;
//     const bbb = aaa.parentNode.innerText;
//     console.log(bbb);
//     // console.log(qqq);
//     // console.log(ttt);

//     // const text = addTarget.firstElementChild.innerText;
//     // console.log(text);
//   });
//   // btn.className = "add-btn";

//   // 削除btnの生成
//   const deleteBtn = document.createElement("button");
//   deleteBtn.innerText = "削除";
//   deleteBtn.addEventListener("click", () => {
//     // const delete1 = deleteBtn.parentNode;
//     // const deleteArea = delete1.parentNode;
//     // deleteArea.remove();

//     // const deleteTarget = deleteBtn.closest("ul");
//     // deleteTarget.remove();
//     deleteFromIncompleteList(deleteBtn, "ul");
//   });
//   div.appendChild(completeBtn);
//   div.appendChild(deleteBtn);

//   console.log("div", div);
//   // liにdiv要素を追加する
//   li.appendChild(div);

//   // ulにliとdivを追加
//   ul.appendChild(li);
//   console.log("ul", ul);

//   // 未完了のエリアに追加する
//   incompleteArea.appendChild(ul);

//   // 未完了リストから指定の要素を削除
//   const deleteFromIncompleteList = (el, target) => {
//     const deleteTarget = el.closest(target);
//     deleteTarget.remove();
//   };
// };

// // const todoText = document.querySelector('.todo-text');

// addBtn.addEventListener("click", () => onClickAdd());

// // const abc = document.querySelector(".test");
// // // console.log(abc);
// // const bbb = document.querySelector(".test-item");
// // abc.removeChild(bbb);
// // console.log(abc);
