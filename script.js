const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav
    burger.addEventListener('click', ()=>{
      nav.classList.toggle('nav-active');
      //Animate Links
      navLinks.forEach((link, index)=>{
        if(link.style.animation){
          link.style.animation = ''
        }else{
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
  
        }
      });
      
      //burger animation
      burger.classList.toggle('toggle');
      
    });
  }
  navSlide();


  //
  function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 9.8501, lng: 123.1389},
      zoom: 15,
      mapId: 'b14345d20db46e28'
    });
  }


//

document.querySelector('#copyright_year').innerText = new Date().getFullYear();


  