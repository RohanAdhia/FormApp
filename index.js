// Use the below command in Hyper if certicate issue faced OR unable to install / update new / existing packages.
// apm config set strict-ssl false


$('#btn1').click(function(){
  alert("I'm a jQuery Event Button!!!!");
});

$('#btn2').click(function(){
  $('input[type="text"]').val("");
});

$('#btn4').click(function(){
  var color = $('#favcolor').val();
  // alert(color);
  $('body').css("background-color" , color);
  $('.jumbotron').css("background-color" , color);
  $('.input-group-text').css("background-color" , color);
  $('.form-control').css("background-color" , color);
});

$('#btn5').click(function(){
  var color = $('#favcolor').val();
  // alert(color);
  $('body').css("color" , color);
  $('.jumbotron').css("color" , color);
  $('.input-group-text').css("color" , color);
  $('.form-control').css("color" , color);
});


$(document).keypress(function(event){
  var keyPressed = event.key;
  $('h1').text(keyPressed);
  return textArray;
});


// $('button').click(function(){
//   alert("Hello!");
// });

// Add EventListener to all the buttons
// var buttons = document.querySelectorAll(".btn").length;
// for (var i = 0; i < buttons; i++){
//   document.querySelectorAll(".btn")[i].addEventListener("click",function(){
//     alert("I've been clicked!");
//   });
// }


// document.querySelector("#btn3").addEventListener("click",function(){
//   // alert("Hey! I'm Search button. I'm still under development.");
//   window.open(search.html, "_blank");
// });
