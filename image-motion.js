/* One-time image reveals; content stays visible without JavaScript. */
(() => {
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const frames = [...document.querySelectorAll('.project-card, .material-image, .featured-project, .portfolio-image, .photo-trigger, .related-card > div')];
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(({target, isIntersecting}) => {
      if (!isIntersecting) return;
      target.classList.remove('image-waiting');
      target.classList.add('image-revealed');
      observer.unobserve(target);
    });
  }, {threshold: .08});
  frames.forEach(frame => {
    frame.classList.add('image-frame');
    // Start below-the-fold imagery quietly; never delay initially visible imagery.
    if (!preference.matches && frame.getBoundingClientRect().top > innerHeight) {
      frame.classList.add('image-waiting');
      observer.observe(frame);
    }
    frame.addEventListener('focusin', () => {
      frame.classList.remove('image-waiting');
      observer.unobserve(frame);
    });
  });
  preference.addEventListener('change', () => {
    if (!preference.matches) return;
    observer.disconnect();
    frames.forEach(frame => frame.classList.remove('image-waiting', 'image-revealed'));
  });
})();
