/* ============================================================
   PORTFOLIO — main.js
   GSAP 3 + ScrollTrigger animations
============================================================ */

gsap.registerPlugin(ScrollTrigger);

const body = document.body;
const pageLoader = document.getElementById('page-loader');
const loaderFill = document.getElementById('loader-fill');
const loaderRoad = document.getElementById('loader-road');
const pageTransition = document.getElementById('page-transition');
const progressFill = document.getElementById('scroll-progress-fill');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const navLogo = document.getElementById('nav-logo');
const truthModeTrigger = document.querySelector('.about-photo-wrap');
const truthModal = document.getElementById('truth-modal');
const truthModalClose = document.getElementById('truth-modal-close');
const freezeOverlay = document.getElementById('freeze-overlay');
const copyEmailLink = document.getElementById('copy-email');
const copyToast = document.getElementById('copy-toast');
const nptClock = document.getElementById('npt-clock');
const messageForm = document.querySelector('.message-form');
const messagePopup = document.getElementById('message-popup');
const messagePopupTitle = document.getElementById('message-popup-title');
const messagePopupText = document.getElementById('message-popup-text');
const messagePopupClose = document.getElementById('message-popup-close');
const projectThumbTriggers = document.querySelectorAll('.project-thumb-trigger');
const projectPopup = document.getElementById('project-popup');
const projectPopupImage = document.getElementById('project-popup-image');
const projectPopupClose = document.getElementById('project-popup-close');
const backToHeroBtn = document.getElementById('back-to-hero');
const heroSection = document.getElementById('hero');

function getSectionThreeElement() {
  const markers = Array.from(document.querySelectorAll('.section-num'));
  const marker = markers.find((el) => el.textContent.replace(/\D/g, '') === '03');
  return marker ? marker.closest('section') : null;
}

function setMessagePopup(open, title, text) {
  if (!messagePopup) return;
  if (messagePopupTitle && title) messagePopupTitle.textContent = title;
  if (messagePopupText && text) messagePopupText.textContent = text;
  messagePopup.classList.toggle('is-open', open);
  messagePopup.setAttribute('aria-hidden', open ? 'false' : 'true');
}

if (messagePopupClose) {
  messagePopupClose.addEventListener('click', () => setMessagePopup(false));
}

if (messagePopup) {
  messagePopup.addEventListener('click', (event) => {
    if (event.target === messagePopup) setMessagePopup(false);
  });
}

function setProjectPopup(open, imageSrc, imageAlt) {
  if (!projectPopup || !projectPopupImage) return;

  if (open && imageSrc) {
    projectPopupImage.src = imageSrc;
    projectPopupImage.alt = imageAlt || 'Project preview';
  }

  projectPopup.classList.toggle('is-open', open);
  projectPopup.setAttribute('aria-hidden', open ? 'false' : 'true');

  if (!open) {
    projectPopupImage.src = '';
  }
}

if (projectThumbTriggers.length) {
  projectThumbTriggers.forEach((trigger) => {
    const thumbImage = trigger.querySelector('img');
    if (!thumbImage) return;

    trigger.addEventListener('click', () => {
      setProjectPopup(true, thumbImage.getAttribute('src'), thumbImage.getAttribute('alt'));
    });
  });
}

if (projectPopupClose) {
  projectPopupClose.addEventListener('click', () => setProjectPopup(false));
}

if (projectPopup) {
  projectPopup.addEventListener('click', (event) => {
    if (event.target === projectPopup) setProjectPopup(false);
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && projectPopup && projectPopup.classList.contains('is-open')) {
    setProjectPopup(false);
  }
});

if (messageForm) {
  messageForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const submitButton = messageForm.querySelector('button[type="submit"]');
    const originalButtonHtml = submitButton ? submitButton.innerHTML : '';

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
    }

    try {
      const formData = new FormData(messageForm);
      const response = await fetch('https://formsubmit.co/ajax/shaswotbhandari1@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });

      if (!response.ok) throw new Error('Unable to send');

      messageForm.reset();
      setMessagePopup(
        true,
        'Your message has been sent.',
        'Thanks for reaching out. Your message is now in my inbox. Click below to continue on this page.'
      );
    } catch (error) {
      setMessagePopup(
        true,
        'Message not sent.',
        'Something went wrong while sending your message. Please try again or email me directly.'
      );
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonHtml;
      }
    }
  });
}

if (nptClock) {
  const updateNptClock = () => {
    const now = new Date();
    nptClock.textContent = now.toLocaleTimeString('en-GB', {
      timeZone: 'Asia/Kathmandu',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  updateNptClock();
  setInterval(updateNptClock, 1000);
}

function setMobileMenu(open) {
  if (!mobileMenu || !mobileMenuBtn) return;
  mobileMenu.classList.toggle('is-open', open);
  mobileMenu.setAttribute('aria-hidden', open ? 'false' : 'true');
  mobileMenuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
}

function setTruthModal(open) {
  if (!truthModal) return;
  truthModal.classList.toggle('is-open', open);
  truthModal.setAttribute('aria-hidden', open ? 'false' : 'true');
}

function setLogoIdle(isIdle) {
  if (!navLogo) return;

  navLogo.classList.toggle('is-idle', isIdle);

  if (isIdle) {
    gsap.killTweensOf(navLogo);
    gsap.to(navLogo, {
      y: -56,
      rotate: -8,
      scale: 0.96,
      opacity: 0,
      filter: 'blur(5px)',
      duration: 0.85,
      ease: 'power2.inOut'
    });
    return;
  }

  gsap.to(navLogo, {
    y: 0,
    rotate: 0,
    scale: 1,
    opacity: 1,
    filter: 'blur(0px)',
    duration: 0.7,
    ease: 'back.out(1.35)'
  });
}

const selectionPalette = [
  { bg: 'rgba(29, 78, 216, 0.24)', text: '#0D0D0D', shadow: '0 0 10px rgba(29, 78, 216, 0.25)' },
  { bg: 'rgba(194, 65, 12, 0.22)', text: '#0D0D0D', shadow: '0 0 10px rgba(194, 65, 12, 0.22)' },
  { bg: 'rgba(14, 165, 233, 0.22)', text: '#0D0D0D', shadow: '0 0 10px rgba(14, 165, 233, 0.22)' },
  { bg: 'rgba(16, 185, 129, 0.2)', text: '#0D0D0D', shadow: '0 0 10px rgba(16, 185, 129, 0.22)' }
];

function updateSelectionTheme() {
  const selection = window.getSelection();
  const hasText = selection && !selection.isCollapsed && selection.toString().trim().length > 0;

  if (!hasText) {
    document.documentElement.style.setProperty('--selection-bg', 'rgba(29, 78, 216, 0.24)');
    document.documentElement.style.setProperty('--selection-text', '#0D0D0D');
    document.documentElement.style.setProperty('--selection-shadow', '0 0 0 transparent');
    return;
  }

  const palette = selectionPalette[Math.floor(Math.random() * selectionPalette.length)];
  document.documentElement.style.setProperty('--selection-bg', palette.bg);
  document.documentElement.style.setProperty('--selection-text', palette.text);
  document.documentElement.style.setProperty('--selection-shadow', palette.shadow);
}

let idleTimer = null;
let idleActive = false;

function scheduleIdleLogo() {
  if (idleTimer) clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    idleActive = true;
    setLogoIdle(true);
  }, 5000);
}

function handleUserActivity() {
  if (idleActive) {
    idleActive = false;
    setLogoIdle(false);
  }
  scheduleIdleLogo();
}

if (truthModalClose) {
  const closeTruthMode = (event) => {
    if (event) event.preventDefault();
    setTruthModal(false);
  };

  truthModalClose.addEventListener('click', closeTruthMode);
  truthModalClose.addEventListener('pointerdown', closeTruthMode);
}

if (truthModal) {
  truthModal.addEventListener('click', (event) => {
    if (event.target === truthModal) setTruthModal(false);
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && truthModal && truthModal.classList.contains('is-open')) {
    setTruthModal(false);
  }
});

let photoTapCount = 0;

if (truthModeTrigger) {
  truthModeTrigger.addEventListener('click', () => {
    photoTapCount += 1;
    if (photoTapCount >= 7) {
      photoTapCount = 0;
      setTruthModal(true);
    }
  });
}

let freezeTimer = null;
let freezeReleaseTimer = null;
let freezeTriggered = false;

function releaseFreezeMode() {
  if (freezeOverlay) {
    freezeOverlay.classList.remove('is-visible');
    freezeOverlay.setAttribute('aria-hidden', 'true');
  }
  document.body.classList.remove('freeze-mode');
  freezeTriggered = false;
  if (freezeReleaseTimer) {
    clearTimeout(freezeReleaseTimer);
    freezeReleaseTimer = null;
  }
}

function triggerFreezeMode() {
  if (freezeTriggered) return;
  freezeTriggered = true;
  document.body.classList.add('freeze-mode');
  if (freezeOverlay) {
    freezeOverlay.classList.add('is-visible');
    freezeOverlay.setAttribute('aria-hidden', 'false');
  }
  freezeReleaseTimer = setTimeout(releaseFreezeMode, 1600);
}

function startFreezeTimer() {
  if (freezeTimer) clearTimeout(freezeTimer);
  freezeTimer = setTimeout(triggerFreezeMode, 5000);
}

function cancelFreezeTimer() {
  if (freezeTimer) {
    clearTimeout(freezeTimer);
    freezeTimer = null;
  }
}

document.addEventListener('pointermove', handleUserActivity, { passive: true });
document.addEventListener('keydown', handleUserActivity);
document.addEventListener('touchstart', handleUserActivity, { passive: true });
document.addEventListener('wheel', handleUserActivity, { passive: true });
document.addEventListener('scroll', handleUserActivity, { passive: true });
document.addEventListener('selectionchange', updateSelectionTheme);
document.addEventListener('pointerdown', startFreezeTimer);
document.addEventListener('pointerup', cancelFreezeTimer);
document.addEventListener('pointercancel', cancelFreezeTimer);
document.addEventListener('mouseup', cancelFreezeTimer);
document.addEventListener('mouseleave', cancelFreezeTimer);
window.addEventListener('blur', () => {
  handleUserActivity();
  cancelFreezeTimer();
});

if (navLogo) {
  navLogo.addEventListener('click', (event) => {
    if (window.scrollY > 0) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => setMobileMenu(true));
}

if (mobileMenuClose) {
  mobileMenuClose.addEventListener('click', () => setMobileMenu(false));
}

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => setMobileMenu(false));
});

scheduleIdleLogo();

/* ============================================================
   1. CUSTOM CURSOR
============================================================ */
const cursor   = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let followX = mouseX;
let followY = mouseY;

// Snap dot immediately
if (cursor && follower) {
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    gsap.set(cursor, { x: mouseX, y: mouseY });
  });

  // Smooth follower with lerp
  (function followCursor() {
    followX += (mouseX - followX) * 0.1;
    followY += (mouseY - followY) * 0.1;
    gsap.set(follower, { x: followX, y: followY });
    requestAnimationFrame(followCursor);
  })();

  // Scale follower on interactive elements
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      gsap.to(follower, { width: 58, height: 58, opacity: 0.42, background: 'rgba(255,255,255,0.12)', duration: 0.3 });
      gsap.to(cursor,   { scale: 0, duration: 0.3 });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(follower, { width: 38, height: 38, opacity: 0.82, background: 'transparent', duration: 0.3 });
      gsap.to(cursor,   { scale: 1, duration: 0.3 });
    });
  });
}

/* ============================================================
   2. HERO — entrance animation
============================================================ */
const heroTl = gsap.timeline({ paused: true });

// Navbar slides in
heroTl.fromTo('#navbar',
  { y: -24, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
  0
);

// Tag fades up
heroTl.fromTo('#hero-tag',
  { y: 18, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
  0.3
);

// Name lines enter with a soft slide + fade
heroTl.fromTo('.name-line',
  { y: 60, opacity: 0, filter: 'blur(10px)' },
  { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.45, stagger: 0.16, ease: 'power4.out' },
  0.4
);

// Sub tagline
heroTl.fromTo('#hero-sub',
  { y: 22, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
  0.75
);

// Info bar + scroll indicator
heroTl.fromTo(['#hero-info', '#scroll-indicator'],
  { y: 16, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
  0.9
);

function runScramble(el) {
  if (!el) return;
  const finalText = el.textContent;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const duration = 2600;
  const startTime = performance.now();
  const scramble = () => {
    const progress = Math.min((performance.now() - startTime) / duration, 1);
    const revealCount = Math.floor(finalText.length * progress);
    const next = finalText
      .split('')
      .map((ch, i) => {
        if (ch === ' ') return ' ';
        if (i < revealCount) return finalText[i];
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');
    el.textContent = next;
    if (progress < 1) {
      requestAnimationFrame(scramble);
    } else {
      el.textContent = finalText;
    }
  };
  scramble();
}

heroTl.eventCallback('onComplete', () => {
  document.querySelectorAll('.name-line').forEach((line, idx) => {
    setTimeout(() => runScramble(line), idx * 140);
  });
});

const heroNameLines = Array.from(document.querySelectorAll('.hero-name .name-line'));
const heroNameTexts = heroNameLines.map(line => line.textContent);

function applyScrollScramble(el, progress, finalText) {
  if (!el) return;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const revealCount = Math.max(0, Math.min(finalText.length, Math.floor(finalText.length * progress)));
  el.textContent = finalText
    .split('')
    .map((ch, index) => {
      if (ch === ' ') return ' ';
      if (index < revealCount) return finalText[index];
      return chars[Math.floor(Math.random() * chars.length)];
    })
    .join('');
}

if (heroNameLines.length) {
  ScrollTrigger.create({
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
    onUpdate(self) {
      if (self.direction === 1) {
        heroNameLines.forEach((line, index) => {
          applyScrollScramble(line, self.progress, heroNameTexts[index]);
        });
        return;
      }

      heroNameLines.forEach((line, index) => {
        line.textContent = heroNameTexts[index];
      });
    },
    onEnter() {
      heroNameLines.forEach((line, index) => {
        line.textContent = heroNameTexts[index];
      });
    },
    onEnterBack() {
      heroNameLines.forEach((line, index) => {
        line.textContent = heroNameTexts[index];
      });
    },
    onLeaveBack() {
      heroNameLines.forEach((line, index) => {
        line.textContent = heroNameTexts[index];
      });
    },
    onLeave() {
      heroNameLines.forEach((line, index) => {
        line.textContent = heroNameTexts[index];
      });
    }
  });
}

gsap.to('.hero-name', {
  yPercent: -8,
  ease: 'none',
  scrollTrigger: {
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 0.8
  }
});

gsap.to('.hero-sub', {
  yPercent: -4,
  ease: 'none',
  scrollTrigger: {
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 0.8
  }
});

gsap.to('.hero-info', {
  yPercent: -2,
  ease: 'none',
  scrollTrigger: {
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 0.8
  }
});

if (progressFill) {
  gsap.to(progressFill, {
    width: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true
    }
  });
}

/* ============================================================
   3. NAVBAR — hide on scroll down, show on scroll up
============================================================ */
let lastY = 0;
ScrollTrigger.create({
  start: 'top -60',
  onUpdate(self) {
    const y = self.scroll();
    if (y > lastY && y > 80) {
      gsap.to('#navbar', { y: -90, duration: 0.45, ease: 'power2.out' });
    } else {
      gsap.to('#navbar', { y: 0, duration: 0.45, ease: 'power2.out' });
    }
    lastY = y;
  }
});

if (pageLoader && loaderFill) {
  const LOADER_SESSION_KEY = 'portfolio-loader-seen-v1';

  const cleanupLoader = () => {
    if (pageLoader && pageLoader.parentNode) {
      pageLoader.remove();
    }
    body.classList.remove('is-loading');
  };

  const loaderSeen = sessionStorage.getItem(LOADER_SESSION_KEY) === '1';

  if (loaderSeen) {
    cleanupLoader();
    heroTl.play(0);
  } else {
    body.classList.add('is-loading');
    const loaderTl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem(LOADER_SESSION_KEY, '1');
        cleanupLoader();
        heroTl.play(0);
      }
    });

    const roadWidth = loaderRoad ? loaderRoad.clientWidth : 320;
    const carWidth = loaderFill.clientWidth || 64;
    const travelX = Math.max(roadWidth - carWidth - 20, 220);

    loaderTl.fromTo(loaderFill,
      { x: 0, y: 0, rotate: 0 },
      {
        x: travelX,
        y: -1,
        rotate: 0.4,
        duration: 1.35,
        ease: 'power1.inOut'
      }
    ).to(pageLoader, { yPercent: -100, duration: 0.8, ease: 'power4.inOut' }, '+=0.35');
  }

  window.addEventListener('pageshow', () => {
    if (sessionStorage.getItem(LOADER_SESSION_KEY) === '1') {
      cleanupLoader();
    }
  });
} else {
  heroTl.play(0);
}

/* ============================================================
   4. SCROLL REVEAL — generic .reveal-up elements
============================================================ */
gsap.utils.toArray('.reveal-up').forEach(el => {
  gsap.fromTo(el,
    { y: 48, opacity: 0 },
    {
      y: 0, opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true
      }
    }
  );
});

/* ============================================================
   5. SECTION TITLES — slide in from left
============================================================ */
gsap.utils.toArray('.section-title').forEach(el => {
  gsap.fromTo(el,
    { x: -40, opacity: 0 },
    {
      x: 0, opacity: 1,
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true
      }
    }
  );
});

/* ============================================================
   6. ABOUT TEXT — stagger paragraphs
============================================================ */
gsap.fromTo('.about-text',
  { y: 36, opacity: 0 },
  {
    y: 0, opacity: 1,
    duration: 0.9,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.about-grid',
      start: 'top 80%',
      once: true
    }
  }
);

/* ============================================================
   7. PROJECTS LIST — stagger rows
============================================================ */
gsap.fromTo('.project-item',
  { y: 32, opacity: 0 },
  {
    y: 0, opacity: 1,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.projects-list',
      start: 'top 80%',
      once: true
    }
  }
);

/* ============================================================
   8. PROJECT HOVER IMAGE — follows mouse
============================================================ */
if (window.matchMedia('(pointer: fine)').matches) {
  document.querySelectorAll('.project-item').forEach(item => {
    const hoverImg = item.querySelector('.project-hover-img');
    if (!hoverImg) return;

    // Move preview to body so parent transforms/z-index cannot trap it.
    if (hoverImg.parentElement !== document.body) {
      document.body.appendChild(hoverImg);
    }

    let previewWidth = hoverImg.offsetWidth || 300;
    let previewHeight = hoverImg.offsetHeight || 210;

    gsap.set(hoverImg, {
      x: -9999,
      y: -9999,
      opacity: 0,
      scale: 0.92,
      rotation: -2
    });

    const movePreviewX = gsap.quickTo(hoverImg, 'x', {
      duration: 0.14,
      ease: 'power3.out'
    });

    const movePreviewY = gsap.quickTo(hoverImg, 'y', {
      duration: 0.14,
      ease: 'power3.out'
    });

    const updatePreviewSize = () => {
      previewWidth = hoverImg.offsetWidth || 300;
      previewHeight = hoverImg.offsetHeight || 210;
    };

    const showPreview = () => {
      updatePreviewSize();
      hoverImg.classList.add('is-visible');
      gsap.to(hoverImg, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.18,
        ease: 'power2.out'
      });
    };

    const hidePreview = () => {
      hoverImg.classList.remove('is-visible');
      gsap.to(hoverImg, {
        opacity: 0,
        scale: 0.92,
        rotation: -2,
        duration: 0.16,
        ease: 'power2.in',
        onComplete: () => {
          if (!hoverImg.classList.contains('is-visible')) {
            gsap.set(hoverImg, { x: -9999, y: -9999 });
          }
        }
      });
    };

    item.addEventListener('mouseenter', showPreview);

    item.addEventListener('mousemove', e => {
      const offset = 18;
      const minX = 10;
      const minY = 10;
      const maxX = window.innerWidth - previewWidth - 10;
      const maxY = window.innerHeight - previewHeight - 10;

      const targetX = Math.min(Math.max(e.clientX + offset, minX), maxX);
      const targetY = Math.min(Math.max(e.clientY + offset, minY), maxY);

      movePreviewX(targetX);
      movePreviewY(targetY);
    });

    item.addEventListener('mouseleave', hidePreview);
    window.addEventListener('resize', updatePreviewSize);
    window.addEventListener('blur', hidePreview);
  });
}

/* ============================================================
   9. SKILLS — stagger groups then items
============================================================ */
gsap.fromTo('.skill-group',
  { y: 36, opacity: 0 },
  {
    y: 0, opacity: 1,
    duration: 0.8,
    stagger: 0.12,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.skills-grid',
      start: 'top 78%',
      once: true
    }
  }
);

gsap.fromTo('.skill-list li',
  { x: -12, opacity: 0 },
  {
    x: 0, opacity: 1,
    duration: 0.5,
    stagger: 0.04,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.skills-grid',
      start: 'top 72%',
      once: true
    }
  }
);

/* ============================================================
   10. CONTACT — big headline reveal
============================================================ */
gsap.fromTo('.contact-headline',
  { y: 60, opacity: 0 },
  {
    y: 0, opacity: 1,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 78%',
      once: true
    }
  }
);

gsap.fromTo('.contact-email',
  { y: 24, opacity: 0 },
  {
    y: 0, opacity: 1,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.contact-email',
      start: 'top 88%',
      once: true
    }
  }
);

gsap.fromTo('.social-link',
  { y: 16, opacity: 0 },
  {
    y: 0, opacity: 1,
    duration: 0.6,
    stagger: 0.07,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.socials',
      start: 'top 90%',
      once: true
    }
  }
);

/* ============================================================
   11.5 ABOUT PHOTO — entrance, parallax and hover tilt
============================================================ */
const aboutPhotoWrap = document.querySelector('.about-photo-wrap');
const aboutPhoto = document.querySelector('.about-photo-wrap img');

if (aboutPhotoWrap && aboutPhoto) {
  gsap.fromTo(aboutPhotoWrap,
    { y: 48, opacity: 0, rotate: -3, scale: 0.92 },
    {
      y: 0,
      opacity: 1,
      rotate: 0,
      scale: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: aboutPhotoWrap,
        start: 'top 82%',
        once: true
      }
    }
  );

  gsap.to(aboutPhoto,
    {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: '#about',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.8
      }
    }
  );

  if (window.matchMedia('(pointer: fine)').matches) {
    aboutPhotoWrap.addEventListener('mousemove', (e) => {
      const rect = aboutPhotoWrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 10;
      const rotateX = (0.5 - y) * 10;

      gsap.to(aboutPhoto, {
        rotateX,
        rotateY,
        scale: 1.035,
        transformPerspective: 900,
        transformOrigin: 'center',
        duration: 0.35,
        ease: 'power2.out'
      });
    });

    aboutPhotoWrap.addEventListener('mouseleave', () => {
      gsap.to(aboutPhoto, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.45,
        ease: 'power3.out'
      });
    });
  }
}

/* ============================================================
   12. SECTION NUMBER labels — fade in
============================================================ */
gsap.utils.toArray('.section-num').forEach(el => {
  gsap.fromTo(el,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true
      }
    }
  );
});

/* ============================================================
  13. FOOTER — simple fade
============================================================ */
gsap.fromTo('footer',
  { opacity: 0 },
  {
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: 'footer',
      start: 'top 95%',
      once: true
    }
  }
);

/* ============================================================
   14. SCROLLY STORY LAYER — stable section narrative
============================================================ */
gsap.utils.toArray('section').forEach((section, index) => {
  if (index === 0) return;

  gsap.fromTo(section,
    { y: 38, opacity: 0.82 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        once: true
      }
    }
  );
});

function updateBackToHeroVisibility() {
  if (!backToHeroBtn) return;

  const sectionThree = getSectionThreeElement();
  const threshold = sectionThree
    ? sectionThree.offsetTop - window.innerHeight * 0.35
    : window.innerHeight * 1.4;
  const shouldShow = window.scrollY >= threshold;

  backToHeroBtn.classList.toggle('is-visible', shouldShow);
  backToHeroBtn.setAttribute('aria-hidden', shouldShow ? 'false' : 'true');
}

if (backToHeroBtn) {
  window.addEventListener('scroll', updateBackToHeroVisibility, { passive: true });
  window.addEventListener('resize', updateBackToHeroVisibility);
  updateBackToHeroVisibility();

  backToHeroBtn.addEventListener('click', () => {
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

if (copyEmailLink && copyToast) {
  copyEmailLink.addEventListener('click', async (event) => {
    event.preventDefault();
    const value = copyEmailLink.getAttribute('data-copy-text') || copyEmailLink.textContent.trim();
    try {
      await navigator.clipboard.writeText(value);
      copyToast.classList.add('is-visible');
      copyToast.textContent = 'Copied';
      clearTimeout(copyToast._hideTimer);
      copyToast._hideTimer = setTimeout(() => {
        copyToast.classList.remove('is-visible');
      }, 1400);
    } catch (error) {
      window.location.href = `mailto:${value}`;
    }
  });
}

document.querySelectorAll('.project-link-transition').forEach(link => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href || href === '#' || href.startsWith('mailto:') || href.startsWith('tel:')) return;
    event.preventDefault();
    if (!pageTransition) {
      window.location.href = href;
      return;
    }
    gsap.to(pageTransition, {
      yPercent: 0,
      duration: 0.65,
      ease: 'power3.inOut',
      onComplete: () => {
        window.location.href = href;
      }
    });
  });
});
