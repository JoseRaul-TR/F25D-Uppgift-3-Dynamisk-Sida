// create manual slideshow from JSON data
fetch('./JSON/Projects-Portfolio.json')
  .then(response => response.json())
  .then(projects => {
    const slideshowContainer = document.querySelector('.slideshow-container');

    projects.forEach(project => {
      const slide = document.createElement('div');
      slide.classList.add('mySlides', 'fade');

      slide.innerHTML = `
        <div class="numbertext">${project.number}</div>
        <img src="${project.image}" alt="${project.alt}" style="width:100%">
        <div class="text">${project.text}</div>
        <a href="#${project.id}" class="link">Detaljer</a>
      `;
      slideshowContainer.appendChild(slide);

      // create modal
      const modal = document.createElement('div');
      modal.id = project.id;
      modal.classList.add('modal');

      const modalContent = document.createElement('div');
      modalContent.classList.add('modal-content');

      modalContent.innerHTML = `<a href='#' class='close'>x</a><h4>${project.modalTitle}</h4><p>${project.modalDescription}</p>`;

      if (project.modalImage) {
        const img = document.createElement('img');
        img.src = project.modalImage;
        img.alt = project.alt;
        img.classList.add('modal-img');
        modalContent.appendChild(img);
      }

      if (project.githubLink) {
        const githubLink = document.createElement('a');
        githubLink.href = project.githubLink;
        githubLink.classList.add('link');
        githubLink.target = '_blank';
        githubLink.innerHTML = 'GitHub repository<i class="fa-brands fa-github"></i>';
        modalContent.appendChild(githubLink);
      }

      // Create iframes only if the embed code exixts
      if (project.iframeEmbed) {
        const iframeContainer = document.createElement('div');
        iframeContainer.innerHTML = project.iframeEmbed;
        modalContent.appendChild(iframeContainer);
      }

      modal.appendChild(modalContent);
      document.body.appendChild(modal);
    });

    // W3 code for slideshow (https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp)

    let slideIndex = 1; // Start with the first slide
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function showSlides(n) {
      let i;
      const slides = document.getElementsByClassName("mySlides");
      if (n > slides.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = slides.length; }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "block";
    }

    // Add next/previous buttons
    const prevButton = document.createElement('a');
    prevButton.classList.add('prev');
    prevButton.innerHTML = '&#10094;';
    prevButton.addEventListener('click', () => plusSlides(-1));
    slideshowContainer.appendChild(prevButton);

    const nextButton = document.createElement('a');
    nextButton.classList.add('next');
    nextButton.innerHTML = '&#10095;';
    nextButton.addEventListener('click', () => plusSlides(1));
    slideshowContainer.appendChild(nextButton);

    // Modal functionality
    document.addEventListener('click', function (event) {
      if (event.target.classList.contains('link')) {
        const modalId = event.target.getAttribute('href').substring(1);
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.style.display = "block";
          event.preventDefault(); // Prevent jump to anchor
        }
      }
      if (event.target.classList.contains('close')) {
        event.target.closest('.modal').style.display = "none";
      }
    });

  })
  .catch(error => console.error('Error fetching projects:', error));