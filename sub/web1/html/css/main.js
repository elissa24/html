$(function(){
    // 스크롤 시 header fade-in
    $(document).on('scroll', function(){
        if($(window).scrollTop() > 10){
            $("#header").removeClass("deactive");
            $("#header").addClass("active");
        }else{
            $("#header").removeClass("active");
            $("#header").addClass("deactive");
        }
    })

});


//$(window).on('scroll', function() {
//    //스크롤의 위치가 상단에서 760보다 크면
//    if ($(window).scrollTop() > 600) {
//        /* if(window.pageYOffset >= $('원하는위치의엘리먼트').offset().top){ */
//        $('.fixed_area').addClass("fixed");
//        //위의 if문에 대한 조건 만족시 fixed라는 class를 부여함
//    } else {
//        $('.fixed_area').removeClass("fixed");
//        //위의 if문에 대한 조건 아닌경우 fixed라는 class를 삭제함
//    }
//})
