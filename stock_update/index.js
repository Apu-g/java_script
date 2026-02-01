import { getstockData } from './stockapi.js'
console.log(getstockData());

setInterval(function(){
    const stockdata = getstockData();
    renderstockdata(stockdata);
},2000)

let prevprice = null;
function renderstockdata(stockdata){
const stockEl = document.querySelector('#name');
const symEl = document.querySelector('#sym');
const priceEl = document.querySelector('#price');
const timeEl = document.querySelector('#time');

const { name, sym, price, time } = stockdata;


let priceicon = price < prevprice ? '🔻' : price > prevprice ? '🔺' :price === prevprice ? '=' : '';
prevprice = price;

stockEl.innerText = name;
symEl.innerText = sym;
priceEl.innerText = price + ' ' + priceicon;
timeEl.innerText = time;

}
