//Captcha validering
document.getElementById("kontaktForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const captchaInput = document.getElementById("captcha").value.trim();
  const captchaMessage = document.getElementById("captchaMessage");

  if (captchaInput === "5") {
    captchaMessage.innerHTML = '<span class="text-success">CAPTCHA korrekt! Din besked er sendt.</span>';
  } else {
    captchaMessage.innerHTML = '<span class="text-danger">CAPTCHA forkert! Prøv igen.</span>';
  }
});

//Keeps dropdown open after pressing enter
document.querySelector(".dropdown-menu").addEventListener("click", function(event) {
  event.stopPropagation(); 
});


// Function that fades the current divs(pages) out and fades the selected one in
// Retrieve from localStorage or default to "Introduktion"
let currentParagraph = localStorage.getItem('currentParagraph') || "Introduction";
let prevParagraph;
let nextParagraph;

function changeParagraph(newParagraph) {
    if (currentParagraph !== newParagraph) {
        prevParagraph = document.getElementById(currentParagraph);
        nextParagraph = document.getElementById(newParagraph);

        currentParagraph = newParagraph;
        
        // Store the current paragraph in localStorage
        localStorage.setItem('currentParagraph', currentParagraph);
        
        prevParagraph.classList.add("fade-out");

        prevParagraph.addEventListener('animationend', () => {
            prevParagraph.classList.add("hidden");
            prevParagraph.classList.remove("fade-out");

            nextParagraph.classList.remove("hidden");
            nextParagraph.classList.add("fade-in");

            nextParagraph.addEventListener('animationend', () => {
                nextParagraph.classList.remove("fade-in");
            });
        });
    }
}

// Ensure the active paragraph is displayed on page load
window.onload = function() {
    const activeParagraph = document.getElementById(currentParagraph);
    if (activeParagraph) {
        activeParagraph.classList.remove("hidden");
        activeParagraph.classList.add("fade-in");
    }
};
    
// Fetches GitHub repos using the GitHub API and appends them to a list of cards
document.addEventListener("DOMContentLoaded", function() {
  const username = "mthunbo";
  const repoListContainer = document.getElementById('repo-list');

  // Fetch GitHub repositories using the GitHub API
  fetch(`https://api.github.com/users/${username}/repos?sort=created&per_page=6`)
    .then(response => response.json())
    .then(repositories => {
      repositories.forEach(repo => {
        // Create a new card for each repository
        const repoCard = document.createElement('div');
        repoCard.classList.add('col-md-4', 'col-sm-6');

        repoCard.innerHTML = `
          <div class="card repo-card">
            <img src="repoPics/${repo.name}.png" class="card-img-top" alt="${repo.name}">
            <div class="card-body">
              <h5 class="card-title">${repo.name}</h5>
              <p class="card-text">${repo.description ? repo.description : 'No description available'}</p>
              <a href="${repo.html_url}" class="btn btn-primary" target="_blank"><i class="fab fa-github"></i> View Repo</a>
            </div>
          </div>
        `;

        // Append the new card to the container
        repoListContainer.appendChild(repoCard);
      });
    })
    .catch(error => {
      console.error('Error fetching repositories:', error);
      repoListContainer.innerHTML = '<p class="text-danger">Failed to load repositories.</p>';
    });
});

// GitHub acc avatar link
//https://avatars.githubusercontent.com/u/${repo.owner.id}?s=200