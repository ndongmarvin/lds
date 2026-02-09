<template>
  <div class="error-page">
    <div class="container">
      <div class="error-content">
        <!-- Error Code -->
        <h1 class="error-code">404</h1>
        
        <!-- Error Message -->
        <h2 class="error-title">Page introuvable</h2>
        <p class="error-description">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        
        <!-- Actions -->
        <div class="error-actions">
          <router-link to="/" class="btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Retour à l'accueil
          </router-link>
          <button @click="goBack" class="btn-secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Page précédente
          </button>
        </div>
        
        <!-- Quick Links -->
        <div class="quick-links">
          <h3>Liens utiles :</h3>
          <ul>
            <li><router-link to="/about">À propos de l'OFIECS</router-link></li>
            <li><router-link to="/inspections">Nos inspections</router-link></li>
            <li><router-link to="/contact">Nous contacter</router-link></li>
          </ul>
        </div>
      </div>
      
      <!-- Decorative Element -->
      <div class="error-illustration">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="#002147" opacity="0.1"/>
          <path d="M60 100 L80 80 M120 80 L140 100 M70 130 Q100 150 130 130" 
                stroke="#002147" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.3"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}
</script>

<style scoped>
.error-page {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 120px 0 80px;
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 64px;
  position: relative;
  z-index: 2;
}

.error-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

/* Error Code */
.error-code {
  font-size: 180px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -8px;
  color: #002147;
  margin-bottom: 24px;
  opacity: 0.15;
  text-shadow: 0 4px 60px rgba(0, 33, 71, 0.1);
}

/* Error Title */
.error-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -2px;
  color: #1e3a8a;
  margin-bottom: 24px;
}

/* Error Description */
.error-description {
  font-size: 20px;
  font-weight: 400;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 48px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

/* Actions */
.error-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-bottom: 64px;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  border-radius: 100px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
}

.btn-primary {
  background: #d4af37;
  color: #ffffff;
  border-color: #d4af37;
}

.btn-primary:hover {
  background: #b8930f;
  border-color: #b8930f;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(212, 175, 55, 0.3);
}

.btn-secondary {
  background: transparent;
  color: #1e3a8a;
  border-color: #1e3a8a;
}

.btn-secondary:hover {
  background: #1e3a8a;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(30, 58, 138, 0.2);
}

/* Quick Links */
.quick-links {
  margin-top: 48px;
  padding-top: 48px;
  border-top: 1px solid rgba(0, 33, 71, 0.1);
}

.quick-links h3 {
  font-size: 18px;
  font-weight: 600;
  color: #002147;
  margin-bottom: 20px;
  letter-spacing: -0.5px;
}

.quick-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 32px;
  justify-content: center;
  flex-wrap: wrap;
}

.quick-links li {
  margin: 0;
}

.quick-links a {
  color: #1e3a8a;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.quick-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #d4af37;
  transition: width 0.3s ease;
}

.quick-links a:hover {
  color: #d4af37;
}

.quick-links a:hover::after {
  width: 100%;
}

/* Decorative Illustration */
.error-illustration {
  position: absolute;
  right: -100px;
  top: 50%;
  transform: translateY(-50%);
  width: 400px;
  height: 400px;
  opacity: 0.3;
  pointer-events: none;
  z-index: 1;
}

.error-illustration svg {
  width: 100%;
  height: 100%;
}

/* Responsive */
@media (max-width: 1024px) {
  .container {
    padding: 0 40px;
  }

  .error-code {
    font-size: 140px;
    letter-spacing: -6px;
  }

  .error-title {
    font-size: 48px;
  }

  .error-description {
    font-size: 18px;
  }

  .error-illustration {
    width: 300px;
    height: 300px;
    right: -50px;
  }
}

@media (max-width: 768px) {
  .error-page {
    padding: 100px 0 60px;
  }

  .container {
    padding: 0 24px;
  }

  .error-code {
    font-size: 120px;
    letter-spacing: -4px;
    margin-bottom: 16px;
  }

  .error-title {
    font-size: 36px;
    margin-bottom: 16px;
  }

  .error-description {
    font-size: 16px;
    margin-bottom: 32px;
  }

  .error-actions {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 48px;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
    max-width: 300px;
    padding: 14px 24px;
    font-size: 15px;
  }

  .quick-links {
    margin-top: 32px;
    padding-top: 32px;
  }

  .quick-links h3 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  .quick-links ul {
    flex-direction: column;
    gap: 16px;
  }

  .quick-links a {
    font-size: 15px;
  }

  .error-illustration {
    display: none;
  }
}

@media (max-width: 640px) {
  .error-code {
    font-size: 96px;
  }

  .error-title {
    font-size: 32px;
  }

  .error-description {
    font-size: 15px;
  }
}
</style>
