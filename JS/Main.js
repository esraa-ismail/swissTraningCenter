

  
// const section1 = document.querySelector(".whyOurCompany");

// const animate = document.querySelector(".esraa")


// if(window.scrollY >= section1.offsetTop){
//    animate.classList.add("fadeinleft"); }

  
  // }

// const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         document.querySelectorAll(".animate")[0].classList.add("fadeintop");

//           console.log(entry);
//       });
//   });

  


    
    
  //count section
  function count (){

    
  const nums = document.querySelectorAll(".nums .num");
  let section = document.querySelector(".thelast");
  let started = false ;
  const element2 = document.querySelector(".count");


  window.onscroll = function(){
    //count section
   if(window.scrollY >= section.offsetTop){
     element2.classList.add("fadeintop");

      if (!started) {
        nums.forEach((num)=> startcount(num))

      }
      started = true ;
    }
  }

  
  function startcount(el){
    let goal = el.dataset.goal ;
    let count = setInterval(()=>{
         el.textContent ++
         if(el.textContent == goal) {
          clearInterval(count)
         }
    },2000/goal)

  } }
  count();

 
  
    
    
    
    
    
    
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,

      });



      
