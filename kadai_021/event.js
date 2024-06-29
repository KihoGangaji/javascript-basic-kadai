const addBtn = document.getElementById('btn');

const text = document.getElementById('text');

// HTML要素をクリックされたときに,2秒後にイベント処理を実行する
btn.addEventListener('click',() => {
  setTimeout(() => {
    text.textContent = "ボタンをクリックしました";
  }, 2000);
});
