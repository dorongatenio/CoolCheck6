
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "Telem" && password === "1234") {
        window.location.href = "./LandingPage.html"; // redirect to landing page
       /* document.getElementById("message").innerHTML = "Login successful";*/
        // redirect to the desired page
    } else {
        document.getElementById("message").innerHTML = "שם משתמש או סיסמה לא חוקיים";
    }
}

function TooltipOpen() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    console.log('The Script will load now.');
}


  //for carusel landingpage//

  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



