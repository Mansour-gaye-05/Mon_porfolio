(function() {
  'use strict';

  // ========== ÉLÉMENTS DOM ==========
  const navbar = document.getElementById('navbar');
  const progressBar = document.getElementById('progressBar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const contactForm = document.getElementById('contactForm');
  const thankyouOverlay = document.getElementById('thankyouOverlay');
  const thankyouClose = document.getElementById('thankyouClose');

  // ========== GESTION DU SCROLL ==========
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) progressBar.style.width = scrolled + '%';

    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('nav-link--active');
      const href = link.getAttribute('href');
      if (href === `#${current}`) {
        link.classList.add('nav-link--active');
      }
    });
  }

  // ========== SMOOTH SCROLL ==========
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          navToggle.setAttribute('aria-expanded', 'false');
          const bars = document.querySelectorAll('.nav-toggle__bar');
          bars[0].style.transform = '';
          bars[1].style.opacity = '';
          bars[2].style.transform = '';
        }
      }
    });
  });

  // ========== MENU MOBILE ==========
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const isExpanded = navMenu.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isExpanded);
      
      const bars = document.querySelectorAll('.nav-toggle__bar');
      if (isExpanded) {
        bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        bars[0].style.transform = '';
        bars[1].style.opacity = '';
        bars[2].style.transform = '';
      }
    });
  }

  // ========== MODE CLAIR/SOMBRE AVEC BOUTON DANS NAVBAR ==========
// ========== MODE CLAIR/SOMBRE AVEC FORCE IMMÉDIATE ==========
const themeToggleNav = document.getElementById('themeToggleNav');
const themeIconNav = document.getElementById('themeIconNav');

function toggleTheme() {
  // Récupère l'état actuel
  const isCurrentlyLight = document.body.classList.contains('light-mode');
  
  // Change la classe
  if (isCurrentlyLight) {
    document.body.classList.remove('light-mode');
  } else {
    document.body.classList.add('light-mode');
  }
  
  // Met à jour l'icône
  const newIsLight = document.body.classList.contains('light-mode');
  if (themeIconNav) {
    if (newIsLight) {
      themeIconNav.classList.remove('fa-moon');
      themeIconNav.classList.add('fa-sun');
    } else {
      themeIconNav.classList.remove('fa-sun');
      themeIconNav.classList.add('fa-moon');
    }
  }
  
  // FORCE L'APPLICATION IMMÉDIATE SUR LA NAVBAR
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    // Force le reflow du navigateur
    navbar.style.transform = 'translateZ(0)';
    // Applique la couleur de fond directement
    if (newIsLight) {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
    } else {
      navbar.style.backgroundColor = 'rgba(10, 10, 20, 0.75)';
    }
    // Force un autre reflow
    void navbar.offsetHeight;
    // Retire le hack
    setTimeout(() => {
      navbar.style.transform = '';
    }, 50);
  }
  
  // Sauvegarde
  localStorage.setItem('theme', newIsLight ? 'light' : 'dark');
}

// Charger le thème sauvegardé
const savedThemeNav = localStorage.getItem('theme');
if (savedThemeNav === 'light') {
  document.body.classList.add('light-mode');
  if (themeIconNav) {
    themeIconNav.classList.remove('fa-moon');
    themeIconNav.classList.add('fa-sun');
  }
  // Force la couleur de fond au chargement
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
  }
}

// Ajouter l'événement
if (themeToggleNav) {
  themeToggleNav.addEventListener('click', toggleTheme);
}

// Ajouter l'événement au nouveau bouton
if (themeToggleNav) {
  themeToggleNav.addEventListener('click', toggleTheme);
}

  // ========== REVEAL ANIMATIONS AU SCROLL ==========
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  revealElements.forEach(el => revealObserver.observe(el));

  // ========== ANIMATION DES BARRES DE COMPÉTENCES ==========
  function animateSkillBars() {
    const fills = document.querySelectorAll('.skill-bar-fill');
    fills.forEach(fill => {
      const targetWidth = fill.getAttribute('data-width') || fill.style.width;
      if (targetWidth) {
        fill.style.width = '0';
        setTimeout(() => {
          fill.style.width = targetWidth;
        }, 100);
      }
    });
  }

  const skillsSection = document.getElementById('competences');
  if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkillBars();
          skillsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    skillsObserver.observe(skillsSection);
  }

  // ========== ANIMATION DES POURCENTAGES ==========
  function animatePercentages() {
    const percentages = document.querySelectorAll('.skill-bar-item__pct');
    percentages.forEach(pct => {
      const finalValue = parseInt(pct.textContent);
      let currentValue = 0;
      const duration = 1500;
      const increment = finalValue / (duration / 16);
      
      const updateCounter = () => {
        currentValue += increment;
        if (currentValue < finalValue) {
          pct.textContent = Math.floor(currentValue) + '%';
          requestAnimationFrame(updateCounter);
        } else {
          pct.textContent = finalValue + '%';
        }
      };
      
      updateCounter();
    });
  }

  if (skillsSection) {
    const percentObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animatePercentages();
          percentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    percentObserver.observe(skillsSection);
  }

  // ========== EFFET DE TEXTE SUR LE LOGO ==========
  const logo = document.querySelector('.nav-logo');
  if (logo) {
    const originalText = logo.textContent;
    const sparkleText = ['✨', '⭐', '🌟', '💎', '⚡'];
    let sparkleIndex = 0;
    let interval;
    
    logo.addEventListener('mouseenter', () => {
      interval = setInterval(() => {
        if (sparkleIndex < sparkleText.length) {
          logo.textContent = sparkleText[sparkleIndex] + ' ' + originalText;
          sparkleIndex++;
        } else {
          logo.textContent = originalText;
          clearInterval(interval);
          sparkleIndex = 0;
        }
      }, 150);
    });
    
    logo.addEventListener('mouseleave', () => {
      clearInterval(interval);
      logo.textContent = originalText;
      sparkleIndex = 0;
    });
  }

  // ========== INITIALISATION ==========
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);
  handleScroll();

  console.log('🚀 Portfolio chargé avec succès !');
})();

// Animation au clic sur le bouton thème
if (themeToggleNav) {
  themeToggleNav.addEventListener('click', function(e) {
    // Effet ripple
    const ripple = document.createElement('span');
    ripple.className = 'theme-ripple';
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
    
    // Animation de l'icône
    const icon = this.querySelector('i');
    icon.style.transform = 'rotate(360deg)';
    setTimeout(() => {
      icon.style.transform = '';
    }, 300);
  });
}

// Style pour l'effet ripple
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  .theme-ripple {
    position: absolute;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.4), transparent);
    transform: translate(-50%, -50%);
    animation: rippleTheme 0.6s ease-out forwards;
    pointer-events: none;
  }
  @keyframes rippleTheme {
    0% {
      width: 0;
      height: 0;
      opacity: 0.5;
    }
    100% {
      width: 200px;
      height: 200px;
      opacity: 0;
    }
  }
`;
if (!document.querySelector('#ripple-theme-style')) {
  rippleStyle.id = 'ripple-theme-style';
  document.head.appendChild(rippleStyle);
}

// ========== FORMULAIRE DE CONTACT AVEC SIMULATION ==========
(function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const thankyouOverlay = document.getElementById('thankyouOverlay');
  const thankyouClose = document.getElementById('thankyouClose');
  
  if (!contactForm) {
    console.log('Formulaire de contact non trouvé');
    return;
  }
  
  // Fonction pour afficher l'overlay de remerciement
  function showThankYou() {
    if (thankyouOverlay) {
      thankyouOverlay.classList.add('active');
      
      // Cacher automatiquement après 3 secondes
      setTimeout(() => {
        thankyouOverlay.classList.remove('active');
      }, 3000);
    }
  }
  
  // Fonction pour cacher l'overlay
  function hideThankYou() {
    if (thankyouOverlay) {
      thankyouOverlay.classList.remove('active');
    }
  }
  
  // Fonction de validation simple
  function validateForm(name, email, message) {
    let isValid = true;
    
    // Valider le nom
    if (!name.trim()) {
      const nameError = document.getElementById('nameError');
      if (nameError) {
        nameError.textContent = 'Veuillez entrer votre nom';
        nameError.style.color = '#ff6b6b';
      }
      isValid = false;
    } else {
      const nameError = document.getElementById('nameError');
      if (nameError) nameError.textContent = '';
    }
    
    // Valider l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      const emailError = document.getElementById('emailError');
      if (emailError) {
        emailError.textContent = 'Veuillez entrer un email valide';
        emailError.style.color = '#ff6b6b';
      }
      isValid = false;
    } else {
      const emailError = document.getElementById('emailError');
      if (emailError) emailError.textContent = '';
    }
    
    // Valider le message
    if (!message.trim()) {
      const messageError = document.getElementById('messageError');
      if (messageError) {
        messageError.textContent = 'Veuillez écrire votre message';
        messageError.style.color = '#ff6b6b';
      }
      isValid = false;
    } else {
      const messageError = document.getElementById('messageError');
      if (messageError) messageError.textContent = '';
    }
    
    return isValid;
  }
  
  // Gestionnaire d'envoi du formulaire
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Récupérer les valeurs
    const name = document.getElementById('name')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const message = document.getElementById('message')?.value || '';
    
    // Valider le formulaire
    if (validateForm(name, email, message)) {
      // Afficher le message de remerciement
      showThankYou();
      
      // Réinitialiser le formulaire
      contactForm.reset();
      
      // Afficher un message dans la console (simulation d'envoi)
      console.log('📧 Message simulé envoyé avec succès !');
      console.log('Nom:', name);
      console.log('Email:', email);
      console.log('Message:', message);
    }
  });
  
  // Fermer l'overlay avec le bouton
  if (thankyouClose) {
    thankyouClose.addEventListener('click', hideThankYou);
  }
  
  // Fermer l'overlay en cliquant en dehors
  if (thankyouOverlay) {
    thankyouOverlay.addEventListener('click', function(e) {
      if (e.target === thankyouOverlay) {
        hideThankYou();
      }
    });
  }
  
  console.log('✅ Formulaire de contact initialisé');
})();

// ========== FILTRE DES PROJETS ==========
(function initProjectsFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project-card');
  
  if (!filterButtons.length || !projects.length) return;
  
  // Fonction pour filtrer les projets
  function filterProjects(filterValue) {
    let visibleCount = 0;
    
    projects.forEach(project => {
      const projectYear = project.getAttribute('data-year');
      
      if (filterValue === 'all' || projectYear === filterValue) {
        project.classList.remove('hide');
        project.classList.add('show');
        visibleCount++;
      } else {
        project.classList.remove('show');
        project.classList.add('hide');
      }
    });
    
    // Afficher un message si aucun projet n'est trouvé
    const projectsGrid = document.querySelector('.projects-grid');
    const existingMessage = document.querySelector('.no-projects-message');
    
    if (visibleCount === 0 && !existingMessage) {
      const message = document.createElement('div');
      message.className = 'no-projects-message';
      message.innerHTML = `
        <div class="no-projects-content">
          <i class="fas fa-folder-open"></i>
          <p>Aucun projet trouvé pour cette année</p>
        </div>
      `;
      projectsGrid.appendChild(message);
    } else if (visibleCount > 0 && existingMessage) {
      existingMessage.remove();
    }
  }
  
  // Ajouter les événements aux boutons
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Mettre à jour la classe active
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Récupérer la valeur du filtre
      const filterValue = button.getAttribute('data-filter');
      
      // Appliquer le filtre avec une petite animation
      filterProjects(filterValue);
    });
  });
  
  // Style pour le message "aucun projet"
  const style = document.createElement('style');
  style.textContent = `
    .no-projects-message {
      grid-column: 1 / -1;
      text-align: center;
      padding: 4rem;
      background: rgba(212, 175, 55, 0.05);
      border-radius: 20px;
      border: 1px solid rgba(212, 175, 55, 0.2);
    }
    .no-projects-content i {
      font-size: 3rem;
      color: var(--gold-primary);
      margin-bottom: 1rem;
      display: inline-block;
    }
    .no-projects-content p {
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.1rem;
    }
    body.light-mode .no-projects-content p {
      color: rgba(0, 0, 0, 0.6);
    }
  `;
  document.head.appendChild(style);
  
  console.log('✅ Filtre des projets initialisé');
})();

// Ajouter un compteur à côté des boutons
function updateProjectCount() {
  const total = projects.length;
  const visible = document.querySelectorAll('.project-card.show:not(.hide)').length;
  const counter = document.querySelector('.projects-counter');
  
  if (counter) {
    counter.textContent = `${visible} / ${total} projets`;
  }
}