//关于event事件中的target
document.onmouseover = function(e) {
    var e = e || window.event;
    var Target = e.target || e.srcElement; //获取target的兼容写法，后面的为IE
    var from = e.relatedTarget || e.formElement; //鼠标来的地方，同样后面的为IE...
    var to = e.relatedTarget || e.toElement; //鼠标去的地方
}