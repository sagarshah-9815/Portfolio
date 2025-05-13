document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.getElementById('toggle-switch');
  const body = document.body;

  // Load dark mode preference or default to dark
  if (localStorage.getItem('theme') === 'light') {
    body.classList.remove('dark');
  } else {
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark'); // Ensure default is stored
  }

  toggleSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');
    // Save preference
    if (body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
});

/* -- Navigation Function -- */
function myMenuFunction(){
  const menuBtn = document.getElementById("myNavMenu");
  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  } else {
    menuBtn.className = "nav-menu";
    document.body.style.overflow = ''; // Restore scrolling
  }
}

// Close mobile menu when clicking X button or outside
document.addEventListener('click', (e) => {
  const menu = document.getElementById("myNavMenu");
  const menuBtn = document.querySelector('.nav-menu-btn');
  
  // Close when clicking X button
  if (e.target.classList.contains('menu-close-btn')) {
    menu.className = "nav-menu";
    document.body.style.overflow = '';
  }
  
  // Close when clicking outside menu
  if (menu.className.includes('responsive') && 
      !e.target.closest('.nav-menu') && 
      !e.target.closest('.nav-menu-btn')) {
    menu.className = "nav-menu";
    document.body.style.overflow = '';
  }
});

/* -- Add shadow to the navigation bar when scrolling -- */
window.onscroll = function() {headerShadow()};
function headerShadow() {
  const navHeader =document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.8)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* Skills marquee animation is handled by CSS */

/* -- Typing revealing effect -- */
var typingEffect = new Typed(".typedText",{
  strings : ["Flutter Developer","Coder"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})

/* -- Scroll reveal animation -- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})
/* -- Project Box -- */
sr.reveal('.project-box',{interval: 200})
/* -- Headings -- */
sr.reveal('.top-header',{})

/* -- Scroll reveal left-right animation -- */
/* -- About info & Contact info -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})
srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})
/* -- About skills & Form box -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})
srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

/* ----- Change active link ----- */
const sections = document.querySelectorAll('section[id]')
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive);
