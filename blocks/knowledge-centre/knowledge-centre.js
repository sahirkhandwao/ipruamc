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

    // Cell 0: image + play button overlay
    const imgCell = cells[0];
    const picture = imgCell?.querySelector('picture') || imgCell?.querySelector('img');
    if (picture) {
      const imgWrapper = document.createElement('div');
      imgWrapper.className = 'kc-card-img-wrapper';
      imgWrapper.appendChild(picture.cloneNode(true));

      const playBtn = document.createElement('div');
      playBtn.className = 'kc-play-btn';
      imgWrapper.appendChild(playBtn);

      card.appendChild(imgWrapper);
    }

    // Cell 1: title + duration + SHARE
    const infoCell = cells[1];
    if (infoCell) {
      const infoDiv = document.createElement('div');
      infoDiv.className = 'kc-card-info';

      const title = infoCell.querySelector('h3');
      if (title) {
        infoDiv.appendChild(title.cloneNode(true));
      }

      const durationP = infoCell.querySelector('p');
      const footerDiv = document.createElement('div');
      footerDiv.className = 'kc-card-footer';

      if (durationP) {
        const durationSpan = document.createElement('span');
        durationSpan.className = 'kc-card-duration';
        durationSpan.textContent = durationP.textContent;
        footerDiv.appendChild(durationSpan);
      }

      const shareBtn = document.createElement('button');
      shareBtn.className = 'kc-card-share';
      shareBtn.innerHTML = 'SHARE';
      shareBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(window.location.href);
        const originalText = shareBtn.innerHTML;
        shareBtn.innerHTML = 'COPIED!';
        setTimeout(() => {
          shareBtn.innerHTML = originalText;
        }, 2000);
      });
      footerDiv.appendChild(shareBtn);
      infoDiv.appendChild(footerDiv);

      card.appendChild(infoDiv);
    }

    cardsContainer.appendChild(card);
    row.remove();
  });

  // Insert cards container after tabs
  tabsDiv.after(cardsContainer);

  // Add pagination dots
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'kc-carousel-dots';

  const numCards = cardRows.length;
  for (let i = 0; i < numCards; i += 1) {
    const dot = document.createElement('span');
    dot.className = `kc-carousel-dot${i === 0 ? ' active' : ''}`;
    dot.addEventListener('click', () => {
      const cardEl = cardsContainer.children[i];
      if (cardEl) {
        cardsContainer.scrollTo({
          left: cardEl.offsetLeft - cardsContainer.offsetLeft,
          behavior: 'smooth',
        });
      }
    });
    dotsContainer.appendChild(dot);
  }

  cardsContainer.after(dotsContainer);

  // Sync scrolling with dots
  cardsContainer.addEventListener('scroll', () => {
    const { scrollLeft } = cardsContainer;
    const cardWidth = cardsContainer.children[0]?.offsetWidth || 340;
    const activeIndex = Math.round(scrollLeft / cardWidth);

    [...dotsContainer.children].forEach((dot, index) => {
      if (index === activeIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  });

  // Last row: explore all link
  const lastRow = rows[rows.length - 1];
  if (lastRow) {
    const footerDiv = document.createElement('div');
    footerDiv.className = 'kc-footer';
    footerDiv.innerHTML = lastRow.innerHTML;
    lastRow.replaceWith(footerDiv);
  }
}
