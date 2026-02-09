<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <!-- Colonne gauche : Texte -->
        <div class="hero-text">
          <h1 class="hero-title">{{ title }}</h1>
          <p v-if="subtitle" class="hero-subtitle">{{ subtitle }}</p>
          
          <div v-if="showCta" class="hero-cta">
            <slot name="cta">
              <a :href="ctaLink" class="btn">{{ ctaText }}</a>
            </slot>
          </div>
        </div>

        <!-- Colonne droite : Image -->
        <div v-if="imageSrc" class="hero-image-wrapper">
          <img 
            :src="imageSrc" 
            :alt="imageAlt" 
            class="hero-image"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    imageSrc: {
      type: String,
      default: ''
    },
    imageAlt: {
      type: String,
      default: 'Hero image'
    },
    showCta: {
      type: Boolean,
      default: false
    },
    ctaText: {
      type: String,
      default: 'En savoir plus'
    },
    ctaLink: {
      type: String,
      default: '#'
    }
  }
}
</script>

<style scoped>
.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}
.hero {
  padding: 20px 0 160px;
  background: #ffffff; /* Blanc pur */
}

.hero-title {
  color: #000000; /* Noir */
  /* Pas d'ombres, pas d'effets */
  font: 1000 68px/1.2 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.hero-subtitle {
  color: #666666; /* Gris neutre */
}

.btn {
  background: #000000; /* Noir simple */
  color: #ffffff;
  border-radius: 100px; /*  style */
  /* Minimal, sobre, professionnel */
}


.hero-title {
  color: #000000; /* Noir */
  /* Pas d'ombres, pas d'effets */
}

.hero-subtitle {
  color: #666666; /* Gris neutre */
}

.btn {
  background: #000000; /* Noir simple */
  color: #ffffff;
  border-radius: 100px; /*  style */
  /* Minimal, sobre, professionnel */
}
</style>