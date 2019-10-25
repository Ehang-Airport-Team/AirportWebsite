$(document).ready(function(){
    var index=0,
        timer=null,
        pics=$('.banner-box div'),
        dots=$('.dots span'),
        prev=$('.prev'),
        next=$('.next'),
        len=pics.length;
    
    function slideImg(){
        var banner=$('.banner').on({
            // 滑过清除定时器,离开继续
            mouseover:function(){
                // 滑过清除定时器
                if(timer) clearInterval(timer);
            },
            mouseout:mouseoutEvent,
        });
        function mouseoutEvent(){
            timer=setInterval(function() {
                index++;
                if(index>=len){
                    index=0;
                }
                changeImg();
            }, 3000);
        };
        //自动在banner上触发鼠标离开事件
        mouseoutEvent();
        
        //遍历所有点击,且绑定点击事件,点击圆点切换图片
        dots.each(function(i){
            $(this).attr('id',i);
        });
        dots.each(function () {
            $(this).on('click',function(){
                //改变index为当前span的索引
                index=this.id;
                changeImg();
            })
        });

        next.on('click',function(){
            index=(index+1)>=len?0:++index;
            changeImg();
        });
        prev.on('click',function(){
            index=(index-1)<len?len-1:--index;
            changeImg();
        });
    }

    //改变图片
    function changeImg(){
        pics.each(function () {
            $(this).css({'display':'none'});
        });
        dots.each(function () {
            $(this).removeClass();
        });
        $(pics[index]).css({'display':'block'});
        $(dots[index]).addClass('active');
    }
    
    slideImg();
})