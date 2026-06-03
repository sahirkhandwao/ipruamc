export default async function decorate(block) {
  // Block has one row with two cells:
  // Cell 1: intro text + CTA
  // Cell 2: card labels as paragraphs
  const row = block.children[0];
  if (!row) return;

  const cells = [...row.children];
  const introCell = cells[0];
  const cardsCell = cells[1];

  if (introCell) {
    introCell.classList.add('explore-cards-intro');
  }

  if (cardsCell) {
    cardsCell.classList.add('explore-cards-grid');
    // Each <p> in the cards cell becomes a clickable card
    const paragraphs = [...cardsCell.querySelectorAll('p')];
    paragraphs.forEach((p) => {
      p.classList.add('explore-card');
    });
  }
}
