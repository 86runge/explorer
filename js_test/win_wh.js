//以下均可console.log()实验
var winW = document.body.clientWidth || document.docuemntElement.clientWidth; //网页可见区域宽
var winH = document.body.clientHeight || document.docuemntElement.clientHeight; //网页可见区域宽
//以上为不包括边框的宽高，如果是offsetWidth或者offsetHeight的话包括边框

var winWW = document.body.scrollWidth || document.docuemntElement.scrollWidth; //整个网页的宽
var winHH = document.body.scrollHeight || document.docuemntElement.scrollHeight; //整个网页的高

var scrollHeight = document.body.scrollTop || document.docuemntElement.scrollTop; //网页被卷去的高
var scrollLeft = document.body.scrollLeft || document.docuemntElement.scrollLeft; //网页左卷的距离

var screenH = window.screen.height; //屏幕分辨率的高
var screenW = window.screen.width; //屏幕分辨率的宽
var screenX = window.screenLeft; //浏览器窗口相对于屏幕的x坐标（除了FireFox）
var screenXX = window.screenX; //FireFox相对于屏幕的X坐标
var screenY = window.screenTop; //浏览器窗口相对于屏幕的y坐标（除了FireFox）
var screenYY = window.screenY; //FireFox相对于屏幕的y坐标