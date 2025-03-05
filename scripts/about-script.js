document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded event fired");

    // Open and close CV Modal
    // Obtain DOM elements
    const modal = document.getElementById("CVModal");
    const btnOpen = document.getElementById("openModal");

    // Function to open modal
    btnOpen.onclick = function() {
        console.log("'Vissa detaljerad CV' button clicked");
        modal.style.display = "block";
        console.log("Modal display:", modal.style.display);

        //Reset scroll position to top
        const cvContainer = document.querySelector('.CV-container');
        if (cvContainer) {
            cvContainer.scrollTop = 0;
        }
    
        // Create CV HTML
        fetch('./JSON/CV.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(jsonData => {
            console.log("JSON data: ", jsonData);
            const cvData = jsonData.cv;
            const cvContainer = document.querySelector('.CV-container');
            console.log("cvContainer:", cvContainer);

            //Clean container before adding new content
            cvContainer.innerHTML = '<span class="closeModal">&times;</span><h2>Curriculum Viate</h2>';

            //Funtcion to create sections
            function createSection(sectionId, sectionTittle) {
                const section = document.createElement("section");
                section.id = sectionId;
                const h3 = document.createElement("h3");
                h3.textContent = sectionTittle;
                section.appendChild(h3);
                return section;
            }

            // Education
            //Function to create Education HTML
            function createEducationHTML(section, educationData) {
                //Creates a div for education-container
                const div = document.createElement('div');
                div.id="education-container";
                section.appendChild(div);
                // Creates ul list with class timeline
                const ul = document.createElement('ul');
                ul.className = 'timeline'; 
                div.appendChild(ul);

                educationData.forEach(eduItem => {
                    const li = document.createElement('li');
                    //Create degree span
                    const degreeSpan = document.createElement('span');
                    degreeSpan.className = "degree";
                    degreeSpan.textContent = eduItem.degree + '. ';

                    //Create school span with italics in it
                    const schoolSpan = document.createElement('span');
                    schoolSpan.className = 'school';
                    //Create italics for school's name
                    let schoolText = eduItem.school;
                    let schoolHtml = "";
                    const parts = schoolText.split('*');
                    schoolHtml = parts [0];
                    for (let i = 1; i < parts.length; i +=2) {
                        schoolHtml += "<i>" + parts[i] + "</i>";
                        if (parts[i + 1]) {
                            schoolHtml += parts[i + 1];
                        }
                    }
                    schoolSpan.innerHTML = schoolHtml;
        
                    //Create emoji span
                    const countrySpan = document.createElement('span');
                    countrySpan.className = 'emoji';
                    countrySpan.textContent = " " + eduItem.country + " ";
        
                    //Create dates span
                    const datesSpan = document.createElement('span');
                    datesSpan.className = 'dates';
                    datesSpan.textContent = `${eduItem.start_date} – ${eduItem.end_date}.`;
        
                    //Append all spans to the li
                    li.appendChild(degreeSpan);
                    li.appendChild(schoolSpan);
                    li.appendChild(countrySpan);
                    li.appendChild(datesSpan);
                    
                    //Append the li to the ul
                    ul.appendChild(li);
                });
            }

            //Anrop createSection function
            const educationSection = createSection("education", "Utbildning");
            cvContainer.appendChild(educationSection);
            //Loop to fill in education content
            if (cvData && cvData.education) {
                createEducationHTML(educationSection, cvData.education);
            } else {
                console.error("Education data not found.");
            }

            // Experience
            function createExperienceHTML(section, experienceData) {
                //Create div experience-container
                const div = document.createElement('div');
                div.id = "experience-container";
                section.appendChild(div);
                //Create ul with class timeline
                const ul = document.createElement('ul');
                ul.className = "timeline";
                div.appendChild(ul);

                experienceData.forEach(company => {
                    //Creates one li for company + country flag
                    const companyLi = document.createElement('li');
                    const companySpan = document.createElement ('span');
                    companySpan.className = 'company';
                    companySpan.textContent = company.company;
                    companyLi.appendChild(companySpan);
        
                    const countrySpan = document.createElement('span');
                    countrySpan.className = "emoji";
                    countrySpan.textContent = " " + company.country;
                    companyLi.appendChild(countrySpan);
        
                    ul.appendChild(companyLi);

                    //Create a nested ul with possition details
                        const positionsUl = document.createElement('ul');
                        company.positions.forEach(position => {
                            const positionLi = document.createElement('li');

                            const titleSpan = document.createElement('span');
                            titleSpan.className = "position-title";
                            titleSpan.textContent = position.title + ".";
                            positionLi.appendChild(titleSpan);

                            const typeSpan = document.createElement('span');
                            typeSpan.className = "job-type";
                            typeSpan.textContent = " " + position.type + ".";
                            positionLi.appendChild(typeSpan);
            
                            const datesSpan = document.createElement('span');
                            datesSpan.className = "dates";
                            datesSpan.textContent = ` ${position.start_date} - ${position.end_date}.`;
                            positionLi.appendChild(datesSpan);
            
                            positionsUl.appendChild(positionLi);
                        });
                        ul.appendChild(positionsUl);
                });
            }
            //Anrop createSection function
            const experienceSection = createSection("experience", "Arbetslivserfarenhet");
            cvContainer.appendChild(experienceSection);
            //Loop to populate Experience section
            if (cvData && cvData.experience) {
                createExperienceHTML(experienceSection, cvData.experience);
            } else {
                console.error("Experience data not found.");
            }

            // Skills
            //Function to create HTML for skills section
            function createSkillsHTML(section, skillsData) {
                const div = document.createElement('div');
                div.id = "skills-container";
                const skillsUl = document.createElement('ul');
                skillsUl.id = "skills-list";
                div.appendChild(skillsUl);

                //Create languages ul inside skills
                const languagesListTitle = document.createElement("h4");
                languagesListTitle.textContent = "Språk";
                const languagesUl = document.createElement('ul');
                languagesUl.className = "languages-list";
                languagesUl.appendChild(languagesListTitle);

                skillsData.languages.forEach(language => {
                    const li = document.createElement('li');
                    li.className = "language-details";
        
                    const languageName = document.createElement('span');
                    languageName.className = "language-name";
                    languageName.textContent = language.language;
                    li.appendChild(languageName);
        
                    const countrySpan = document.createElement('span');
                    countrySpan.className = "emoji";
                    countrySpan.textContent = " " + language.country;
                    li.appendChild(countrySpan);
        
                    const levelSpan = document.createElement('span');
                    levelSpan.className = "language-level";
                    levelSpan.textContent = language.level;
        
                    languagesUl.appendChild(li);
                });
                skillsUl.appendChild(languagesUl);
                section.appendChild(div);
            }

            //Anrop createSection function
            const skillsSection = createSection("skills", "Kompetenser");
            cvContainer.appendChild(skillsSection);
            //Loop to populate Skills section
            if (cvData && cvData.skills && cvData.skills.languages) {
                createSkillsHTML(skillsSection, cvData.skills);
            } else {
                console.error("Skills data not found.");
            }

            //Add event listeners to close the modal
            const btnClose = document.querySelector(".closeModal");
            btnClose.onclick = function () {
                console.log("close button clicked");
                modal.style.display = "none";
            }
            window.onclick = function(event) {
                console.log("window clicked");
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        })
        .catch(error => {
            console.error("Error fetching JSON:", error);
        });
    };
    console.log("End of DOMCOntentLoaded");
});
