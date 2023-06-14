function validateForm() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  
  if (nameInput.value === '') {
    alert('Please enter your name.');
    return false;
  }
  
  if (emailInput.value === '') {
    alert('Please enter your email.');
    return false;
  }
  return true;
}
const slider = document.getElementById('slider');
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
let currentImage = 0;

function changeImage() {
  slider.src = images[currentImage];
  currentImage = (currentImage + 1) % images.length;
}

setInterval(changeImage, 2500);
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
  
    const target = document.querySelector(this.getAttribute('href'));
  
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
