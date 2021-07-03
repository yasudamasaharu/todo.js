const inputTextArea = document.getElementById("add-text");
const inCompleteList = document.getElementById("incomplete-list");
const completeArea = document.getElementById("complete-list");

const onClickAdd = () => {
  //「TODOを入力」のテキストボックスの値を取得して初期化する
  const inputText = inputTextArea.value;
  inputTextArea.value = "";
  // console.log(inputText);
  createIncompleteList(inputText);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  //divタグを生成
  const $div = document.createElement("div");
  $div.className = "list-row";

  // liタグを生成
  const $li = document.createElement("li");
  $li.innerText = text;
  // console.log($li);

  // 完了btnタグ生成
  const completebtn = document.createElement("button");
  completebtn.innerText = "完了";
  completebtn.addEventListener("click", () => {
    // 完了リストに追加する要素
    const addTarget = completebtn.parentNode;
    const text = addTarget.firstElementChild.innerText;

    // 押された完了ボタンの親要素(div)を削除
    deleteFromIncompleteList(completebtn.parentNode);

    // div以下の要素を初期化する
    addTarget.textContent = null;

    // liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    // 戻すボタンの生成
    const backBtn = document.createElement("button");
    backBtn.innerText = "戻す";

    backBtn.addEventListener("click", () => {
      const deleteTarget = backBtn.parentNode;
      completeArea.removeChild(deleteTarget);

      const returnText = deleteTarget.firstElementChild.innerText;
      createIncompleteList(returnText);
    });
    // divの子要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backBtn);

    // 未完了リストの完了ボタンをクリックしたら「完了したTODO」の戻すボタンの生成

    completeArea.appendChild(addTarget);
  });

  // 「完了したTODO」の戻すボタンの生成
  const $returnLi = document.createElement("li");
  // $returnLi.innerText = addText;
  const $returnBtn = document.createElement("button");
  // $returnBtn.innerText = "戻す";
  const $returndiv = document.createElement("div");

  $returnBtn.addEventListener("click", () => {
    // 「完了したTODO」にある戻すボタンのテキスト飲みを取得する
    // const call = $returnBtn.pa rentNode;
    // const callbackText = call.firstElementChild.innerText;

    // クリックしたリストを削除する
    completeArea.removeChild($returndiv);

    // クリックした要素を未完了リストに渡す
    inCompleteList.appendChild($div);
  });

  // 削除btnタグ生成
  const deletebtn = document.createElement("button");
  deletebtn.innerText = "削除";
  deletebtn.addEventListener("click", () => {
    // 押された削除ボタンの親要素(div)を削除
    deleteFromIncompleteList(deletebtn.parentNode);
    // const deleteTarget = deletebtn.parentNode;
    // inCompleteList.removeChild(deleteTarget);
  });

  // divタグの子要素に各要素を格納
  $div.appendChild($li);
  $div.appendChild(completebtn);
  $div.appendChild(deletebtn);
  console.log($div);

  // 未完了リストに追加
  inCompleteList.appendChild($div);
  // completeArea.appendChild($div);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
