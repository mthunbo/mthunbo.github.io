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


//Fades the current divs(pages) out and fades the selected one in
let currentParagraph = "Introduktion";

let prevParagraph;
let nextParagraph;

function changeParagraph(newParagraph) {
    if (currentParagraph != newParagraph) {
        prevParagraph = document.getElementById(currentParagraph);
        nextParagraph = document.getElementById(newParagraph);

        currentParagraph = newParagraph;
        prevParagraph.classList.add("fade-out");

        prevParagraph.addEventListener('animationend', () => {
            prevParagraph.classList.add("hidden");
            prevParagraph.classList.remove("fade-out");

            nextParagraph.classList.remove("hidden");
            nextParagraph.classList.add("fade-in");

            nextParagraph.addEventListener('animationend', () => {
            nextParagraph.classList.remove("fade-in");
            })
        })
    }
}