//设置监听事件
function addEvent(obj, type, fn) { //添加事件监听，三个参数分别为 对象、事件类型、事件处理函数，默认为false
    if (obj.addEventListener) {
        obj.addEventListener(type, fn, false); //非IE
    } else {
        obj.attachEvent('on' + type, fn); //ie,这里已经加上on，传参的时候注意不要重复加了
    };
}

function removeEvent(obj, type, fn) { //删除事件监听
    if (obj.removeEventListener) {
        obj.removeEventListener(type, fn, false); //非IE
    } else {
        obj.detachEvent('on' + type, fn); //ie，这里已经加上on，传参的时候注意不要重复加了
    };
}