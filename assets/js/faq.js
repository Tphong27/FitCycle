// Simple FAQ UI: tabs, accordion, search suggestions
document.addEventListener("DOMContentLoaded", () => {
  const tabs = Array.from(document.querySelectorAll(".tab"));
  const faqItems = Array.from(document.querySelectorAll(".faq-item"));
  const search = document.getElementById("faq-search");
  const suggBox = document.getElementById("faq-suggestions");

  // build suggestions from questions
  const questions = faqItems.map((item) => {
    const q = item.querySelector(".faq-q").textContent.trim();
    return { text: q, el: item };
  });

  // Tabs behavior
  tabs.forEach((t) => {
    t.addEventListener("click", () => {
      tabs.forEach((x) => x.classList.remove("active"));
      t.classList.add("active");
      const cat = t.getAttribute("data-cat");
      filterFAQs(cat, search.value.trim());
    });
  });

  // Accordion behavior (event delegation)
  document.getElementById("faq-list").addEventListener("click", (e) => {
    const btn = e.target.closest(".faq-q");
    if (!btn) return;
    const panel = btn.nextElementSibling;
    const expanded = btn.getAttribute("aria-expanded") === "true";
    // collapse all for single-open behavior
    document.querySelectorAll(".faq-q").forEach((b) => {
      b.setAttribute("aria-expanded", "false");
      if (b.nextElementSibling) b.nextElementSibling.hidden = true;
    });
    // toggle requested
    if (!expanded) {
      btn.setAttribute("aria-expanded", "true");
      if (panel) panel.hidden = false;
    }
  });

  // Search suggestions & filtering
  search.addEventListener("input", () => {
    const term = search.value.trim().toLowerCase();
    if (!term) {
      suggBox.style.display = "none";
      filterFAQs(getActiveCat(), "");
      return;
    }
    const matches = questions.filter((q) =>
      q.text.toLowerCase().includes(term)
    );
    // render suggestions
    suggBox.innerHTML = matches
      .slice(0, 6)
      .map((m) => `<li role="option">${escapeHtml(m.text)}</li>`)
      .join("");
    suggBox.style.display = matches.length ? "block" : "none";
    filterFAQs(getActiveCat(), term);
  });

  // suggestion click
  suggBox.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    search.value = li.textContent;
    suggBox.style.display = "none";
    filterFAQs(getActiveCat(), search.value.trim().toLowerCase());
    // open first matching faq
    const match = faqItems.find((i) =>
      i
        .querySelector(".faq-q")
        .textContent.toLowerCase()
        .includes(search.value.trim().toLowerCase())
    );
    if (match) {
      const btn = match.querySelector(".faq-q");
      btn.click();
      btn.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });

  // click outside hide suggestions
  document.addEventListener("click", (ev) => {
    if (!ev.target.closest(".faq-search")) suggBox.style.display = "none";
  });

  // helpers
  function getActiveCat() {
    const active = document.querySelector(".tab.active");
    return active ? active.getAttribute("data-cat") : "all";
  }

  function filterFAQs(category, term) {
    const lowTerm = (term || "").toLowerCase();
    faqItems.forEach((item) => {
      const itemCat = item.getAttribute("data-cat") || "all";
      const qText = item.querySelector(".faq-q").textContent.toLowerCase();
      const matchesCat = category === "all" || itemCat === category;
      const matchesTerm = !lowTerm || qText.includes(lowTerm);
      item.style.display = matchesCat && matchesTerm ? "" : "none";
      // collapse hidden items
      if (item.style.display === "none") {
        const b = item.querySelector(".faq-q");
        if (b) {
          b.setAttribute("aria-expanded", "false");
          if (b.nextElementSibling) b.nextElementSibling.hidden = true;
        }
      }
    });
  }

  // small escape helper
  function escapeHtml(s) {
    return s.replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        }[c])
    );
  }
});
