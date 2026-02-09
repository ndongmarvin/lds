<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero-bg-image"></div>
      <div class="hero-overlay"></div>
      <div class="container-hero">
        <div class="hero-content">
          <h1 class="hero-title">Fruits d'Afrique</h1>
          <p class="hero-subtitle">Export vers le monde</p>
          <div class="hero-actions">
            <a href="#contact" class="btn-primary large">
              Contacter
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="fruits" class="products-section">
      <div class="container-wide">
        <h2 class="section-title-large">Nos fruits</h2>
        
        <div class="fruits-gallery">
          <div class="fruit-card">
            <div class="fruit-image-container">
              <img src="/mangues.png" alt="Mangues" class="fruit-image">
            </div>
            <h3 class="fruit-name">Mangues</h3>
          </div>
          
          <div class="fruit-card">
            <div class="fruit-image-container">
              <img src="/ananas.png" alt="Ananas" class="fruit-image">
            </div>
            <h3 class="fruit-name">Ananas</h3>
          </div>
          
          <div class="fruit-card">
            <div class="fruit-image-container">
              <img src="/avocado.png" alt="Avocats" class="fruit-image">
            </div>
            <h3 class="fruit-name">Avocats</h3>
          </div>
          
          <div class="fruit-card">
            <div class="fruit-image-container">
              <img src="/pommes.png" alt="Pommes" class="fruit-image">
            </div>
            <h3 class="fruit-name">Pommes</h3>
          </div>
        </div>
      </div>
    </section>

    <section class="image-text-section">
      <div class="container-split">
        <div class="split-image">
          <img src="/home/controle-qualite.jpg" alt="Qualité" class="full-image">
        </div>
        <div class="split-text">
          <h2 class="split-title">Qualité</h2>
          <p class="split-desc">Sélection rigoureuse. Contrôle à chaque étape.</p>
        </div>
      </div>
    </section>

    <section class="image-text-section reverse">
      <div class="container-split">
        <div class="split-text">
          <h2 class="split-title">Export</h2>
          <p class="split-desc">Livraison mondiale</p>
        </div>
        <div class="split-image">
          <img src="/home/transport.png" alt="Transport" class="full-image">
        </div>
      </div>
    </section>

    <section class="partners-section">
      <div class="container">
        <div class="partners-grid">
          <img src="/partners/unesco.png" alt="UNESCO" class="partner-logo">
          <img src="/partners/unicef.png" alt="UNICEF" class="partner-logo">
          <img src="/partners/sn.png" alt="Sénégal" class="partner-logo">
        </div>
      </div>
    </section>

    <section id="contact" class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Contact</h2>
          <a href="mailto:contact@excellencefruits.com" class="btn-primary large">
            Email
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  head() {
    return {
      title: 'Excellence Fruits - Export de Fruits Premium d\'Afrique',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Export de fruits tropicaux premium d\'Afrique. Certification GlobalGAP. Livraison 48-72h.'
        }
      ]
    }
  },
  data() {
    return {
      featuredFruits: [
        {
          name: 'Mangues Premium',
          description: 'Variétés Kent et Keitt. Récoltées à maturité optimale.',
          price: 'Sur devis',
          origin: '🇸🇳 Casamance',
          image: '/home/pexels-rdne-8500302.jpg'
        },
        {
          name: 'Ananas Golden',
          description: 'Saveur exceptionnelle. Disponible toute l\'année.',
          price: 'Sur devis',
          origin: '🇸🇳 Thiès',
          image: '/home/pexels-max-fischer-5212345.jpg'
        }
      ],
      otherFruits: [
        {
          name: 'Bananes Bio',
          price: 'Sur devis',
          image: '/home/rapport.jpg'
        },
        {
          name: 'Papayes',
          price: 'Sur devis',
          image: '/home/pexels-cottonbro-8369218.jpg'
        },
        {
          name: 'Avocats Hass',
          price: 'Sur devis',
          image: '/home/pexels-cottonbro-8370966.jpg'
        },
        {
          name: 'Fruits de la Passion',
          price: 'Sur devis',
          image: '/home/pexels-rdne-8500309.jpg'
        }
      ],
      testimonials: [
        {
          text: 'Excellente qualité et livraison rapide. Les mangues arrivent toujours fraîches et parfaitement mûres. Un partenaire fiable pour notre chaîne de supermarchés.',
          author: 'Jean-Marc Dubois',
          role: 'Directeur des Achats, Carrefour France'
        },
        {
          text: 'Nous travaillons avec Excellence Fruits depuis 3 ans. La traçabilité et les certifications nous rassurent totalement. Service impeccable.',
          author: 'Maria Santos',
          role: 'Responsable Import, Mercadona Espagne'
        },
        {
          text: 'Prix compétitifs et qualité constante. Le service client est réactif et professionnel. Je recommande vivement Excellence Fruits.',
          author: 'Ahmed Al-Rashid',
          role: 'CEO, Dubai Fresh Market'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

html {
  scroll-behavior: smooth;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --color-text-primary: #1d1d1f;
  --color-text-secondary: #86868b;
  --color-bg: #ffffff;
  --color-bg-secondary: #f5f5f7;
  --color-accent: #25D366;
  --color-accent-dark: #128C7E;
  --color-accent-light: #DCF8C6;
  --color-dark: #000000;
  --font-system: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", sans-serif;
  --transition-standard: cubic-bezier(0.4, 0, 0.2, 1);
}

.home-page {
  background: #ffffff;
}

body {
  font-family: var(--font-system);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-text-primary);
  background: var(--color-bg);
}

.container {
  max-width: 980px;
  margin: 0 auto;
  padding: 0 22px;
}

.container-hero {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.container-wide {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 22px;
}

/* Hero Section - Apple Green Style */
.hero {
  padding: 60px 0 40px;
  text-align: center;
  overflow: hidden;
  position: relative;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/home/hero.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(26, 61, 46, 0.85) 0%, rgba(13, 31, 24, 0.92) 100%);
  z-index: 1;
}

.container-hero {
  position: relative;
  z-index: 2;
}

.hero-content {
  padding: 0 0 40px;
  max-width: 980px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: rgba(37, 211, 102, 0.15);
  border: 1px solid rgba(37, 211, 102, 0.3);
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
  color: #25D366;
  margin-bottom: 20px;
  animation: slideDown 0.6s ease;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  font-size: clamp(64px, 10vw, 120px);
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.04em;
  color: #ffffff;
  margin: 0 0 20px;
  animation: fadeInUp 0.8s ease 0.2s both;
}

.hero-subtitle {
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 400;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 48px;
  animation: fadeInUp 0.8s ease 0.4s both;
  letter-spacing: -0.01em;
}

.hero-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease 0.6s both;
}

.hero-stats-mini {
  display: flex;
  gap: 48px;
  justify-content: center;
  margin-top: 60px;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease 0.8s both;
}

.stat-mini {
  font-size: 17px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
  letter-spacing: -0.01em;
}

.stat-mini strong {
  font-size: 28px;
  font-weight: 600;
  color: #25D366;
  margin-right: 8px;
  letter-spacing: -0.02em;
}

/* Buttons - Apple Green Style */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: #25D366;
  color: #ffffff;
  text-decoration: none;
  border-radius: 980px;
  font-size: 17px;
  font-weight: 400;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: none;
  letter-spacing: -0.01em;
}

.btn-primary:hover {
  background: #20B858;
  transform: scale(1.01);
}

.btn-primary.large {
  padding: 16px 32px;
  font-size: 19px;
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: transparent;
  color: #25D366;
  text-decoration: none;
  border-radius: 980px;
  border: 2px solid rgba(37, 211, 102, 0.4);
  font-size: 17px;
  font-weight: 400;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  letter-spacing: -0.01em;
}

.btn-secondary:hover {
  border-color: #25D366;
  background: rgba(37, 211, 102, 0.1);
}

.btn-secondary.large {
  padding: 16px 32px;
  font-size: 19px;
}

/* Hero Image - Apple Style */
.hero-image-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
}

.hero-image {
  width: 100%;
  height: 600px;
  object-fit: cover;
  border-radius: 0;
  display: block;
  animation: fadeInUp 0.8s ease 0.6s both;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%);
}

/* Announcement - Apple Green Style */
.announcement-whatsapp {
  padding: 12px 0;
  background: #f5f5f7;
  text-align: center;
  border-bottom: none;
}

.announcement-text-whatsapp {
  font-size: 17px;
  line-height: 1.5;
  font-weight: 900;
  color: #1d1d1f;
  margin: 0;
  letter-spacing: -0.01em;
}

/* Feature Sections - Apple Green Style */
.feature-whatsapp {
  padding: 120px 0;
  background: linear-gradient(180deg, #0d1f18 0%, #1a3d2e 100%);
}

.feature-whatsapp.dark-bg {
  background: linear-gradient(180deg, #1a3d2e 0%, #0d1f18 100%);
}

.container-feature {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 40px;
}

.feature-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.feature-grid.reverse {
  direction: rtl;
}

.feature-grid.reverse .feature-text {
  direction: ltr;
}

.feature-text {
  text-align: left;
}

.feature-label {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: #25D366;
  margin-bottom: 12px;
  padding: 0;
  background: transparent;
  border-radius: 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.feature-title-whatsapp {
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: #f5f5f7;
  margin: 0 0 20px;
}

.feature-title-whatsapp.white {
  color: #f5f5f7;
}

.feature-desc-whatsapp {
  font-size: 21px;
  font-weight: 400;
  line-height: 1.4;
  color: #a1a1a6;
  margin: 0 0 24px;
  letter-spacing: -0.01em;
}

.feature-desc-whatsapp.white {
  color: #a1a1a6;
}

.feature-highlights {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 17px;
  color: #f5f5f7;
  font-weight: 400;
  letter-spacing: -0.01em;
}

.highlight-item svg {
  flex-shrink: 0;
  stroke: #25D366;
}

.feature-image-block {
  width: 100%;
  position: relative;
}

.feature-img-whatsapp {
  width: 100%;
  height: auto;
  max-height: 600px;
  object-fit: cover;
  border-radius: 18px;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-grid:hover .feature-img-whatsapp {
  transform: scale(1.01);
}

.stats-inline,
.stats-inline-enhanced {
  display: flex;
  gap: 60px;
  margin-top: 40px;
}

.stat-inline-item {
  text-align: left;
}

.stat-inline-number {
  font-size: 56px;
  font-weight: 700;
  line-height: 1;
  color: #25D366;
  margin-bottom: 8px;
  letter-spacing: -0.03em;
  text-shadow: 0 0 30px rgba(37, 211, 102, 0.4);
}

.stat-inline-label {
  font-size: 17px;
  font-weight: 400;
  color: #a1a1a6;
  letter-spacing: -0.01em;
}

/* Section Headers - Impactful */
.section-eyebrow {
  display: inline-block;
  font-size: 15px;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #25D366;
  margin: 0 0 16px;
}

.section-title {
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #1d1d1f;
  margin: 0 0 16px;
}

.section-description {
  font-size: clamp(17px, 2.5vw, 20px);
  font-weight: 400;
  line-height: 1.5;
  color: #667781;
  max-width: 700px;
  margin: 0 auto;
}

.section-subtitle {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: #667781;
  margin-top: 16px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Products Section - Apple Minimal Style */
.products-section {
  padding: 240px 0;
  background: #ffffff;
  text-align: center;
}

.section-title-large {
  font-size: clamp(64px, 10vw, 120px);
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.04em;
  color: #1d1d1f;
  margin: 0 0 160px;
}

/* Fruits Gallery - Minimal Grid */
.fruits-gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.fruit-card {
  background: transparent;
  border: none;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.fruit-card:hover {
  transform: translateY(-12px);
}

.fruit-image-container {
  width: 100%;
  height: 320px;
  margin-bottom: 32px;
  overflow: hidden;
  border-radius: 20px;
  background: #fafafa;
}

.fruit-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.fruit-card:hover .fruit-image {
  transform: scale(1.08);
}

.fruit-name {
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  color: #1d1d1f;
  margin: 0;
  letter-spacing: -0.02em;
}

/* Image Text Sections - Minimal Split */
.image-text-section {
  padding: 0;
  background: #ffffff;
  position: relative;
  margin: 120px 0;
}

.image-text-section:first-of-type {
  margin-top: 0;
}

.image-text-section:last-of-type {
  margin-bottom: 0;
}

.image-text-section.reverse .container-split {
  flex-direction: row-reverse;
}

.container-split {
  display: flex;
  align-items: stretch;
  min-height: 700px;
  gap: 0;
}

.split-image {
  flex: 1;
  height: 700px;
  overflow: hidden;
  position: relative;
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
}

.full-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 24px;
}

.image-text-section:hover .full-image {
  transform: scale(1.05);
}

.split-text {
  flex: 1;
  padding: 120px 140px;
  background: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.split-title {
  font-size: clamp(56px, 8vw, 96px);
  font-weight: 600;
  line-height: 0.95;
  letter-spacing: -0.04em;
  color: #ffffff;
  margin: 0 0 40px;
}

.split-desc {
  font-size: 24px;
  font-weight: 400;
  line-height: 1.3;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  letter-spacing: -0.02em;
}

/* Partners Section - Minimal */
.partners-section {
  padding: 240px 0;
  background: #ffffff;
  text-align: center;
}

.partners-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  flex-wrap: wrap;
}

.partner-logo {
  height: 48px;
  width: auto;
  opacity: 0.4;
  transition: opacity 0.3s ease;
  filter: grayscale(100%);
}

.partner-logo:hover {
  opacity: 0.8;
}

/* Why Section - Apple Green Style */
.why-section {
  padding: 110px 0;
  background: linear-gradient(180deg, #0d1f18 0%, #1a3d2e 100%);
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.why-card {
  background: rgba(37, 211, 102, 0.08);
  padding: 48px 32px;
  border-radius: 18px;
  text-align: center;
  border: 1px solid rgba(37, 211, 102, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(20px);
}

.why-card:hover {
  transform: translateY(-4px);
  background: rgba(37, 211, 102, 0.12);
  border-color: rgba(37, 211, 102, 0.4);
  box-shadow: 0 8px 32px rgba(37, 211, 102, 0.25);
}

.why-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 24px;
  background: rgba(37, 211, 102, 0.2);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #25D366;
}

.why-icon svg {
  width: 32px;
  height: 32px;
}

.why-title {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  color: #f5f5f7;
  margin: 0 0 12px;
  letter-spacing: -0.02em;
}

.why-description {
  font-size: 17px;
  font-weight: 400;
  line-height: 1.4;
  color: #f5f5f7;
  margin: 0;
  letter-spacing: -0.01em;
}

/* Services Section - Apple Green Clean */
.services-section {
  padding: 120px 0;
  background: linear-gradient(180deg, #f5f5f7 0%, #e8e8ed 100%);
}

.services-stack {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.service-card-large {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  background: #ffffff;
  border: none;
  border-radius: 18px;
  padding: 60px;
  min-height: 450px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.service-card-large:hover {
  box-shadow: 0 12px 40px rgba(37, 211, 102, 0.15);
  transform: scale(1.01);
}

.service-card-large.reverse {
  direction: rtl;
}

.service-card-large.reverse .service-content {
  direction: ltr;
}

.service-badge {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(37, 211, 102, 0.1);
  border: 1px solid rgba(37, 211, 102, 0.2);
  border-radius: 100px;
  font-size: 13px;
  font-weight: 600;
  color: #128C7E;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.service-content {
  text-align: left;
}

.service-title {
  font-size: 36px;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.01em;
  color: #1d1d1f;
  margin: 0 0 16px;
}

.service-text {
  font-size: 17px;
  font-weight: 400;
  line-height: 1.6;
  color: #667781;
  margin: 0 0 24px;
}

.service-features {
  list-style: none;
  margin: 0 0 32px 0;
  padding: 0;
}

.service-features li {
  font-size: 16px;
  line-height: 2;
  color: #667781;
  padding-left: 24px;
  position: relative;
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #25D366;
  font-weight: 600;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 17px;
  font-weight: 500;
  color: #25D366;
  text-decoration: none;
  transition: all 0.2s ease;
}

.service-link:hover {
  gap: 12px;
}

.service-link:hover svg {
  transform: translateX(4px);
}

.service-link svg {
  transition: transform 0.2s ease;
}

.service-image-wrapper {
  width: 100%;
  height: 380px;
  overflow: hidden;
  border-radius: 16px;
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card-large:hover .service-image {
  transform: scale(1.05);
}

/* Testimonials - Apple Green Style */
.testimonials-section {
  padding: 120px 0;
  background: linear-gradient(180deg, #e8e8ed 0%, #f5f5f7 100%);
}

.testimonials-carousel {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.testimonial-slide {
  padding: 40px 0;
}

.testimonial-quote {
  font-size: 24px;
  font-weight: 400;
  line-height: 1.4;
  color: #1d1d1f;
  margin: 0 0 32px;
}

.testimonial-author {
  margin-top: 24px;
}

.author-name {
  font-size: 17px;
  font-weight: 500;
  color: #1d1d1f;
  margin: 0 0 4px;
}

.author-role {
  font-size: 14px;
  color: #667781;
  margin: 0;
}

/* Certifications - Apple Green Style */
.certifications-section {
  padding: 80px 0;
  background: linear-gradient(180deg, #f5f5f7 0%, #e8e8ed 100%);
  text-align: center;
}

.cert-text {
  font-size: 17px;
  color: #6e6e73;
  margin: 0 0 40px;
  letter-spacing: -0.01em;
}

.cert-logos-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  flex-wrap: wrap;
}

.cert-logo {
  height: 60px;
  width: auto;
  opacity: 0.5;
  filter: grayscale(100%);
  transition: all 0.2s ease;
}

.cert-logo:hover {
  opacity: 1;
  filter: grayscale(0%);
}

/* CTA Section - Minimal Style */
.cta-section {
  padding: 280px 0;
  background: #000000;
  text-align: center;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-size: clamp(64px, 10vw, 120px);
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.04em;
  color: #ffffff;
  margin: 0 0 100px;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.contact-info-minimal {
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.contact-info-minimal p {
  font-size: 14px;
  color: #a1a1a6;
  margin: 8px 0;
  letter-spacing: -0.01em;
}

/* Responsive - WhatsApp Clean */
@media (max-width: 1068px) {
  .service-card-large {
    grid-template-columns: 1fr;
    padding: 40px;
    min-height: auto;
  }
  
  .service-card-large.reverse {
    direction: ltr;
  }
  
  .service-content {
    text-align: center;
  }
}

@media (max-width: 900px) {
  .feature-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .feature-grid.reverse {
    direction: ltr;
  }
  
  .fruits-gallery {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  
  .why-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 734px) {
  .container,
  .container-wide,
  .container-feature {
    padding: 0 20px;
  }
  
  .hero {
    padding: 40px 0 0;
  }
  
  .hero-content {
    padding: 40px 0 30px;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 100%;
  }

  .container-split {
    flex-direction: column !important;
    min-height: auto;
  }

  .split-image {
    height: 500px;
    width: 100%;
    padding: 40px;
  }

  .split-text {
    padding: 80px 32px;
  }

  .split-title {
    margin-bottom: 24px;
  }

  .partners-grid {
    gap: 40px;
  }

  .partner-logo {
    height: 40px;
  }

  .products-section {
    padding: 120px 0;
  }

  .section-title-large {
    margin-bottom: 80px;
  }

  .section-header-center {
    margin-bottom: 60px;
  }

  .fruits-gallery {
    gap: 40px;
    padding: 0 20px;
  }

  .cta-section {
    padding: 140px 0;
  }

  .cta-title {
    margin-bottom: 60px;
  }

  .partners-section {
    padding: 120px 0;
  }

  .image-text-section {
    margin: 80px 0;
  }
  
  .feature-whatsapp {
    padding: 60px 0;
  }
  
  .products-section,
  .services-section,
  .testimonials-section,
  .why-section,
  .cta-section {
    padding: 60px 0;
  }
  
  .fruits-gallery {
    grid-template-columns: 1fr;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
}

/* WhatsApp Clean Utilities */
.container-hero {
  max-width: 980px;
  margin: 0 auto;
  padding: 0 40px;
}

.container-wide {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

</style>