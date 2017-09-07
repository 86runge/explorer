//DOM节点相关，主要兼容IE 6 7 8
function nextnode(obj) { //获取下一个兄弟节点
    if (obj.nextElementSibling) {
        return obj.nextElementSibling;
    } else {
        return obj.nextSibling;
    };
}

function prenode(obj) { //获取上一个兄弟节点
    if (obj.previousElementSibling) {
        return obj.previousElementSibling;
    } else {
        return obj.previousSibling;
    };
}

function firstnode(obj) { //获取第一个子节点
    if (obj.firstElementChild) {
        return obj.firstElementChild; //非IE678支持
    } else {
        return obj.firstChild; //IE678支持
    };
}

function lastnode(obj) { //获取最后一个子节点
    if (obj.lastElementChild) {
        return obj.lastElementChild; //非IE678支持
    } else {
        return obj.lastChild; //IE678支持
    };
}