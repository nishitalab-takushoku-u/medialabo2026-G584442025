i = document.querySelector('input[name="shimei"]');
p = document.querySelector('p#message');

b = document.querySelector('button#print');
b.addEventListener('click', greeting);
 function greeting() {
    aisatu ='こんにちは、'+i.value+'さん'
    console.log(aisatu);
    p.textContent = aisatu;
  }