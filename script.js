
document.querySelectorAll('.accordion-item').forEach((item) => {
  const button = item.querySelector('.accordion-trigger');
  const panel = item.querySelector('.accordion-panel');
  const icon = item.querySelector('.accordion-icon');

  button.addEventListener('click', () => {
    const isOpen = item.classList.contains('is-open');

    document.querySelectorAll('.accordion-item').forEach((other) => {
      other.classList.remove('is-open');
      other.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
      other.querySelector('.accordion-panel').style.maxHeight = null;
      other.querySelector('.accordion-icon').textContent = '+';
    });

    if (!isOpen) {
      item.classList.add('is-open');
      button.setAttribute('aria-expanded', 'true');
      panel.style.maxHeight = panel.scrollHeight + 'px';
      icon.textContent = '−';
    }
  });
});
