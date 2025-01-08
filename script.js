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

document.querySelector(".dropdown-menu").addEventListener("click", function(event) {
  event.stopPropagation(); 
});