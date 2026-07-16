export default async function decorate(block) {
  const rows = [...block.children];


  // Transform each row into a slide
  rows.forEach((row, index) => {
    const cells = [...row.children];
    row.className = 'hero-slide';
    if (index === 0) row.classList.add('active');

    // First cell = image, second cell = text
    if (cells[0]) {
      cells[0].className = 'hero-image';
    }
    if (cells[1]) {
      cells[1].className = 'hero-text';
    }
  });

  // Create dots navigation
  const dots = document.createElement('div');
  dots.className = 'hero-dots';
  rows.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `Slide ${index + 1}`);
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      block.querySelectorAll('.hero-slide').forEach((s) => s.classList.remove('active'));
      block.querySelectorAll('.hero-dots button').forEach((d) => d.classList.remove('active'));
      rows[index].classList.add('active');
      dot.classList.add('active');
    });
    dots.append(dot);
  });
  block.append(dots);

  // Auto-advance slides
  let current = 0;
  setInterval(() => {
    current = (current + 1) % rows.length;
    block.querySelectorAll('.hero-slide').forEach((s) => s.classList.remove('active'));
    block.querySelectorAll('.hero-dots button').forEach((d) => d.classList.remove('active'));
    rows[current].classList.add('active');
    dots.children[current].classList.add('active');
  }, 5000);
}
