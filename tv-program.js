
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
 let a=0;
 for (x of data.list.g1){
  a=a+1;
  console.log(a+"件目の検索結果");
  console.log("開始時刻："+x.start_time);
  console.log("終了時刻："+x.end_time);
  console.log("チャンネル："+x.service.name);
  console.log("タイトル："+x.title);
  console.log("サブタイトル："+x.subtitle);
  console.log("番組説明："+x.content);
  if(x.act===""){
   console.log("出演者：情報無し");    
  }
  else{
    console.log("出演者："+x.act);
  }
  console.log(" ");    
 } 
}


// 第4回の宿題分
let SerCha= document.querySelector('button#Bt')
SerCha.addEventListener('click', SerchResultCha);

function SerchResultCha() {
  let SelCha = document.querySelector('select#channel');
  let No = SelCha.selectedIndex;

  let OpSerCha = SelCha.querySelectorAll('option');
  let rescha = OpSerCha.item(No);


  console.log('チャンネル：'+ rescha.getAttribute('value'));
}

let SerGen= document.querySelector('button#Bt')
SerGen.addEventListener('click', SerchResultGen);

function SerchResultGen() {
  let SelGen = document.querySelector('select#genre');
  let No = SelGen.selectedIndex;

  let OpSerGen = SelGen.querySelectorAll('option');
  let resGen = OpSerGen.item(No);

  console.log('チャンネル：'+ resGen.getAttribute('value'));
}



// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
 let u1 = document.querySelector('table');
 
 let div = document.createElement('div#result');
 let tbo = document.createElement('tbody');

 
 div.insertAdjacentElement('beforeend',u1);

 u1.insertAdjacentElement('beforeend',tbo);


 let no = 0;
 for (x of data.list.g1){
 let tr = document.createElement('tr');
 tbo.insertAdjacentElement('beforeend',tr);

  let th = document.createElement('th');
  no++;
  th.textContent =  no + "件目"
  tr.insertAdjacentElement('beforeend',th);

  let tdStr = document.createElement('td');
  tdStr.textContent = x.start_time;
  th.insertAdjacentElement('afterend',tdStr);

  let tdFin = document.createElement('td');
  tdFin.textContent = x.end_time;
  tdStr.insertAdjacentElement('afterend',tdFin);

  let tdCha = document.createElement('td');
  tdCha.textContent = x.service.name;
  tdFin.insertAdjacentElement('afterend',tdCha);

  let tdTit = document.createElement('td');
  tdTit.textContent = x.title;
  tdCha.insertAdjacentElement('afterend',tdTit);

  let tdSub = document.createElement('td');
  tdSub.textContent = x.subtitle;
  tdTit.insertAdjacentElement('afterend',tdSub);

  let tdCon = document.createElement('td');
  tdCon.textContent = x.content;
  tdSub.insertAdjacentElement('afterend',tdCon);

  let tdAct = document.createElement('td');
  if(x.act===""){
   tdAct.textContent = "記載無し";    
  }
  else{
    tdAct.textContent = x.act;
  }
  tdCon.insertAdjacentElement('afterend',tdAct);
  let u2 = document.querySelector('caption')
  u2.textContent = "計"+ no +"件"
 }



}

// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はテレビ番組表のデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};

