'use strict'

let form = document.getElementById('myform');
let show = document.getElementById('mydiv');
let table = document.createElement('table');
show.appendChild(table);
let arrOfObj = [];
let id = 0;
let total = 0;

function Student(email1, mobile, tituation) {
    this.email1 = email1;
    this.mobile = mobile;
    this.tituation = tituation;
    this.age = 0;
    this.name = 'w';

    arrOfObj.push(this);

}
Student.prototype.randAge = function () {
    this.age = Math.floor(Math.random() * (24 - 18) + 18);
}
Student.prototype.nameExtract = function () {
    this.name = this.email1.substring(0, indexOf("@"));

}

form.addEventListener('submit', assinVale)
function assinVale(event) {
    event.preventDefault();
    let s = event.target;
    let email1 = s.emailval.value;
    let mobile = s.monum.value;
    let tituation = s.tit.value;
    console.log(email1);
    total = total + tituation;


    let newstudent = new Student(email1, mobile, tituation);
    newstudent.randAge();
    newstudent.nameExtract();
    id++
    renderValue();
    saveToLocal();
    renderTotal();
}
function renderValue() {
    let trEl = document.createElement('tr');
    table.appendChild(trEl);
    let tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = id;

    let thEl1 = document.createElement('th');
    trEl.appendChild(thEl1);
    // thEl1.textContent = arrOfObj[id].name;

    let thEl2 = document.createElement('th');
    trEl.appendChild(thEl2);
    thEl2.textContent = `${arrOfObj[id].email1}`

    let thEl3 = document.createElement('th');
    trEl.appendChild(thEl3);
    thEl3.textContent = arrOfObj[id].mobile

    let thEl4 = document.createElement('th');
    trEl.appendChild(thEl4);
    thEl4.textContent = arrOfObj[id].age;

    let thEl5 = document.createElement('th');
    trEl.appendChild(thEl5);
    thEl5.textContent = arrOfObj[id].tituation;



}

function render_heder() {
    let trEl = document.createElement('tr');
    table.appendChild(trEl);
    let thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = 'ID'

    let thEl1 = document.createElement('th');
    trEl.appendChild(thEl1);
    thEl1.textContent = 'Name '

    let thEl2 = document.createElement('th');
    trEl.appendChild(thEl2);
    thEl2.textContent = 'E-mail'

    let thEl3 = document.createElement('th');
    trEl.appendChild(thEl3);
    thEl3.textContent = 'Mobile'

    let thEl4 = document.createElement('th');
    trEl.appendChild(thEl4);
    thEl4.textContent = 'Age'

    let thEl5 = document.createElement('th');
    trEl.appendChild(thEl5);
    thEl5.textContent = 'Titution'

}
render_heder()

function renderTotal() {
    let trEl = document.createElement('tr');
    table.appendChild(trEl);
    let tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = `Total : ${total}`;
}

function saveToLocal() {
    let a = JSON.stringify(arrOfObj);
    localStorage.setItem('prevval', a);
}

function getLocal() {
    let ad = localStorage.getItem('prevval');
    ad = JSON.parse(ad);
    if (ad) {
        arrOfObj = ad;
    } else {
        arrOfObj = [];

    }
    renderValue();
}
getLocal();
renderTotal();