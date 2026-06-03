export default async function decorate(block) {
  const rows = [...block.children];

  // Row 0: tagline row
  // Row 1: image + form content row — restructure if needed
  if (rows.length >= 2) {
    const contentRow = rows[1];
    const cells = [...contentRow.children];

    // Ensure image cell and text cell are properly structured
    if (cells.length >= 2) {
      const imageCell = cells[0];
      const textCell = cells[1];

      // Add semantic classes for styling hooks
      imageCell.classList.add('contact-form-image');
      textCell.classList.add('contact-form-content');
    }
  }
}
