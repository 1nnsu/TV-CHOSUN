document.addEventListener("DOMContentLoaded", function(e){
    headerMenuWrap();
    menuBtn();
    seasonMenu();
    mobileMenuType1();
    tableTabScroll();
})

// 이미지 터치 하이드
const tableTabScroll = () => {
    $('.mo-box .table-wrap .touch-slide').click(function(){
        $(this).hide();
    })
    }

// 헤더 드롭 메뉴
const headerMenuWrap = () => {
    $('nav>ul>li').mouseenter(function(){
        $(this).find('.subMenu').stop().slideDown(200);
    })
    $('nav>ul>li').mouseleave(function(){
        $('.subMenu').stop().slideUp(200);
    })
}
// 

// 모바일 메뉴
const mobileMenuType1 = () => {
    $('.sub-Container .type1').click(function(){
        $(this).find('.moArrow').toggleClass('on');

        $(this).siblings('.sub-menu-box').stop().slideToggle(200);
    })
}


// 햄버거 메뉴
const menuBtn = () => {
    $('.menuBtn').click(function(){
        $(this).toggleClass('on');
        $('header .sub-Container').toggleClass('on');
        $('header').toggleClass('on');
    })
}

// season 메뉴
const seasonMenu = () => {
    $('.s-arrow').click(function(){
        $(this).toggleClass('on');
        $('.tabmenu2').toggleClass('on');
    })
}
