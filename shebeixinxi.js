// function createXHR() {
//     var xmlhttp;
//     if (window.XMLHttpRequest) {
//         xmlhttp = new XMLHttpRequest();
//     } else {
//         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//     }
//     return xmlhttp;
// }

function Add() {
    var name = document.getElementById('name').value; //名称

    var time = document.getElementById('time').value; //时间

    var state = document.getElementById('state').value; //状态

    var kinds = document.getElementById('kinds').value; //种类

    var adminster = document.getElementById('adminster').value; //管理人

    var price = document.getElementById('price').value; //价格

    var number = document.getElementById('number').value; //数量

    var location = document.getElementById('location').value;

    row = document.getElementById('mytable').insertRow();
    num = 1;
    if (row != null) {
        cell = row.insertCell();
        cell.innerHTML = num;
        num++;
        alert(num);
        cell = row.insertCell();
        cell.innerHTML = name;


        cell = row.insertCell();
        cell.innerHTML = time;
        cell = row.insertCell();
        cell.innerHTML = state;
        cell = row.insertCell();
        cell.innerHTML = kinds;
        cell = row.insertCell();

        cell.innerHTML = adminster;
        cell = row.insertCell();
        cell.innerHTML = price;
        cell = row.insertCell();
        cell.innerHTML = number;
        cell = row.insertCell();
        cell.innerHTML = location;

        // var add = document.getElementById('add');
        // add.style.dispaly = "none";

    }
};









//存放位置
// var ajax = createXHR();
// ajax.open("post", "把新加的设备信息传给谁", true);
// ajax.onreadystatechange() = function() {
//     if (ajax.readyState == 4 && ajax.status == 200) {
//         console.debug('登陆成功!');
//     }
// };
// var data = "name=" + name + "&state=" + state;
// ajax.send(data);