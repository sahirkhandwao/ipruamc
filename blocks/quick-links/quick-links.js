const iconMapping = {
  'Investor Services': 'investor-services.svg',
  'Modify KYC': 'knowledge-center.svg',
  'Branch Locator': 'branch-locator.png',
  Calculators: 'calculator.png',
  Downloads: 'download.svg',
  'Our Funds': 'our-funds.svg',
  'Knowledge Center': 'knowledge-center.svg',
  'KYC Corner': 'KYC_Cornerr.svg',
  'ETF Funds': 'our-funds.svg',
};

export default async function decorate(block) {
  // Each row has 2 cells: [icon image] [link text]
  // Restructure each row into a clickable card
  const rows = [...block.children];
  rows.forEach((row) => {
    const cells = [...row.children];
    const textCell = cells[1];

    // Find the link in the text cell
    const link = textCell ? textCell.querySelector('a') : null;

    if (link) {
      // Wrap the whole row content in the link
      const wrapper = document.createElement('a');
      wrapper.href = link.href;
      wrapper.className = 'quick-links-card';
      if (link.target) wrapper.target = link.target;

      // Move icon into the link wrapper
      const iconDiv = document.createElement('div');
      iconDiv.className = 'quick-links-icon';

      const labelText = link.textContent.trim();
      const iconFile = iconMapping[labelText];
      const img = document.createElement('img');
      img.src = `${window.hlx.codeBasePath}/assets/images/${iconFile || 'download.svg'}`;
      img.alt = labelText;
      iconDiv.appendChild(img);
      wrapper.appendChild(iconDiv);

      // Move text into the link wrapper
      const labelDiv = document.createElement('div');
      labelDiv.className = 'quick-links-label';
      labelDiv.textContent = labelText;
      wrapper.appendChild(labelDiv);

      // Replace row contents
      row.textContent = '';
      row.appendChild(wrapper);
    }
  });
}
