/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // Clear block content
  block.textContent = '';

  const headerContainer = document.createElement('div');
  headerContainer.className = 'header-nav-wrapper';

  // Define layout HTML
  headerContainer.innerHTML = `
    <div class="header-top-bar">
      <div class="callout-text">
        First time investment: Give a missed call on <a href="tel:8980017232">8980017232</a>
      </div>
    </div>
    <div class="nav-container">
      <div class="nav-brand">
        <a href="/">
          <img src="/assets/images/logo.png" alt="ICICI Prudential Mutual Fund" class="brand-logo">
        </a>
      </div>
      
      <ul class="nav-menu">
        <li class="nav-item has-dropdown" data-menu="funds">
          <a href="#" class="nav-link">Funds <span class="chevron-arrow"></span></a>
          <div class="mega-menu">
            <div class="mega-menu-content">
            <img src="https://www.icicipruamc.com/blob/banner/homepage/Resources.jpg" class"menu-left-image">
              <div class="mega-menu-columns-only">
                <div class="mega-menu-column">
                  <h3>Equity Funds</h3>
                  <ul>
                    <li><a href="/mutual-fund/equity-funds">Large Cap Funds</a></li>
                    <li><a href="/mutual-fund/equity-funds">Mid Cap Funds</a></li>
                    <li><a href="/mutual-fund/equity-funds">Small Cap Funds</a></li>
                    <li><a href="/mutual-fund/equity-funds">Multi Cap Funds</a></li>
                  </ul>
                  <a href="/mutual-fund" class="see-all-link">SEE ALL &rarr;</a>
                </div>
                <div class="mega-menu-column">
                  <h3>Debt Funds</h3>
                  <ul>
                    <li><a href="/mutual-fund/debt-funds">Liquid Funds</a></li>
                    <li><a href="/mutual-fund/debt-funds">Ultra Short Term Funds</a></li>
                    <li><a href="/mutual-fund/debt-funds">Corporate Bond Funds</a></li>
                  </ul>
                  <a href="/mutual-fund" class="see-all-link">SEE ALL &rarr;</a>
                </div>
                <div class="mega-menu-column">
                  <h3>Hybrid & Other Funds</h3>
                  <ul>
                    <li><a href="/mutual-fund/hybrid-funds">Balanced Advantage Funds</a></li>
                    <li><a href="/mutual-fund/hybrid-funds">Multi Asset Allocation Funds</a></li>
                    <li><a href="/mutual-fund/index-funds">Index Funds</a></li>
                  </ul>
                  <a href="/mutual-fund" class="see-all-link">SEE ALL &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </li>
        
        <li class="nav-item has-dropdown" data-menu="resources">
          <a href="#" class="nav-link">Resources <span class="chevron-arrow"></span></a>
          <div class="mega-menu">
            <div class="mega-menu-content">
              <!-- Left Banner Column -->
              <img src="https://www.icicipruamc.com/blob/banner/homepage/Resources.jpg" class"menu-left-image">
              <!-- <div class="mega-menu-banner">
                <div class="promo-card">
                  <span class="promo-badge">An Investor Education and Awareness Initiative</span>
                  <h2>Get the advantage of a 3-in-1 Fund</h2>
                  <div class="promo-circles">
                    <div class="promo-circle debt"><span>DEBT</span></div>
                    <div class="promo-circle equity"><span>EQUITY</span></div>
                    <div class="promo-circle gold"><span>GOLD*</span></div>
                  </div>
                  <div class="promo-title-tag">MULTI ASSET ALLOCATION FUNDS</div>
                  <p class="promo-fineprint">
                    *Multi Asset Allocation Funds may invest in Gold or such other asset classes as maybe decided by the respective Asset Management companies and as maybe specified in the respective Scheme Information Document of the Schemes.
                  </p>
                  <div class="promo-footer">To know more, Visit: www.icicipruamc.com</div>
                </div>
              </div> -->
              
              <!-- Right Columns -->
              <div class="mega-menu-columns">
                <div class="mega-menu-column">
                  <h3>Market Outlook & More</h3>
                  <ul>
                    <li><a href="/knowledge-center/market-outlook">Market Outlook</a></li>
                    <li><a href="/knowledge-center/equity-fi-updates">Equity FI Updates</a></li>
                    <li><a href="/knowledge-center/valuation-indices">Valuation Indices</a></li>
                    <li><a href="/knowledge-center/valuations-perspective">Valuations Perspective</a></li>
                  </ul>
                  <a href="/knowledge-center" class="see-all-link">SEE ALL &rarr;</a>
                </div>
                
                <div class="mega-menu-column">
                  <h3>Factsheets & Guidebooks</h3>
                  <ul>
                    <li><a href="/knowledge-center/factsheets">Factsheets</a></li>
                    <li><a href="/knowledge-center/guidebooks">Guidebooks</a></li>
                    <li><a href="/knowledge-center/product-presentation">Product Presentation</a></li>
                    <li><a href="/knowledge-center/product-review-notes">Product Review Notes</a></li>
                  </ul>
                  <a href="/knowledge-center" class="see-all-link">SEE ALL &rarr;</a>
                </div>
                
                <div class="mega-menu-column">
                  <h3>Media Library</h3>
                  <ul>
                    <li><a href="/knowledge-center/mutual-fund-academy">Mutual Fund Academy</a></li>
                    <li><a href="/knowledge-center/fund-explainers">Fund Explainers</a></li>
                    <li><a href="/knowledge-center/articles">Articles</a></li>
                  </ul>
                  <a href="/knowledge-center" class="see-all-link">SEE ALL &rarr;</a>
                </div>
                
                <div class="mega-menu-column">
                  <h3>Related Links</h3>
                  <ul>
                    <li><a href="/knowledge-center/nav-idcw">NAV & IDCW</a></li>
                    <li><a href="/knowledge-center/explore-nfos">Explore NFOs</a></li>
                    <li><a href="/knowledge-center/downloads">Downloads</a></li>
                  </ul>
                  <a href="/knowledge-center" class="see-all-link">SEE ALL &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </li>
        
        <li class="nav-item has-dropdown" data-menu="services">
          <a href="#" class="nav-link">Services <span class="chevron-arrow"></span></a>
          <div class="mega-menu">
            <div class="mega-menu-content">
              <div class="mega-menu-columns-only">
                <div class="mega-menu-column">
                  <h3>Transaction Services</h3>
                  <ul>
                    <li><a href="/investor-services/transact-online">Transact Online</a></li>
                    <li><a href="/investor-services/start-sip">Start a SIP</a></li>
                    <li><a href="/investor-services/invest-lumpsum">Invest Lumpsum</a></li>
                  </ul>
                  <a href="/investor-services" class="see-all-link">SEE ALL &rarr;</a>
                </div>
                <div class="mega-menu-column">
                  <h3>Statement Services</h3>
                  <ul>
                    <li><a href="/investor-services/account-statement">Account Statement</a></li>
                    <li><a href="/investor-services/capital-gains-statement">Capital Gains Statement</a></li>
                    <li><a href="/investor-services/transaction-trigger">Transaction Trigger</a></li>
                  </ul>
                  <a href="/investor-services" class="see-all-link">SEE ALL &rarr;</a>
                </div>
                <div class="mega-menu-column">
                  <h3>Account Maintenance</h3>
                  <ul>
                    <li><a href="/investor-services/update-contact-details">Update Contact Details</a></li>
                    <li><a href="/investor-services/update-nominees">Update Nominees</a></li>
                    <li><a href="/investor-services/faqs">FAQs</a></li>
                  </ul>
                  <a href="/investor-services" class="see-all-link">SEE ALL &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </li>
        
        <li class="nav-item" data-menu="shareholders">
          <a href="/investor-relations" class="nav-link">Shareholders' Centre</a>
        </li>
      </ul>
      
      <div class="nav-utilities">
        <button class="utility-search-ai" aria-label="Search with AI">
          <img src="/assets/icons/ai-icon.svg" class="ai-icon">
        </button>
        
        <div class="utility-investor-dropdown">
          <button class="btn-investor" aria-haspopup="true" aria-expanded="false">
            <svg class="icon-investor" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="5" r="3.25" stroke="#133359" stroke-width="1.5"/>
              <path d="M2 13.5C2 10.5 4.5 9.5 8 9.5C11.5 9.5 14 10.5 14 13.5" stroke="#133359" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <span>INVESTOR</span>
            <span class="chevron-arrow"></span>
          </button>
          <ul class="investor-dropdown-menu">
            <li><p>Sign In as</p></li>
            <li><a href="https://www.icicipruamc.com/sign-in">INVESTOR</a></li>
            <li><a href="https://www.icicipruamc.com/sign-in">DISTRIBUTOR</a></li>
            <li><a href="https://www.icicipruamc.com/sign-in">CORPORATE</a></li>
          </ul>
        </div>
        
        <a href="https://www.icicipruamc.com/sign-in" class="btn-signin">SIGN IN</a>
        
        <button class="nav-drawer-toggle" aria-label="Toggle Menu">
          <svg class="icon-hamburger" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="line-1" d="M3 6H21" stroke="#133359" stroke-width="2" stroke-linecap="round"/>
            <path class="line-2" d="M3 12H21" stroke="#133359" stroke-width="2" stroke-linecap="round"/>
            <path class="line-3" d="M3 18H21" stroke="#133359" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>
    
    <div class="side-drawer" aria-hidden="true">
      <div class="drawer-header">
        <img src="/assets/images/logo.png" alt="ICICI Prudential Mutual Fund" class="drawer-logo">
        <button class="drawer-close" aria-label="Close Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="#133359" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 6L18 18" stroke="#133359" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div class="drawer-body">
        <ul class="drawer-menu">
          <li class="drawer-item">
            <a href='https://www.icicipruamc.com/mutual-fund/nav-&-idcw' class="accordion-trigger">NAV & IDCW <span class="chevron-arrow"></span></a>
          </li>
          <li class="drawer-item">
            <a href='https://www.icicipruamc.com/investor-services?type=STATEMENTS' class="accordion-trigger">Statements <span class="chevron-arrow"></span></a>
          </li>
          <li class="drawer-item">
            <a href='https://www.icicipruamc.com/help-center' class="accordion-trigger">Support <span class="chevron-arrow"></span></a>
          </li>
        </ul>
        <div class="drawer-footer">
          <div class="drawer-actions">
            <a href="#" class="btn-signin">FAQ</a>
            <a href="#" class="btn-signin">REACH US</a>
          </div>
        </div>
      </div>
    </div>
    <div class="drawer-overlay" aria-hidden="true"></div>
  `;

  block.append(headerContainer);

  // JavaScript Interactions & Events
  const drawer = headerContainer.querySelector('.side-drawer');
  const overlay = headerContainer.querySelector('.drawer-overlay');
  const drawerToggle = headerContainer.querySelector('.nav-drawer-toggle');
  const drawerClose = headerContainer.querySelector('.drawer-close');

  const openDrawer = () => {
    drawer.setAttribute('aria-hidden', 'false');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
  };

  const closeDrawer = () => {
    drawer.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
  };

  drawerToggle.addEventListener('click', openDrawer);
  drawerClose.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  // Accordion Panels inside Mobile Drawer
  // const accordionTriggers = headerContainer.querySelectorAll('.accordion-trigger');
  // accordionTriggers.forEach((trigger) => {
  //   trigger.addEventListener('click', () => {
  //     const panel = trigger.nextElementSibling;
  //     const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

  //     // Toggle current panel
  //     trigger.setAttribute('aria-expanded', !isExpanded);
  //     if (panel) {
  //       if (!isExpanded) {
  //         panel.style.maxHeight = `${panel.scrollHeight}px`;
  //       } else {
  //         panel.style.maxHeight = null;
  //       }
  //     }
  //   });
  // });

  // Investor Dropdown Actions (Desktop/Mobile)
  const investorBtn = headerContainer.querySelector('.btn-investor');
  const investorDropdown = headerContainer.querySelector('.utility-investor-dropdown');

  investorBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = investorBtn.getAttribute('aria-expanded') === 'true';
    investorBtn.setAttribute('aria-expanded', !isExpanded);
    investorDropdown.classList.toggle('is-open');
  });

  document.addEventListener('click', (e) => {
    if (!investorDropdown.contains(e.target)) {
      investorBtn.setAttribute('aria-expanded', 'false');
      investorDropdown.classList.remove('is-open');
    }
  });

  // Support Keyboard Navigation & ARIA attributes on primary menu hovers
  const navItems = headerContainer.querySelectorAll('.nav-menu .nav-item.has-dropdown');
  navItems.forEach((item) => {
    const link = item.querySelector('.nav-link');
    item.addEventListener('mouseenter', () => {
      link.setAttribute('aria-expanded', 'true');
    });
    item.addEventListener('mouseleave', () => {
      link.setAttribute('aria-expanded', 'false');
    });
  });
}
