(function () {
  'use strict';

  /* ================================================================
     TRADUCTIONS FR / EN
     ================================================================ */
  const i18n = {
    fr: {
      'nav.home':'Accueil','nav.about':'À propos','nav.stats':'Stats',
      'nav.skills':'Compétences','nav.sig':'SIG','nav.journey':'Parcours',
      'nav.projects':'Projets','nav.gallery':'Galerie','nav.certs':'Certifications',
      'nav.github':'GitHub','nav.contact':'Contact',
      'hero.eyebrow':'Étudiant en Géomatique & Développeur Web',
      'hero.bio':'Étudiant en Licence 2 Géomatique à l\'Université Iba Der Thiam de Thiès, passionné par les Systèmes d\'Information Géographique, l\'analyse spatiale et le développement web géospatial. Je crée des solutions numériques qui valorisent la donnée territoriale.',
      'hero.btn.projects':'Voir mes projets','hero.btn.about':'À propos',
      'about.title':'À pro<em>pos</em>',
      'about.intro':'Étudiant en <strong>Licence 2 Géomatique</strong> à l\'Université Iba Der Thiam de Thiès (UIDT), passionné par l\'intersection entre les technologies géospatiales et le développement numérique.',
      'about.objective.title':'Objectif professionnel',
      'about.objective.text':'Intégrer une structure où je pourrai contribuer au développement de solutions géospatiales innovantes. Je recherche un <strong>stage</strong> ou une <strong>collaboration</strong> en développement web géospatial ou SIG.',
      'about.interests.title':'Centres d\'intérêt',
      'about.looking.title':'Je recherche',
      'about.availability':'Disponible — Thiès',
      'stats.projects':'Projets réalisés','stats.tools':'Logiciels SIG',
      'stats.langs':'Langages maîtrisés','stats.years':'Années universitaires',
      'stats.languages':'Langues parlées',
      'skills.title':'Compé<em>tences</em>','skills.web':'Développement Web & Programmation',
      'skills.office':'Bureautique','skills.languages':'Langues',
      'lang.native':'Langue maternelle','lang.fluent':'Courant','lang.intermediate':'Intermédiaire',
      'sig.title':'SIG & <em>Géomatique</em>',
      'sig.intro':'En tant qu\'étudiant en Géomatique, les SIG sont au cœur de ma formation.',
      'sig.carto':'Cartographie','sig.collect':'Collecte de données',
      'sig.analysis':'Analyse spatiale','sig.cad':'Dessin technique',
      'sig.data':'Données & Stats','sig.territory':'Territoire',
      'journey.title':'Mon <em>Parcours</em>',
      'journey.l2.title':'Licence en Géomatique <em>(L2)</em>',
      'journey.l2.desc':'Formation pluridisciplinaire alliant cartographie, SIG, télédétection, analyse spatiale et développement de solutions numériques.',
      'journey.dev.title':'Auto-formation <em>Développement Web</em>',
      'journey.dev.desc':'Apprentissage continu du développement web front-end : HTML, CSS, JavaScript, Python.',
      'journey.bac.title':'Baccalauréat <em>Série S</em>',
      'journey.bac.desc':'Obtention du baccalauréat scientifique. Base solide en mathématiques et sciences.',
      'projects.title':'Mes <em>Projets</em>',
      'filter.all':'Tous','filter.sig':'Géomatique','filter.web':'Web',
      'filter.arch':'Architecture','filter.mgmt':'Gestion','filter.wip':'En cours',
      'proj.context':'Contexte :','proj.tools':'Outils :','proj.result':'Résultats :',
      'proj.soon':'Bientôt disponible','proj.view':'Voir le projet','proj.wip':'En développement',
      'proj1.title':'Cartographie Thématique',
      'proj1.context':'Projet universitaire L1 — production de cartes thématiques à partir de données géospatiales du Sénégal.',
      'proj1.result':'Cartes choroplèthes, densité de population et occupation du sol avec mise en page professionnelle.',
      'proj2.title':'Plan de Maison',
      'proj2.context':'Exercice de dessin technique appliqué à la conception d\'un plan d\'habitation complet.',
      'proj2.result':'Plan architectural à l\'échelle avec cotations, vues en coupe et nomenclature.',
      'proj3.title':'Analyse des Données',
      'proj3.context':'Traitement statistique et visualisation de données géospatiales pour identifier des tendances territoriales.',
      'proj3.result':'Rapport R Markdown avec visualisations statistiques, cartes et conclusions analytiques.',
      'proj4.title':'Méthode de Collecte — Ndoncky',
      'proj4.context':'Mission de terrain à Ndoncky 2026 — protocole de collecte de données géoréférencées.',
      'proj4.result':'Formulaire déployé sur le terrain, données visualisées dans QGIS avec cartographie des points collectés.',
      'proj5.title':'Portfolio Personnel',
      'proj5.context':'Conception d\'un portfolio web moderne HTML/CSS/JS Vanilla, entièrement custom.',
      'proj5.result':'Site responsive, multilingue FR/EN, mode sombre/clair, 13 animations, filtre projets.',
      'proj6.title':'Gestion de Matériels',
      'proj6.context':'Application desktop de gestion d\'équipements — suivi, organisation, contrôle du matériel.',
      'proj6.result':'Application complète — CRUD, interface graphique, base de données MySQL. Disponible sur GitHub.',
      'gallery.title':'Galerie <em>Cartographique</em>',
      'gallery.intro':'Aperçu des productions cartographiques réalisées dans le cadre de la formation en Géomatique.',
      'gallery.note':'Les captures d\'écran réelles seront ajoutées prochainement. Remplace les placeholders par tes images dans le dossier Image/.',
      'certs.title':'Certifi<em>cations</em>',
      'certs.intro':'Certifications recommandées pour renforcer et valider les compétences acquises.',
      'github.title':'<i class="fab fa-github"></i> Git<em>Hub</em>',
      'github.portfolio.desc':'Site portfolio personnel — HTML/CSS/JS Vanilla, responsive, animations, mode sombre/clair, multilingue.',
      'github.gestion.desc':'Application de gestion d\'équipements — Python, MySQL, interface graphique. En développement.',
      'github.sig.desc':'Scripts d\'analyse géospatiale et visualisation — R Markdown, Python, traitements QGIS automatisés.',
      'github.more':'Voir tous mes dépôts',
      'github.more.desc':'Retrouve l\'ensemble de mes projets, scripts et expérimentations sur mon profil GitHub.',
      'github.view':'Voir le dépôt','github.wip':'En cours',
      'contact.title':'Con<em>tact</em>',
      'contact.heading':'Travaillons <em>ensemble</em>',
      'contact.text':'Disponible pour un stage, une collaboration sur des projets SIG ou web géospatial.',
      'form.name':'Nom','form.email':'Email','form.message':'Message','form.send':'Envoyer',
      'thanks.eyebrow':'Message reçu',
      'thanks.title':'Merci de m\'avoir<br><em>contacté !</em>',
      'thanks.text':'Je reviendrai vers vous sous 48h.','thanks.close':'Retour',
    },
    en: {
      'nav.home':'Home','nav.about':'About','nav.stats':'Stats',
      'nav.skills':'Skills','nav.sig':'GIS','nav.journey':'Journey',
      'nav.projects':'Projects','nav.gallery':'Gallery','nav.certs':'Certifications',
      'nav.github':'GitHub','nav.contact':'Contact',
      'hero.eyebrow':'Geomatics Student & Web Developer',
      'hero.bio':'L2 Geomatics student at Iba Der Thiam University of Thiès, passionate about Geographic Information Systems, spatial analysis and geospatial web development. I build digital solutions that leverage territorial data.',
      'hero.btn.projects':'View my projects','hero.btn.about':'About me',
      'about.title':'A<em>bout</em>',
      'about.intro':'<strong>L2 Geomatics student</strong> at Iba Der Thiam University (UIDT), passionate about the intersection of geospatial technologies and digital development.',
      'about.objective.title':'Professional goal',
      'about.objective.text':'Join a team where I can contribute to geospatial solutions — web mapping, spatial analysis or territorial management. Open to a <strong>internship</strong> or <strong>collaboration</strong> in geospatial web development or GIS.',
      'about.interests.title':'Interests',
      'about.looking.title':'Looking for',
      'about.availability':'Available — Thiès',
      'stats.projects':'Projects completed','stats.tools':'GIS Software',
      'stats.langs':'Languages mastered','stats.years':'University years',
      'stats.languages':'Spoken languages',
      'skills.title':'S<em>kills</em>','skills.web':'Web Development & Programming',
      'skills.office':'Office Suite','skills.languages':'Languages',
      'lang.native':'Native language','lang.fluent':'Fluent','lang.intermediate':'Intermediate',
      'sig.title':'GIS & <em>Geomatics</em>',
      'sig.intro':'As a Geomatics student, Geographic Information Systems are at the core of my training.',
      'sig.carto':'Cartography','sig.collect':'Data collection',
      'sig.analysis':'Spatial analysis','sig.cad':'Technical drawing',
      'sig.data':'Data & Statistics','sig.territory':'Territory',
      'journey.title':'My <em>Journey</em>',
      'journey.l2.title':'Bachelor in Geomatics <em>(L2)</em>',
      'journey.l2.desc':'Multidisciplinary training combining cartography, GIS, remote sensing, spatial analysis and digital solutions development.',
      'journey.dev.title':'Self-taught <em>Web Development</em>',
      'journey.dev.desc':'Continuous learning of front-end web development: HTML5, CSS3, JavaScript, Python.',
      'journey.bac.title':'Scientific Baccalaureate',
      'journey.bac.desc':'Scientific baccalaureate obtained. Strong foundation in mathematics and sciences.',
      'projects.title':'My <em>Projects</em>',
      'filter.all':'All','filter.sig':'Geomatics','filter.web':'Web',
      'filter.arch':'Architecture','filter.mgmt':'Management','filter.wip':'In progress',
      'proj.context':'Context:','proj.tools':'Tools:','proj.result':'Results:',
      'proj.soon':'Coming soon','proj.view':'View project','proj.wip':'In development',
      'proj1.title':'Thematic Mapping',
      'proj1.context':'L1 Geomatics university project — production of thematic maps from Senegal\'s geospatial data.',
      'proj1.result':'Choropleth maps, population density and land use maps with professional layout.',
      'proj2.title':'House Plan',
      'proj2.context':'Technical drawing exercise — design of a complete residential plan with AutoCAD.',
      'proj2.result':'Architectural plan to scale with dimensions, cross-sections and complete nomenclature.',
      'proj3.title':'Data Analysis',
      'proj3.context':'Statistical processing and visualization of geospatial data to identify territorial trends.',
      'proj3.result':'Complete R Markdown report with statistical visualizations and analytical conclusions.',
      'proj4.title':'Data Collection — Ndoncky',
      'proj4.context':'Field mission in Ndoncky 2026 — georeferenced data collection protocol design.',
      'proj4.result':'Form deployed in the field, data visualized in QGIS with collected points mapping.',
      'proj5.title':'Personal Portfolio',
      'proj5.context':'Design and development of a modern HTML/CSS/JS Vanilla web portfolio, fully custom.',
      'proj5.result':'Responsive site, bilingual FR/EN, dark/light mode, 13 animations, project filter.',
      'proj6.title':'Equipment Management',
      'proj6.context':'Desktop application for equipment management — tracking, organization, control.',
      'proj6.result':'Complete application — full CRUD, graphical interface, MySQL database. Available on GitHub.',
      'gallery.title':'<em>Cartographic</em> Gallery',
      'gallery.intro':'Overview of cartographic productions made during the Geomatics training.',
      'gallery.note':'Actual map screenshots will be added soon. Replace placeholders with your images in the Image/ folder.',
      'certs.title':'Certifi<em>cations</em>',
      'certs.intro':'Recommended certifications to strengthen and validate acquired skills.',
      'github.title':'<i class="fab fa-github"></i> Git<em>Hub</em>',
      'github.portfolio.desc':'Personal portfolio site — HTML/CSS/JS Vanilla, responsive, animations, dark/light mode, bilingual.',
      'github.gestion.desc':'Equipment management application — Python, MySQL, graphical interface. In development.',
      'github.sig.desc':'Geospatial analysis and visualization scripts — R Markdown, Python, automated QGIS processing.',
      'github.more':'View all my repositories',
      'github.more.desc':'Find all my projects, scripts and experiments on my GitHub profile.',
      'github.view':'View repository','github.wip':'In progress',
      'contact.title':'Con<em>tact</em>',
      'contact.heading':'Let\'s work <em>together</em>',
      'contact.text':'Available for an internship, collaboration on GIS or geospatial web projects.',
      'form.name':'Name','form.email':'Email','form.message':'Message','form.send':'Send',
      'thanks.eyebrow':'Message received',
      'thanks.title':'Thank you for<br><em>reaching out!</em>',
      'thanks.text':'I\'ll get back to you within 48h.','thanks.close':'Back',
    }
  };

  let currentLang = localStorage.getItem('lang') || 'fr';

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    const flag   = document.getElementById('langFlag');
    const code   = document.getElementById('langCode');
    const htmlEl = document.getElementById('html-root');
    if (flag) flag.textContent = lang === 'fr' ? '' : '';
    if (code) code.textContent = lang.toUpperCase();
    if (htmlEl) htmlEl.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = i18n[lang][key];
      if (val !== undefined) el.innerHTML = val;
    });

    // Machine à écrire — mettre à jour le data-text
    const typer = document.querySelector('.hero__title');
    if (typer) {
      const txt = lang === 'fr'
        ? '// L2 Géomatique · SIG · Développeur Web'
        : '// L2 Geomatics · GIS · Web Developer';
      typer.setAttribute('data-text', txt);
    }
  }

  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.addEventListener('click', () => applyLang(currentLang === 'fr' ? 'en' : 'fr'));
  applyLang(currentLang);

  /* ================================================================
     ÉLÉMENTS DOM
     ================================================================ */
  const navbar      = document.getElementById('navbar');
  const navToggle   = document.getElementById('navToggle');
  const navMenu     = document.getElementById('navMenu');
  const navLinks    = document.querySelectorAll('.nav-link');
  const sections    = document.querySelectorAll('section');
  const themeToggle = document.getElementById('themeToggleNav');
  const themeIcon   = document.getElementById('themeIconNav');

  /* ================================================================
     SCROLL PROGRESS BAR
     ================================================================ */
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.prepend(progressBar);

  /* ================================================================
     SCROLL HINT (hero)
     ================================================================ */
  const heroSection = document.getElementById('accueil');
  if (heroSection) {
    const hint = document.createElement('div');
    hint.className = 'scroll-hint';
    hint.innerHTML = '<i class="fas fa-chevron-down"></i>';
    hint.addEventListener('click', () => document.getElementById('apropos')?.scrollIntoView({ behavior: 'smooth' }));
    heroSection.style.position = 'relative';
    heroSection.appendChild(hint);
  }

  /* ================================================================
     CURSOR GLOW
     ================================================================ */
  if (window.matchMedia('(pointer: fine)').matches) {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);
    let glowVisible = false;
    document.addEventListener('mousemove', e => {
      glow.style.left = e.clientX + 'px';
      glow.style.top  = e.clientY + 'px';
      if (!glowVisible) { glow.classList.add('visible'); glowVisible = true; }
    });
    document.addEventListener('mouseleave', () => { glow.classList.remove('visible'); glowVisible = false; });
  }

  /* ================================================================
     BACK TO TOP
     ================================================================ */
  const backTop = document.createElement('button');
  backTop.className = 'back-to-top';
  backTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
  backTop.setAttribute('aria-label', 'Retour en haut');
  document.body.appendChild(backTop);
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ================================================================
     SCROLL HANDLER
     ================================================================ */
  let lastY = 0;
  function handleScroll() {
    const y    = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (docH > 0 ? (y / docH) * 100 : 0) + '%';
    navbar.classList.toggle('scrolled', y > 50);
    if (y > 120) {
      navbar.classList.toggle('hide-up', y > lastY + 5);
      if (y < lastY - 5) navbar.classList.remove('hide-up');
    } else { navbar.classList.remove('hide-up'); }
    lastY = y;
    backTop.classList.toggle('visible', y > 400);
    const hint = document.querySelector('.scroll-hint');
    if (hint) hint.style.opacity = y > 80 ? '0' : '';
    let current = '';
    sections.forEach(s => { if (y >= s.offsetTop - 200) current = s.id; });
    navLinks.forEach(l => l.classList.toggle('nav-link--active', l.getAttribute('href') === `#${current}`));
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ================================================================
     SMOOTH SCROLL
     ================================================================ */
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (navMenu.classList.contains('active')) toggleMenu(false);
    });
  });

  /* ================================================================
     MENU MOBILE
     ================================================================ */
  function toggleMenu(force) {
    const open = typeof force === 'boolean' ? force : !navMenu.classList.contains('active');
    navMenu.classList.toggle('active', open);
    navToggle.setAttribute('aria-expanded', open);
    const bars = navToggle.querySelectorAll('.nav-toggle__bar');
    bars[0].style.transform = open ? 'rotate(45deg) translate(5px, 5px)' : '';
    bars[1].style.opacity   = open ? '0' : '';
    bars[2].style.transform = open ? 'rotate(-45deg) translate(5px, -5px)' : '';
  }
  if (navToggle) navToggle.addEventListener('click', () => toggleMenu());
  document.addEventListener('click', e => {
    if (navMenu.classList.contains('active') && !navbar.contains(e.target)) toggleMenu(false);
  });

  /* ================================================================
     THÈME
     ================================================================ */
  function applyTheme(isLight) {
    document.body.classList.toggle('light-mode', isLight);
    if (themeIcon) { themeIcon.classList.toggle('fa-sun', isLight); themeIcon.classList.toggle('fa-moon', !isLight); }
    navbar.style.backgroundColor = isLight ? 'rgba(255,255,255,0.85)' : 'rgba(10,10,20,0.75)';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }
  applyTheme(localStorage.getItem('theme') === 'light');
  if (themeToggle) themeToggle.addEventListener('click', () => applyTheme(!document.body.classList.contains('light-mode')));

  /* ================================================================
     REVEAL AU SCROLL
     ================================================================ */
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); revealObs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal, .timeline-item, .skills-category').forEach(el => revealObs.observe(el));

  /* ================================================================
     STATS — compteurs animés
     ================================================================ */
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    let done = false;
    new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !done) {
        done = true;
        document.querySelectorAll('.stat-item').forEach((item, i) => {
          const counter = item.querySelector('.counter');
          const target  = parseInt(item.dataset.count) || 0;
          if (!counter) return;
          setTimeout(() => {
            let cur = 0, steps = 60;
            const inc = target / steps;
            const tick = () => {
              cur = Math.min(cur + inc, target);
              counter.textContent = Math.floor(cur);
              if (cur < target) requestAnimationFrame(tick);
              else counter.textContent = target;
            };
            tick();
          }, i * 120);
        });
      }
    }, { threshold: 0.4 }).observe(statsSection);
  }

  /* ================================================================
     BARRES DE COMPÉTENCES — stagger
     ================================================================ */
  const skillsSection = document.getElementById('competences');
  if (skillsSection) {
    let animated = false;
    new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !animated) {
        animated = true;
        document.querySelectorAll('.skill-bar-fill').forEach((fill, i) => {
          const target = fill.dataset.width || fill.style.width;
          fill.style.width = '0';
          setTimeout(() => {
            fill.style.transition = `width 1.3s cubic-bezier(0.25,0.46,0.45,0.94) ${i * 0.07}s`;
            fill.style.width = target;
          }, 80);
        });
        document.querySelectorAll('.skill-bar-item__pct').forEach((pct, i) => {
          const final = parseInt(pct.textContent);
          setTimeout(() => {
            let cur = 0, steps = 50;
            const inc = final / steps, tick = (s = 0) => {
              s++; cur = Math.min(Math.round(inc * s), final);
              pct.textContent = cur + '%';
              if (s < steps) requestAnimationFrame(() => tick(s));
            };
            tick();
          }, i * 70 + 100);
        });
      }
    }, { threshold: 0.3 }).observe(skillsSection);
  }

  /* ================================================================
     FILTRE PROJETS
     ================================================================ */
  (function initFilter() {
    const btns  = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');
    if (!btns.length || !cards.length) return;
    function filter(val) {
      let delay = 0;
      cards.forEach(c => {
        const cats  = (c.dataset.category || '').split(' ');
        const match = val === 'all' || cats.includes(val);
        if (!match) { c.classList.add('hide'); c.classList.remove('show','filter-enter'); }
        else {
          c.classList.remove('hide'); c.classList.remove('filter-enter');
          void c.offsetWidth;
          setTimeout(() => { c.classList.add('show','filter-enter'); setTimeout(() => c.classList.remove('filter-enter'), 450); }, delay);
          delay += 60;
        }
      });
    }
    btns.forEach(btn => { btn.addEventListener('click', () => { btns.forEach(b => b.classList.remove('active')); btn.classList.add('active'); filter(btn.dataset.filter); }); });
  })();

  /* ================================================================
     RIPPLE
     ================================================================ */
  document.querySelectorAll('.btn,.btn--primary,.btn--ghost,.btn--cv,.btn--outline,.filter-btn').forEach(btn => {
    btn.classList.add('btn--ripple');
    btn.addEventListener('click', function (e) {
      const rect = btn.getBoundingClientRect(), size = Math.max(rect.width, rect.height);
      const r = document.createElement('span');
      r.className = 'ripple-wave';
      r.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size/2}px;top:${e.clientY - rect.top - size/2}px;`;
      btn.appendChild(r); setTimeout(() => r.remove(), 600);
    });
  });

  /* ================================================================
     FORMULAIRE — validation + shake
     ================================================================ */
  (function initForm() {
    const form = document.getElementById('contactForm');
    const overlay = document.getElementById('thankyouOverlay');
    const closeBtn = document.getElementById('thankyouClose');
    if (!form) return;
    form.querySelectorAll('.form-field').forEach(field => {
      const input = field.querySelector('input, textarea');
      if (!input) return;
      const msg = document.createElement('span'); msg.className = 'form-error-msg';
      msg.textContent = input.type === 'email' ? (currentLang === 'fr' ? 'Email invalide.' : 'Invalid email.') : (currentLang === 'fr' ? 'Champ requis.' : 'Required field.');
      field.appendChild(msg);
      input.addEventListener('blur', () => validateField(field, input));
      input.addEventListener('input', () => { if (field.classList.contains('error')) validateField(field, input); });
    });
    function validateField(f, i) {
      const v = i.value.trim(), err = !v || (i.type==='email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
      f.classList.toggle('error', err); f.classList.toggle('valid', !err); return !err;
    }
    const showO = () => { if (overlay) { overlay.classList.add('active'); overlay.setAttribute('aria-hidden','false'); setTimeout(hideO, 4500); } };
    const hideO = () => { if (overlay) { overlay.classList.remove('active'); overlay.setAttribute('aria-hidden','true'); } };
    if (closeBtn) closeBtn.addEventListener('click', hideO);
    if (overlay) overlay.addEventListener('click', e => { if (e.target===overlay) hideO(); });
    form.addEventListener('submit', e => {
      let ok = true;
      form.querySelectorAll('.form-field').forEach(f => { const i = f.querySelector('input,textarea'); if (i && !validateField(f,i)) ok = false; });
      if (!ok) { e.preventDefault(); return; }
      if ((form.getAttribute('action')||'').includes('YOUR_FORM_ID')) { e.preventDefault(); showO(); form.reset(); form.querySelectorAll('.form-field').forEach(f => f.classList.remove('valid','error')); }
    });
  })();

  /* ================================================================
     LIGHTBOX GALERIE
     ================================================================ */
  window.openLightbox = function(card) {
    const lb = document.getElementById('lightbox');
    const lv = document.getElementById('lightboxVisual');
    const ll = document.getElementById('lightboxLabel');
    if (!lb || !lv) return;
    const visual = card.querySelector('.gallery-card__visual');
    if (visual) lv.innerHTML = visual.outerHTML;
    lv.style.cssText = 'width:500px;height:320px;border-radius:16px;overflow:hidden;';
    if (ll) ll.textContent = card.dataset.label || '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  window.closeLightbox = function() {
    const lb = document.getElementById('lightbox');
    if (lb) lb.classList.remove('open');
    document.body.style.overflow = '';
  };
  document.addEventListener('keydown', e => { if (e.key === 'Escape') window.closeLightbox(); });

  /* ================================================================
     MACHINE À ÉCRIRE
     ================================================================ */
  window.addEventListener('load', () => {
    const el = document.querySelector('.hero__title');
    if (!el) return;
    let i = 0, deleting = false, paused = false;
    function type() {
      if (paused) return;
      const text = el.getAttribute('data-text') || '';
      if (!deleting) {
        el.textContent = text.slice(0, ++i);
        if (i >= text.length) { paused = true; setTimeout(() => { deleting = true; paused = false; type(); }, 2200); return; }
      } else {
        el.textContent = text.slice(0, --i);
        if (i <= 0) { deleting = false; setTimeout(type, 120); return; }
      }
      setTimeout(type, deleting ? 38 : 78);
    }
    setTimeout(type, 900);
  });

  /* ================================================================
     LOGO SPARKLE
     ================================================================ */
  const logo = document.querySelector('.nav-logo');
  if (logo) {
    const orig = logo.textContent, sparks = ['✨','⭐','🌟','💎','⚡'];
    let idx = 0, timer;
    logo.addEventListener('mouseenter', () => { timer = setInterval(() => { logo.textContent = idx < sparks.length ? sparks[idx++]+' '+orig : orig; if (idx >= sparks.length) { clearInterval(timer); idx = 0; } }, 140); });
    logo.addEventListener('mouseleave', () => { clearInterval(timer); logo.textContent = orig; idx = 0; });
  }

  /* ================================================================
     PARTICULES
     ================================================================ */
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const c = document.createElement('div'); c.className = 'particle-bg'; document.body.appendChild(c);
    for (let i = 0; i < 45; i++) {
      const p = document.createElement('div'); p.className = 'particle';
      const s = Math.random() * 3.5 + 1;
      p.style.cssText = `width:${s}px;height:${s}px;left:${Math.random()*100}%;--dur:${(Math.random()*10+8).toFixed(1)}s;--delay:${(Math.random()*10).toFixed(1)}s;`;
      c.appendChild(p);
    }
  }

  /* ================================================================
     NAVBAR CONTROLS — style
     ================================================================ */
  const navControls = document.querySelector('.nav-controls');
  if (navControls) {
    navControls.style.cssText = 'display:flex;align-items:center;gap:0.5rem;';
  }
  // Style bouton langue
  const langToggleBtn = document.getElementById('langToggle');
  if (langToggleBtn) {
    langToggleBtn.style.cssText = 'background:rgba(212,175,55,0.1);border:1px solid rgba(212,175,55,0.3);border-radius:8px;padding:0.35rem 0.7rem;color:inherit;cursor:pointer;font-size:0.85rem;display:flex;align-items:center;gap:0.35rem;transition:background 0.2s;';
    langToggleBtn.addEventListener('mouseenter', () => langToggleBtn.style.background = 'rgba(212,175,55,0.2)');
    langToggleBtn.addEventListener('mouseleave', () => langToggleBtn.style.background = 'rgba(212,175,55,0.1)');
  }

  console.log('🚀 Portfolio v2 — FR/EN · Animations · SIG · Certifications · GitHub');
})();
