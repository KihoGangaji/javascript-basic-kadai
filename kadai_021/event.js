// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// parentListというidを持つHTML要素を取得し、定数に代入する
const parentList = document.getElementById('text');

// HTML要素をクリックされたときに,2秒後にイベント処理を実行する
btn.addEventListener('click',() => {
  setTimeout(() => {
    text.textContent = "ボタンをクリックしました";
  }, 2000);
});
