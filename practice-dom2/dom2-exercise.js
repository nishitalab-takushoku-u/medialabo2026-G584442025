//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!

let k = 0;

let Show = document.querySelector('button#show');

Show.addEventListener('click',show);

function show(){
 if(k==0){
	let ad = document.createElement('p');
	ad.textContent = campus.address;
	let u1 = document.querySelector('h2#addr');
	u1.insertAdjacentElement('afterend',ad);

	
	
	let u2 = document.createElement('ul');
	for (let x of gakka){
		dep = document.createElement('li');
      	dep.textContent = x.name;
		u2.insertAdjacentElement('beforeend',dep);
	}
	 let lea = document.querySelector('h2#dept');
	 lea.insertAdjacentElement('afterend',u2);

	 k++;
 }
}


