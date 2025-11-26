// Modal logic for resume content cards
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('resume-modal');
  if (!modal) return;

  const backdrop = modal.querySelector('.modal-backdrop');
  const closeBtn = modal.querySelector('.modal-close');
  const body = modal.querySelector('#modal-body');

  const cards = document.querySelectorAll('.content-cards > div');

  cards.forEach(card => {
    card.style.cursor = 'pointer';
    if (!card.hasAttribute('tabindex')) card.setAttribute('tabindex', '0');

    card.addEventListener('click', () => openModal(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card);
      }
    });
  });

  function openModal(card) {
    const date = card.querySelector('h5')?.outerHTML ?? '';
    const title = card.querySelector('h4')?.outerHTML ?? '';
    const company = card.querySelector('p')?.outerHTML ?? '';

    // Determine which experience this card represents
    let experienceKey = null;

    switch (true) {
      case card.classList.contains('team-lead'):
        experienceKey = 'teamLead';
        break;
      case card.classList.contains('wizard-intern'):
        experienceKey = 'wizardIntern';
        break;
      case card.classList.contains('altair-intern'):
        experienceKey = 'altairIntern';
        break;
      case card.classList.contains('pixel8-intern'):
        experienceKey = 'pixel8Intern';
        break;
      default:
        experienceKey = null;
    }

    // Build dynamic UL from experienceDetails
    let detailsHTML = '';
    if (experienceKey && experienceDetails[experienceKey]) {
      const items = experienceDetails[experienceKey]
        .map(detail => `<li>${detail}</li></br>`)
        .join('');

      detailsHTML = `<ul>${items}</ul>`;
    }

    body.innerHTML = `
      <div class="modal-card">
        ${date}
        ${title}
        ${company}
        ${detailsHTML}
      </div>
    `;

    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    closeBtn.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  backdrop.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});
