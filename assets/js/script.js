$(document).ready(function(){
  console.log("caricato")

var buttonLeft = $('.arrow-left');
var buttonRight = $('.arrow-right');


buttonRight.click(nextImg);
buttonLeft.click(prevImg);

function nextImg(){
  var selectedElement = $('img.active');
  var selectedCircle = $('i.active');
  console.log(selectedCircle);
  console.log(selectedElement);
  
  if(selectedElement.hasClass('last')){
    selectedCircle.removeClass('active');
    selectedElement.removeClass('active');
    $('.first').addClass('active');
  }else{
    selectedElement.removeClass('active');
    selectedCircle.removeClass('active')
  /* selectedElement.next.addClass('active'); */
    selectedElement.next('img').addClass('active');
    selectedCircle.next('i').addClass('active');
  }
}

function prevImg(){
  var selectedElement = $('img.active');
  var selectedCircle = $('i.active');
  console.log(selectedCircle);
  console.log(selectedElement);
  
  if(selectedElement.hasClass('first')){
    selectedCircle.removeClass('active');
    selectedElement.removeClass('active');
    $('.last').addClass('active');
  }else{
    selectedElement.removeClass('active');
    selectedCircle.removeClass('active')
  /* selectedElement.next.addClass('active'); */
    selectedElement.prev('img').addClass('active')
    selectedCircle.prev('i').addClass('active');
  }
}



});