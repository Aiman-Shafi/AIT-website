(() => {
  const section = document.querySelector('#project-map');
  const select = document.querySelector('#project-select');
  if (!section || !select) return;
  const picker = document.createElement('div');
  picker.className = 'project-picker';
  const display = document.createElement('div');
  display.className = 'project-picker-display';
  display.setAttribute('aria-hidden', 'true');
  const name = document.createElement('strong');
  const city = document.createElement('small');
  display.append(name, city);
  const chevron = document.createElement('i');
  chevron.className = 'project-picker-chevron';
  chevron.setAttribute('aria-hidden', 'true');
  select.before(picker);
  picker.append(display, chevron, select);
  function syncPicker() {
    const parts = select.selectedOptions[0].textContent.split(' — ');
    name.textContent = parts[0];
    city.textContent = parts[1] || '';
  }
  syncPicker();
  select.addEventListener('change', syncPicker);
  // Existing marker and paging controls update the selected project card.
  new MutationObserver(syncPicker).observe(document.querySelector('#map-content'), {childList:true});
  section.querySelectorAll('[data-map]').forEach((pin, i) => {
    pin.dataset.city = select.options[Number(pin.dataset.map)].textContent.split(' — ')[1];
    pin.style.setProperty('--pin-delay', `${.35 + i * .065}s`);
  });
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  if ('IntersectionObserver' in window && !reduced.matches) {
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        section.classList.add('map-intro');
        observer.disconnect();
      }
    }, {threshold:.25});
    observer.observe(section.querySelector('.map-canvas'));
    reduced.addEventListener('change', () => {
      if (reduced.matches) { observer.disconnect(); section.classList.remove('map-intro'); }
    });
  }
})();
