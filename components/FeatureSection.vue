<template>
  <section class="feature-section">
    <div class="container">
      <div class="feature-wrapper" :class="{ 'reverse': reverse }">
        <div class="feature-image-container">
          <img 
            :src="imageSrc" 
            :alt="imageAlt" 
            class="feature-image"
          >
        </div>
        <div class="feature-content">
          <h2 class="feature-title">{{ title }}</h2>
          <p class="feature-description">{{ description }}</p>
          <ul v-if="features && features.length" class="feature-list">
            <li v-for="(feature, index) in features" :key="index">
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeatureSection',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      default: 'Feature image'
    },
    features: {
      type: Array,
      default: () => []
    },
    reverse: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.feature-section {
  padding: 0;
  margin: 0;
  background: #ffffff;
  overflow: hidden;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 160px 80px;
  position: relative;
}

.feature-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
}

.feature-wrapper.reverse {
  direction: rtl;
}

.feature-wrapper.reverse > * {
  direction: ltr;
}

.feature-image-container {
  position: relative;
  width: 100%;
}

.feature-image {
  width: 100%;
  height: 600px;
  object-fit: cover;
  border-radius: 24px;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-image:hover {
  transform: scale(1.02);
}

.feature-content {
  max-width: 520px;
}

.feature-wrapper.reverse .feature-content {
  margin-left: auto;
}

.feature-title {
  font-size: 88px;
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -3px;
  margin-bottom: 32px;
  color: #000000;
}

.feature-description {
  font-size: 24px;
  font-weight: 400;
  color: #6e6e73;
  line-height: 1.4;
  margin-bottom: 48px;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  font-size: 21px;
  color: #1d1d1f;
  margin-bottom: 20px;
  padding-left: 0;
  position: relative;
  line-height: 1.5;
  font-weight: 400;
}

.feature-list li::before {
  content: '·';
  position: absolute;
  left: -20px;
  font-size: 32px;
  color: #0071e3;
  line-height: 1.2;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .container {
    padding: 120px 40px;
  }

  .feature-wrapper {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .feature-wrapper.reverse {
    direction: ltr;
  }

  .feature-content,
  .feature-wrapper.reverse .feature-content {
    max-width: 100%;
    margin: 0;
  }

  .feature-title {
    font-size: 64px;
    letter-spacing: -2px;
  }

  .feature-description {
    font-size: 21px;
  }

  .feature-image {
    height: 500px;
  }

  .feature-list li {
    font-size: 19px;
  }
}

@media (max-width: 640px) {
  .container {
    padding: 80px 24px;
  }

  .feature-wrapper {
    gap: 40px;
  }

  .feature-title {
    font-size: 48px;
    letter-spacing: -1.5px;
    line-height: 1;
  }

  .feature-description {
    font-size: 19px;
    margin-bottom: 40px;
  }

  .feature-image {
    height: 400px;
    border-radius: 18px;
  }

  .feature-list li {
    font-size: 18px;
    margin-bottom: 16px;
  }

  .feature-list li::before {
    left: -18px;
    font-size: 28px;
  }
}
</style>