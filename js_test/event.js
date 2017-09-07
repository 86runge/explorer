//event事件问题
document.onclick = function(ev) { //谷歌火狐的写法，IE9以上支持，往下不支持；
    var e = ev;
    console.log(e);
}
document.onclick = function() { //谷歌和IE支持，火狐不支持；
    var e = event;
    console.log(e);
}
document.onclick = function(ev) { //兼容写法；
    var e = ev || window.event;
    var mouseX = e.clientX; //鼠标X轴的坐标
    var mouseY = e.clientY; //鼠标Y轴的坐标
}