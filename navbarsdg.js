/* Common navbar for IPS Green Vision. */
(function () {
  "use strict";
  var file = decodeURIComponent(location.pathname.split("/").pop() || "").toLowerCase();
  var view = new URLSearchParams(location.search).get("view") || "home";
  // The SDG app is index.html (also matches the site root "/" and the old sdg-action.html name).
  var isHome = file === "" || file === "index.html" || file === "sdg-action.html";
  var items = [
    { href: "About.html", label: "About", icon: "ℹ️", active: file === "about.html" },
    { href: "index.html", label: "SDGs", icon: "🌍", active: isHome && (view === "home" || view === "sdg") },
    { href: "index.html?view=community", label: "Community", icon: "👥", active: isHome && view === "community" },
    { href: "index.html?view=targets", label: "Green Targets", icon: "🎯", active: isHome && view === "targets" },
    { href: "PlantHere.html", label: "Plant a Tree", icon: "🌳", active: file === "planthere.html" },
    { href: "City_AI_Pulse_V5_Rainfall.html", label: "City Pulse AI", icon: "🛰️", active: file === "city_ai_pulse_v5_rainfall.html" },
    { href: "my-posts.html", label: "My Home", icon: "🏠", active: file === "my-posts.html", id: "sdgNavMyPosts" }
  ];
  var links = items.map(function (item) {
    return '<a class="sdg-nav__link' + (item.active ? ' is-active' : '') + '" href="' + item.href + '"' + (item.id ? ' id="' + item.id + '" hidden' : '') + (item.active ? ' aria-current="page"' : '') + '><span aria-hidden="true">' + item.icon + '</span><span>' + item.label + '</span></a>';
  }).join("");
  var markup = '<nav class="sdg-nav" aria-label="SDG navigation"><div class="sdg-nav__inner">' +
    '<a class="sdg-nav__brand" href="index.html"><img class="sdg-nav__school-logo" src="indirapuram-public-school-logo.png" alt="Indirapuram Public School logo"><span class="sdg-nav__brand-copy"><strong><span class="sdg-nav__brand-dark">IPS</span> <span class="sdg-nav__brand-green">Green Vision</span></strong><small>Indirapuram Public School</small></span></a>' +
    '<div class="sdg-nav__links" id="sdgNavLinks">' + links + '</div>' +
    '<button class="sdg-nav__toggle" id="sdgNavToggle" type="button" aria-label="Open navigation" aria-controls="sdgNavLinks" aria-expanded="false"><span></span><span></span><span></span></button>' +
    '</div></nav>';
  var css = `
    .sdg-nav{position:fixed;inset:0 0 auto 0;height:60px;z-index:99999;background:#fff;border-bottom:1px solid #d4e5d4;box-shadow:0 1px 3px rgba(15,31,15,.06);font-family:"DM Sans","Segoe UI",Arial,sans-serif}
    .sdg-nav,.sdg-nav *{box-sizing:border-box}.sdg-nav__inner{height:100%;width:min(1400px,calc(100% - 48px));margin:auto;display:flex;align-items:center;justify-content:space-between;gap:24px}
    .sdg-nav__brand{display:flex;align-items:center;gap:9px;text-decoration:none;white-space:nowrap;font-family:Outfit,"Segoe UI",Arial,sans-serif}.sdg-nav__school-logo{width:40px;height:40px;object-fit:contain;border-radius:50%;background:#fff}.sdg-nav__brand-copy{display:grid;line-height:1.05}.sdg-nav__brand-copy strong{font-size:17px;font-weight:800}.sdg-nav__brand-copy small{margin-top:4px;color:#6b826b;font-size:8px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.sdg-nav__brand-dark{color:#1a2e1a}.sdg-nav__brand-green{color:#16a34a}
    .sdg-nav__links{display:flex;align-items:center;justify-content:center;gap:2px}.sdg-nav__link{display:inline-flex;align-items:center;gap:6px;min-height:38px;padding:0 14px;border-radius:10px;color:#8ca88c;text-decoration:none;font-size:13px;font-weight:600;transition:background .18s ease,color .18s ease}.sdg-nav__link:hover{background:#f0fdf4;color:#15803d}.sdg-nav__link.is-active{background:#dcfce7;color:#16a34a}.sdg-nav__link[hidden]{display:none}
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
  // =====================================================================
  //  SUPABASE SETTINGS — paste your two values here (Supabase dashboard →
  //  Project Settings → API). The anon / publishable key is safe to put in
  //  a web page. NEVER put the service_role / secret key here.
  // ===================================================================== 
  var SUPABASE_URL = 'https://vwxtgkiebomarbuhxexd.supabase.co';
  var SUPABASE_ANON_KEY = 'sb_publishable_jL8WFbcJ6_L41yNQYj80Cw_nIZuCN3N';
  var SUPABASE_LIBRARY = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.117.2/dist/umd/supabase.js';
  // =====================================================================

  // The logged-in profile is cached so every page can read it instantly
  // with window.ipsCurrentProfile(); Supabase keeps the real login session.
  var cacheKey = 'ips-green-profile-v2';
  var cachedProfile = null;
  try { cachedProfile = JSON.parse(localStorage.getItem(cacheKey) || 'null'); } catch (_) {}
  try { localStorage.removeItem('ips-green-profiles-v1'); localStorage.removeItem('ips-green-session-v1'); } catch (_) {} // old browser-only profiles
  function currentProfile() { return cachedProfile; }
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
    .ips-close:hover{background:#eaf6ed}.ips-message{color:#36563e;font-size:14px;line-height:1.6;margin:0}.ips-error:empty{display:none}.ips-error{font-size:12px;background:#fff1f2;border-radius:8px;padding:9px 12px}
    .ips-name-row{display:grid;grid-template-columns:1fr 1fr;gap:0 12px}
    .ips-req{color:#dc2626}
        .ips-field-error{margin:5px 0 0;color:#dc2626;font-size:12px;line-height:1.4}.ips-field-error:empty{display:none}
    .ips-email-note{margin:6px 0 0;color:#dc2626;font-size:12px;font-weight:700}
    .ips-message{margin:0;color:#36563e;font-size:14px;line-height:1.6}
    .ips-dialog input[readonly]{background:#eef3ef;color:#55705a;cursor:not-allowed}
    .ips-hint{margin:6px 0 0;color:#7a8e7e;font-size:11px;line-height:1.5}
    .ips-dialog input[aria-invalid="true"]{border-color:#dc2626;background:#fff7f7}.ips-dialog input[aria-invalid="true"]:focus{box-shadow:0 0 0 3px #dc262620}
    .ips-field[data-field="password"] input{padding-right:64px}
    .ips-input-wrap{position:relative}.ips-pw-toggle{position:absolute;right:6px;top:50%;transform:translateY(-50%);height:32px;padding:0 10px;border:0;border-radius:7px;background:transparent;color:#15803d;font:700 12px "DM Sans","Segoe UI",sans-serif;cursor:pointer}
    .ips-pw-toggle:hover{background:#eaf6ed}
    .ips-account:disabled{opacity:.6;cursor:wait}
    .ips-dialog select{width:100%;padding:12px 14px;border:1px solid #dce7de;background:#f8fbf8;border-radius:10px;font:14px "DM Sans","Segoe UI",sans-serif;color:#1a2e1a;outline:none}
    .ips-dialog select:focus{background:#fff;border-color:#22c55e;box-shadow:0 0 0 3px #22c55e15}
    .ips-dialog select[aria-invalid="true"]{border-color:#dc2626;background:#fff7f7}
    @media(max-width:480px){.ips-name-row{grid-template-columns:1fr}}
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
    var myPosts = document.getElementById('sdgNavMyPosts'); if (myPosts) myPosts.hidden = !profile;
    // Tell the page (e.g. Green Targets) that the logged-in profile may have changed.
    var id = profile ? profile.id : null;
    if (id !== lastProfileId) {
      lastProfileId = id;
      try { window.dispatchEvent(new CustomEvent('ips-profile-change', { detail: { profile: profile } })); } catch (_) {}
    }
  }
  var lastProfileId;
  function normalizeContact(value) { return value.replace(/\D/g, ''); }
  function normalizeEmail(value) { return value.trim().toLowerCase(); }
  function fullName(p) { return p.firstName ? (p.firstName + ' ' + p.lastName).trim() : (p.name || ''); }

  // ---- Validation rules ----
  var NAME_RE = /^[\p{L}][\p{L}\p{M} .'-]*$/u;
  var EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*\.[A-Za-z]{2,}$/;
  function checkName(v, label) {
    v = v.trim();
    if (!v) return label + ' is required.';
    if (v.length > 40) return label + ' must be 40 characters or fewer.';
    if (!NAME_RE.test(v)) return label + ' can only contain letters, spaces, dots, hyphens and apostrophes.';
    return '';
  }
  function checkContact(v) {
    if (!v.trim()) return 'Contact number is required.';
    if (!/^[0-9]{10}$/.test(normalizeContact(v))) return 'Enter a 10-digit mobile number (numbers only).';
    return '';
  }
  function checkEmail(v) {
    v = v.trim();
    if (!v) return 'Email id is required.';
    if (v.length > 254) return 'Email id must be 254 characters or fewer.';
    if (!EMAIL_RE.test(v) || v.indexOf('..') !== -1 || v.split('@')[0].length > 64) return 'Enter a valid email id, for example yourname@gmail.com.';
    var domain = v.split('@')[1].toLowerCase();
    if (TYPO_DOMAINS[domain]) return 'Did you mean ' + v.split('@')[0] + '@' + TYPO_DOMAINS[domain] + '? Please check the spelling.';
    if (BLOCKED_DOMAINS.indexOf(domain) !== -1 || /\.(test|example|invalid|local|localhost)$/.test(domain))
      return 'Test or example email ids are not allowed. Please use your real email id.';
    return '';
  }
  // Supabase rejects these, so catch them here with a clear message
  var BLOCKED_DOMAINS = ['example.com', 'example.net', 'example.org', 'test.com', 'email.com', 'anonymous.com', 'test', 'example', 'invalid', 'local', 'localhost'];
  var TYPO_DOMAINS = {
    'gamil.com': 'gmail.com', 'gmial.com': 'gmail.com', 'gmai.com': 'gmail.com', 'gmail.co': 'gmail.com', 'gmail.con': 'gmail.com',
    'gmal.com': 'gmail.com', 'gnail.com': 'gmail.com', 'gamai.com': 'gmail.com', 'gmaill.com': 'gmail.com',
    'yaho.com': 'yahoo.com', 'yahooo.com': 'yahoo.com', 'yahoo.co': 'yahoo.com', 'hotmial.com': 'hotmail.com', 'hotmal.com': 'hotmail.com',
    'outlok.com': 'outlook.com', 'outllook.com': 'outlook.com', 'rediffmial.com': 'rediffmail.com'
  };
  function checkPassword(v, optional) {
    if (!v) return optional ? '' : 'Password is required.';
    if (v.length < 8) return 'Password must be at least 8 characters.';
    if (v.length > 64) return 'Password must be 64 characters or fewer.';
    if (/\s/.test(v)) return 'Password cannot contain spaces.';
    if (!/[A-Z]/.test(v)) return 'Password needs at least one capital letter (A–Z).';
    if (!/[a-z]/.test(v)) return 'Password needs at least one small letter (a–z).';
    if (!/[0-9]/.test(v)) return 'Password needs at least one number (0–9).';
    if (!/[^A-Za-z0-9]/.test(v)) return 'Password needs at least one special character, e.g. @ # $ ! %.';
    return '';
  }
  function checkOrg(v) {
    v = v.trim();
    if (!v) return 'Organization / school is required.';
    if (v.length < 2) return 'Organization / school must be at least 2 characters.';
    if (v.length > 120) return 'Organization / school must be 120 characters or fewer.';
    if (!/\p{L}/u.test(v)) return 'Organization / school must contain letters.';
    return '';
  }

  // ---- Connect to Supabase ----
  function isConfigured() { return SUPABASE_URL.indexOf('YOUR-PROJECT') === -1 && SUPABASE_ANON_KEY.indexOf('YOUR-') === -1; }
  var supabaseReady = new Promise(function (resolve, reject) {
    if (!isConfigured()) { reject(new Error('Login is not set up yet: add your Supabase Project URL and anon key at the top of navbarsdg.js.')); return; }
    function create() { resolve(window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)); }
    if (window.supabase && window.supabase.createClient) { create(); return; }
    var script = document.createElement('script');
    script.src = SUPABASE_LIBRARY;
    script.onload = create;
    script.onerror = function () { reject(new Error('Could not load the login service. Check your internet connection.')); };
    document.head.appendChild(script);
  });
  supabaseReady.catch(function (e) { console.warn('IPS Green Vision:', e.message); });
  window.ipsSupabase = supabaseReady;                                  // other pages use the same connection
  // open the log-in / sign-up popup; returnTo = page to open after logging in (e.g. the goal the student was on)
  var returnAfterLogin = null;
  window.ipsOpenLogin = function (mode, returnTo) { returnAfterLogin = returnTo || null; show(mode || 'login'); };

  function profileFromRow(row) {
    return { id: row.id, firstName: row.firstName, lastName: row.lastName, name: (row.firstName + ' ' + row.lastName).trim(),
      organization: row.orgName, contact: row.mobileNo, email: row.emailId,
      className: row.className || '', section: row.section || '',
      // older profiles made before class/section existed must add them
      incomplete: !row.className || !row.section };
  }
  function setProfile(profile) {
    cachedProfile = profile;
    try { if (profile) localStorage.setItem(cacheKey, JSON.stringify(profile)); else localStorage.removeItem(cacheKey); } catch (_) {}
    refreshAccount();
  }
  // Read this user's row from the "user" table.
  function loadProfile(sb, user) {
    return sb.from('user').select('*').eq('id', user.id).maybeSingle().then(function (res) {
      if (res.error) throw res.error;
      if (res.data) { setProfile(profileFromRow(res.data)); return cachedProfile; }
      // Logged in, but no profile row yet (e.g. account made in the dashboard).
      setProfile({ id: user.id, email: (user.email || '').toLowerCase(), name: user.email || 'New user', firstName: '', lastName: '', organization: '', contact: '', className: '', section: '', incomplete: true, noRow: true });
      return cachedProfile;
    });
  }
  // Keep the navbar in step with Supabase (page load, log in, log out, other tabs).
  supabaseReady.then(function (sb) {
    sb.auth.onAuthStateChange(function (event, session) {
      if (!session) { if (cachedProfile) setProfile(null); return; }
      if (event === 'INITIAL_SESSION' || event === 'SIGNED_IN' || event === 'USER_UPDATED') {
        // setTimeout: Supabase advises not to call it again inside this callback
        setTimeout(function () { loadProfile(sb, session.user).catch(function (e) { console.warn('IPS Green Vision: could not load profile', e); }); }, 0);
      }
    });
  }).catch(function () { if (cachedProfile) setProfile(null); });

  // Turn Supabase errors into plain messages.
  function friendlyError(err) {
    var code = (err && err.code) || '', msg = (err && err.message) || String(err || '');
    if (code === 'invalid_credentials' || /invalid login credentials/i.test(msg)) return 'Email id or password is incorrect.';
    if (code === 'email_not_confirmed' || /email not confirmed/i.test(msg)) return 'Sign-up could not be completed: in Supabase, the setting "Confirm email" is still switched on. The website owner must switch it off (Authentication → Sign In / Providers → Email).';
    if (code === 'email_address_invalid' || /email address .* is invalid|invalid format/i.test(msg)) return 'This email id was not accepted. Please use your real, working email id (for example yourname@gmail.com).';
    if (code === 'user_already_exists' || code === 'email_exists' || /already registered/i.test(msg)) return 'This email id is already registered. Please log in instead.';
    if (code === 'weak_password' || /password/i.test(msg) && /weak|at least|characters/i.test(msg)) return 'This password is too weak. ' + msg;
    if (/rate limit|over_email_send_rate_limit|too many/i.test(code + ' ' + msg)) return 'Too many attempts right now. Please wait a few minutes and try again.';
    if (/user_name_class_section_unique/i.test(msg)) return 'A student with this first name, last name, class and section is already registered.';
    if (/Database error saving new user/i.test(msg) || code === '23505') return 'This name (with class and section), contact number or email id already has a profile.';
    if (/Failed to fetch|NetworkError|Load failed/i.test(msg)) return 'Could not reach the login server. Check your internet connection.';
    return msg || 'Something went wrong. Please try again.';
  }

  function dialogHead(title, intro) {
    return '<button class="ips-close" type="button" aria-label="Close">×</button><div class="ips-dialog-head"><img class="ips-dialog-logo" src="indirapuram-public-school-logo.png" alt="Indirapuram Public School"><div class="ips-kicker">IPS Green Vision</div><h2 id="ips-account-title">' + title + '</h2><p class="ips-intro">' + intro + '</p></div>';
  }
  function openDialog() {
    dialog.setAttribute('aria-labelledby', 'ips-account-title');
    dialog.querySelector('.ips-close').onclick = function () { dialog.close(); };
    if (!dialog.open) dialog.showModal();
  }
  function showMessage(title, text, buttonLabel, onButton) {
    dialog.innerHTML = dialogHead(title, '') + '<div style="padding:24px 32px 28px"><p class="ips-message"></p><div class="ips-row"><button class="ips-account ips-msg-btn" type="button"></button></div></div>';
    dialog.querySelector('.ips-message').textContent = text;
    var btn = dialog.querySelector('.ips-msg-btn'); btn.textContent = buttonLabel || 'OK';
    btn.onclick = onButton || function () { dialog.close(); };
    openDialog();
  }
  // After logging in, students land on My Home (or go back to the goal they were adding a post to)
  function goToLanding() {
    if (dialog.open) dialog.close();
    if (returnAfterLogin) { location.href = returnAfterLogin; return; }
    if (file === 'my-posts.html') location.reload(); else location.href = 'my-posts.html';
  }
  function logOut() {
    // Finish signing out first, then update the page and show the message
    supabaseReady.then(function (sb) { return sb.auth.signOut({ scope: 'local' }); }).catch(function () {}).then(function () {
      setProfile(null);   // tells every page the user has logged out
      showMessage('Logged out', 'You have been logged out successfully. See you again soon! 🌱', 'OK');
    });
  }

  function showProfile() {
    var profile = currentProfile();
    if (!profile) { show('login'); return; }
    if (profile.incomplete) { show('profile'); return; }
    var row = function (id, label) { return '<div><dt class="ips-kicker">' + label + '</dt><dd id="' + id + '" style="margin:4px 0 0;overflow-wrap:anywhere"></dd></div>'; };
    dialog.innerHTML = dialogHead('Your profile', 'Your details for the Green Vision community.') +
      '<div style="padding:24px 32px"><div class="ips-profile-avatar" style="width:60px;height:60px;border-radius:50%;display:grid;place-items:center;background:#dcfce7;color:#15803d;font-size:24px;font-weight:800;margin-bottom:20px"></div><dl style="margin:0;display:grid;gap:18px">' +
      '<div class="ips-name-row"><div><dt class="ips-kicker">First name</dt><dd id="ips-profile-first" style="margin:4px 0 0;font-size:18px;font-weight:700;overflow-wrap:anywhere"></dd></div><div><dt class="ips-kicker">Last name</dt><dd id="ips-profile-last" style="margin:4px 0 0;font-size:18px;font-weight:700;overflow-wrap:anywhere"></dd></div></div>' +
      row('ips-profile-class', 'Class & section') +
      row('ips-profile-email', 'Email id (Login Id)') + row('ips-profile-contact', 'Contact number') + row('ips-profile-org', 'Organization / school') +
      '</dl><div class="ips-row"><a class="ips-account ips-go-posts" href="my-posts.html" style="display:grid;place-items:center;text-decoration:none">🏠 My Home</a><button class="ips-account ips-switch ips-edit-profile" type="button">Edit profile</button><button class="ips-account ips-switch ips-logout" type="button">Log out</button></div></div>';
    dialog.querySelector('.ips-profile-avatar').textContent = (profile.firstName || profile.name || '?').charAt(0).toUpperCase();
    dialog.querySelector('#ips-profile-first').textContent = profile.firstName;
    dialog.querySelector('#ips-profile-last').textContent = profile.lastName;
    dialog.querySelector('#ips-profile-email').textContent = profile.email;
    dialog.querySelector('#ips-profile-contact').textContent = profile.contact;
    dialog.querySelector('#ips-profile-org').textContent = profile.organization;
    dialog.querySelector('#ips-profile-class').textContent = 'Class ' + profile.className + ' – Section ' + profile.section;
    dialog.querySelector('.ips-edit-profile').onclick = function () { show('profile'); };
    dialog.querySelector('.ips-logout').onclick = logOut;
    openDialog();
  }

  function field(id, name, label, attrs, extra, inner) {
    return '<div class="ips-field" data-field="' + name + '"><label for="' + id + '">' + label + ' <span class="ips-req" aria-hidden="true">*</span></label>' +
      '<div class="ips-input-wrap"><input id="' + id + '" name="' + name + '" required aria-required="true" aria-describedby="' + id + '-err" ' + attrs + '>' + (inner || '') + '</div>' + (extra || '') +
      '<p class="ips-field-error" id="' + id + '-err" aria-live="polite"></p></div>';
  }

  var CLASSES = ['Nursery', 'LKG', 'UKG', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'Teacher / Staff', 'Other'];
  var SECTIONS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'None'];
  function selectField(id, name, label, options) {
    return '<div class="ips-field" data-field="' + name + '"><label for="' + id + '">' + label + ' <span class="ips-req" aria-hidden="true">*</span></label>' +
      '<div class="ips-input-wrap"><select id="' + id + '" name="' + name + '" required aria-required="true" aria-describedby="' + id + '-err"><option value="">Select</option>' +
      options.map(function (o) { return '<option value="' + o + '">' + o + '</option>'; }).join('') + '</select></div>' +
      '<p class="ips-field-error" id="' + id + '-err" aria-live="polite"></p></div>';
  }

  function show(mode) {
    var profile = currentProfile();
    if (mode === 'profile' && !profile) mode = 'login';
    var editing = mode === 'profile', signup = mode === 'signup', login = !editing && !signup;
    var completing = editing && profile.incomplete;
    var pwToggle = '<button type="button" class="ips-pw-toggle" aria-label="Show password">Show</button>';
    var html = dialogHead(
      editing ? (completing ? 'Complete your profile' : 'Your green profile') : signup ? 'Join Green Vision' : 'Welcome back',
      editing ? (completing ? 'Please add your details to finish setting up your account.' : 'Keep your details up to date for your next green action.') : signup ? 'Introduce yourself and take your first step toward a greener future. All fields are required.' : 'Log in with your email id and password.') +
      '<form novalidate>';
    if (login) {
      html += field('ips-email', 'email', 'Email id', 'type="email" inputmode="email" autocomplete="username" maxlength="254" placeholder="name@example.com"') +
        field('ips-password', 'password', 'Password', 'type="password" autocomplete="current-password" maxlength="64" placeholder="Your password"', '', pwToggle);
    } else {
      html += '<div class="ips-name-row">' +
        field('ips-first', 'firstName', 'First name', 'maxlength="40" autocomplete="given-name" placeholder="First name"') +
        field('ips-last', 'lastName', 'Last name', 'maxlength="40" autocomplete="family-name" placeholder="Last name"') + '</div>' +
        '<div class="ips-name-row">' + selectField('ips-class', 'className', 'Class', CLASSES) + selectField('ips-section', 'section', 'Section', SECTIONS) + '</div>' +
        '<p class="ips-hint" style="margin-top:4px">First name + last name + class + section must be unique.</p>' +
        field('ips-contact', 'contact', 'Contact number', 'type="tel" inputmode="numeric" autocomplete="tel-national" maxlength="10" pattern="[0-9]{10}" placeholder="10-digit mobile number"') +
        field('ips-email', 'email', 'Email id', 'type="email" inputmode="email" autocomplete="email" maxlength="254" placeholder="name@example.com"' + (editing ? ' readonly' : ''),
          '<p class="ips-email-note">' + (editing ? 'Your email id is your Login Id and cannot be changed' : 'Your email id will be your Login Id') + '</p>') +
        field('ips-password', 'password', editing ? 'New password' : 'Password', 'type="password" autocomplete="new-password" maxlength="64" placeholder="' + (editing ? 'Leave blank to keep current password' : 'Create a password') + '"',
          '<p class="ips-hint">8–64 characters with a capital letter, a small letter, a number and a special character.</p>', pwToggle) +
        field('ips-org', 'organization', 'Organization / school', 'maxlength="120" autocomplete="organization" placeholder="School or organization name"');
    }
    html += '<p class="ips-error" role="alert"></p><div class="ips-row"><button class="ips-account" type="submit">' + (editing ? 'Save changes' : signup ? 'Create profile' : 'Log in') + '</button>' +
      '<button class="ips-account ips-switch" type="button">' + (editing ? 'Log out' : signup ? 'Already have a profile? Log in' : 'New here? Create a profile') + '</button></div></form>';
    dialog.innerHTML = html;

    var form = dialog.querySelector('form'), el = form.elements, error = dialog.querySelector('.ips-error'), submitBtn = form.querySelector('button[type="submit"]');
    if (editing) {
      el.password.required = false; el.password.removeAttribute('aria-required'); dialog.querySelector('[data-field="password"] .ips-req').hidden = true;
      el.firstName.value = profile.firstName || ''; el.lastName.value = profile.lastName || '';
      el.contact.value = profile.contact || ''; el.email.value = profile.email || ''; el.organization.value = profile.organization || '';
      el.className.value = profile.className || ''; el.section.value = profile.section || '';
    }

    var rules = login ? {
      email: checkEmail,
      password: function (v) { return v ? '' : 'Password is required.'; }
    } : {
      firstName: function (v) { return checkName(v, 'First name'); },
      lastName: function (v) { return checkName(v, 'Last name'); },
      className: function (v) { return v ? '' : 'Please choose your class.'; },
      section: function (v) { return v ? '' : 'Please choose your section.'; },
      contact: checkContact,
      email: checkEmail,
      password: function (v) { return checkPassword(v, editing); },
      organization: checkOrg
    };
    function setFieldError(name, message) {
      var input = el[name]; dialog.querySelector('#' + input.id + '-err').textContent = message;
      if (message) input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid');
    }
    function validate(name) { var msg = rules[name](el[name].value); setFieldError(name, msg); return msg; }
    Object.keys(rules).forEach(function (name) {
      el[name].addEventListener('blur', function () { if (el[name].value) validate(name); });
      el[name].addEventListener('input', function () { error.textContent = ''; if (el[name].getAttribute('aria-invalid')) validate(name); });
      el[name].addEventListener('change', function () { if (el[name].tagName === 'SELECT') validate(name); });
    });
    if (el.contact) el.contact.addEventListener('input', function () {
      var digits = el.contact.value.replace(/\D/g, '').slice(0, 10);
      if (el.contact.value !== digits) el.contact.value = digits;   // numbers only, max 10
    });
    var toggle = dialog.querySelector('.ips-pw-toggle');
    toggle.onclick = function () {
      var showing = el.password.type === 'text';
      el.password.type = showing ? 'password' : 'text';
      toggle.textContent = showing ? 'Show' : 'Hide';
      toggle.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
    };
    dialog.querySelector('.ips-switch').onclick = function () { if (editing) logOut(); else show(signup ? 'login' : 'signup'); };

    function busy(on, label) { submitBtn.disabled = on; if (label) submitBtn.textContent = label; }
    function fail(message, fieldName) {
      if (fieldName) { setFieldError(fieldName, message); el[fieldName].focus(); error.textContent = 'Please correct the highlighted fields.'; }
      else error.textContent = message;
      busy(false, editing ? 'Save changes' : signup ? 'Create profile' : 'Log in');
    }

    form.onsubmit = function (event) {
      event.preventDefault();
      error.textContent = '';
      var firstBad = null;
      Object.keys(rules).forEach(function (name) { if (validate(name) && !firstBad) firstBad = el[name]; });
      if (firstBad) { firstBad.focus(); error.textContent = 'Please correct the highlighted fields.'; return; }
      var email = normalizeEmail(el.email.value), password = el.password.value;
      busy(true, editing ? 'Saving…' : signup ? 'Creating profile…' : 'Logging in…');

      supabaseReady.then(function (sb) {
        // ----- LOG IN -----
        if (login) {
          return sb.auth.signInWithPassword({ email: email, password: password }).then(function (res) {
            if (res.error) return fail(friendlyError(res.error));
            return loadProfile(sb, res.data.user).then(function (p) { if (p.incomplete) show('profile'); else goToLanding(); });
          });
        }

        var details = {
          firstName: el.firstName.value.trim().replace(/\s+/g, ' '),
          lastName: el.lastName.value.trim().replace(/\s+/g, ' '),
          orgName: el.organization.value.trim().replace(/\s+/g, ' '),
          mobileNo: normalizeContact(el.contact.value),
          className: el.className.value,
          section: el.section.value
        };
        var mobileChanged = !editing || details.mobileNo !== profile.contact;
        var mobileCheck = mobileChanged
          ? sb.rpc('mobile_is_registered', { p_mobile: details.mobileNo }).then(function (r) { return !r.error && r.data === true; })
          : Promise.resolve(false);

        var nameCheck = sb.rpc('is_name_taken', { p_first: details.firstName, p_last: details.lastName, p_class: details.className, p_section: details.section, p_exclude: editing ? profile.id : null })
          .then(function (r) { return !r.error && r.data === true; });

        return Promise.all([mobileCheck, nameCheck]).then(function (checks) {
          if (checks[1]) return fail('A student with this first name, last name, class and section is already registered. Please check your class and section, or add your middle initial.', 'lastName');
          if (checks[0]) return fail('This number already has a profile.', 'contact');

          // ----- REGISTER -----
          if (signup) {
            var options = { data: details };
            return sb.auth.signUp({ email: email, password: password, options: options }).then(function (res) {
              if (res.error) {
                var m = friendlyError(res.error);
                return fail(m, /email id (is already registered|was not accepted)/.test(m) ? 'email' : /contact number/.test(m) ? 'contact' : null);
              }
              var user = res.data.user;
              if (user && user.identities && user.identities.length === 0) return fail('This email id is already registered. Please log in instead.', 'email');
              // The account is active straight away: log the student in and go to My Home
              if (res.data.session) return loadProfile(sb, user).then(goToLanding);
              return sb.auth.signInWithPassword({ email: email, password: password }).then(function (r) {
                if (r.error) return fail(friendlyError(r.error));
                return loadProfile(sb, r.data.user).then(goToLanding);
              });
            });
          }

          // ----- SAVE PROFILE CHANGES -----
          var save = profile.noRow
            ? sb.from('user').insert(Object.assign({ id: profile.id, emailId: profile.email }, details)).select().single()
            : sb.from('user').update(details).eq('id', profile.id).select().single();
          return save.then(function (res) {
            if (res.error) {
              var nameDup = /user_name_class_section_unique/.test(res.error.message || '');
              var m = res.error.code === '23505' ? (nameDup ? 'A student with this first name, last name, class and section is already registered.' : 'This number already has a profile.') : friendlyError(res.error);
              return fail(m, res.error.code === '23505' ? (nameDup ? 'lastName' : 'contact') : null);
            }
            var next = password ? sb.auth.updateUser({ password: password }) : Promise.resolve({});
            return next.then(function (pw) {
              setProfile(profileFromRow(res.data));
              if (pw.error) return fail('Details saved, but the password was not changed: ' + friendlyError(pw.error));
              if (completing) goToLanding(); else showProfile();
            });
          });
        });
      }).catch(function (e) { fail(friendlyError(e)); });
    };
    openDialog();
    var firstInput = form.querySelector('input:not([readonly])'); if (firstInput) firstInput.focus();
  }

  account.onclick = function () { if (currentProfile()) showProfile(); else show('login'); };
  signupButton.onclick = function () { show('signup'); };
  refreshAccount();
})();
