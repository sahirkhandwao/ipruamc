export default async function decorate(block) {
  // Each row has 2 cells: [icon image] [link text]
  // Restructure each row into a clickable card
  const rows = [...block.children];
  rows.forEach((row) => {
    const cells = [...row.children];
    const imgCell = cells[0];
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
      const img = imgCell ? imgCell.querySelector('img') : null;
      if (img) iconDiv.appendChild(img);
      wrapper.appendChild(iconDiv);

      // Move text into the link wrapper
      const labelDiv = document.createElement('div');
      labelDiv.className = 'quick-links-label';
      labelDiv.textContent = link.textContent;
      wrapper.appendChild(labelDiv);

      // Replace row contents
      row.textContent = '';
      row.appendChild(wrapper);
    }
  });
}
