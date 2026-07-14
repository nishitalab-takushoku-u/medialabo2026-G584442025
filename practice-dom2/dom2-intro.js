let cha = document.querySelector('button#henkou');
cha.addEventListener('click', change);

function change(){
    let u1 = document.querySelector('ul#kazoeuta');
    let y = document.createElement('li');
    y.textContent = 'ヨット';
    u1.insertAdjacentElement('beforeend', y);

    let im = document.querySelector('img#bluemoon');
    im.setAttribute('src','bluemoon.jpg');

    let ur = document.createElement('a');
    ur.textContent = '拓殖大学HP';
    ur.setAttribute('href','https://www.takushoku-u.ac.jp');
    let rl = document.querySelector('p#takudai');
    rl.insertAdjacentElement('afterend',ur);

    let u2 = document.querySelector('ul#kassen');
    u2.remove();

    let u3 = document.createElement('ul');
        
    co = document.createElement('li');
    co.textContent = '赤';
    u3.insertAdjacentElement('beforeend',co);

    co = document.createElement('li');
    co.textContent = '緑';
    u3.insertAdjacentElement('beforeend',co);

    co = document.createElement('li');
    co.textContent = '青';
    u3.insertAdjacentElement('beforeend',co);

    lor = document.querySelector('p#primary');
    lor.insertAdjacentElement('afterend',u3);

}