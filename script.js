// Select carousel items and buttons
const items = document.querySelectorAll('.carousel-item');
const leftBtn = document.querySelector('.carousel-btn.left');
const rightBtn = document.querySelector('.carousel-btn.right');
const contentArea = document.getElementById('service-content');

// Track current carousel index
let currentIndex = 0;

// Define content for each service
const services = {
  drywall: `
    <h2>Drywall & Painting</h2>
    <p>We handle all drywall patching, painting, and texture matching with precision. Whether it's a full room repaint or small hole repair, we do it right the first time.</p>
  `,
  yard: `
    <h2>Yard Cleanup</h2>
    <p>We offer junk removal, weeding, and debris cleanup. Perfect for getting your yard back in shape after storms or neglect. Affordable pricing based on job & location.</p>
  `,
  fence: `
    <h2>Fence Repair</h2>
    <p>From sagging gates to broken slats, we repair wood, chain link, and vinyl fencing. Fast, clean, and affordable repairs that last.</p>
  `,
  snake: `
    <h2>Snake Barriers</h2>
    <p>Keep your yard safe with our desert-tested snake barrier installations. Ideal for homes in high-risk zones. Humane, effective, and built to withstand the elements.</p>
  `
};

// Update carousel view and load corresponding service content
function updateCarousel(newIndex) {
  items[currentIndex].classList.remove('active'); // remove highlight from current
  currentIndex = (newIndex + items.length) % items.length; // ensure wraparound
  items[currentIndex].classList.add('active'); // highlight new
  const serviceKey = items[currentIndex].
