const currentPage = window.location.pathname;

// Get the nav links
const homeLink = document.getElementById("homeLink");
const portfolioLink = document.getElementById("portfolioLink");
const aboutLink = document.getElementById("aboutLink");
const contactLink = document.getElementById("contactLink");

// Function to set the active class
function setActiveLink(link) {
    if (homeLink) homeLink.classList.remove("active");
    if (portfolioLink) portfolioLink.classList.remove("active");
    if (aboutLink) aboutLink.classList.remove("active");
    if (contactLink) contactLink.classList.remove("active");
    if (link) link.classList.add("active");
}

// Check the current page and set the active link
if (currentPage.endsWith("/") || currentPage.endsWith("index.html")) { //Handles root path and index.html
    setActiveLink(homeLink);
} else if (currentPage.endsWith("portfolio.html")) {
    setActiveLink(portfolioLink);
} else if (currentPage.endsWith("about.html")) {
    setActiveLink(aboutLink);
} else if (currentPage.endsWith("contact.html")) {
    setActiveLink(contactLink);
}

// Show the correct section based on the current page
const homeSection = document.getElementById("home");
const portfolioSection = document.getElementById("portfolio");
const aboutSection = document.getElementById("about");
const contactSection = document.getElementById("contact");

function showSection(section) {
    if (homeSection) homeSection.style.display = "none";
    if (portfolioSection) portfolioSection.style.display = "none";
    if (aboutSection) aboutSection.style.display = "none";
    if (contactSection) contactSection.style.display = "none";
    if (section) section.style.display = "block";
}

if (currentPage.endsWith("/") || currentPage.endsWith("index.html")) {
    if (homeSection) showSection(homeSection);
} else if (currentPage.endsWith("portfolio.html")) {
    if (portfolioSection) showSection(portfolioSection);
} else if (currentPage.endsWith("about.html")) {
    if (aboutSection) showSection(aboutSection);
} else if (currentPage.endsWith("contact.html")) {
    if (contactSection) showSection(contactSection);
}

//Responsive navbar
/* Toggle between adding and removing the "responsive" class to the navbar when the user clicks on the icon */
function contractNavbar() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}