$(function(){
    $('.list').slick({
        slide: 'div',
        infinite : true,
        slidesToShow :4,
        slidesToScroll : 1,
        arrows : true,
        speed : 500,
        autoplay : true,
        autoplaySpeed : 2500,
        pauseOnHover : true,
        prevArrow : $('.left_btn'),
        nextArrow : $('.right_btn'),
        //draggable : true,     //드래그 가능 여부 
    });


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 'auto',
        spaceBetween: 0,
        centeredSlides: true,
        preventClicks:true,
        loop:true,
        autoplay: {
            delay: 2500,//2.5s 후 다음슬라이드로 이동
            disableOnInteraction: false,//마우스올렸을때 화면멈춤할것인지 false는 멈추지않겠다는뜻. true로 바꾸면 멈춤이 되지만 다른명령어를 더 추가해야함
        },  
        on: {
          init: function () {
            $('.swiper-slide').addClass('changed');
          },
          slideChangeTransitionStart : function() {
            $('.swiper-slide').addClass('changing');
            $('.swiper-slide').removeClass('changed');
          },
          slideChangeTransitionEnd : function() {
            $('.swiper-slide').removeClass('changing');
            $('.swiper-slide').addClass('changed');
          }
        },
        
      });
      


    // $('.insta_list').slick({
    //     centerMode: true,
    //     centerPadding: '100px',
    //     slidesToShow: 5,
    //     //autoplay : true,
    //     //autoplaySpeed : 2500,
    //     draggable : false,
    //     arrows: false,
    //     responsive: [
    //       {
    //         breakpoint: 768,
    //         settings: {
    //           arrows: false,
    //           centerMode: true,
    //           centerPadding: '40px',
    //           slidesToShow: 5
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           arrows: false,
    //           centerMode: true,
    //           centerPadding: '40px',
    //           slidesToShow: 1
    //         }
    //       }
    //     ]
    //   });
  })