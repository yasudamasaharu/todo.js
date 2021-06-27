const addBtn = document.querySelector(".add-btn");
const inputText = document.querySelector(".add-text");
const incompleteArea = document.querySelector(".incomplete-area");

const onClickAdd = function () {
  let addtext = inputText.value;
  inputText.value = "";
  // addtext = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-item";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = addtext;

  // liにdiv要素を追加する
  li.appendChild(div);

  // 未完了のエリアに追加する
  incompleteArea.appendChild(li);
};

// const todoText = document.querySelector('.todo-text');

addBtn.addEventListener("click", () => onClickAdd());
