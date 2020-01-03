
window.onload = function () { 
    console.log('我是onload')
    $('#loading').fadeOut(1000);
    setTimeout(function(){
        toFontList();
    },1000)
 }


//播放背景音乐
document.addEventListener('WeixinJSBridgeReady', function() {
    document.getElementById('music').play()
});

var contentP = [
    {
        str: "这是一封来自平安总部的邀请函",
        effect: "normal",
        speed: 100
    },
    {
        str: "是的  你没看错",
        effect: "normal",
        speed: 100
    },
    {
        str: "为了更好的服务好客户",
        effect: "normal",
        speed: 100
    },
    {
        str: "平安总部推出",
        effect: "normal",
        speed: 100
    },
    {
        str: "TOP登峰计划",
        effect: "right-normal",
        speed: 100
    },
    {
        str: "从全国120万平安寿险代理人员中",
        effect: "normal",
        speed: 100
    },
    {
        str: "选拔出最出类拔萃的顶尖精英",
        effect: "normal",
        speed: 100
    },
    {
        str: "针对他们平安总部特别提供定制级的专属特权",
        effect: "normal",
        speed:  100
    },
    {
        str: "以服务好他们名下的客户",
        effect: "normal",
        speed: 100
    }
];



var listType = true; 
var listNum = 0;   

    function toFontList(){
    var list = contentP;
    // console.log('111',list.length,listNum,listType)
    if(listType && listNum !== list.length){
        var timers = setInterval(getList(list),10);
    }else if(listNum === list.length){
        $('#startBtn').fadeIn(2000);
    }else{
        clearInterval(timers);
        // console.log('?')
    }
    }

    function getList(list){
    // console.log(listNum)
    for(var i = 0; i < list.length; i++){
        if(listType){
            listType = false;
            text(list[listNum]);
            listNum++;
            // console.log(listNum)
        }
    }
}

var arr;
var obj;
function text(parameter) {
    var typewriter = {
        str: parameter.str || "土地是以它的肥沃和收获而被估价的。才能也是土地，不过它生产的不是粮食，而是真理。如果只能滋生瞑想和幻想的话，即使再大的才能也只是砂地或盐池，那上面连小草也长不出来的。",
        effect: parameter.effect || "rightBig",
        speed: parameter.speed || 200,
    }
    arr = [];
    
    for (var i = 0; i < typewriter.str.length; i++) {    
        arr[i] = typewriter.str[i].replace(/\s/g, '&nbsp;');
    }
   
    // console.log(arr);
    var num = 0;

    obj = setInterval(function () {
        var randomN = Math.floor(Math.random() * 4) + 1;
        var eff = null;
        if (randomN === 1) {
            eff = "fadeInRightBig";
        }
        if (randomN === 2) {
            eff = "fadeInLeftBig";
        }
        if (randomN === 3) {
            eff = "fadeInUpBig";
        }
        if (randomN === 4) {
            eff = "fadeInDownBig";
        }
        if (typewriter.effect === "normal") {
            
            $("#start-con").append('<span style="display: inline-block;" class="tip">' + arr[num] + '</span>');
        } else if (typewriter.effect === "rightBig") {
            $("#start-con").append('<span style="display: inline-block;" class="tip animated fadeInRightBig">' + arr[num] + '</span>');
        } else if (typewriter.effect === "right") {
            $("#start-con").append('<span style="display: inline-block;" class="tip animated fadeInRight">' + arr[num] + '</span>');
        } else if (typewriter.effect === "leftBig") {
            $("#start-cont").append('<span style="display: inline-block;" class="tip animated fadeInLeftBig">' + arr[num] + '</span>');
        } else if (typewriter.effect === "left") {
            $("#start-con").append('<span style="display: inline-block;" class="tip animated fadeInLeft">' + arr[num] + '</span>');
        } else if (typewriter.effect === "downBig") {
            $("#start-con").append('<span style="display: inline-block;" class="tip animated fadeInDownBig">' + arr[num] + '</span>');
        } else if (typewriter.effect === "down") {
            $("#start-con").append('<span style="display: inline-block;" class="tip animated fadeInDown">' + arr[num] + '</span>');
        } else if (typewriter.effect === "upBig") {
            $("#start-con").append('<span style="display: inline-block;" class="tip animated fadeInUpBig">' + arr[num] + '</span>');
        } else if (typewriter.effect === "up") {
            $("#start-con").append('<span style="display: inline-block;" class="tip animated fadeInUp">' + arr[num] + '</span>');
        } else if (typewriter.effect === "random") {
            $("#start-con").append('<span style="display: inline-block;" class="tip animated ' + eff + '">' + arr[num] + '</span>');
        }else if (typewriter.effect === "right-top") {
            $("#start-con").append('<span style="display: inline-block;" class="tip animated fadeInRight top">' + arr[num] + '</span>');
        }else if(typewriter.effect === "right-normal"){
            $("#start-con").append('<span style="display: inline-block;" class="tip top">' + arr[num] + '</span>');
        }
        num++
        if (num === arr.length) {
            $('#start-con').append('<br/>')
            listType = true;
            clearInterval(obj);
            toFontList();
            $('#start-con span').css('border','none')
        }
    }, typewriter.speed);

}


$(function(){

        //点击开始按钮
        $('#startBtn').on("touchend",function(e){
            if(e.cancelBubble){
                if(!e.defaultPrevented){
                    e.preventDefault();
                    }
                }
            $('#start').fadeOut();
            $('#climb').fadeIn();

            climb();
            // climb();
        });

        // climb();    
         //爬山    
         function climb () {
            setTimeout(function(){
            $('.background').animate({
                    left: '0'
                },1000)
            },600)

            setTimeout(function(){
                $('.banidan').fadeIn();
                $('.bottom-jian-tou').show();
            },1000)


            var wnHeight = parseInt($(window).height());
            var bgHeight = parseInt($('.background').css('height'));
            var count = 2;
            var initScrollTop = bgHeight * count - wnHeight;
            var scrollTop = 0;
            var Step1 = parseInt($('.step1').offset().top);
            var Step2 = parseInt($('.step2').offset().top);
            var Step3 = parseInt($('.step3').offset().top);
            var Step4 = parseInt($('.step4').offset().top);
            var Step5 = parseInt($('.step5').offset().top);
            var Step6 = parseInt($('.step6').offset().top);
            var Step7 = parseInt($('.step7').offset().top);
            var Step8 = parseInt($('.step8').offset().top);
            var Step9 = parseInt($('.step9').offset().top);
            var Step10 = parseInt($('.step10').offset().top);
            var Step11 = parseInt($('.step11').offset().top);
            var Step12 = parseInt($('.step12').offset().top);
            var Step13 = parseInt($('.step13').offset().top);
            var Step14 = parseInt($('.step14').offset().top);
            var Step15 = parseInt($('.step15').offset().top);
            var Step16 = parseInt($('.step15').offset().top);
            // console.log(parseFloat(scrollTop))
            // 初始化
            $(document).ready(function() {
                // 初始化填充容器高度
                $('.scroll').css('height', bgHeight * count - wnHeight)
                $('.container').scrollTop(initScrollTop)
                $('.background').css('top', '-'+(bgHeight-wnHeight) +'px')
            })
            
            
            
            // 容器滚动事件
            $('.container').scroll(function() {
                var offsetTop = parseInt($('.container').scrollTop());
                var top = parseInt(offsetTop / count );
                var offTwo = parseInt((offsetTop-Step1)/2);
                // console.log(Step6-top,offTwo)
                
                
                if(!scrollTop) {
                    scrollTop = offsetTop + wnHeight;
                    $('.background').css('top', '-'+top +'px')   
                    console.log('??')
                }
                
                //如果人物高度小于减去的高度就触发
                if(Step1-top > offTwo - 100){
                    // console.log('小于')
                    // start(1);
                    $('.step1').addClass("step3-animation");
                }

                if(Step2-top > offTwo - 150 ){
                    start(1);
                }

                if(Step3-top > offTwo - 150){
                    start(2);
                    $('.bottom-jian-tou').hide();
                }

                if(Step4-top > offTwo - 150){
                    start(3);
                }

                
                if(Step5-top > offTwo - 150){         
                    start(4);
                }

                if(Step6-top > offTwo - 150){                
                    start(5);
                }

                if(Step7-top > offTwo - 150){                
                    start(6);
                }

                if(Step8-top > offTwo - 100){    
                    start(7);
                }

                if(Step9-top > offTwo - 150){
                    
                    start(8);
                }

                if(Step10-top > offTwo - 150){                  
                    start(9);                   
                }

                if(Step11-top > offTwo - 200){        
                    start(10);         
                }

                if(Step12-top > offTwo - 150){ 
                    start(11);

                }

                if(Step13-top > offTwo - 150){               
                    start(12);
                }

                if(Step14-top > offTwo + 200){
                    start(13);
                }

                if(Step15-top > offTwo + 600){
                    start(14);
                }

                if(Step16-top > offTwo + 800){
                    console.log('我是15')
                    start(15);
                    toClimlb();
                    $('.container').unbind();// 消除绑定的事件
                    
                }
                
                if(offsetTop < scrollTop - 100) {
                    $('.background').css('top', '-'+top+'px')
                }
    	    });
        }

       
        var toClimlbType = true;
        function toClimlb(){ 
            
            setTimeout(function(){
                    start(16);
            },300);
            setTimeout(function(){
                start(17);
                $('.qizi').addClass('step3-animation');
            },600)
            setTimeout(function(){
                $('.background').animate({
                    top: '-12.5rem'
                },2000)
            },800)
            setTimeout(function(){
                $('#climb-p').fadeIn(1000);
            },3000)
            setTimeout(function(){
                $('.bottom-jian-tou').show();
            },3500)

            setTimeout(function(){
                toNext();
                
            },4000)
        }

        function start(index){
                $('.step'+(index+1)+"").addClass('step3-animation');
                $(".step"+index+"").hide();
        }

        $('.mounting').animate({
            left: '15%'
        },2000);

        //下滑爬山成功
        function toNext(){
            console.log(toClimlbType);
         if(toClimlbType){
            //  alert('111');
            $("#climb").on("touchstart", function(e) {
            // 判断默认行为是否可以被禁用
                if (e.cancelable) {
                    // 判断默认行为是否已经被禁用
                    if (!e.defaultPrevented) {
                        e.preventDefault();
                    }
                }   
                startX = e.originalEvent.changedTouches[0].pageX,
                startY = e.originalEvent.changedTouches[0].pageY;
            });
            $("#climb").on("touchend", function(e) {         
                // 判断默认行为是否可以被禁用
                if (e.cancelable) {
                    // 判断默认行为是否已经被禁用
                    if (!e.defaultPrevented) {
                        e.preventDefault();
                    }
                }               
                // moveEndX = e.originalEvent.changedTouches[0].pageX,
                moveEndY = e.originalEvent.changedTouches[0].pageY,
                // X = moveEndX - startX,
                Y = moveEndY - startY;
                
                //下滑
                if ( Y > 0) {
                    // console.log('进来了吗')
                    setTimeout(function () {  
                        $('#cloud-bg').show();
                    }
                    ,800)
                    $('.could1').addClass('could1-animation');
                    $('.could2').addClass('could2-animation');
                    $('.could3').addClass('could3-animation');
                    toClimlbType = false;
                    
                    setTimeout(function(){
                        $('.bottom-jian-tou').hide();
                    },500)

                    setTimeout(function(){
                        $('#cloud-bg').hide();
                        $('#climb').hide();
                        $('#cloud-bg').hide();
                        $('.could1').hide();
                        $('.could2').hide();
                        $('.could3').hide();

                        $('#success-climb').show();
                        $('.bottom-jian-tou').show();
                        toInvitation();
                    },4000);
                    setTimeout(function(){
                       
                    },6000);
                }
            });
        }
    }

    
    //下滑到邀请函
    function toInvitation(){
            // alert('进来');
            $("#success-climb").on("touchstart", function(e) {
            // 判断默认行为是否可以被禁用
                if (e.cancelable) {
                    // 判断默认行为是否已经被禁用
                    if (!e.defaultPrevented) {
                        e.preventDefault();
                    }
                }   
                startX = e.originalEvent.changedTouches[0].pageX,
                startY = e.originalEvent.changedTouches[0].pageY;
            });
            $("#success-climb").on("touchend", function(e) {         
                // 判断默认行为是否可以被禁用
                if (e.cancelable) {
                    // 判断默认行为是否已经被禁用
                    if (!e.defaultPrevented) {
                        e.preventDefault();
                    }
                }               
                moveEndX = e.originalEvent.changedTouches[0].pageX,
                moveEndY = e.originalEvent.changedTouches[0].pageY,
                X = moveEndX - startX,
                Y = moveEndY - startY;
                
                //下滑
                if ( Y > 0) {
                    $('#success-climb').hide();
                    $('#invitation').show();
                    $('.bottom-jian-tou').hide();
                    Invitation();
                }
            });
        
        }


        // Invitation();
        // 邀请函
        function Invitation(){
            var agent = false;
                $('#agent').animate({
                top: "0%"
                },5000);

                $('.bottom-jian-tou').hide();
            // if($('#agent').is(":animated")){
            //     $('#agent-con').hide();
            // }
                    setTimeout(function(){
                    // $('#agent-con').fadeIn(2000);
                    agent = true;
                    custom(agent)
                    $('.black-jian-tou').show();
                    },5500);
                   
            }

    //下拉出现客户权益
    function custom(type){
        var shareType = false;
        var customType = true;
        if(type){
        // alert('进来了')
            $("#invitation").on("touchstart", function(e) {
                // 判断默认行为是否可以被禁用
                    if (e.cancelable) {
                        // 判断默认行为是否已经被禁用
                        if (!e.defaultPrevented) {
                            e.preventDefault();
                        }
                    }   
                    // startX = e.originalEvent.changedTouches[0].pageX,
                    startY = e.originalEvent.changedTouches[0].pageY;
            });
            $("#invitation").on("touchend", function(e) {         
                // 判断默认行为是否可以被禁用
                if (e.cancelable) {
                    // 判断默认行为是否已经被禁用
                    if (!e.defaultPrevented) {
                        e.preventDefault();
                    }
                }               
                // moveEndX = e.originalEvent.changedTouches[0].pageX,
                moveEndY = e.originalEvent.changedTouches[0].pageY,
                // X = moveEndX - startX,
                Y = moveEndY - startY;
                
                //下滑
                    if(customType){
                        if ( Y > 0) {
                            customType = false;
                            console.log('权益页')
                            $('#invitationTitle').css('opacity','0');
                            $('#invitationTitle').css('filter','alpha(opactiy=0)');
                            $('.black-jian-tou').hide();
                            // $('#invitationTitle').fadeOut('3000')
                            setTimeout(function(){
                                $('#agent').addClass('page');
                            },200)
                            
                            $('#custom').addClass('page1');
                            // setTimeout(function(){
                                
                                $('#custom-con').show();
                                setTimeout(function () { 
                                    $('.black-jian-tou').show();
                                    shareType = true;
                                    share(shareType);
                                   
                                },5500);
                            // },5000)
                            agent = false;
                            }
                    }
                });
            }
        }
       
    // 滑动到分享页
    function share(type){
       
        if(type){
        $("#invitation").on("touchstart", function(e) {
            // 判断默认行为是否可以被禁用
                if (e.cancelable) {
                    // 判断默认行为是否已经被禁用
                    if (!e.defaultPrevented) {
                        e.preventDefault();
                    }
                }   
                startX = e.originalEvent.changedTouches[0].pageX,
                startY = e.originalEvent.changedTouches[0].pageY;
        });
        $("#invitation").on("touchend", function(e) {         
            // 判断默认行为是否可以被禁用
            if (e.cancelable) {
                // 判断默认行为是否已经被禁用
                if (!e.defaultPrevented) {
                    e.preventDefault();
                }
            }               
            moveEndX = e.originalEvent.changedTouches[0].pageX,
            moveEndY = e.originalEvent.changedTouches[0].pageY,
            X = moveEndX - startX,
            Y = moveEndY - startY;
            
            //下滑
            if ( Y > 0) {
                console.log('分享页')
                
                $('.black-jian-tou').hide();    
                $("#invitation").hide();
                $('#share').show();
                $('.share-top').animate({
                    top: "0%"
                },1000)
                setTimeout(function(){
                    $('.share-center').fadeIn(1000);
                },1500)
            }
        });
        }
    }
    
    //再看一次
    $('#lookBtn').on('touchend',function(e){
        if(e.cancelBubble){
        if(!e.defaultPrevented){
            e.preventDefault();
            }
        }
    
        window.location.reload();
    });
});    

