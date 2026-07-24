// Tiny theme toggle — respects system preference, remembers manual choice.
(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem("tb-theme"); } catch (e) {}
  if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);

  function current() {
    // Dark is the site default; only "light" is ever set explicitly.
    return root.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-theme-toggle]");
    if (!btn) return;
    var next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("tb-theme", next); } catch (e) {}
  });
})();
