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

const projects = [
    {
        title: 'Fine Eyewear Remodel Website',
        link: 'https://dhsmith22.github.io/fine-eyewear-remodel',
        icon: 'open_in_new',
        technologies: 'HTML CSS JS',
        imageSrc: 'static/images/fine-eyewear.png',
        imageAlt: 'An icon image of the Fine Eyewear Remodel Website',
        description: 'A redesign of the current Fine Eyewear website created with base HTML, CSS, and JavaScript. Fine Eyewear specializes in combining comprehensive eye exams with designer sunglasses and eyeglasses.'
    },
    {
        title: 'JavaScript Mini-Project Series',
        link: 'https://dhsmith22.github.io/web-dev-study',
        icon: 'open_in_new',
        technologies: 'HTML CSS JS',
        imageSrc: 'static/images/webDevRepo.png',
        imageAlt: 'An icon image of the JavaScript Mini-Project Series',
        description: 'A GitHub repository dedicated to hosting all the minor projects I create as I learn Web Development.'
    }
];
// DARK MODE PROJECT CARDS
const containerDark = document.querySelector('.pCDark');
projects.forEach(card => {
    // section element
    const section = document.createElement('section');
    section.classList.add('projectCard', 'projectCardDark');
    // h1 element
    const h1 = document.createElement('h1');
    h1.textContent = card.title;
    // anchor element
    const anchor = document.createElement('a');
    anchor.href = card.link;
    anchor.target = '_blank';
    // span element
    const span = document.createElement('span');
    span.classList.add('material-symbols-outlined');
    span.textContent = card.icon;
    // Append span to anchor, and anchor to h1
    anchor.appendChild(span);
    h1.appendChild(anchor);
    // paragraph for technologies
    const techParagraph = document.createElement('p');
    techParagraph.textContent = card.technologies;
    // figure and img elements
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = card.imageSrc;
    img.alt = card.imageAlt;
    figure.appendChild(img);
    // article and description paragraph
    const article = document.createElement('article');
    const descParagraph = document.createElement('p');
    descParagraph.textContent = card.description;
    article.appendChild(descParagraph);
    // Append all elements to section
    section.appendChild(h1);
    section.appendChild(techParagraph);
    section.appendChild(figure);
    section.appendChild(article);
    // Append section to the specified container
    if (containerDark) {
        containerDark.appendChild(section);
    }
});
// LIGHT MODE PROJECT CARDS
const containerLight = document.querySelector('.pCLight');
projects.forEach(card => {
    // section element
    const section = document.createElement('section');
    section.classList.add('projectCard', 'projectCardLight');

    // h1 element
    const h1 = document.createElement('h1');
    h1.textContent = card.title;

    // anchor element
    const anchor = document.createElement('a');
    anchor.href = card.link;
    anchor.target = '_blank';

    // span element
    const span = document.createElement('span');
    span.classList.add('material-symbols-outlined');
    span.textContent = card.icon;

    // Append span to anchor, and anchor to h1
    anchor.appendChild(span);
    h1.appendChild(anchor);

    // paragraph for technologies
    const techParagraph = document.createElement('p');
    techParagraph.textContent = card.technologies;

    // figure and img elements
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = card.imageSrc;
    img.alt = card.imageAlt;
    figure.appendChild(img);

    // article and description paragraph
    const article = document.createElement('article');
    const descParagraph = document.createElement('p');
    descParagraph.textContent = card.description;
    article.appendChild(descParagraph);

    // Append all elements to section
    section.appendChild(h1);
    section.appendChild(techParagraph);
    section.appendChild(figure);
    section.appendChild(article);

    // Append section to the specified container
    if (containerLight) {
        containerLight.appendChild(section);
    }
});
// Scroll Fading Effect

// project-page background star animation
