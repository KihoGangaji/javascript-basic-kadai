// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

const parentList = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click',() => {
  
  // li要素を新しく作成する
  const childList = document.createElement('text');
  childList.textContent = 'ボタンをクリックしました';

  // parentListの最初の子要素を削除する
  parentList.removeChild(parentList.firstChild);

  // childListを追加する
  parentList.appendChild(childList);
});