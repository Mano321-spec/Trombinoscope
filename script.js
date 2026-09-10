const SPEEDY_IMG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAASCAYAAAA6yNxSAAACMUlEQVR4AbVWu24TQRQ94zywEpBtiSoNwxfECAkJUcSioAkStFQ4FUJp4AtC6EBIuAuPIkSiJ5/g8AWOUidyunS7m5cSO97Jmdn1Zta7jnZj50jjGc/r3Hvmzp0VSIFad8roQrJZhUIZBTwwdQAZ1mWrDwNjNtoQLDBlCz00xftKuz8okGbAD6dB0gUSVHEbEPiDKXwUSxVXZF2jfjs1Vq9oVI1FAgnv86KNaTyazDz9wvxuU5n9kHye5TVuDslj/pRQIHH+mkwwBvqLVHTOMnXbaW55fwLe8TFKh8Wgj/91v3dwiJI/Y892YwqoNUdb9S9x9grZ8WIWmJvE8udveKOeYfHxU+DlXezs7WL57xf8f/7Vnl0eGgNGiTOjgKTsuv6OYV4P4l4hqI/8oL4jAmU69OQ85k0rNQbUT+cDumIBE0qGxyCRB33iPs4TxAFEoRVTwES6GiBTcBkDK3mvpNc9QWlq9vpJPh5GCqhfzjo76qkT88RAiB23De/i1Cz2OqdYnHtCg2Zs8lWdkCIFTAAWeK2EuV4S8UwnMU742CB5XTezJyIdlB002HyLUWCRDzXAkPWY8Xr0XCuis9/oKrgsq+JdpWF3xoNwzanzGFYwbskFmnRmyX6EroYGQCNqNKI6Fs8DYh1szeFTYEmu+AL6YRq+ObG+tpvcb+M64sgAJh2d4eoY7XXTpC1NiiI29TObdaHOA1tcrJWYx9XVk6kkQUH0gaH4OvokLqKVh9TGJdp9vTSHP8c1AAAAAElFTkSuQmCC';

// ── CONFIG icônes ─────────────────────────────────────────────────────────────
// emoji badges — plus lisibles que la police d'icônes sur petits formats
const HOBBY_EMOJI = {
  'Gamer':'🎮','Sportif':'🏃','Musicien':'🎵',
  'Cuisinier':'👨‍🍳','Lecteur':'📚','Créatif':'🎨',
  'Photo':'📷','Culturel':'📺','Autre':'✨'
};
const METIER_EMOJI = {
  'UX':'🔍','UI':'🖌️','IX':'🔀',
  'DEV':'💻','DEO':'💻','CP':'💼','OPS':'⚙️'
};
const MINT_EMOJI = {
  'Joué Club': '__SPEEDY__','Culture Club':'🎭',
  'Art Club':'🖼️','Sporting Club':'⚽',
  'English Club':'🇬🇧','Donne du Love':'❤️',
  'Green':'🌿','DIY':'🔨','Book Club':'📖',
  'Paillette':'🥂','Mag':'📰','Oscar':'🏆',
  'Outils':'🛠️','Multi-MINT':'✨'
};
const ACT_EMOJI = {
  'Docaposte':'📬','La Poste':'📦',
  'LAB':'🧪','Tech':'💡','Castor':'🦫',
  'Opérations':'⚙️'
};
const GEO_EMOJI = { 'Province':'📍','Région Parisienne':'🗼' };

// garder les icônes Tabler pour la modal uniquement
const HOBBY_ICONS = {
  'Gamer':'ti-device-gamepad-2','Sportif':'ti-run','Musicien':'ti-music',
  'Cuisinier':'ti-chef-hat','Lecteur':'ti-book','Créatif':'ti-palette',
  'Photo':'ti-camera','Culturel':'ti-device-tv','Autre':'ti-sparkles'
};
const METIER_ICONS = {
  'UX':'ti-eye','UI':'ti-brush','IX':'ti-arrows-transfer-down',
  'DEV':'ti-code','CP':'ti-briefcase','OPS':'ti-settings'
};
const MINT_ICONS = {
  'Joué Club': '__SPEEDY__','Culture Club':'ti-palette',
  'Art Club':'ti-brush','Sporting Club':'ti-ball-football',
  'English Club':'ti-language','Donne du Love':'ti-heart',
  'Green':'ti-leaf','DIY':'ti-tools','Book Club':'ti-books',
  'Paillette':'ti-confetti','Mag':'ti-news','Oscar':'ti-trophy',
  'Outils':'ti-cpu','Multi-MINT':'ti-sparkles'
};
const ACT_ICONS = {
  'Docaposte':'ti-mail','La Poste':'ti-package',
  'LAB':'ti-flask','Tech':'ti-cpu','Castor':'ti-paw',
  'Opérations':'ti-settings-2'
};
const GEO_ICONS = { 'Province':'ti-map-pin','Région Parisienne':'ti-building-skyscraper' };

const TREE = {
  'bourgeon': `<svg viewBox="0 0 32 32" fill="none" class="tree-svg"><ellipse cx="16" cy="14" rx="6" ry="7" fill="#2a3800" opacity="0.85"/><rect x="15" y="19" width="2" height="7" rx="1" fill="#1a2000"/></svg>`,
  'plante':   `<svg viewBox="0 0 32 32" fill="none" class="tree-svg"><ellipse cx="16" cy="11" rx="8" ry="7" fill="#2a3800"/><ellipse cx="10" cy="17" rx="4.5" ry="3.5" fill="#2a3800" opacity="0.6"/><ellipse cx="22" cy="17" rx="4.5" ry="3.5" fill="#2a3800" opacity="0.6"/><rect x="15" y="18" width="2" height="8" rx="1" fill="#1a2000"/></svg>`,
  'arbre':    `<svg viewBox="0 0 32 32" fill="none" class="tree-svg"><ellipse cx="16" cy="8" rx="9" ry="7" fill="#2a3800"/><ellipse cx="9" cy="15" rx="5.5" ry="4.5" fill="#2a3800" opacity="0.75"/><ellipse cx="23" cy="15" rx="5.5" ry="4.5" fill="#2a3800" opacity="0.75"/><ellipse cx="16" cy="17" rx="7" ry="5" fill="#2a3800" opacity="0.5"/><rect x="14.5" y="21" width="3" height="8" rx="1.5" fill="#1a2000"/></svg>`,
  'veteran':  `<svg viewBox="0 0 32 32" fill="none" class="tree-svg"><ellipse cx="16" cy="8" rx="9" ry="7" fill="#2a3800"/><ellipse cx="9" cy="15" rx="5.5" ry="4.5" fill="#2a3800" opacity="0.75"/><ellipse cx="23" cy="15" rx="5.5" ry="4.5" fill="#2a3800" opacity="0.75"/><ellipse cx="16" cy="17" rx="7" ry="5" fill="#2a3800" opacity="0.5"/><rect x="14.5" y="21" width="3" height="8" rx="1.5" fill="#1a2000"/></svg>`
};

function getTreeKey(anc) {
  if (!anc) return null;
  if (anc.includes('< 1')) return 'bourgeon';
  if (anc.includes('1–3')) return 'plante';
  if (anc.includes('3–6')) return 'arbre';
  if (anc.includes('> 6')) return 'veteran';
  return null;
}

function getFirstActivite(act) {
  if (!act) return null;
  return act.split('/')[0].trim();
}

// Demi-cercle en haut : angles de 180° à 0° (gauche → droite en passant par le haut)
// Carte 240×310px. Photo : bottom=56, height=100 → centre photo à cx=120, cy=204
// Arc AU-DESSUS = angles 210°→330° en passant par 270° (sommet = 12h)
// 6 badges espacés de 24° : 210, 234, 258, 270+(-6)=264... recalcul propre :
// de 210° à 330° en 6 pas = step 24° → 210,234,258,282,306,330
const CX = 120, CY = 204, R = 95;
const BADGE_ANGLES_6 = [210, 234, 258, 282, 306, 330];

function deg2rad(d) { return d * Math.PI / 180; }

function buildCard(p, idx) {
  const wrap = document.createElement('div');
  wrap.className = 'card-wrap';

  const card = document.createElement('div');
  card.className = 'card';
  card.onclick = () => openModal(idx);

  // Photo
  const photoRing = document.createElement('div');
  photoRing.className = 'photo-ring';
  if (p.photo_b64) {
    const img = document.createElement('img');
    img.src = p.photo_b64;
    img.alt = p.prenom + ' ' + p.nom;
    img.onerror = () => { photoRing.innerHTML = '<i class="ti ti-user"></i>'; };
    photoRing.appendChild(img);
  } else {
    photoRing.innerHTML = '<i class="ti ti-user"></i>';
  }
  card.appendChild(photoRing);

  // Nom
  const nameDiv = document.createElement('div');
  nameDiv.className = 'card-name';
  nameDiv.textContent = p.prenom + ' ' + p.nom;
  card.appendChild(nameDiv);

  // Badges
  const badgeDefs = [
    { cls:'b-anc', render: () => {
      if (!p.anciennete) return null;
      return { html: `<span style="font-size:22px;line-height:1">${p.anciennete.split(' ')[0]}</span>` };
    }},
    { cls:'b-met', render: () => {
      if (!p.metier) return null;
      return { html: `<span style="font-size:22px;line-height:1">${METIER_EMOJI[p.metier] || '💼'}</span>` };
    }},
    { cls:'b-act', render: () => {
      if (!p.activite) return null;
      const acts = p.activite.split('/').map(a => a.trim());
      if (acts.length > 1) {
        // Multi-activité : deux emojis côte à côte
        const emojis = acts.map(a => ACT_EMOJI[a] || '⭐').join('');
        return { html: `<span style="font-size:14px;line-height:1;letter-spacing:-2px">${emojis}</span>` };
      }
      return { html: `<span style="font-size:22px;line-height:1">${ACT_EMOJI[acts[0]] || '⭐'}</span>` };
    }},
    { cls:'b-geo', render: () => {
      if (!p.localisation) return null;
      return { html: `<span style="font-size:22px;line-height:1">${GEO_EMOJI[p.localisation] || '📍'}</span>` };
    }},
    { cls:'b-mint', render: () => {
      const em = p.mint ? (MINT_EMOJI[p.mint] || '✨') : '🏝️';
      const mintHtml = em === '__SPEEDY__'
        ? `<img src="${SPEEDY_IMG}" style="width:36px;height:36px;object-fit:contain;border-radius:50%">`
        : `<span style="font-size:22px;line-height:1">${em}</span>`;
      return { html: mintHtml };
    }},
    { cls:'b-hob', render: () => {
      const em = p.hobby_cat ? (HOBBY_EMOJI[p.hobby_cat] || '✨') : '🤔';
      return { html: `<span style="font-size:22px;line-height:1">${em}</span>` };
    }},
  ];

  badgeDefs.forEach((def, i) => {
    const angle = BADGE_ANGLES_6[i];
    const aRad = deg2rad(angle);
    const x = Math.round(CX + R * Math.cos(aRad));
    const y = Math.round(CY + R * Math.sin(aRad));
    const result = def.render();
    const el = document.createElement('div');
    el.style.left = (x - 22) + 'px';
    el.style.top  = (y - 22) + 'px';
    if (result) {
      el.className = 'badge ' + def.cls;
      el.innerHTML = result.html;
    } else {
      el.className = 'badge b-empty';
      el.innerHTML = '<span style="font-size:16px;opacity:0.15">·</span>';
    }
    card.appendChild(el);
  });

  wrap.appendChild(card);
  return wrap;
}

// ── FILTRES MULTI-SÉLECTION ───────────────────────────────────────────────────
// activeFilters = { anciennete: Set, metier: Set, activite: Set, hobby: Set, mint: Set, localisation: Set }
const CATS = ['anciennete','metier','activite','hobby','mint','localisation'];
let activeFilters = {};
CATS.forEach(c => activeFilters[c] = new Set());
let searchQ = '';

function matchFilter(p) {
  for (const cat of CATS) {
    if (activeFilters[cat].size === 0) continue;
    const vals = activeFilters[cat];

    if (cat === 'anciennete' && !vals.has(p.anciennete)) return false;
    if (cat === 'localisation' && !vals.has(p.localisation)) return false;
    if (cat === 'metier' && !vals.has(p.metier)) return false;

    if (cat === 'hobby') {
      if (vals.has('AUCUN') && !p.hobby_cat) continue; // match les sans hobby
      if (vals.has('AUCUN') && p.hobby_cat && vals.size === 1) return false;
      if (!vals.has('AUCUN') && !vals.has(p.hobby_cat)) return false;
    }

    if (cat === 'mint') {
      const personMints = p.mints && p.mints.length ? p.mints : (p.mint && p.mint !== 'Multi-MINT' ? [p.mint] : []);
      const isMulti = p.mints && p.mints.length > 1;
      const hasNoMint = !p.mint && (!p.mints || p.mints.length === 0);
      const match = [...vals].some(v => {
        if (v === 'AUCUNE') return hasNoMint;
        if (v === 'Multi-MINT') return isMulti;
        return personMints.includes(v);
      });
      if (!match) return false;
    }

    if (cat === 'activite') {
      // Chaque activité séparée par /
      const personActs = p.activite ? p.activite.split('/').map(a => a.trim()) : [];
      const match = [...vals].some(v => personActs.includes(v));
      if (!match) return false;
    }
  }
  if (searchQ) {
    const q = searchQ.toLowerCase();
    const fullName = (p.prenom + ' ' + p.nom).toLowerCase();
    if (!fullName.includes(q) && !(p.metier||'').toLowerCase().includes(q) && !(p.activite||'').toLowerCase().includes(q) && !(p.mint||'').toLowerCase().includes(q)) return false;
  }
  return true;
}

function updateActiveTags() {
  const container = document.getElementById('activeTags');
  container.innerHTML = '';
  CATS.forEach(cat => {
    activeFilters[cat].forEach(val => {
      const tag = document.createElement('span');
      tag.className = 'active-tag';
      tag.textContent = val + ' ×';
      tag.onclick = () => { activeFilters[cat].delete(val); syncButtons(); render(); updateActiveTags(); };
      container.appendChild(tag);
    });
  });
}

function syncButtons() {
  document.querySelectorAll('.filter-btn[data-cat]').forEach(btn => {
    const cat = btn.dataset.cat;
    const val = btn.dataset.val;
    if (activeFilters[cat] && activeFilters[cat].has(val)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function render() {
  const grid = document.getElementById('grid');
  const empty = document.getElementById('emptyState');
  grid.innerHTML = '';
  const filtered = PEOPLE.filter((p, i) => { p._idx = i; return matchFilter(p); });
  const total = filtered.length;
  document.getElementById('countText').textContent = total + ' Polluxien·ne' + (total > 1 ? 's' : '') + ' affiché·e' + (total > 1 ? 's' : '');
  if (total === 0) {
    empty.style.display = 'block'; grid.style.display = 'none';
  } else {
    empty.style.display = 'none'; grid.style.display = 'grid';
    filtered.forEach(p => grid.appendChild(buildCard(p, p._idx)));
  }
  updateActiveTags();
}

document.querySelectorAll('.filter-btn[data-cat]').forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.cat;
    const val = btn.dataset.val;
    if (activeFilters[cat].has(val)) {
      activeFilters[cat].delete(val);
    } else {
      activeFilters[cat].add(val);
    }
    syncButtons();
    render();
  });
});

document.getElementById('resetBtn').addEventListener('click', () => {
  CATS.forEach(c => activeFilters[c].clear());
  searchQ = '';
  document.getElementById('searchInput').value = '';
  syncButtons();
  render();
});

document.getElementById('searchInput').addEventListener('input', e => {
  searchQ = e.target.value;
  render();
});

// ── MODAL ─────────────────────────────────────────────────────────────────────
function openModal(idx) {
  const p = PEOPLE[idx];
  const overlay = document.getElementById('modalOverlay');

  // Photo
  const mPhoto = document.getElementById('mPhoto');
  mPhoto.innerHTML = '';
  if (p.photo_b64) {
    const img = document.createElement('img');
    img.src = p.photo_b64;
    img.onerror = () => { mPhoto.innerHTML = '<i class="ti ti-user"></i>'; };
    mPhoto.appendChild(img);
  } else {
    mPhoto.innerHTML = '<i class="ti ti-user"></i>';
  }

  document.getElementById('mName').textContent = p.prenom + ' ' + p.nom;

  // MINT : toutes les MINTs avec emojis, ou électron libre
  const personMints = p.mints && p.mints.length ? p.mints : (p.mint && p.mint !== 'Multi-MINT' ? [p.mint] : []);
  const mintDisplay = personMints.length
    ? personMints.map(m => {
        const em = MINT_EMOJI[m] || '✨';
        const icon = em === '__SPEEDY__'
          ? `<img src="${SPEEDY_IMG}" style="width:16px;height:16px;vertical-align:middle">`
          : em;
        return icon + ' ' + m;
      }).join('\n')
    : '🏝️ Électron libre';

  // Hobby avec emoji, ou mystère
  const hobbyEmoji = p.hobby_cat ? (HOBBY_EMOJI[p.hobby_cat] || '✨') : '🤔';
  const hobbyDisplay = p.hobby_label
    ? hobbyEmoji + ' ' + p.hobby_label
    : p.hobby_cat
      ? hobbyEmoji + ' ' + p.hobby_cat
      : '🤔 Mystère & boule de gomme';

  // Ancienneté avec emoji
  const ancEmoji = p.anciennete ? p.anciennete.split(' ')[0] : '';
  const ancDisplay = p.anciennete ? ancEmoji + ' ' + p.anciennete.split(' ').slice(1).join(' ') : null;

  // Métier avec emoji
  const metDisplay = p.metier ? (METIER_EMOJI[p.metier] || '💼') + ' ' + p.metier : null;

  // Localisation avec emoji
  const geoDisplay = p.localisation ? (GEO_EMOJI[p.localisation] || '📍') + ' ' + p.localisation : null;

  // Activité avec emoji (peut être multiple)
  const actDisplay = p.activite ? p.activite.split('/').map(a => {
    const at = a.trim();
    return (ACT_EMOJI[at] || '⭐') + ' ' + at;
  }).join('\n') : null;

  const rows = [
    { cat:'Ancienneté',   val: ancDisplay,   col:'#CDE22D', txt:'#2a3800' },
    { cat:'Métier',       val: metDisplay,   col:'#FBC300', txt:'#3a2800' },
    { cat:'Activité',     val: actDisplay,   col:'#FF8E72', txt:'#3a1000' },
    { cat:'Localisation', val: geoDisplay,   col:'#A8E0FF', txt:'#002a40' },
    { cat:'MINT',         val: mintDisplay,  col:'#ABEFBE', txt:'#104744' },
    { cat:'Hobby',        val: hobbyDisplay, col:'#FF99EF', txt:'#4a0040' },
  ];
  const mBadges = document.getElementById('mBadges');
  mBadges.innerHTML = '';
  rows.forEach(r => {
    if (!r.val) return;
    const row = document.createElement('div');
    row.className = 'modal-badge-row';
    const valHtml = r.val.includes('\n')
      ? r.val.split('\n').map(line => `<span class="modal-badge-val">${line}</span>`).join('')
      : `<span class="modal-badge-val">${r.val}</span>`;
    row.innerHTML = `
      <div class="modal-badge-icon" style="background:${r.col}; font-size:18px; display:flex; align-items:center; justify-content:center;">
        ${r.val.split('\n')[0].split(' ')[0]}
      </div>
      <div class="modal-badge-info">
        <span class="modal-badge-cat">${r.cat}</span>
        ${valHtml}
      </div>`;
    mBadges.appendChild(row);
  });

  overlay.classList.add('open');
}

function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalBtn();
}
function closeModalBtn() {
  document.getElementById('modalOverlay').classList.remove('open');
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModalBtn(); });

// ── INIT ──────────────────────────────────────────────────────────────────────
let PEOPLE = [];

async function init() {
  try {
    const res = await fetch('data.json');
    PEOPLE = await res.json();
  } catch (e) {
    console.error('Impossible de charger data.json', e);
    PEOPLE = [];
  }
  render();
}

init();
