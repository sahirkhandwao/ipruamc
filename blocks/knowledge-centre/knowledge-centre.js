export default async function decorate(block) {
  const rows = [...block.children];

  // Row 0: heading
  const headingRow = rows[0];
  const headingDiv = document.createElement('div');
  headingDiv.className = 'kc-header';
  headingDiv.innerHTML = headingRow.querySelector('h2')?.outerHTML || '';
  headingRow.replaceWith(headingDiv);

  // Row 1: tabs (Videos / Blogs)
  const tabsRow = rows[1];
  const tabLabels = [...tabsRow.querySelectorAll('p')].map((p) => p.textContent.trim());
  const tabsDiv = document.createElement('div');
  tabsDiv.className = 'kc-tabs';
  tabLabels.forEach((label, i) => {
    const tab = document.createElement('span');
    tab.className = `kc-tab${i === 0 ? ' active' : ''}`;
    tab.textContent = label;
    tabsDiv.appendChild(tab);
  });
  tabsRow.replaceWith(tabsDiv);

  // Card rows (rows 2..n-1), last row is explore link
  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'kc-cards';

  const cardRows = rows.slice(2, rows.length - 1);
  cardRows.forEach((row) => {
    const cells = [...row.children];
    const card = document.createElement('div');
    card.className = 'kc-card';

    // Cell 0: image
    const imgCell = cells[0];
    const picture = imgCell?.querySelector('picture') || imgCell?.querySelector('img');
    if (picture) {
      card.appendChild(picture.cloneNode(true));
    }

    // Cell 1: title + duration
    const infoCell = cells[1];
    if (infoCell) {
      const infoDiv = document.createElement('div');
      infoDiv.className = 'kc-card-info';
      infoDiv.innerHTML = infoCell.innerHTML;
      card.appendChild(infoDiv);
    }

    cardsContainer.appendChild(card);
    row.remove();
  });

  // Insert cards container after tabs
  tabsDiv.after(cardsContainer);

  // Last row: explore all link
  const lastRow = rows[rows.length - 1];
  if (lastRow) {
    const footerDiv = document.createElement('div');
    footerDiv.className = 'kc-footer';
    footerDiv.innerHTML = lastRow.innerHTML;
    lastRow.replaceWith(footerDiv);
  }
}
