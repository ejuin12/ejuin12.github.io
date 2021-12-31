$(function(){
//---------------------------------------------------------------------------
$('#popUp').draggable();

$('#popUp a').on('click',function(){
    $(this).parent().fadeOut();
    return false;
});

$('.search').on('click', function(){
    $('.search_form').stop().slideToggle();
});


$(window).on('scroll', ()=>{
    let sct=$(window).scrollTop();
    console.log(sTop,sct);
    sct > 0 ? $('#header').addClass('on') : $('#header').removeClass('on');
    // if(sct > 0) {$('#header').addClass('on')}else{$('#header').removeClass('on')}
    sct > 300 ? $('#toTop').fadeIn() : $('#toTop').fadeOut();
    sct > sTop ? $('#solution').addClass('on') : $('#solution').removeClass('on');
});


$('.main_slider').slick({
    autoplay:true,
    autoplaySpeed:3000,
    arrows:false,
    fade:true,
    pauseOnHover:false,
    pauseOnFocus:false,
    dots:true,
});

$('.pr_slider').slick({
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false,
    centerMode:true,
    slidesToShow:3,
    pauseOnHover:false,
    pauseOnFocus:false,
});


$('.main_slider figure').eq(0).addClass('on');
$('.main_slider').on('afterChange',function(e,s,c){
    $('.main_slider figure').eq(c).addClass('on').siblings().removeClass('on');
});

$('.pr_slider figure').eq(4).addClass('on');
$('.pr_slider').on('afterChange',function(e,s,c){
    $('.pr_slider figure').eq(c+4).addClass('on').siblings().removeClass('on');
});



$('.familyLink .link>a').on('click', function(e){
    // e.preventDefault();
    $(this).prev().stop().slideToggle();
    $(this).find('i').toggleClass('on');
    return false;
});

$('#toTop a').on('click', e=> {
    e.preventDefault();
    $('html,body').animate({scrollTop:0},1000)
});

let sTop = $('#solution').offset().top - 200;

//---------------------------------------------------------------------------
});
