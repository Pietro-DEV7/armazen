
document.addEventListener("DOMContentLoaded", () => {
  initializeMobileMenu();
  initializeFooterYear();
  initializeMenuFilters();
});

function initializeMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav-links");

  if (!toggle || !navigation) return;

  const setMenuState = (isOpen) => {
    navigation.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu" : "Abrir menu"
    );
  };

  toggle.setAttribute("aria-controls", "primary-navigation");
  navigation.id = "primary-navigation";
  setMenuState(false);

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") !== "true";
    setMenuState(isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });
}

function initializeFooterYear() {
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

function initializeMenuFilters() {
  const tabs = document.querySelectorAll(".menu-tab");
  const items = document.querySelectorAll(".menu-item");

  if (!tabs.length || !items.length) return;

  const filterMenu = (selectedTab) => {
    const category = selectedTab.dataset.menu;

    tabs.forEach((tab) => {
      const isActive = tab === selectedTab;

      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-pressed", String(isActive));
    });

    items.forEach((item) => {
      item.hidden =
        category !== "todos" &&
        item.dataset.category !== category;
    });
  };

  tabs.forEach((tab) => {
    tab.setAttribute("aria-pressed", "false");
    tab.addEventListener("click", () => filterMenu(tab));
  });

  const initialTab =
    document.querySelector(".menu-tab.active") || tabs[0];

  filterMenu(initialTab);
}
