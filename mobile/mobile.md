#整理移动端的布局，适配问题

一  怎么书写可以适用于不同设备的页面

　　1 自动适应屏幕宽度之  viewport --在html中添加meta标签:网页的宽度默认等于屏幕的宽度　　　　
    
        <meta name="viewport" content="width=device-width, initial-scale=1,user-scalable=0">
        　
        扩展viewport属性：

        1>width 设置viewport的宽度，可以是数字，或者使用字符串“device-width”；

        2>initial-scale 页面初始的缩放，首次 load 的时候缩放比例

        3>minimum-scale/maximum-scale 允许用户缩放的最小/最大比例 

        4>height 设置viewport的高度，很少设置这个属性

        5>user-scalable 用户是否可以手动缩放 ，一般两个值 yes/no

        特殊说明：老式浏览器（IE6,7,8）支持，需要使用除css3mediaqueries.js

    　　<!--[if lt IE 9]>
    　　　　<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
    　　<![endif]-->

    2 使用框架搭建页面

　　　　1> bootstrap（基于jQuery的响应式工具，适用于移动,pad,pc）

        2> ElementUI（PC）,MintUI（移动端）  饿了么基于vue组件库开发的

　　3 宽度的严格布局书写 

　　　　 因为页面根据屏幕的宽度调整布局，所以不能使用绝对宽度的布局或者是绝对宽度的元素

　　　　  一般使用width:50%  /  width:auto (块级元素默认是auto)

　　4 图片自适应

        img {max-width:100%} 由于老的IE不支持max-width{width:100%}

二 常见的问题

    1 border 1px 问题 

        由于最小的物理像素差异，一条直线的显示，iphone5它能显示的最小宽度其实是理论上说的0.5px。

        不是所有手机浏览器都能识别border: 0.5px;，ios7以下，android等其他系统里，0.5px会被当成为0px处理

        通常是给元素order-bottom: 1px solid #ddd;，然后通过transform: scaleY(.5)缩小0.5倍来达到0.5px的效果，

        .scale{
            position: relative;
        }
        .scale:after{
            content:"";
            position: absolute;
            bottom:0px;
            left:0px;
            right:0px;
            border-bottom:1px solid #ddd;
            -webkit-transform:scaleY(.5);
            -webkit-transform-origin:0 0;
        }
 

    2 图片高清问题

        通过css媒体查询库或者javascript条件判断，在不同的dpr下加载不同尺寸的图片

        无论从管理上，还是从性能上看，只要有可能，尽量部署独立的图片服务器

    3 屏幕适配布局问题 

        3.1响应式布局

            3.1.1.流式布局+媒体查询

                用来解决不同宽度的布局问题，父级宽度不够的时候，子级节点会“挤下去”    ---  使用css3，根据屏幕分辨率进行不同的样式应用

                优劣：
                    这种布局通吃pc和移动端，做到精细处，两者的效果都很好，
                    缺点是媒体查询是有限的，也就是可以枚举出来的
                    对设计要求简单、清晰、复杂的设计稿会直接弄死前端，同时需要多个设计稿
                    css3低版本浏览器不支持

            3.1.1.伸缩布局

                使用的是Flexbox ，有兼容性问题

                整体思路：考虑把一个元素变成一个伸缩容器  -->伸缩容器中子元素的排列方式  -->子元素所占空间

        3.2rem布局

            相对单位rem基准值公式：rem=document.documentElement.clientWidth*dpr/10(10是为了取整)

            赋值给html的font-size:rem

            demo:iPhone4/5  320*2/10=64px

            如需改变根节点的html的font-size的rem 属性可以通过媒体查询/javascript操作

    4 字体大小问题

        html上，加入了一个自定义属性，data-dpr 

            <html data-dpr='dpr'></html>

        处理dpr的值来适配不同屏幕字体

        如果使用rem会使不同的手机屏幕字体不同，与设计师的需求：手机屏幕的字体大小一致
        
        可以使用less 里的mixin