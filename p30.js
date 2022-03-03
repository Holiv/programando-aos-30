
window.onscroll = function() {myFunction()};
var navegacao = document.getElementById("navegacao-1");
var sticky = navegacao.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky)
    {
        navbar.classList.add("sticky")
    }
    else
    {
        navbar.classList.remove("sticky");
    }
}

/*
var initialPos =  $('#navegacao-1').offset().top;

$(window).scroll(function() {
  
    var scrolled = $(window).scrollTop();
  
    if (scrolled > initialPos) {
      
      $('#navegacao-1').css({
          position:"fixed",
          top:'0px',
          
       });
      
    } else {

      var scale = 1 - (scrolled/initialPos);      
      scale = (scale * 1.2) + 0.8;
      
      $('.navegacao-1').css({
            position:"absolute",
            top:initialPos+"px",
            transform: "scale("+scale+")" 
       });
    }
    
});
*/