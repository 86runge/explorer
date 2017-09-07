Css 、less
一、  css
    1.  引入方式

        1)．行内样式

            <div style="background: #f00;"></div>

            直接写在标签上

        2). 内联样式

            <style>
                div{
                    background: #f00;
                }
            <style>

            一般放在dom结构的上部，先加载样式

        3). 外联样式

            <link rel="stylesheet" type="text/css" href="main.css">

            也是放在dom结构的上部

    2.  选择器

        主要有：id选择器, #test; class选择器, .header
        派生选择器， div header; ul li; p
        属性选择器 input[type=”text”]; [title]

    3.  优先级

        !important 优先级最高，不管出现在哪里

        权重：
        1.  第一等：代表内联样式，如: style=””，权值为1000。
        2.  第二等：代表ID选择器，如：#content，权值为100。
        3.  第三等：代表类，伪类和属性选择器，如.content，权值为10。
        4.  第四等：代表类型选择器和伪元素选择器，如div p，权值为1。
        5.  通用选择器（*），子选择器（>）和相邻同胞选择器（+）权值都为0

    4.  盒模型

        div#test{
              width: 200px;
              height: 100px;
              border: 3px solid #f00;-----------------边框，算入盒子大小
              outline: 3px solid #f0f;-----------------轮廓，不算入盒子大小
              padding: 20px;-------------------------内边距
              margin: 20px;--------------------------外边距
              background: #0ff;
        }

        外边距合并，不改变单个和模型的真实样式

        1）同级元素两个垂直的外边距相遇时，将形成一个边距，大小取边距较大者
        2）包含的元素两个垂直的外边距相遇时，且外边的元素没有内边距或边框，将形成一个边距

    5.定位与浮动

        脱离文档流之外，定位优先级高于
        绝对定位：相对已定位父级，没有则一直向上查找，最终父级是body，原位置不存在
        相对定位：相对于自己定位，原位置保留

        清除浮动：

            1）  给父级元素固定高度
            2）  clear: both清除浮动，会添加多余的标签
            3）  父级div定义 overflow:hidden
            4）  完美版
            .outer {zoom: 1;}    /*==for IE6/7 Maxthon2==*/
            .outer: after {clear: both; content: ''; display: block; width: 0; height: 0; visibility: hidden;}   /*==for FF/chrome/opera/IE8==*/

      6.  伪类、伪元素

          伪类，a标签 link visited hover(必须位于link和visited之后) active(必须位于hover之后) focus
          伪元素 :before  :after，有许多用处
      7.  继承性

          不继承的属性：盒模型、定位的相关属性
          继承的属性：文字、列表相关的属性

二、  css3新增的样式

    需要写前缀

    1.  border-radius -------------------------设置圆角（百分比，数值，可单独设置一个角）

    2.  box-shadow :[inset]| x-offset| y-offset |blur-radius |spread-radius|color

        参数：默认是外阴影，inset为内阴影；x, y方向的偏移量，可以是正负值；模糊半径（可选），正值，0不模糊；拓展半径，可以是正负值，如果值为正，则整个阴影都延展扩大，反之值为负值时，则缩小；颜色

    3.  box-sizing: content-box|border-box| inherit(继承父级的设置，默认值);

        在宽度和高度之外绘制元素的内边距和边框，在宽度和高度之内绘制元素的边框

    4.  background 多重背景功能

    5.  文本溢出

        单行：
        overflow: hidden;text-overflow:ellipsis;white-space: nowrap;
        
        多行（如3行）：
        display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden;

    6.  转换（移动、缩放、转动、拉长或拉伸）

        transform
        rotate(30deg) ----------------平面旋转一定的角度，沿着左上角
        translate(50px,100px)-------移动（x, y）
        scale(2,4)---------------------按比例缩放（x, y）
        skew(30deg,20deg)---------翻转，沿着x, y轴转一定角度
        transform-origin: left top;-----规定旋转中心，默认是50%，50%
        matrix（n, n, n, n, n, n）-------组合方法

    7.  过渡

        transition: 属性（width） 花费时间（2s） 速度 延迟（2s）

    8.  动画

        @keyframes name(动画名称)
        animation: name 5s linear 2s infinite（播放次数：无限次） alternate（是否反向播放：来回播放）;

    9.  @media

        1）写在样式表里面的媒体查询

            @media mediatype and|not|only (media feature) {
                CSS-Code;
            }

        2）利用媒体查询调用不同的样式表

            <link rel="stylesheet" media="mediatype and|not|only (media feature)" href="mystylesheet.css">

            参数说明：媒体类型：all, screen… ;关联性；特征

三、  less

    1.  安装node和npm(包管理工具)、cnpm（淘宝镜像版本）

        cnpm  install –g less

    2.  语法 变量、混入、嵌套、函数、运算等

    3.  @import 导入css、less文件

        @import “index”；或@import “index.less”；导入less
        @import  (inline)“index.css”;导入css

