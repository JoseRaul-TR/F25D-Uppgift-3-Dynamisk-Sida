# Dynamic Portfolio Page with Slideshow

This repository contains the source code for a dynamic portfolio web page with a slideshow feature, created as part of the F25D course assignment. The project details and images for the portfolio, as well as the CV data, are loaded dynamically from JSON files.

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Potential Enhancements](#potential-enhancements)
- [Contact](#contact)

## Overview

This portfolio page dynamically generates a slideshow of projects. The projects' data, including titles and images, is fetched from a JSON file, allowing for easy management and updates. Similarly, the CV information on the "Om mig" page is also loaded from a JSON file.

## Key Features

-   **Dynamically Generated Slideshow:** Portfolio items are loaded and displayed as a slideshow, with data sourced from a JSON file.
-   **Dynamic CV:** The content of the CV on the "Om mig" page is also loaded dynamically from a JSON file.
-   **Navigation Controls:** Includes "previous" and "next" buttons for the slideshow.
-   **Modal for Details:** Clicking a slide opens a modal with more project information.
-   **Responsive Design:** The layout adapts to various screen sizes.
-   **Dark Mode Support:** Automatically adjusts to the user's preferred color scheme.
-   **Print-friendly Styles:** Stylesheet optimized for printing.

## Screenshots

<img width="1280" alt="project-3" src="https://github.com/user-attachments/assets/40697834-8194-4344-8a8e-e77a0edf0bf5" />

## Technologies Used

-   HTML5
-   CSS3
-   JavaScript

## Getting Started

To view this dynamic portfolio page locally:

1.  Clone the repository:
    ```bash
    git clone [https://github.com/JoseRaul-TR/F25D-Uppgift-3-Dynamisk-Sida.git](https://github.com/JoseRaul-TR/F25D-Uppgift-3-Dynamisk-Sida.git)
    ```
2.  Navigate to the project directory:
    ```bash
    cd F25D-Uppgift-3-Dynamisk-Sida
    ```
3.  Open the `Pages/portfolio.html` file in your web browser to see the portfolio, or `index.html` for the homepage. The "Om mig" page (`Pages/about.html`) will display the dynamic CV.

## Project Structure

```
.
├── Assets/
│   └── Images/
│       └── ... (project images, screenshots)
├── Data/
│   ├── cv.json
│   └── projects-portfolio.json
├── Pages/
│   ├── about.html
│   ├── contact.html
│   └── portfolio.html
├── Scripts/
│   ├── about-script.js
│   ├── navbar-script.js
│   └── portfolio-script.js
├── Styles/
│   ├── about.css
│   ├── base.css
│   ├── contact.css
│   ├── dark-theme.css
│   ├── general.css
│   ├── index.css
│   ├── portfolio.css
│   ├── print.css
│   └── responsive.css
├── index.html
└── README.md
```

## Potential Enhancements

-   Further enhance the project modal with more detailed information.
-   Implement more advanced slideshow navigation (e.g., thumbnails, autoplay).
-   Add more interactive elements to the portfolio or CV sections.
-   Explore fetching data from a backend service or API in the future.

## Contact

-   **Email:** [Your Email Address] (Replace with your actual email)
-   **GitHub:** [Your GitHub Profile URL](https://github.com/JoseRaul-TR)

---

This dynamic portfolio page was created by José Raúl Tenza Ramírez.
