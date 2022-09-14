var mybutton = document.getElementById("upBtn");
      
window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) 
  {
    mybutton.style.display = "block";
  } 
  
  else 
  {
    mybutton.style.display = "none";
  }
}

function topFunction() 
{
    window.scroll({top: 0, behavior: "smooth"})
    
}
