'use strict';
$(document).ready(function(){
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
  
  
  
  $('.carousel').carousel({
    hAlign:'center', 
    vAlign:'center', 
    hMargin:1.2, 
    frontWidth:400, 
    frontHeight:400, 
    carouselWidth:1000,
    carouselHeight:400, 
    directionNav: true,
    backZoom:0.6, 
    slidesPerScroll:3, 
    speed:400, 
    buttonNav: 'none',
    //directionNav:false,
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
                                
 
})