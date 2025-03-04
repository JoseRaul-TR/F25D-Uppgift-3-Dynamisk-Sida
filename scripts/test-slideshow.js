<<<<<<< HEAD
// W3 code for slideshow
/* let slideIndex = 1;
showSlides(slideIndex);

=======
/* //Slideshow

let slideIndex = 1;
showSlides(slideIndex);

>>>>>>> parent of 2dae8cf... work Repo and projects slideshow
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
<<<<<<< HEAD
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} */

// create slideshow from JSON data
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
        modalContent += `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="${project.vimeoEmbed}?badge=0&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Vimeo embed"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
      }

      if (project.youtubeEmbed) {
        modalContent += `<iframe width="560" height="315" src="${project.youtubeEmbed}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
      }

      modalContent += `</div>`;
      modal.innerHTML = modalContent;
      document.body.appendChild(modal);
    });

    let slideIndex = 0;
    showSlides();

    function showSlides() {
      let i;
      const slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
=======
    let i;
    let slides = document.getElementsByClassName("slide");
    let thumbnails = document.getElementsByClassName("thumbnail");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
>>>>>>> parent of 2dae8cf... work Repo and projects slideshow
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
<<<<<<< HEAD

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
=======
    for (i = 0; i < thumbnails.length; i++) {
        thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    thumbnails[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

// Event delegation for thumbnails
document.querySelector('.thumbnail-row').addEventListener('click', (event) => {
    if (event.target.classList.contains('thumbnail')) {
        currentSlide(parseInt(event.target.dataset.slide));
    }
}); */

/* ––––––––––––––––––––––––––––––––––––––––––– */

//GitHub API

        // Your JavaScript from the previous response goes here
        document.addEventListener('DOMContentLoaded', () => {
            const slideshow = document.querySelector('.slideshow');
            const thumbnailRow = document.querySelector('.thumbnail-row');
            const username = 'JoseRaul-TR';

            fetch(`https://api.github.com/users/${username}/repos`)
                .then(response => response.json())
                .then(data => {
                    data.forEach((repo, index) => {
                        // Create slide
                        const slide = document.createElement('div');
                        slide.className = 'slide';
                        slide.innerHTML = `
                            <div class="numbertext">${index + 1} / ${data.length}</div>
                            <h4>${repo.name}</h4>
                            <p>${repo.description || 'No description available.'}</p>
                            <a href="${repo.html_url}" target="_blank">Se det på GitHub</a>
                        `;
                        slideshow.appendChild(slide); // Append the slide to the slideshow

                        // Create thumbnail
                        const thumbnailColumn = document.createElement('div');
                        thumbnailColumn.className = 'thumbnail-column';
                        const thumbnail = document.createElement('div');
                        thumbnail.className = 'thumbnail cursor';
                        thumbnail.dataset.slide = index + 1;
                        thumbnail.textContent = repo.language || "Repository";

                        thumbnailColumn.appendChild(thumbnail); // Append the thumbnail to the column
                        thumbnailRow.appendChild(thumbnailColumn); //Append the column to the row
                    });

                    // Initialize slideshow
                    initializeSlideshow(data.length);
                })
                .catch(error => console.log('Error fetching GitHub repos: ', error));

            function initializeSlideshow(slideCount) {
                let slideIndex = 1;
                showSlides(slideIndex);

                window.plusSlides = function(n) {
                    showSlides(slideIndex += n);
                };

                window.currentSlide = function(n) {
                    showSlides(slideIndex = n);
                };

                function showSlides(n) {
                    let i;
                    let slides = document.getElementsByClassName("slide");
                    let thumbnails = document.getElementsByClassName("thumbnail");

                    if (n > slides.length) { slideIndex = 1 }
                    if (n < 1) { slideIndex = slides.length }

                    for (i = 0; i < slides.length; i++) {
                        slides[i].style.display = "none";
                    }
                    for (i = 0; i < thumbnails.length; i++) {
                        thumbnails[i].className = thumbnails[i].className.replace(" active", "");
                    }

                    slides[slideIndex - 1].style.display = "block";
                    thumbnails[slideIndex - 1].className += " active";
                }

                // Event delegation for thumbnails
                thumbnailRow.addEventListener('click', (event) => {
                    if (event.target.classList.contains('thumbnail')) {
                        currentSlide(parseInt(event.target.dataset.slide));
                    }
                });
            }
        });
>>>>>>> parent of 2dae8cf... work Repo and projects slideshow
