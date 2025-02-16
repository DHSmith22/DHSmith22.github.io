document.addEventListener("DOMContentLoaded", function(){
    const introContainer = document.querySelector('.intro-container');
    const introWrapperText = document.getElementById('intro-text');
    const heroWrapper = document.querySelector('.hero-wrapper');
    const projectsPage = document.querySelector('.projects-page');
    const contactPage = document.querySelector('.contact-page');

    setTimeout(() => {
        projectsPage.classList.add('hidden');
        contactPage.classList.add('hidden');
        heroWrapper.classList.add('hidden');
        introWrapperText.style.transition = '.35s';
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
        introWrapperText.style.scale = '1.5';
    }, 2600);
    setTimeout(() => {
        introWrapperText.style.scale = '1'
        introWrapperText.style.opacity = '0'
        heroWrapper.classList.remove('hidden');
        heroWrapper.scrollIntoView({behavior: 'smooth'});
    }, 3500);
    setTimeout(() => {
        introContainer.classList.add('hidden');
    }, 4000);
    setTimeout(() => {
       projectsPage.classList.remove('hidden');
       contactPage.classList.remove('hidden');
    }, 4250);
});

// Dark/light mode Toggle

function toggleLight() {
    const elementsToToggle = [
        '.landing-dark',        // dark mode landing page
        '.landing-light',       // light mode landing page
        '.pCDark',              // dark mode projects page
        '.pCLight',             // light mode projects page
        '.pCLDark',             // dark mode left project page
        '.pCLLight',            // light mode left project page
        '.contact-dark',        // dark mode of contact page
        '.contact-light',       // light mode of contact page
    ];

    elementsToToggle.forEach(arrayItem => {
        const element = document.querySelector(arrayItem);
        if (element) {
            element.classList.toggle('hidden');
            console.log(`Toggled ${arrayItem}:`, element.classList); // Log the class list after toggling
        } else {
            console.log(`Element not found for selector: ${arrayItem}`); // Log an error message if the element is not found
        }
    });
}


// Scroll Fading Effect

// project-page background star animation
