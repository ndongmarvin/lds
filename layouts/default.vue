<template>
  <div class="app-layout">
    <!-- NAVIGATION - Apple Style -->
    <nav class="navbar" :class="{ 'scrolled': isScrolled }">
      <div class="container-nav">
        <router-link to="/" class="logo">
          <span class="logo-text">LDS</span>
        </router-link>
        
        <!-- Desktop Navigation -->
        <ul class="nav-links">
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="#fruits">Fruits</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
        
        <!-- Mobile Menu Button -->
        <button 
          class="mobile-menu-button" 
          @click="toggleMobileMenu"
          :class="{ 'active': isMobileMenuOpen }"
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div class="mobile-menu" :class="{ 'open': isMobileMenuOpen }">
        <ul class="mobile-nav-links">
          <li><router-link to="/" @click="closeMobileMenu">Accueil</router-link></li>
          <li><router-link to="#fruits" @click="closeMobileMenu">Fruits</router-link></li>
          <li><router-link to="/contact" @click="closeMobileMenu">Contact</router-link></li>
        </ul>
      </div>
    </nav>

    <!-- MAIN CONTENT -->
    <main class="main-content">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Column 1: Logo & Description -->
          <div class="footer-column footer-about">
            <div class="footer-logo-wrapper">
              <span class="footer-logo-icon">🥭</span>
              <span class="footer-logo-text">Excellence<span class="footer-accent">Fruits</span></span>
            </div>
            <p class="footer-description">Votre partenaire de confiance pour l'exportation de fruits tropicaux premium d'Afrique vers le monde entier.</p>
            <div class="footer-badges">
              <span class="badge">🌱 100% Bio</span>
              <span class="badge">✈️ Export Mondial</span>
              <span class="badge">✓ GlobalGAP</span>
            </div>
          </div>

          <!-- Column 2: Nos Produits -->
          <div class="footer-column">
            <h3 class="footer-title">Nos Fruits</h3>
            <ul class="footer-list">
              <li><a href="/about">Mangues Premium</a></li>
              <li><a href="/about">Ananas Golden</a></li>
              <li><a href="/about">Bananes Bio</a></li>
              <li><a href="/about">Avocats Hass</a></li>
              <li><a href="/about">Papayes</a></li>
              <li><a href="/about">Fruits de la Passion</a></li>
            </ul>
          </div>

          <!-- Column 3: Services -->
          <div class="footer-column">
            <h3 class="footer-title">Services</h3>
            <ul class="footer-list">
              <li><a href="/inspections">Export en Gros</a></li>
              <li><a href="/inspections">Commandes Sur Mesure</a></li>
              <li><a href="/inspections">Contrats Long Terme</a></li>
              <li><a href="/inspections">Logistique Express</a></li>
              <li><a href="/inspections">Certification & Traçabilité</a></li>
            </ul>
          </div>

          <!-- Column 4: Contact -->
          <div class="footer-column">
            <h3 class="footer-title">Contact</h3>
            <ul class="footer-list footer-contact">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Dakar, Sénégal</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>+221 33 XXX XX XX</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>contact@excellencefruits.com</span>
              </li>
            </ul>
            <div class="footer-social">
              <a href="#" aria-label="WhatsApp" class="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" class="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="4" cy="4" r="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" class="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom">
          <p>&copy; 2026 Excellence Fruits - Export de fruits premium d'Afrique</p>
          <div class="footer-legal-links">
            <a href="#mentions">Mentions légales</a>
            <span class="separator">•</span>
            <a href="#confidentialite">CGV</a>
            <span class="separator">•</span>
            <a href="#confidentialite">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AppLayout',
  data() {
    return {
      isMobileMenuOpen: false,
      isScrolled: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      // Prevent body scroll when menu is open
      if (this.isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
      document.body.style.overflow = '';
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    }
  },
  watch: {
    '$route'() {
      // Scroll to top on route change
      window.scrollTo(0, 0);
      // Close mobile menu on route change
      this.closeMobileMenu();
    }
  },
  mounted() {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
    
    // Scroll listener
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    // Clean up body overflow on component unmount
    document.body.style.overflow = '';
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-layout {
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif;
  background: #ffffff;
  color: #1d1d1f;
  line-height: 1.47059;
  font-weight: 400;
  letter-spacing: -0.022em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* CONTAINER */
.container {
  max-width: 980px;
  margin: 0 auto;
  padding: 0 22px;
}

/* NAVIGATION - Apple Green Style */
.navbar {
  position: sticky;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: saturate(180%) blur(30px);
  -webkit-backdrop-filter: saturate(180%) blur(30px);
  z-index: 9999;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar.scrolled {
  background: rgba(0, 0, 0, 1);
  border-bottom-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
}

.navbar .container-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo:hover {
  transform: scale(1.05);
}

.logo-text {
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.04em;
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 48px;
  align-items: center;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.01em;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 0;
  height: 2px;
  background: #25D366;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-links a:hover {
  color: #ffffff;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-links a.router-link-active {
  color: #ffffff;
}

.nav-links a.router-link-active::after {
  width: 100%;
}

/* MOBILE MENU BUTTON */
.mobile-menu-button {
  display: none; /* Caché par défaut sur desktop */
  flex-direction: column;
  gap: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 1001;
}

.mobile-menu-button span {
  width: 28px;
  height: 3px;
  background: #f5f5f7;
  border-radius: 3px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.mobile-menu-button.active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.mobile-menu-button.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-button.active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* MOBILE MENU */
.mobile-menu {
  position: fixed;
  top: 48px;
  left: 0;
  right: 0;
  height: calc(100vh - 48px);
  background: rgba(13, 31, 24, 0.98);
  backdrop-filter: blur(20px);
  transform: translateX(100%);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
  z-index: 999;
  padding: 20px 0;
}

.mobile-menu.open {
  transform: translateX(0);
}

.mobile-nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.mobile-nav-links li {
  border-bottom: 1px solid rgba(37, 211, 102, 0.1);
  width: 100%;
}

.mobile-nav-links a {
  display: block;
  color: #f5f5f7;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 16px 32px;
  transition: all 0.3s ease;
}

.mobile-nav-links a:hover,
.mobile-nav-links a.router-link-active {
  color: #25D366;
  background: rgba(37, 211, 102, 0.05);
  padding-left: 40px;
}

.mobile-nav-links .cta-nav {
  margin: 16px 32px;
  text-align: center;
  border-radius: 980px;
}

/* MAIN CONTENT */
.main-content {
  flex: 1;
  padding-top: 0px;
}

/* FOOTER */
.footer {
  margin-top: auto;
  padding: 80px 0 0;
  background: linear-gradient(180deg, #1b5e20 0%, #2e7d32 100%);
  color: #ffffff;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.footer-column {
  display: flex;
  flex-direction: column;
}

.footer-about {
  max-width: 100%;
}

.footer-logo-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.footer-logo-icon {
  font-size: 32px;
}

.footer-logo-text {
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
}

.footer-accent {
  font-weight: 800;
}

.footer-description {
  font-size: 14px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 20px;
}

.footer-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.badge {
  display: inline-block;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  backdrop-filter: blur(10px);
}

.footer-social {
  display: flex;
  gap: 12px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #ffffff;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.social-link svg {
  width: 18px;
  height: 18px;
}

.footer-title {
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 24px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-list li {
  display: flex;
  align-items: flex-start;
}

.footer-list a {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  font-size: 14px;
  line-height: 1.6;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 0;
}

.footer-list a:hover {
  color: #ffffff;
  padding-left: 8px;
}

.footer-contact li {
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 14px;
}

.footer-contact svg {
  flex-shrink: 0;
  opacity: 0.8;
}

/* FOOTER BOTTOM */
.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 32px 0;
  text-align: center;
}

.footer-bottom p {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.footer-legal-links {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
}

.footer-legal-links a {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-legal-links a:hover {
  color: #ffffff;
}

.footer-legal-links .separator {
  color: rgba(255, 255, 255, 0.3);
  font-weight: 300;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .container {
    padding: 0 32px;
  }

  .nav-links {
    display: none;
  }
  
  .mobile-menu-button {
    display: flex;
  }

  .main-content {
    padding-top: 72px;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 24px;
  }

  .navbar .nav-links,
  .navbar .nav-actions {
    display: none;
  }

  .mobile-menu-button {
    display: flex;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .footer-about {
    text-align: center;
  }

  .footer-column {
    text-align: center;
  }

  .footer-logo {
    margin: 0 auto 20px;
  }

  .footer-social {
    justify-content: center;
  }

  .footer-list {
    align-items: center;
  }

  .footer-contact li {
    justify-content: center;
  }

  .footer-bottom {
    gap: 10px;
    padding: 28px 0;
  }

  .footer-bottom p {
    font-size: 12px;
  }

  .footer-legal-links {
    font-size: 11px;
  }
}

@media (max-width: 640px) {
  .container {
    padding: 0 24px;
  }

  .navbar .container-nav {
    height: 48px;
  }

  .logo {
    font-size: 18px;
  }
  
  .logo-image {
    height: 24px;
  }

  .mobile-menu {
    top: 48px;
    height: calc(100vh - 48px);
    padding: 24px 0 60px;
  }

  .main-content {
    padding-top: 48px;
  }


  .footer-logo {
    height: 40px;
  }

  .mobile-nav-links a {
    font-size: 18px;
    padding: 14px 24px;
  }

  .mobile-nav-links a:hover,
  .mobile-nav-links a.router-link-active {
    padding-left: 40px;
  }

  .footer {
    padding: 48px 0 0;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
    padding-bottom: 32px;
  }

  .footer-about {
    grid-column: 1;
    max-width: 100%;
    text-align: center;
  }

  .footer-column {
    text-align: center;
  }

  /* Hide contact column on mobile */
  .footer-column:not(.footer-about) {
    display: none;
  }

  .footer-logo {
    height: 50px;
    width: auto;
    margin: 0 auto 16px;
  }

  .footer-description {
    text-align: center;
    font-size: 13px;
    line-height: 1.6;
    margin-bottom: 24px;
    padding: 0 10px;
  }

  .footer-social {
    justify-content: center;
    gap: 16px;
  }

  .social-link {
    width: 44px;
    height: 44px;
  }

  .social-link svg {
    width: 20px;
    height: 20px;
  }

  .footer-bottom {
    gap: 8px;
    padding: 24px 0;
    flex-direction: column;
    align-items: center;
  }

  .footer-bottom p {
    font-size: 11px;
    line-height: 1.4;
    padding: 0 10px;
  }

  .footer-legal-links {
    font-size: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-legal-links .separator {
    margin: 0 6px;
  }

  .footer-legal-links a {
    white-space: nowrap;
  }
}
</style>