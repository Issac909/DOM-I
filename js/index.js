const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Circle Image
const headerImage = document.querySelector('#cta-img');
headerImage.src = 'img/header-img.png';

//Nav text
const navBar = document.querySelectorAll('nav a');
// for(let i = 0;i<6;i++){
// navbar[i].textContent = siteContent.nav[`nav-item-${i + 1}`]};

Array.from(navBar).forEach((a, i) => {
  a.textContent = siteContent.nav[`nav-item-${i + 1}`]
});

//Dom header
const domText = document.querySelector('.cta .cta-text h1');

domText.textContent = siteContent["cta"]["h1"];
// domText.split('/\r?\n/g');

//Get Started Button
const domButton = document.querySelector('.cta .cta-text button');

domButton.textContent = siteContent.cta['button'];


//Headers above mid-section image
const topSectionH = document.querySelectorAll('.top-content .text-content h4');

topSectionH[0].textContent = siteContent["main-content"]["features-h4"];
topSectionH[1].textContent = siteContent["main-content"]["about-h4"];


//Paragraphs above image
const topSectionP = document.querySelectorAll('.top-content .text-content p');

topSectionP[0].textContent = siteContent["main-content"]["features-content"];
topSectionP[1].textContent = siteContent["main-content"]["about-content"];


//Middle image
const midImage = document.querySelector('.middle-img');

midImage.src = "img/mid-page-accent.jpg";

//Middle section bottom headers
const botSectionH = document.querySelectorAll('.bottom-content .text-content h4');

botSectionH[0].textContent = siteContent["main-content"]["services-h4"];
botSectionH[1].textContent = siteContent["main-content"]["product-h4"];
botSectionH[2].textContent = siteContent["main-content"]["vision-h4"];

//Middle section bottom paragraphs
const botSectionP = document.querySelectorAll('.bottom-content .text-content p');

botSectionP[0].textContent = siteContent["main-content"]["services-content"];
botSectionP[1].textContent = siteContent["main-content"]["product-content"];
botSectionP[2].textContent = siteContent["main-content"]["vision-content"];

//Contact section geading
const contactH = document.querySelector('.contact h4');

contactH.textContent = siteContent["contact"]["contact-h4"];

const contactP = document.querySelectorAll('.contact p');

contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

//Footer
const footer = document.querySelector('footer p');

footer.textContent = siteContent['footer']['copyright'];


//Green nav links
const navbarGreen = document.querySelectorAll('nav a');

Array.from(navbarGreen).forEach((link)=> {link.style.color = 'green'});

//Creating 2 nav elements
const navbarParent = document.querySelector('nav');
const newLink = document.createElement('a');
const newLink2 = document.createElement('a');
//Giving the 2 elements text 
newLink.textContent="Yoo"
newLink2.textContent="Boop"
//Append and Prepend (adding) to the navbar
navbarParent.append(newLink);
navbarParent.prepend(newLink2);
