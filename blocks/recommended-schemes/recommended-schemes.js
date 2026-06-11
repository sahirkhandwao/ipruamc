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

    // Add semantic classes and decorate elements
    const cells = [...card.children];
    if (cells[0]) cells[0].classList.add('rs-risk-cell');
    if (cells[1]) cells[1].classList.add('rs-details-cell');
    if (cells[2]) cells[2].classList.add('rs-tags-cell');

    const cagrCell = cells[3];
    if (cagrCell) {
      cagrCell.classList.add('rs-cagr-cell');

      // CAGR Label with info icon
      const labelP = cagrCell.querySelector('p');
      if (labelP) {
        labelP.classList.add('rs-cagr-label');
        const infoIcon = document.createElement('img');
        infoIcon.className = 'rs-info-icon';
        infoIcon.src = `${window.hlx.codeBasePath}/assets/images/info.svg`;
        infoIcon.alt = 'info';
        labelP.appendChild(infoIcon);
      }

      // CAGR value with green upward trend arrow
      const valueH4 = cagrCell.querySelector('h4');
      if (valueH4) {
        valueH4.classList.add('rs-cagr-value');
        const arrowIcon = document.createElement('img');
        arrowIcon.className = 'rs-arrow-icon';
        arrowIcon.src = `${window.hlx.codeBasePath}/assets/images/arrowUp.svg`;
        arrowIcon.alt = 'trend-up';
        valueH4.appendChild(arrowIcon);
      }
    }

    if (cells[4]) cells[4].classList.add('rs-cta-cell');

    grid.appendChild(card);
  });

  // Insert grid after header
  header.after(grid);
}
