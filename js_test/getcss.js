//获取元素的非行间样式值
function getStyle(object, oCss) {
    if (object.currentStyle) {
        return object.currentStyle[oCss]; //IE
    } else {
        return getComputedStyle(object, null)[oCss]; //除了IE
    }
}