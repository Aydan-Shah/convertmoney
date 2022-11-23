const money = document.querySelector(".money");
const toMoney = document.querySelector(".toMoney");
const from = document.querySelector(".from");
const to = document.querySelector(".to");
const fromP = document.querySelector('.fromP');
const toP = document.querySelector('.toP');
const conlist = document.querySelectorAll('.money div');
const tolist = document.querySelectorAll('.toMoney div');
let con = "RUB";
let tocon = "USD";
let o;

checkSelect()
from.addEventListener('keyup',getData)
function getData() {
  fetch(`https://api.exchangerate.host/latest?base=${con}&symbols=${tocon}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      o = Object.values(data.rates)[0];
      fromP.innerText = `1 ${con} = ${o} ${tocon}`
      toP.innerText = `1 ${tocon} = ${1 / o} ${con}`
      calc(o)
    }
    )
}

function calc(o) {
   to.value = o * from.value
}
money.addEventListener(('click'), (e) => {
console.log(e.target.className);
if (e.target.className == 'froms-li') {
   con = e.target.innerText
   checkSelect()
   getData()
}
})

toMoney.addEventListener(('click'), (e) => {
console.log(e.target.className);
if (e.target.className == 'con-li') {
   tocon = e.target.innerText
   checkSelect()
   getData()
}
})

function checkSelect() {
conlist.forEach((item) => {
   item.classList.remove('active')
   if (con == item.innerText) {
      item.classList.add('active')
   }
})
tolist.forEach((item) => {
   item.classList.remove('active')
   if (tocon == item.innerText) {
      item.classList.add('active')
   }
})
}

function show_list() {
   var ul = document.querySelector("ul");
   if (ul.style.display == "flex") {
       ul.style.display = "none";
   } else {
       ul.style.display = "flex";
   }
}