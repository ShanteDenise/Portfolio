var slideContainer = $(".slide-container");

slideContainer.slick({
  autoplay: true,
  autoplaySpeed: 4000
});

$(".project-card__image img").hide();
$(".slick-active")
  .find(".project-card img")
  .fadeIn(200);

// On before slide change
slideContainer.on("beforeChange", function(
  event,
  slick,
  currentSlide,
  nextSlide
) {
  $(".slick-active")
    .find(".project-card img")
    .fadeOut(1000);
});

// On after slide change
slideContainer.on("afterChange", function(event, slick, currentSlide) {
  $(".slick-active")
    .find(".project-card img")
    .fadeIn(200);
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
    if (state === "noreset") {
      $(".about-para").hide();
      console.log("state is hidden with no reset");
    } else if (state === "reset") {
      $(".about-para").show(2300);
      console.log("Element is hidden with reset.");
    } else if (state === "visible") {
      $(".about-para").show(3000);
      console.log("Element is visible.");
    }
  }
});

//Search skills bar
var mySkills = [
  "HTML",
  "CSS",
  "Javascript",
  "JQuery",
  "Sass",
  "Node",
  "Express",
  "Python",
  "Django",
  "React",
  "Handlebars",
  "Redux",
  "Mongoose",
  "Mongodb",
  "Postman",
  "SQL",
  "Vscode",
  "Git",
  "Github"
];
var notSkills = ["C#", ".Net", "Angular"];
var trueSkills = $("skillSearch_True");
var falseSkills = $("skillSearch_False");

var yourArray = [];
var skillMatch = [];
var notSkillMatch = [];

var searchField = $("#searchTerm");
var searchButton = $("#searchButton");

function resetArray() {
  skillMatch = [];
  notSkillMatch = [];
  yourArray = [];
}

searchButton.on("click", function skillSearch() {
  var searchFieldInput = searchField.val();
  console.log("Search Field Input:", searchFieldInput);
  eachInputValue = searchFieldInput.split(",");
  console.log("Each value:", eachInputValue);

  for (let x = 0; x < eachInputValue.length; x++) {
    upperWord = eachInputValue[x].toUpperCase();

    for (let i = 0; i < mySkills.length; i++) {
      upperWord === mySkills[i].toUpperCase()
        ? skillMatch.push(mySkills[i].toUpperCase())
        : "";
      console.log(upperWord);
    }
    for (y = 0; y < notSkills.length; y++) {
      upperWord === notSkills[y].toUpperCase()
        ? notSkillMatch.push(notSkills[y].toUpperCase())
        : "";
    }
  }

  if (skillMatch.length !== 0) {
    alert(`Yes I can help with ${skillMatch}`);
    resetArray();
  } else if (notSkillMatch.length !== 0)
    alert(
      `Sorry ${notSkillMatch} is not in my list of current skills, but I am up for any challenge`
    ),
      resetArray();
  else {
    alert(
      "Sorry currently not on my list of skills, but Im sure I can learn it"
    );
  }
});

//Getting the form data
$(function() {
  // Get the form.
  var formMessages = $("#comment");
  var form = $("#form1");

  // Get the messages div.

  $(form).submit(function(event) {
    event.preventDefault();
  });

  // Serialize the form data.
  var formData = $(form).serialize();

  // Submit the form using AJAX.
  $.ajax({
    type: "POST",
    url: $(form).attr("action"),
    data: formData
  })
    .done(function(response) {
      // Make sure that the formMessages div has the 'success' class.
      $(formMessages).removeClass("error");
      $(formMessages).addClass("success");

      // Set the message text.
      $(formMessages).text(response);

      // Clear the form.
      $("#name").val("");
      $("#email").val("");
      $("#comment").val("");
    })
    .fail(function(data) {
      // Make sure that the formMessages div has the 'error' class.
      $(formMessages).removeClass("success");
      $(formMessages).addClass("error");

      // Set the message text.
      if (data.responseText !== "") {
        $(formMessages).text(data.responseText);
      } else {
        $(formMessages).text(
          "Oops! An error occurred and your message could not be sent."
        );
      }
    });
});
