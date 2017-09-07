//js阻止事件传播，这里使用click事件为例
document.onclick = function(e) {
    var e = e || window.event;
    if (e.stopPropagation) {
        e.stopPropagation(); //W3C标准
    } else {
        e.cancelBubble = true; //IE....
    }
}