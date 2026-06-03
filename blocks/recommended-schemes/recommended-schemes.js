export default async function decorate(block) {
  const rows = [...block.children];

  // First row is the header (title + subtitle)
  // Last row is the explore-all link
  // Middle rows are fund cards — wrap in a grid container

  const header = rows[0];
  const footer = rows[rows.length - 1];
  const cards = rows.slice(1, rows.length - 1);

  header.classList.add('rs-header');
  footer.classList.add('rs-explore');

  // Create grid container for cards
  const grid = document.createElement('div');
  grid.classList.add('rs-cards-grid');

  cards.forEach((card) => {
    card.classList.add('rs-card');
    grid.appendChild(card);
  });

  // Insert grid after header
  header.after(grid);
}
