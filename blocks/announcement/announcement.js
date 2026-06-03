export default async function decorate(block) {
  // The block has one row with three cells: coin image, text content, CTA button
  // Structure is already suitable for flex layout, minimal restructuring needed
  const row = block.querySelector(':scope > div');
  if (row) {
    row.setAttribute('role', 'banner');
  }
}
