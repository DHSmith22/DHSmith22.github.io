document.addEventListener("DOMContentLoaded", function(){
    const introContainer = document.querySelector('.intro-container');
    const introWrapperText = document.getElementById('intro-text');
    const heroWrapper = document.querySelector('.hero-wrapper');
    const projectsPage = document.querySelector('.projects-page');
    const contactPage = document.querySelector('.contact-page');

    setTimeout(() => {
        introWrapperText.innerHTML="Hej";
    }, 500);
    setTimeout(() => {
        introWrapperText.innerHTML="مرحبًا";
    }, 700);
    setTimeout(() => {
        introWrapperText.innerHTML="Olá";
    }, 900);
    setTimeout(() => {
        introWrapperText.innerHTML="你好";
    }, 1100);
    setTimeout(() => {
        introWrapperText.innerHTML="こんにちは";
    }, 1300);
    setTimeout(() => {
        introWrapperText.innerHTML="Bonjour";
    }, 1500);
    setTimeout(() => {
        introWrapperText.innerHTML="Привет";
    }, 1700);
    setTimeout(() => {
        introWrapperText.innerHTML="नमस्ते";
    }, 1900);
    setTimeout(() => {
        introWrapperText.innerHTML="H";
    }, 2100);
    setTimeout(() => {
        introWrapperText.innerHTML="He";
    }, 2200);
    setTimeout(() => {
        introWrapperText.innerHTML="Hel";
    }, 2300);
    setTimeout(() => {
        introWrapperText.innerHTML="Hell";
    }, 2400);
    setTimeout(() => {
        introWrapperText.innerHTML="Hello";
    }, 2500);
    setTimeout(() => {
        heroWrapper.scrollIntoView({behavior: 'smooth'});
    }, 3000);
    setTimeout(() => {
        introContainer.classList.add('hidden');
        projectsPage.classList.add('hidden');
        contactPage.classList.add('hidden');
    }, 3500);
    setTimeout(() => {
       projectsPage.classList.remove('hidden');
       contactPage.classList.remove('hidden');
    }, 3750);
});

// Dark mode Toggle

function toggleLight() {
    const heroDarkMode = document.querySelector('.landing-dark'); //defining the main darkmode landing page
    const heroLightMode = document.querySelector('.landing-light'); //defining the main lightmode landing page
    const projectDarkMode = document.querySelector('.projects-dark'); //defining the main darkmode projects page
    const projectLightMode = document.querySelector('.projects-light'); //defining the main darkmode projects page
    
    heroDarkMode.classList.toggle('hidden'); // toggles the .hidden class 
    heroLightMode.classList.toggle('hidden'); // toggles the .hidden class 
    projectDarkMode.classList.toggle('hidden'); // toggles the .hidden class 
    projectLightMode.classList.toggle('hidden'); // toggles the .hidden class 
}

// Scroll Buttons


// project-page background star animation
