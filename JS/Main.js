const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
  if(entry.isIntersecting){
    document.querySelectorAll(".animated")[0].classList.add("fadeintop");
    document.querySelectorAll(".animated")[1].classList.add("fadeintop");
    document.querySelectorAll(".animated")[2].classList.add("fadeintop");
    document.querySelectorAll(".animated")[3].classList.add("fadeintop");


  }
}
  )
})

observer.observe(document.querySelectorAll(".container-fluid"));
    
    
    
    
    
    
    
    
    
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,

      });



      
