/* Common navbar for IPS Green Vision. */
(function () {
  "use strict";
  var file = decodeURIComponent(location.pathname.split("/").pop() || "").toLowerCase();
  var view = new URLSearchParams(location.search).get("view") || "home";
  var items = [
    { href: "About.html", label: "About", icon: "ℹ️", active: file === "about.html" },
    { href: "sdg-action.html", label: "SDGs", icon: "🌍", active: file === "sdg-action.html" && view === "home" },
    { href: "sdg-action.html?view=community", label: "Community", icon: "👥", active: file === "sdg-action.html" && view === "community" },
    { href: "sdg-action.html?view=targets", label: "Green Targets", icon: "🎯", active: file === "sdg-action.html" && view === "targets" },
    { href: "PlantHere.html", label: "Plant a Tree", icon: "🌳", active: file === "planthere.html" },
    { href: "City_AI_Pulse_V5_Rainfall.html", label: "City Pulse AI", icon: "🛰️", active: file === "city_ai_pulse_v5_rainfall.html" }
  ];
  var links = items.map(function (item) {
    return '<a class="sdg-nav__link' + (item.active ? ' is-active' : '') + '" href="' + item.href + '"' + (item.active ? ' aria-current="page"' : '') + '><span aria-hidden="true">' + item.icon + '</span><span>' + item.label + '</span></a>';
  }).join("");
  var markup = '<nav class="sdg-nav" aria-label="SDG navigation"><div class="sdg-nav__inner">' +
    '<a class="sdg-nav__brand" href="sdg-action.html"><img class="sdg-nav__school-logo" src="indirapuram-public-school-logo.png" alt="Indirapuram Public School logo"><span class="sdg-nav__brand-copy"><strong><span class="sdg-nav__brand-dark">IPS</span> <span class="sdg-nav__brand-green">Green Vision</span></strong><small>Indirapuram Public School</small></span></a>' +
    '<div class="sdg-nav__links" id="sdgNavLinks">' + links + '</div>' +
    '<button class="sdg-nav__toggle" id="sdgNavToggle" type="button" aria-label="Open navigation" aria-controls="sdgNavLinks" aria-expanded="false"><span></span><span></span><span></span></button>' +
    '</div></nav>';
  var css = `
    .sdg-nav{position:fixed;inset:0 0 auto 0;height:60px;z-index:99999;background:#fff;border-bottom:1px solid #d4e5d4;box-shadow:0 1px 3px rgba(15,31,15,.06);font-family:"DM Sans","Segoe UI",Arial,sans-serif}
    .sdg-nav,.sdg-nav *{box-sizing:border-box}.sdg-nav__inner{height:100%;width:min(1400px,calc(100% - 48px));margin:auto;display:flex;align-items:center;justify-content:space-between;gap:24px}
    .sdg-nav__brand{display:flex;align-items:center;gap:9px;text-decoration:none;white-space:nowrap;font-family:Outfit,"Segoe UI",Arial,sans-serif}.sdg-nav__school-logo{width:40px;height:40px;object-fit:contain;border-radius:50%;background:#fff}.sdg-nav__brand-copy{display:grid;line-height:1.05}.sdg-nav__brand-copy strong{font-size:17px;font-weight:800}.sdg-nav__brand-copy small{margin-top:4px;color:#6b826b;font-size:8px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.sdg-nav__brand-dark{color:#1a2e1a}.sdg-nav__brand-green{color:#16a34a}
    .sdg-nav__links{display:flex;align-items:center;justify-content:center;gap:2px}.sdg-nav__link{display:inline-flex;align-items:center;gap:6px;min-height:38px;padding:0 14px;border-radius:10px;color:#8ca88c;text-decoration:none;font-size:13px;font-weight:600;transition:background .18s ease,color .18s ease}.sdg-nav__link:hover{background:#f0fdf4;color:#15803d}.sdg-nav__link.is-active{background:#dcfce7;color:#16a34a}
    .sdg-nav__toggle{display:none;width:42px;height:42px;padding:10px;border:0;border-radius:10px;background:#dcfce7;cursor:pointer}.sdg-nav__toggle span{display:block;width:20px;height:2px;margin:4px auto;border-radius:2px;background:#15803d;transition:.18s ease}.sdg-nav__toggle.is-open span:nth-child(1){transform:translateY(6px) rotate(45deg)}.sdg-nav__toggle.is-open span:nth-child(2){opacity:0}.sdg-nav__toggle.is-open span:nth-child(3){transform:translateY(-6px) rotate(-45deg)}
    @media(max-width:850px){.sdg-nav__inner{width:calc(100% - 28px)}.sdg-nav__toggle{display:block}.sdg-nav__links{display:none;position:absolute;top:60px;left:0;right:0;padding:10px 14px 16px;flex-direction:column;align-items:stretch;background:#fff;border-bottom:1px solid #d4e5d4;box-shadow:0 12px 24px rgba(15,31,15,.1)}.sdg-nav__links.is-open{display:flex}.sdg-nav__link{min-height:44px}}
  `;
  var style = document.createElement("style"); style.textContent = css; document.head.appendChild(style);
  var target = document.getElementById("eco-navbar");
  if (target) target.innerHTML = markup; else document.body.insertAdjacentHTML("afterbegin", '<div id="eco-navbar">' + markup + '</div>');
  var toggle = document.getElementById("sdgNavToggle"), menu = document.getElementById("sdgNavLinks");
  if (toggle && menu) toggle.addEventListener("click", function () {
    var open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open)); toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    toggle.classList.toggle("is-open", open); menu.classList.toggle("is-open", open);
  });
})();
