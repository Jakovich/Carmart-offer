'use strict';
$(document).ready(function(){
  /*инициализация счетчика*/
  var clock;
  clock = $('#flip-clock').FlipClock({
    clockFace: "DailyCounter",
    language: 'ru-ru',
    showSeconds: false,
    countdown: true
  })
  
  var deadLine = new Date(2017, 0, 15);
  var rest = (deadLine - new Date())/1000;
  clock.setTime(rest);
  clock.start();
  
  /*инициализация слайдера*/
  //добавляет класс изображению в середине слайдера
  function addBigClass() {
    $('.slides__item:visible').each(function(){
        
        if($(this).css('z-index') === '5') {
          $(this).addClass('slides__item--big')
        }
                                    
    });
  }
  function removeBigClass() {
    $('.slides__item:visible').each(function(){
        $(this).removeClass('slides__item--big');                           
    });
  }
  
  
  $('#carousel-intro').carousel({
    hAlign:'center', 
    vAlign:'center', 
    hMargin:1.2, 
    frontWidth:400, 
    frontHeight:400, 
    carouselWidth:960,
    carouselHeight:370, 
    directionNav: true,
    backZoom:0.6, 
    slidesPerScroll:3, 
    speed:400, 
    buttonNav: 'none',
    autoplay:true, 
    autoplayInterval:5000, 
    pauseOnHover:true, 
    mouse:true, 
    shadow:false,
    before: function(carousel){
      removeBigClass()
    },
    after: function(carousel){
      addBigClass()
    },
    backOpacity:1
  });
  addBigClass();
  
  $('#carousel-advantages').carousel({
    hAlign:'center', 
    vAlign:'center', 
    hMargin:1.2, 
    frontWidth:1365, 
    frontHeight:600, 
    carouselWidth:1365,
    carouselHeight:600, 
    directionNav: true,
    backZoom:1, 
    slidesPerScroll:1, 
    speed:400, 
    buttonNav: 'none',
    autoplay:true, 
    autoplayInterval:5000, 
    pauseOnHover:false, 
    mouse:false, 
    shadow:false,
  })
  
  
  //кнопка скролла наверх
  $('.main-footer__up').click(function(evt){
    evt.preventDefault();
    $("body,html").animate({scrollTop:0},800);
  })
  
  $('.main-nav__item a, .scroll-btn').click(function () { 
     var elementClick = $(this).attr("href");
     var destination = $(elementClick).offset().top - 80;
     if($.browser.safari){
       $('body').animate( { scrollTop: destination }, 1100 );
     }else{
       $('html').animate( { scrollTop: destination }, 1100 );
     }
     return false;
  });

})