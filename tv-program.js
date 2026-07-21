
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
/*let SerCha= document.querySelector('button#Bt')
SerCha.addEventListener('click', SerchResultCha);

function SerchResultCha() {
  let SelCha = document.querySelector('select#survise');
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
*/

let rem = false;
let kensaku= document.querySelector('button#Bt');
kensaku.addEventListener('click',sendRequest);


// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {

    let S1 = document.querySelector('select#survice');
  let S2 = S1.selectedIndex;
  let S3 = S1.querySelectorAll('option');
  let survice = S3.item(S2);

 if(rem===true){
  
  re = document.querySelectorAll('caption');
  for (x of re){
   x.remove();
  }

  re = document.querySelectorAll('thead');
  for (x of re){
   x.remove();
  }

  re = document.querySelectorAll('tr');
  for (x of re){
   x.remove();
  }
  
  re = document.querySelectorAll('th');
  for (x of re){
   x.remove();
  }

  re = document.querySelectorAll('p');
  for (x of re){
   x.remove();
  }
 } 

 let no = 0;
 if(data.list!=null){

 let div = document.createElement('div');
 div.classList.add('result');
 let u1 = document.querySelector('button');
 u1.insertAdjacentElement('afterend',div);


 let capt = document.createElement('caption');
 div.insertAdjacentElement('beforeend',capt);


 let hthe = document.createElement('thead');
 capt.insertAdjacentElement('afterend',hthe);


 let htr = document.createElement('tr');
 hthe.insertAdjacentElement('beforeend',htr);
 

 let hth1 = document.createElement('th');
 htr.insertAdjacentElement('beforeend',hth1);
 hth1.textContent = "件数";


 let hth2 = document.createElement('th');
 hth1.insertAdjacentElement('afterend',hth2);
 hth2.textContent = "開始時刻";
 

 let hth3 = document.createElement('th');
 hth2.insertAdjacentElement('afterend',hth3);
 hth3.textContent = "終了時刻";


 let hth4 = document.createElement('th');
 hth3.insertAdjacentElement('afterend',hth4);
 hth4.textContent = "チャンネル";


 let hth5 = document.createElement('th');
 hth4.insertAdjacentElement('afterend',hth5);
 hth5.textContent = "タイトル";


 let hth6 = document.createElement('th');
 hth5.insertAdjacentElement('afterend',hth6);
 hth6.textContent = "サブタイトル";


 let hth7 = document.createElement('th');
 hth6.insertAdjacentElement('afterend',hth7);
 hth7.textContent = "番組説明";


 let hth8 = document.createElement('th');
 hth7.insertAdjacentElement('afterend',hth8);
 hth8.textContent = "出演者";


 let tbo = document.createElement('tbody');
 hthe.insertAdjacentElement('afterend',tbo);
 

 if(survice.getAttribute('value')=="g1"){

 for (x of data.list.g1){
  let tr = document.createElement('tr');
  tbo.insertAdjacentElement('beforeend',tr);


  let th = document.createElement('th');
  no++;
  th.textContent =  no + "件目"
  tr.insertAdjacentElement('beforeend',th);


  let tdStr = document.createElement('td');

  const date1 = new Date(x.start_time);
  if(date1.getMinutes()<10){
    min1="0" + date1.getMinutes();
  }
  else{
    min1=date1.getMinutes();
  }


  tdStr.textContent = date1.getUTCFullYear()+"/"+date1.getUTCMonth()+"/"+date1.getUTCDate()+" "+date1.getUTCHours()+":"+min1+" ";
  th.insertAdjacentElement('afterend',tdStr);


  let tdFin = document.createElement('td');

  const date2 = new Date(x.end_time);
  if(date2.getMinutes()<10){
    min2="0" + date2.getMinutes();
  }
  else{
    min2=date2.getMinutes();
  }
  tdFin.textContent = date2.getUTCFullYear()+"/"+date2.getUTCMonth()+"/"+date2.getUTCDate()+" "+date2.getUTCHours()+":"+min2+" ";
 
  tdStr.insertAdjacentElement('afterend',tdFin);


  let tdCha = document.createElement('td');
  tdCha.textContent = x.service.name;
  tdFin.insertAdjacentElement('afterend',tdCha);


  let tdTit = document.createElement('td');
  tdTit.textContent = x.title;
  tdCha.insertAdjacentElement('afterend',tdTit);


  let tdSub = document.createElement('td');
  if(x.subtitle===""){
   tdSub.textContent = "記載無し";    
  }
  else{
    tdSub.textContent = x.subtitle;
  }
   tdTit.insertAdjacentElement('afterend',tdSub);


  let tdCon = document.createElement('td');
  if(x.content===""){
   tdCon.textContent = "記載無し";    
  }
  else{
    tdCon.textContent = x.content;
  }
   tdSub.insertAdjacentElement('afterend',tdCon);


  let tdAct = document.createElement('td');
  if(x.act===""){
   tdAct.textContent = "記載無し";    
  }
  else{
    tdAct.textContent = x.act;
  }
   tdCon.insertAdjacentElement('afterend',tdAct);
   
 }

  capt.textContent = ("計"+ no +"件");

 }





  else if(survice.getAttribute('value')=="e1"){ 

  for (x of data.list.e1){
  let tr = document.createElement('tr');
  tbo.insertAdjacentElement('beforeend',tr);


  let th = document.createElement('th');
  no++;
  th.textContent =  no + "件目"
  tr.insertAdjacentElement('beforeend',th);


  let tdStr = document.createElement('td');

  const date1 = new Date(x.start_time);
  if(date1.getMinutes()<10){
    min1="0" + date1.getMinutes();
  }
  else{
    min1=date1.getMinutes();
  }


  tdStr.textContent = date1.getUTCFullYear()+"/"+date1.getUTCMonth()+"/"+date1.getUTCDate()+" "+date1.getUTCHours()+":"+min1+" ";
  th.insertAdjacentElement('afterend',tdStr);


  let tdFin = document.createElement('td');

  const date2 = new Date(x.end_time);
  if(date2.getMinutes()<10){
    min2="0" + date2.getMinutes();
  }
  else{
    min2=date2.getMinutes();
  }
  tdFin.textContent = date2.getUTCFullYear()+"/"+date2.getUTCMonth()+"/"+date2.getUTCDate()+" "+date2.getUTCHours()+":"+min2+" ";
 
  tdStr.insertAdjacentElement('afterend',tdFin);

  let tdCha = document.createElement('td');
  tdCha.textContent = x.service.name;
  tdFin.insertAdjacentElement('afterend',tdCha);


  let tdTit = document.createElement('td');
  tdTit.textContent = x.title;
  tdCha.insertAdjacentElement('afterend',tdTit);


  let tdSub = document.createElement('td');
  if(x.subtitle===""){
   tdSub.textContent = "記載無し";    
  }
  else{
    tdSub.textContent = x.subtitle;
  }
   tdTit.insertAdjacentElement('afterend',tdSub);


  let tdCon = document.createElement('td');
  if(x.content===""){
   tdCon.textContent = "記載無し";    
  }
  else{
    tdCon.textContent = x.content;
  }
   tdSub.insertAdjacentElement('afterend',tdCon);


  let tdAct = document.createElement('td');
  if(x.act===""){
   tdAct.textContent = "記載無し";    
  }
  else{
    tdAct.textContent = x.act;
  }
   tdCon.insertAdjacentElement('afterend',tdAct);
   
 }

  capt.textContent = ("計"+ no +"件");
 
 }}




 
 else{
    let p1 = document.createElement('p');
  let u1 = document.querySelector('button');
  u1.insertAdjacentElement('afterend',p1);
  p1.textContent="条件に合う番組は見つかりませんでした"
 }

 rem = true;

 

}

 




// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let S1 = document.querySelector('select#survice');
  let S2 = S1.selectedIndex;
  let S3 = S1.querySelectorAll('option');
  let survice = S3.item(S2);

  let G1 = document.querySelector('select#genre');
  let G2 = G1.selectedIndex;
  let G3 = G1.querySelectorAll('option');
  let genre = G3.item(G2);
  
  if(survice.getAttribute('value')!=0 && genre.getAttribute('value')!=9999 ){
  let url ='https://www.nishita-lab.org/web-contents/jsons/nhk/'+survice.getAttribute('value')+'-'+genre.getAttribute('value')+'-j.json';
  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
  }  
  else{
  if(rem===true){
     re = document.querySelectorAll('caption');
  for (x of re){
   x.remove();
  }

  re = document.querySelectorAll('thead');
  for (x of re){
   x.remove();
  }

  re = document.querySelectorAll('tr');
  for (x of re){
   x.remove();
  }
  
  re = document.querySelectorAll('th');
  for (x of re){
   x.remove();
  }

  re = document.querySelectorAll('p');
  for (x of re){
   x.remove();
  } 
  }
  let p2 = document.createElement('p');
  let u2 = document.querySelector('button');
  u2.insertAdjacentElement('afterend',p2);
  p2.textContent="検索したいチャンネルとジャンルを両方選択してください"
  rem = true;
  }
}



// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data; 
  printDom(data);
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
/*let data = {
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
*/