$(function () {
    // 小屏菜单宽高
    var w=$(window).width();
    var h=$(window).height();
    $(".son").css({
        width:w,
        height:h,
    })
    $(".nav_left").click(function () {
        $(".son").slideToggle(200);
    })
    $(".fl>h3").click(function () {
        var index=$(this).index(".fl>h3");
        $(".fl>ul").eq(index).slideToggle(200)
    })

    $(".fl ul li").mouseover (function () {
        var index=$(this).index(".fl ul li");
        $(".fl ul li").css({textDecoration:"none"}).eq(index).css({textDecoration:"underline"})

    })

 // banner
    var now=0;
    var next=0;
    var time=0;
    var falg=true;
    function move () {
            next++;
            if(next==3){
                next=0;
                falg=false;
            }
            $(".list").eq(now).animate({width:"80%",height:"80%"}).css({zIndex:0});
            $(".list").eq(next).animate({left:"0"},function () {
                $(".list").eq(now).css({left:"100%",width:"100%",height:"100%"}).css({zIndex:1}) ;
                now=next;
                time=0;
                falg=true;
            })
    }
    function move1() {
        time+=50;
        var bili=time/2500;
        if(bili>1){
            bili=1;
        }
        $(".progress").eq(now).css({width:bili*100+"%"});
        if(falg==false){
            $(".progress").css({width:0})
        }
    }
    var t=setInterval(move,3000);
    var t1=setInterval(move1,50)
    $(window).blur(function () {
        clearInterval(t)
        clearInterval(t1)
    })
    $(window).focus(function () {
        t=setInterval(move,3000)
        t1=setInterval(move1,50)
    })
    function stop() {
        clearInterval(t)
        clearInterval(t1)

        $(".btns_list").find(".progress").css("width",0);
        $(".btns_list").eq(next).find(".progress").css("width","100%")

        if(next>now){
            $(".list").eq(now).animate({width:"80%",height:"80%"},500 ).css({zIndex:0});
            $(".list").eq(next).animate({left:0},500,function () {
                $(".list").eq(now).css({left:"100%",width:"100%",height:"100%"});
                now=next;
            }).css({zIndex:1})
        }else if(next<now){
            $(".list").eq(now).animate({left:"100%"} ).css({zIndex:1});
            $(".list").eq(next).css({width:"80%",height:"80%",left:0}).animate({width:"100%",height:"100%" },function () {
                now=next;
            })
        }
    }
    $(".btns_list").click(function () {
        next=$(this).index(".btns_list")
        stop();

    })
    $(".leftbtn").click(function () {
        next--;
        if(next==0){
            next=2;
        }
        stop()
    })
    $(".rightbtn").click(function () {
        next++;
        if(next==3){
            next=0;
        }
        stop()
    })
小屏下面




})