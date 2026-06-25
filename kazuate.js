// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
k = document.querySelector('span#kaisu');

seikai = false;
s=null;

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  kaisu = kaisu + 1;
  k.textContent = kaisu;
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso = document.querySelector('input[name="num"]');
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  

  if(kaisu<4 && seikai==false){
  // ここから: 正解判定する
  // 　　　　  正解/不正解のときのメッセージを表示する


   if(kotae==Number(yoso.value)){
   s=("正解です．おめでとう!");
   seikai=true;
   } 

   else if(kaisu==3){
    s=("残念．答えは"+ kotae +"でした");
    seikai=true;
   }

   else if(kotae>Number(yoso.value)) {
    s=("まちがい．答えはもっと大きいですよ");
   }

   else if(kotae<Number(yoso.value)) {
    s=("まちがい．答えはもっと小さいですよ");
   }

  // ここまで: 正解判定する
  }


  else{
     s=("答えは"+ kotae + "でした．すでにゲームは終わっています");
  } 
  

  p = document.querySelector('p#result');
  p.textContent = s;


}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
b = document.querySelector('button#guess');
b.addEventListener('click', hantei);
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
