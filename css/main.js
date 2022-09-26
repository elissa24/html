$(function(){
    
    //**영상편집 슬라이드**
    var swiper = new Swiper(".mySwiper", {
        pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });
    
    //**영상편집 탭메뉴**
    $('.motion_menu ul li').click(function(){
        $('.motion_menu ul li').removeClass('on');//클래스명지워주고나서
        $(this).addClass('on');//클래스명붙여주는 구도로 작성해야함

        $('.mySwiper').removeClass('on');
        $('.mySwiper').eq($(this).index()).addClass('on');
    });


    //**헤더 스크롤 효과**
    $(function(){
        var lastScrollTop = 0, delta = 15;
        $(window).scroll(function(event){
           var st = $(this).scrollTop();
           
           if(Math.abs(lastScrollTop - st) <= delta)
              return; // 스크롤값을 받아서 리턴한다.
    if ((st > lastScrollTop) && (lastScrollTop>0)) {
          $("#header").css("top","-90px"); // 스크롤을 내렸을때 #header의 CSS 속성중 top 값을 -90px로 변경한다.
      
       } else {
          $("#header").css("top","0px"); // 스크롤을 올렸을때 #header의 CSS 속성중 top 값을 0px로 변경한다.
       }
           lastScrollTop = st;
        });
    });


    //**부드러운스크롤**
    $("html").easeScroll();


    //**Top버튼**
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.top_wrap').fadeIn();
        } else {
            $('.top_wrap').fadeOut();
        }
        });
        
        $(".top_wrap").click(function() {
            $('html, body').animate({
                scrollTop : 0
        }, 400);
        return false;
    });

    //**메뉴클릭시 내부 페이지 위치로 스크롤 이동
    $('.nav a').click(function(e){
        e.preventDefault(); //a링크방지(공식이니 그대로쓰면됨)
    });

    $('.nav p').click(function(){
        var page = $('section').eq($(this).index());
        var pageTop = page.offset().top;
        $('html, body').animate({
            scrollTop : pageTop
        }, 1000, 'easeInOutBack');
    });
    





});//jquery end