document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (toggle && nav) {
    nav.id = nav.id || "primary-navigation";
    toggle.setAttribute("aria-controls", nav.id);
    toggle.setAttribute("aria-expanded", "false");

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");

      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
      );
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menu");
      });
    });
  }

  // Ano automático no rodapé
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Filtros do cardápio
  const menuTabs = document.querySelectorAll(".menu-tab");
  const menuItems = document.querySelectorAll(".menu-item");

  if (menuTabs.length > 0 && menuItems.length > 0) {
    menuTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const category = tab.dataset.menu;

        menuTabs.forEach((item) => {
          const active = item === tab;

          item.classList.toggle("active", active);
          item.setAttribute("aria-pressed", String(active));
        });

        menuItems.forEach((item) => {
          item.hidden =
            category !== "todos" &&
            item.dataset.category !== category;
        });
      });
    });

    // Aplica a categoria inicial selecionada
    const initialMenuTab = document.querySelector(".menu-tab.active");

    if (initialMenuTab) {
      const category = initialMenuTab.dataset.menu;

      menuItems.forEach((item) => {
        item.hidden =
          category !== "todos" &&
          item.dataset.category !== category;
      });

      menuTabs.forEach((tab) => {
        tab.setAttribute(
          "aria-pressed",
          String(tab === initialMenuTab)
        );
      });
    }
  }
});
