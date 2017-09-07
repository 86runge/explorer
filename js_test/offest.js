//在这里加个元素到浏览器边缘的距离，很实用
function offsetTL(obj) { //获取元素内容距离浏览器边框的距离（含边框）
    var ofL = 0,
        ofT = 0;
    while (obj) {
        ofL += obj.offsetLeft + obj.clientLeft;
        ofT += obj.offsetTop + obj.clientTop;
        obj = obj.offsetParent;
    }
    return { left: ofL, top: ofT };
}