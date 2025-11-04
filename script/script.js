document.addEventListener("DOMContentLoaded", function(e){
    headerMenuWrap();
    menuBtn();
})

// 헤더 드롭 메뉴
const headerMenuWrap = () => {
    $('nav>ul>li').mouseenter(function(){
        $(this).find('.subMenu').stop().slideDown(300);
    })
    $('nav>ul>li').mouseleave(function(){
        $('.subMenu').stop().slideUp(200);
    })
}

// 햄버거 메뉴
const menuBtn = () => {
    $('.menuBtn').click(function(){
        $(this).toggleClass('on');
    })
}
