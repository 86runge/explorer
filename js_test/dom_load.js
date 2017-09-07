//火狐下特有的节点加载事件，就是节点加载完才执行，和onload不同
//感觉用到的不多，直接把js代码放在页面结构后面一样能实现。。
document.addEventListener('DOMContentLoaded', function() {}, false); //DOM加载完成。好像除IE6-8都可以.