l = document.querySelector('input[name="left"]');
r = document.querySelector('input[name="right"]');
b = document.querySelector('button#calc');
s = document.querySelector('span#answer');

b.addEventListener('click', greeting);
 function greeting() {
    s.textContent = Number(l.value) + Number(r.value);
  }