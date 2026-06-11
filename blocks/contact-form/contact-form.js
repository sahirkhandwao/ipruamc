export default async function decorate(block) {
  const rows = [...block.children];

  // Row 0: tagline row
  if (rows[0]) {
    rows[0].classList.add('contact-form-tagline');
  }
  // Row 1: image + form content row
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

      // Find the ul and CTA button paragraph
      const ul = textCell.querySelector('ul');
      const ctaLink = textCell.querySelector('a[href="#ask-expert"]');
      const ctaPara = ctaLink ? ctaLink.closest('p') : null;

      if (ul) {
        // Create interactive form
        const form = document.createElement('form');
        form.className = 'cf-expert-form';
        form.noValidate = true;

        // Name group
        const nameGroup = document.createElement('div');
        nameGroup.className = 'cf-form-group';
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.placeholder = 'Your name';
        nameInput.name = 'name';
        nameInput.className = 'cf-input';
        nameInput.required = true;
        nameGroup.appendChild(nameInput);
        form.appendChild(nameGroup);

        // Mobile group
        const mobileGroup = document.createElement('div');
        mobileGroup.className = 'cf-form-group cf-mobile-group';

        const ccSelect = document.createElement('select');
        ccSelect.className = 'cf-select cf-country-code';
        ccSelect.name = 'countryCode';
        ['+91', '+1', '+44', '+971', '+65'].forEach((code) => {
          const opt = document.createElement('option');
          opt.value = code;
          opt.textContent = code;
          ccSelect.appendChild(opt);
        });
        mobileGroup.appendChild(ccSelect);

        const mobileInput = document.createElement('input');
        mobileInput.type = 'tel';
        mobileInput.placeholder = 'Mobile Number';
        mobileInput.name = 'mobile';
        mobileInput.maxLength = 10;
        mobileInput.className = 'cf-input cf-mobile-input';
        mobileInput.required = true;
        // Limit to numbers only
        mobileInput.addEventListener('input', (e) => {
          e.target.value = e.target.value.replace(/\D/g, '');
        });
        mobileGroup.appendChild(mobileInput);
        form.appendChild(mobileGroup);

        // City group
        const cityGroup = document.createElement('div');
        cityGroup.className = 'cf-form-group';
        const cityInput = document.createElement('input');
        cityInput.type = 'text';
        cityInput.placeholder = 'City, State';
        cityInput.name = 'city';
        cityInput.className = 'cf-input';
        cityInput.required = true;
        cityGroup.appendChild(cityInput);
        form.appendChild(cityGroup);

        // Submit Button
        const submitBtn = document.createElement('button');
        submitBtn.type = 'submit';
        submitBtn.className = 'cf-submit-btn';
        submitBtn.textContent = 'ASK EXPERT';
        form.appendChild(submitBtn);

        // Error message div
        const errorDiv = document.createElement('div');
        errorDiv.className = 'cf-error-msg';
        form.appendChild(errorDiv);

        // Success state message
        const successDiv = document.createElement('div');
        successDiv.className = 'cf-success-msg';
        successDiv.style.display = 'none';
        successDiv.innerHTML = '<h3>Thank you!</h3><p>Our experts will call you back shortly.</p>';

        form.addEventListener('submit', (e) => {
          e.preventDefault();
          errorDiv.textContent = '';

          const nameVal = nameInput.value.trim();
          const mobileVal = mobileInput.value.trim();
          const cityVal = cityInput.value.trim();

          if (!nameVal) {
            errorDiv.textContent = 'Please enter your name.';
            nameInput.focus();
            return;
          }
          if (mobileVal.length < 10) {
            errorDiv.textContent = 'Please enter a valid 10-digit mobile number.';
            mobileInput.focus();
            return;
          }
          if (!cityVal) {
            errorDiv.textContent = 'Please enter your City and State.';
            cityInput.focus();
            return;
          }

          // Show success state
          form.style.display = 'none';
          successDiv.style.display = 'block';
        });

        // Insert new form and success message, and clean up static items
        ul.after(form);
        form.after(successDiv);
        ul.remove();

        if (ctaPara) {
          ctaPara.remove();
        } else if (ctaLink) {
          ctaLink.remove();
        }
      }
    }
  }
}
