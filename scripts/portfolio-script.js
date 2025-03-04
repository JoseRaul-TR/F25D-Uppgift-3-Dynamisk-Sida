// create manual slideshow from JSON data
fetch('./JSON/Projects-Portfolio.json')
  .then(response => response.json())
  .then(projects => {
    const slideshowContainer = document.querySelector('.slideshow-container');

    projects.forEach(project => {
      const slide = document.createElement('div');
      slide.classList.add('mySlides');
      slide.classList.add('fade');

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

      let modalContent = `<div class="modal-content"><a href="#" class="close">×</a><h4>${project.modalTitle}</h4><p>${project.modalDescription}</p>`;

      if (project.modalImage) {
        modalContent += `<img src="${project.modalImage}" alt="${project.alt}" class="modal-img">`;
      }

      if (project.githubLink) {
        modalContent += `<a href="${project.githubLink}" class="link" target="_blank">GitHub repository<i class="fa-brands fa-github"></i></a>`;
      }

      if (project.spotifyEmbed) {
        modalContent += `<iframe style="border-radius:12px" src="${project.spotifyEmbed}" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
      }

      if (project.vimeoEmbed) {
        modalContent += `<div style="padding:56.25% 0 0 0 0;position:relative;"><iframe src="${project.vimeoEmbed}?badge=0&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Vimeo embed"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
      }

      if (project.youtubeEmbed) {
        modalContent += `<iframe width="560" height="315" src="${project.youtubeEmbed}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
      }

      modalContent += `</div>`;
      modal.innerHTML = modalContent;
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