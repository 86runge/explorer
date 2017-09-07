//通过类名获取元素
document.getElementsByClassName(''); //IE 6 7 8不支持；

//这里可以定义一个函数来解决兼容问题，当然别在这给我提jQuery...
//第一个为全局获取类名，第二个为局部获取类名
function byClass1(oClass) { //全局获取，oClass为你想要查找的类名，没有“.”
    var tags = document.all ? document.all : document.getElementsByTagName('*');
    var arr = [];
    for (var i = 0; i < tags.length; i++) {
        var reg = new RegExp('\\b' + oClass + '\\b', 'g');
        if (reg.test(tags[i].className)) {
            arr.push(tags[i]);
        };
    };
    return arr; //注意返回的也是数组，包含你传入的class所有元素；
}

function byClass2(parentID, oClass) { //局部获取类名，parentID为你传入的父级ID
    var parent = document.getElementById(parentID);
    var tags = parent.all ? parent.all : parent.getElementsByTagName('*');
    var arr = [];
    for (var i = 0; i < tags.length; i++) {
        var reg = new RegExp('\\b' + oClass + '\\b', 'g');
        if (reg.test(tags[i].className)) {
            arr.push(tags[i]);
        };
    };
    return arr; //注意返回的也是数组，包含你传入的class所有元素；
}