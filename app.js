
    
    var slideContainer = $('.slide-container');

    slideContainer.slick();

    $('.project-card__image img').hide();
    $('.slick-active').find('.project-card img').fadeIn(200);
    

    // On before slide change
    slideContainer.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      $('.slick-active').find('.project-card img').fadeOut(1000);
    });
  
    
    // On after slide change
    slideContainer.on('afterChange', function(event, slick, currentSlide) {
      $('.slick-active').find('.project-card img').fadeIn(200);
    });

    // Initiate Emergence
emergence.init({
  container: window,
  reset: true,
  handheld: true,
  throttle: 250,
  elemCushion: 0.15,
  offsetTop: 0,
  offsetRight: 50,
  offsetBottom: 0,
  offsetLeft: 0,
  callback: function(element, state) {
    if (state === 'noreset') {
      $('.about-para').hide();
      console.log('state is hidden with no reset')
    } else if (state === 'reset') {
      $('.about-para').show(300)
      console.log('Element is hidden with reset.');
    } else if (state === 'visible') {
      $('.about-para').show(1400);
      console.log('Element is visible.');
    }
  }
});




  
  
  
  
  