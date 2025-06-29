document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("logo-overlay");
  const main = document.getElementById("main-content");
  const carousel = document.getElementById("carousel");
  const items = document.querySelectorAll(".carousel-item");
  const detailSections = document.querySelectorAll(".details");

  // Fade out the logo and show main content after 2 seconds
  setTimeout(() => {
    overlay.style.display = "none";
    main.classList.remove("hidden");
  }, 4000); // includes fade duration

  // Activate first category by default
  items[0].classList.add("active");
  document.getElementById(items[0].dataset.category).classList.add("active");

  // Carousel drag-to-scroll logic
  let isDown = false;
  let startX, scrollLeft;

  carousel.addEventListener("mousedown", e => {
    isDown = true;
    carousel.classList.add("dragging");
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener("mouseleave", () => {
    isDown = false;
    carousel.classList.remove("dragging");
  });

  carousel.addEventListener("mouseup", () => {
    isDown = false;
    carousel.classList.remove("dragging");
  });

  carousel.addEventListener("mousemove", e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
  });

  // Click to activate category
  items.forEach(item => {
    item.addEventListener("click", () => {
      items.forEach(i => i.classList.remove("active"));
      detailSections.forEach(sec => sec.classList.remove("active"));
      item.classList.add("active");
      document.getElementById(item.dataset.category).classList.add("active");
    });
  });
});
    
