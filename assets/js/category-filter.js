(() => {
  const buttons = Array.from(document.querySelectorAll('[data-category-filter]'));
  const cards = Array.from(document.querySelectorAll('[data-post-categories]'));
  const groups = Array.from(document.querySelectorAll('.archive-group'));
  const result = document.querySelector('[data-filter-result]');
  const emptyState = document.querySelector('[data-filter-empty]');

  if (!buttons.length || !cards.length) return;

  const applyFilter = (category, updateAddress = true) => {
    const activeButton = buttons.find((button) => button.dataset.categoryFilter === category);
    if (!activeButton) return;

    buttons.forEach((button) => {
      const isActive = button === activeButton;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    let visibleCount = 0;
    cards.forEach((card) => {
      const categories = (card.dataset.postCategories || '').split('|').map((item) => item.trim());
      const isVisible = category === 'all' || categories.includes(category);
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    groups.forEach((group) => {
      const visibleCards = Array.from(group.querySelectorAll('[data-post-categories]:not([hidden])'));
      group.hidden = visibleCards.length === 0;
      const yearCount = group.querySelector('[data-year-count]');
      if (yearCount) yearCount.textContent = `${visibleCards.length} 篇记录`;
    });

    if (result) {
      result.textContent = category === 'all'
        ? `显示全部 ${visibleCount} 篇文章`
        : `“${category}”分类下共 ${visibleCount} 篇文章`;
    }
    if (emptyState) emptyState.hidden = visibleCount > 0;

    if (updateAddress) {
      const url = new URL(window.location.href);
      if (category === 'all') url.searchParams.delete('category');
      else url.searchParams.set('category', category);
      window.history.replaceState({}, '', url);
    }
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => applyFilter(button.dataset.categoryFilter));
  });

  const requestedCategory = new URLSearchParams(window.location.search).get('category');
  applyFilter(requestedCategory || 'all', false);
})();
