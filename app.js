var date = new Date();
var time = 0;
var darkmode = true
const a = document.getElementById("0");
const b = document.getElementById("1");
const c = document.getElementById("2");
const d = document.getElementById("3");
const e = document.getElementById("4");
const f = document.getElementById("5");
const g = document.getElementById("6");
const button = document.getElementById("button")
setInterval(updateTime,1);
function updateTime() {
    date = new Date();
    time = date.getTime();
    a.innerHTML = Math.floor(1687471200-Math.floor(time / 1000));
    b.innerHTML = Math.floor((1687471200-Math.floor(time / 1000))/60*10)/10;
    c.innerHTML = Math.floor((1687471200-Math.floor(time / 1000))/3600*100)/100;
    d.innerHTML = Math.floor((1687471200-Math.floor(time / 1000))/86400*1000)/1000;
    e.innerHTML = Math.floor((1687471200-Math.floor(time / 1000))/604800*10000)/10000;
    f.innerHTML = Math.floor((1687471200-Math.floor(time / 1000))/2635200*100000)/100000;
    g.innerHTML = Math.floor((1687471200-Math.floor(time / 1000))/31536000*1000000)/1000000;
}
button.addEventListener('click', event => {
    darkmode = !darkmode;
    for(var i = 0; i < document.getElementsByClassName("num").length; i++) {
        document.getElementsByClassName("num")[i].style.color = darkmode ? "#ffffff" : "#000000";
    }
    document.getElementsByClassName('title')[0].style.color = darkmode ? "#ddddff" : "#333388";
    document.getElementsByClassName('title')[1].style.color = darkmode ? "#ddddff" : "#333388";
    document.getElementById('button').style.color = darkmode ? "#000000" : "#ffffff";
    document.getElementById('button').style.backgroundColor = darkmode ? "#ffffff" : "#000000";
    document.getElementsByTagName('body')[0].style.backgroundColor = darkmode ? "#16161d" : "#ffffff";
});