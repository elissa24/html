$(function(){
    
    //영상편집 슬라이드
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
    
    //영상편집 탭메뉴
    $('.motion_menu ul li').click(function(){
        $('.motion_menu ul li').removeClass('on');//클래스명지워주고나서
        $(this).addClass('on');//클래스명붙여주는 구도로 작성해야함

        $('.mySwiper').removeClass('on');
        $('.mySwiper').eq($(this).index()).addClass('on');
    });


    //헤더 스크롤 효과
    $(function(){
        var lastScrollTop = 0, delta = 15;
        $(window).scroll(function(event){
           var st = $(this).scrollTop();
           
           if(Math.abs(lastScrollTop - st) <= delta)
              return; // 스크롤값을 받아서 리턴한다.
    if ((st > lastScrollTop) && (lastScrollTop>0)) {
          $("#header").css("top","-90px"); // 스크롤을 내렸을때 #header의 CSS 속성중 top 값을 -50px로 변경한다.
      
       } else {
          $("#header").css("top","0px"); // 스크롤을 올렸을때 #header의 CSS 속성중 top 값을 0px로 변경한다.
       }
           lastScrollTop = st;
        });
    });


//부드러운스크롤
$("html").easeScroll();

});//jquery end