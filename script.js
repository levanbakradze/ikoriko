<script>
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      dots[i].classList.remove('active-dot');
      if (i === index) {
        slide.classList.add('active');
        dots[i].classList.add('active-dot');
      }
    });
    currentSlide = index;
  }

  function moveSlide(step) {
    let newIndex = (currentSlide + step + slides.length) % slides.length;
    showSlide(newIndex);
  }

  function setSlide(index) {
    showSlide(index);
  }

  // Initialize first slide
  showSlide(currentSlide);
</script>
