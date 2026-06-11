const iconMapping = {
  'Equity Funds': 'equity-icon.svg',
  'Hybrid Funds': 'hybrid-icon.svg',
  'Debt Funds': 'debt-icon.svg',
  'Solution Oriented Funds': 'solution-icon.svg',
  'Fund of Funds': 'fof-icon.svg',
  'Index Funds': 'index-icon.svg',
};

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
      const text = p.textContent.trim();
      const iconName = iconMapping[text];
      if (iconName) {
        const img = document.createElement('img');
        img.src = `${window.hlx.codeBasePath}/assets/images/${iconName}`;
        img.alt = text;
        p.prepend(img);
      }
    });
  }
}
