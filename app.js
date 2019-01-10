
    
    var slideContainer = $('.slide-container');

    slideContainer.slick({
      autoplay:true,
      autoplaySpeed: 4000,
    });


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
      $('.about-para').show(2300)
      console.log('Element is hidden with reset.');
    } else if (state === 'visible') {
      $('.about-para').show(3000);
      console.log('Element is visible.');
    }
  }
});

//Search skills bar 
var mySkills = ["HTML", "CSS", "Javascript", "JQuery", "Sass", "Node", "Express", "Python", "Django", "React", "Handlebars", "Redux"];
var notSkills = ["C#", ".Net", "Angular"];
var trueSkills = $("skillSearch_True");
var falseSkills = $("skillSearch_False");


const yourArray =[];
const skillMatch = [];
const notSkillMatch =[]

var searchField = $('#searchTerm');
var searchButton = $('#searchButton');

searchButton.on("click",function skillsearch() {
  var searchFieldInput = searchField.val();
  console.log("Search Field Input:", searchFieldInput)
  eachInputValue = searchFieldInput.split(',');
  console.log("Each value:", eachInputValue);


for(let x = 0; x < eachInputValue.length; x++){
  upperWord = eachInputValue[x].toUpperCase();

  for(let i = 0; i < mySkills.length; i++){
    upperWord === mySkills[i].toUpperCase() ? skillMatch.push(mySkills[i].toUpperCase()) : "";
    console.log(upperWord)
  }
  for (y = 0; y < notSkills.length; y++){
    upperWord === notSkills[y].toUpperCase() ? notSkillMatch.push(notSkill[y].toUpperCase()) : "";
    console.log("Yes it matches",skillMatch)
  }
  }


if(skillMatch.length !== 0) {
  alert(`Yes I can help with: ${skillMatch}`).map()
} else {
  console.log('none')
  // alert("I cant help with that")
}
if (notSkillMatch.length !== 0) 
  falseSkills.html("Sorry, I cannot help with: ${notSkillMatch}").map(skill => `<li>${skill}</li>`)
 else {
  falseSkills.hide()
}

})
 
 
// };






  
  
  
  
