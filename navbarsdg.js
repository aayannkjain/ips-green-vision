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
  // Browser-local profiles. Contact numbers are not verified by a server.
  var profileKey = 'ips-green-profiles-v1', sessionKey = 'ips-green-session-v1';
  function readProfiles() { try { return JSON.parse(localStorage.getItem(profileKey) || '[]'); } catch (_) { return []; } }
  function currentProfile() {
    try { var id = localStorage.getItem(sessionKey); return readProfiles().find(function (p) { return p.id === id; }) || null; } catch (_) { return null; }
  }
  window.ipsCurrentProfile = currentProfile;
  var accountStyle = document.createElement('style');
  accountStyle.textContent = '.ips-account{font:600 13px "Segoe UI",sans-serif;border:0;border-radius:9px;padding:9px 12px;background:#dcfce7;color:#15803d;cursor:pointer;white-space:nowrap}.ips-dialog{margin:auto;width:min(440px,calc(100% - 28px));max-height:90vh;overflow:auto;padding:26px;border:1px solid #d4e5d4;border-radius:18px;background:#fff;color:#1a2e1a;font:14px/1.6 "Segoe UI",sans-serif}.ips-dialog::backdrop{background:rgba(0,20,8,.55)}.ips-dialog h2{margin:0 0 8px}.ips-dialog label{display:block;margin:14px 0 5px;font-weight:600}.ips-dialog input{width:100%;padding:11px;border:1px solid #b8cdbb;border-radius:8px;background:#fff;color:#1a2e1a;font:inherit}.ips-dialog .ips-row{display:flex;gap:8px;flex-wrap:wrap;margin-top:18px}.ips-note{color:#55705a;font-size:12px}.ips-error{color:#b91c1c;margin-top:10px}.ips-close{float:right;border:0;background:transparent;font-size:23px;cursor:pointer;color:#55705a}@media(max-width:1100px){.sdg-nav__link{padding:0 7px;font-size:12px}}';
  document.head.appendChild(accountStyle);
  accountStyle.textContent += `
    .ips-auth-actions{display:flex;align-items:center;gap:8px;padding-left:14px;margin-left:8px;border-left:1px solid #e4eee5}
    .ips-account{font-family:"DM Sans","Segoe UI",sans-serif;border-radius:10px;padding:10px 17px;transition:background .18s,box-shadow .18s;background:#16a34a;color:#fff;line-height:1.3}
    .ips-account:hover{background:#15803d;box-shadow:0 3px 10px #16a34a20}
    .ips-auth-login{background:transparent;color:#46654c}.ips-auth-login:hover{background:#f0f8f1;box-shadow:none}
    .ips-dialog{width:min(460px,calc(100% - 32px));max-height:calc(100dvh - 40px);padding:0;border:1px solid #e2ece3;border-radius:24px;box-shadow:0 24px 90px #052e1638;font-family:"DM Sans","Segoe UI",sans-serif}
    .ips-dialog::backdrop{background:rgba(10,30,17,.48);backdrop-filter:blur(5px)}
    .ips-dialog-head{padding:30px 32px 23px;background:linear-gradient(135deg,#f0fdf4,#fff);border-bottom:1px solid #eaf2eb}
    .ips-dialog-logo{width:48px;height:48px;object-fit:contain;margin-bottom:15px}
    .ips-dialog h2{font-family:Outfit,"Segoe UI",sans-serif;font-size:28px;letter-spacing:-.6px;line-height:1.2;margin:5px 0 9px}
    .ips-kicker{font-size:10px;text-transform:uppercase;letter-spacing:1.8px;font-weight:800;color:#16a34a}
    .ips-intro{color:#68806c;font-size:13px;line-height:1.6;margin:0}
    .ips-dialog form{padding:8px 32px 27px}.ips-dialog label{font-size:12px;margin:17px 0 7px;color:#36563e}
    .ips-dialog input{padding:12px 14px;border:1px solid #dce7de;background:#f8fbf8;border-radius:10px;font-size:14px;outline:none;transition:border-color .18s,box-shadow .18s}
    .ips-dialog input:focus{background:#fff;border-color:#22c55e;box-shadow:0 0 0 3px #22c55e15}
    .ips-dialog .ips-row{flex-direction:column;gap:8px;margin-top:22px}.ips-dialog .ips-row>.ips-account{min-height:44px;width:100%}
    .ips-dialog .ips-switch{background:transparent;color:#15803d;font-size:12px;box-shadow:none}
    .ips-note{font-size:11px;color:#7a8e7e;line-height:1.6;margin:18px 0 0;text-align:center}
    .ips-close{position:absolute;right:18px;top:14px;float:none;width:32px;height:32px;border-radius:50%;font-size:22px;background:#fff;color:#728576;line-height:1}
    .ips-close:hover{background:#eaf6ed}.ips-error:empty{display:none}.ips-error{font-size:12px;background:#fff1f2;border-radius:8px;padding:9px 12px}
    @media(min-width:851px) and (max-width:1200px){.sdg-nav__inner{gap:10px;width:calc(100% - 24px)}.sdg-nav__link{padding:0 6px;font-size:11px}.ips-auth-actions{padding-left:8px;margin-left:2px}.ips-auth-actions .ips-account{padding:9px 11px;font-size:12px}}
    @media(max-width:850px){.ips-auth-actions{border-left:0;border-top:1px solid #e4eee5;padding:12px 0 0;margin:8px 0 0}.ips-auth-actions>.ips-account{flex:1}.ips-dialog-head{padding:25px 24px 20px}.ips-dialog form{padding:8px 24px 24px}}
  `;
  var accountActions = document.createElement('div'); accountActions.className = 'ips-auth-actions';
  menu.appendChild(accountActions);
  var account = document.createElement('button');
  account.type = 'button'; account.className = 'ips-account ips-auth-login';
  accountActions.appendChild(account);
  var signupButton = document.createElement('button'); signupButton.type = 'button'; signupButton.className = 'ips-account'; signupButton.textContent = 'Sign up';
  accountActions.appendChild(signupButton);
  var dialog = document.createElement('dialog'); dialog.className = 'ips-dialog';
  document.body.appendChild(dialog);
  function refreshAccount() {
    var profile = currentProfile();
    account.textContent = profile ? 'My profile' : 'Log in';
    account.classList.toggle('ips-auth-login', !profile);
    signupButton.hidden = !!profile;
  }
  function normalizeContact(value) { return value.replace(/\D/g, ''); }
  function showProfile() {
    var profile = currentProfile();
    if (!profile) { show('login'); return; }
    dialog.setAttribute('aria-labelledby', 'ips-profile-title');
    dialog.innerHTML = '<button class="ips-close" type="button" aria-label="Close">×</button><div class="ips-dialog-head"><img class="ips-dialog-logo" src="indirapuram-public-school-logo.png" alt="Indirapuram Public School"><div class="ips-kicker">IPS Green Vision</div><h2 id="ips-profile-title">Your profile</h2><p class="ips-intro">Your details for the Green Vision community.</p></div><div style="padding:24px 32px"><div class="ips-profile-avatar" style="width:60px;height:60px;border-radius:50%;display:grid;place-items:center;background:#dcfce7;color:#15803d;font-size:24px;font-weight:800;margin-bottom:20px"></div><dl style="margin:0;display:grid;gap:18px"><div><dt class="ips-kicker">Full name</dt><dd id="ips-profile-name" style="margin:4px 0 0;font-size:18px;font-weight:700;overflow-wrap:anywhere"></dd></div><div><dt class="ips-kicker">Contact number</dt><dd id="ips-profile-contact" style="margin:4px 0 0"></dd></div><div><dt class="ips-kicker">Organization / school</dt><dd id="ips-profile-org" style="margin:4px 0 0;overflow-wrap:anywhere"></dd></div></dl><div class="ips-row"><button class="ips-account ips-edit-profile" type="button">Edit profile</button><button class="ips-account ips-switch ips-logout" type="button">Log out</button></div><p class="ips-note">This profile is saved in this browser on this device.</p></div>';
    dialog.querySelector('.ips-profile-avatar').textContent = profile.name.trim().charAt(0).toUpperCase();
    dialog.querySelector('#ips-profile-name').textContent = profile.name;
    dialog.querySelector('#ips-profile-contact').textContent = profile.contact;
    dialog.querySelector('#ips-profile-org').textContent = profile.organization;
    dialog.querySelector('.ips-close').onclick = function () { dialog.close(); };
    dialog.querySelector('.ips-edit-profile').onclick = function () { show('profile'); };
    dialog.querySelector('.ips-logout').onclick = function () {
      try { localStorage.removeItem(sessionKey); refreshAccount(); dialog.close(); }
      catch (_) { dialog.querySelector('.ips-note').textContent = 'Could not log out. Please check browser storage permissions.'; }
    };
    if (!dialog.open) dialog.showModal();
  }
  function show(mode) {
    var profile = currentProfile();
    if (mode === 'profile' && !profile) mode = 'login';
    var editing = mode === 'profile', signup = mode === 'signup';
    dialog.innerHTML = '<button class="ips-close" type="button" aria-label="Close">×</button><h2>' + (editing ? 'My profile' : signup ? 'Sign up' : 'Log in') + '</h2><p class="ips-note">Browser-local profile: saved only in this browser on this device. Contact numbers are not verified. This is not a secure online account.</p><form><div id="ips-name-field"><label for="ips-name">Full name</label><input id="ips-name" name="name" maxlength="80" autocomplete="name"></div><label for="ips-contact">Contact number</label><input id="ips-contact" name="contact" type="tel" inputmode="tel" autocomplete="tel" maxlength="20" required><div id="ips-org-field"><label for="ips-org">Organization / school</label><input id="ips-org" name="organization" maxlength="120" autocomplete="organization"></div><p class="ips-error" role="alert"></p><div class="ips-row"><button class="ips-account" type="submit">' + (editing ? 'Save profile' : signup ? 'Create local profile' : 'Log in locally') + '</button><button class="ips-account ips-switch" type="button">' + (editing ? 'Log out' : signup ? 'Already registered? Log in' : 'Create a profile') + '</button></div></form>';
    var form = dialog.querySelector('form'), nameInput = form.elements.name, contactInput = form.elements.contact, orgInput = form.elements.organization;
    var heading = dialog.querySelector('h2');
    var header = document.createElement('div'); header.className = 'ips-dialog-head';
    header.innerHTML = '<img class="ips-dialog-logo" src="indirapuram-public-school-logo.png" alt="Indirapuram Public School"><div class="ips-kicker">IPS Green Vision</div>';
    dialog.insertBefore(header, heading); header.appendChild(heading);
    heading.id = 'ips-account-title'; dialog.setAttribute('aria-labelledby', heading.id);
    heading.textContent = editing ? 'Your green profile' : signup ? 'Join Green Vision' : 'Welcome back';
    var intro = document.createElement('p'); intro.className = 'ips-intro';
    intro.textContent = editing ? 'Keep your details up to date for your next green action.' : signup ? 'Introduce yourself and take your first step toward a greener future.' : 'Enter your contact number to open your saved profile.';
    header.appendChild(intro);
    var notice = dialog.querySelector('.ips-note'); form.appendChild(notice);
    notice.textContent = 'Stored on this browser only. Contact numbers are not verified; this is not a secure online account.';
    nameInput.placeholder = 'Your full name'; contactInput.placeholder = 'Your contact number'; orgInput.placeholder = 'School or organization name';
    form.querySelector('button[type="submit"]').textContent = editing ? 'Save changes' : signup ? 'Create profile' : 'Log in';
    dialog.querySelector('.ips-switch').textContent = editing ? 'Log out' : signup ? 'Already have a profile? Log in' : 'New here? Create a profile';
    dialog.querySelector('#ips-name-field').hidden = !editing && !signup;
    dialog.querySelector('#ips-org-field').hidden = !editing && !signup;
    nameInput.required = orgInput.required = editing || signup;
    if (editing) { nameInput.value = profile.name; contactInput.value = profile.contact; orgInput.value = profile.organization; }
    dialog.querySelector('.ips-close').onclick = function () { dialog.close(); };
    dialog.querySelector('.ips-switch').onclick = function () {
      if (editing) { try { localStorage.removeItem(sessionKey); } catch (_) {} refreshAccount(); dialog.close(); }
      else show(signup ? 'login' : 'signup');
    };
    form.onsubmit = function (event) {
      event.preventDefault();
      var error = dialog.querySelector('.ips-error'), contact = normalizeContact(contactInput.value);
      if (!/^[0-9]{7,15}$/.test(contact)) { error.textContent = 'Enter a valid contact number with 7–15 digits.'; return; }
      var profiles = readProfiles(), found = profiles.find(function (p) { return p.contact === contact; });
      if (!editing && !signup) {
        if (!found) { error.textContent = 'No local profile found. Sign up in this browser first.'; return; }
        profile = found;
      } else {
        if (!nameInput.value.trim() || !orgInput.value.trim()) { error.textContent = 'Please enter your name and organization.'; return; }
        if (found && (!editing || found.id !== profile.id)) { error.textContent = 'This number already has a local profile.'; return; }
        profile = { id: editing ? profile.id : Date.now().toString(), name: nameInput.value.trim(), contact: contact, organization: orgInput.value.trim() };
        profiles = profiles.filter(function (p) { return p.id !== profile.id; }); profiles.push(profile);
      }
      try {
        localStorage.setItem(profileKey, JSON.stringify(profiles));
        localStorage.setItem(sessionKey, profile.id);
        refreshAccount(); showProfile();
      } catch (_) { error.textContent = 'Your browser could not save the profile. Check storage permissions and try again.'; }
    };
    if (!dialog.open) dialog.showModal();
  }
  account.onclick = function () { if (currentProfile()) showProfile(); else show('login'); };
  signupButton.onclick = function () { show('signup'); };
  refreshAccount();
})();
