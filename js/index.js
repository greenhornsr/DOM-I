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
logo.alt = "image of a lightbulb to the right of the phrase GREAT IDEA"



// DOM Selectors
const navContent = document.querySelectorAll('nav a');
// console.log(navContent);
navContent.forEach(function(currentValue, index){
  currentValue.textContent = siteContent['nav'][`nav-item-${index + 1}`];
  currentValue.style.color = 'green';
});

// adding nav options
// Nav Expectations
const newNavEl = document.createElement('a');
newNavEl.textContent = "Expectations";
console.log(newNavEl);
newNavEl.style.color = 'blue';
const newContent = document.querySelector('nav')
newContent.appendChild(newNavEl);


// Nav Bonus
const newNavEl2 = document.createElement('a');
newNavEl2.textContent = "Bonus";
console.log(newNavEl2);
newNavEl2.style.color = 'blue';
const newContent2 = document.querySelector('nav')
newContent2.prepend(newNavEl2);



// H1
const ctaH1 = document.querySelector('h1');
ctaH1.textContent = siteContent['cta']['h1'];

// cta Button
const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

// cta Logo Image
const ctaLogo = document.getElementById("cta-img");
ctaLogo.setAttribute('src', siteContent['cta']['img-src'])
ctaLogo.alt = "circlular 3D image of code"


// main-content
// mc h4 tags
const mcH4 = document.querySelectorAll('.text-content h4');
// console.log(mcH4);
mcH4[0].textContent = siteContent['main-content']['features-h4'];
mcH4[1].textContent = siteContent['main-content']['about-h4'];
mcH4[2].textContent = siteContent['main-content']['services-h4'];
mcH4[3].textContent = siteContent['main-content']['product-h4'];
mcH4[4].textContent = siteContent['main-content']['vision-h4'];

// mc p tags
const mcP = document.querySelectorAll('.text-content p');
mcP[0].textContent = siteContent['main-content']['features-content'];
mcP[1].textContent = siteContent['main-content']['about-content'];
mcP[2].textContent = siteContent['main-content']['services-content'];
mcP[3].textContent = siteContent['main-content']['product-content'];
mcP[4].textContent = siteContent['main-content']['vision-content'];



/*

"contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },

*/

// contact + footer
// contact 
const contH4 = document.querySelector('.contact h4');
// console.log(contH4);
contH4.textContent = siteContent['contact']['contact-h4'];

const contP = document.querySelectorAll('.contact p');
console.log(contP);
contP[0].textContent = siteContent['contact']['address'];
contP[1].textContent = siteContent['contact']['phone'];
contP[2].textContent = siteContent['contact']['email'];

// footer
const footy = document.querySelector('footer p');
footy.textContent = siteContent['footer']['copyright'];

