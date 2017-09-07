//鼠标滚轮事件
//火狐中的滚轮事件
document.addEventListener("DOMMouseScroll", function(event) {
    alert(event.detail); //若前滚的话为 -3，后滚的话为 3
}, false)
//非火狐中的滚轮事件
document.onmousewheel = function(event) {
    alert(event.detail); //前滚：120，后滚：-120
}