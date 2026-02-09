<template>
  <div class="contact-page">

    <!-- HERO -->
    <section class="hero">
        <div class="container">
            <div class="hero-badge"> Contactez-nous</div>
            <h1>Contact OFIECS</h1>
            <p>Notre équipe est à votre disposition pour répondre à vos questions et planifier votre inspection.</p>
        </div>
    </section>

    <!-- CONTACT INFO -->
    <section class="contact-info-section">
        <div class="container">
            <div class="info-grid">
                <div class="info-card">
                    <div class="info-icon">📍</div>
                    <h3>Adresse</h3>
                    <p>Avenue Cheikh Anta Diop<br>Immeuble OFIECS, 3ème étage<br>Dakar-Fann, Sénégal<br>BP 12345</p>
                </div>

                <div class="info-card">
                    <div class="info-icon">📞</div>
                    <h3>Téléphone</h3>
                    <p><strong>Standard :</strong> +221 33 XXX XXXX<br><strong>Inspections :</strong> +221 77 XXX XXXX<br><strong>Urgences :</strong> +221 70 XXX XXXX</p>
                </div>

                <div class="info-card">
                    <div class="info-icon">✉️</div>
                    <h3>Email</h3>
                    <p><strong>Général :</strong> contact@ofiecs.sn<br><strong>Inspections :</strong> inspection@ofiecs.sn<br><strong>Direction :</strong> direction@ofiecs.sn</p>
                </div>

                <div class="info-card">
                    <div class="info-icon">🕐</div>
                    <h3>Horaires</h3>
                    <p><strong>Lundi - Vendredi :</strong><br>8h00 - 17h00<br><strong>Samedi :</strong><br>9h00 - 13h00<br><em>Fermé dimanche et jours fériés</em></p>
                </div>
            </div>
        </div>
    </section>

    <!-- CONTACT FORM -->
    <section class="form-section">
        <div class="container">
            <div class="form-wrapper">
                <div class="form-intro">
                    <h2>Demande d'Inspection</h2>
                    <p>Remplissez ce formulaire pour demander une inspection de votre établissement. Notre équipe vous contactera sous 48h.</p>
                </div>

                <form class="contact-form" @submit.prevent="submitForm">
                    <!-- Establishment Info -->
                    <div class="form-section-title">Informations sur l'établissement</div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="establishment-name">Nom de l'établissement *</label>
                            <input 
                                type="text" 
                                id="establishment-name" 
                                v-model="form.establishmentName"
                                required
                                placeholder="Ex: École Primaire Les Ambassadeurs"
                            >
                        </div>

                        <div class="form-group">
                            <label for="establishment-type">Type d'établissement *</label>
                            <select id="establishment-type" v-model="form.establishmentType" required>
                                <option value="">Sélectionnez...</option>
                                <option value="creche">Crèche</option>
                                <option value="maternelle">École Maternelle</option>
                                <option value="primaire">École Primaire</option>
                                <option value="secondaire">École Secondaire</option>
                                <option value="autre">Autre</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="student-count">Nombre d'élèves *</label>
                            <select id="student-count" v-model="form.studentCount" required>
                                <option value="">Sélectionnez...</option>
                                <option value="1-50">1-50 élèves</option>
                                <option value="51-200">51-200 élèves</option>
                                <option value="201-500">201-500 élèves</option>
                                <option value="500+">Plus de 500 élèves</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="region">Région *</label>
                            <select id="region" v-model="form.region" required>
                                <option value="">Sélectionnez...</option>
                                <option value="dakar">Dakar</option>
                                <option value="thies">Thiès</option>
                                <option value="saint-louis">Saint-Louis</option>
                                <option value="diourbel">Diourbel</option>
                                <option value="kaolack">Kaolack</option>
                                <option value="ziguinchor">Ziguinchor</option>
                                <option value="louga">Louga</option>
                                <option value="tambacounda">Tambacounda</option>
                                <option value="autre">Autre</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="address">Adresse complète *</label>
                        <textarea 
                            id="address" 
                            v-model="form.address"
                            required
                            rows="2"
                            placeholder="Numéro, rue, quartier, ville..."
                        ></textarea>
                    </div>

                    <!-- Contact Person -->
                    <div class="form-section-title">Personne de contact</div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="contact-name">Nom complet *</label>
                            <input 
                                type="text" 
                                id="contact-name" 
                                v-model="form.contactName"
                                required
                                placeholder="Prénom et nom"
                            >
                        </div>

                        <div class="form-group">
                            <label for="contact-role">Fonction *</label>
                            <input 
                                type="text" 
                                id="contact-role" 
                                v-model="form.contactRole"
                                required
                                placeholder="Ex: Directeur, Responsable pédagogique"
                            >
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="contact-phone">Téléphone *</label>
                            <input 
                                type="tel" 
                                id="contact-phone" 
                                v-model="form.contactPhone"
                                required
                                placeholder="+221 XX XXX XXXX"
                            >
                        </div>

                        <div class="form-group">
                            <label for="contact-email">Email *</label>
                            <input 
                                type="email" 
                                id="contact-email" 
                                v-model="form.contactEmail"
                                required
                                placeholder="votreemail@example.com"
                            >
                        </div>
                    </div>

                    <!-- Inspection Details -->
                    <div class="form-section-title">Détails de l'inspection</div>

                    <div class="form-group">
                        <label for="inspection-type">Type d'inspection souhaité *</label>
                        <select id="inspection-type" v-model="form.inspectionType" required>
                            <option value="">Sélectionnez...</option>
                            <option value="complete">Inspection complète (5 domaines)</option>
                            <option value="renouvellement">Renouvellement de certification</option>
                            <option value="suivi">Visite de suivi</option>
                            <option value="specifique">Inspection spécifique (1 domaine)</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="preferred-date">Période souhaitée</label>
                        <input 
                            type="text" 
                            id="preferred-date" 
                            v-model="form.preferredDate"
                            placeholder="Ex: Semaine du 15 mars 2026"
                        >
                    </div>

                    <div class="form-group">
                        <label for="message">Message / Informations complémentaires</label>
                        <textarea 
                            id="message" 
                            v-model="form.message"
                            rows="5"
                            placeholder="Décrivez vos besoins spécifiques, questions ou toute information utile..."
                        ></textarea>
                    </div>

                    <div class="form-group checkbox-group">
                        <label class="checkbox-label">
                            <input type="checkbox" v-model="form.consent" required>
                            <span>J'accepte que mes données soient utilisées par l'OFIECS pour traiter ma demande d'inspection. *</span>
                        </label>
                    </div>

                    <button type="submit" class="btn-submit">
                        {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande' }}
                    </button>

                    <div v-if="submitSuccess" class="success-message">
                        ✓ Votre demande a été envoyée avec succès ! Nous vous contacterons sous 48h.
                    </div>

                    <div v-if="submitError" class="error-message">
                        ✗ Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.
                    </div>
                </form>
            </div>
        </div>
    </section>

    <!-- MAP -->
    <section class="map-section">
        <div class="container">
            <h2>Notre Localisation</h2>
            <div class="map-placeholder">
                <div class="map-content">
                    <div class="map-icon">📍</div>
                    <h3>Siège OFIECS Dakar</h3>
                    <p>Avenue Cheikh Anta Diop, Dakar-Fann</p>
                    <a href="https://maps.google.com" target="_blank" class="map-link">Ouvrir dans Google Maps →</a>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
        <div class="container">
            <h2>Questions Fréquentes</h2>
            
            <div class="faq-grid">
                <div class="faq-item">
                    <h3>Combien de temps dure une inspection ?</h3>
                    <p>Une inspection complète dure généralement 2 à 3 jours selon la taille de l'établissement. Une visite de suivi dure 1 journée.</p>
                </div>

                <div class="faq-item">
                    <h3>Quel est le délai pour obtenir un rendez-vous ?</h3>
                    <p>Nous programmons les inspections dans un délai de 2 à 4 semaines après réception de votre demande complète.</p>
                </div>

                <div class="faq-item">
                    <h3>Dois-je préparer des documents ?</h3>
                    <p>Oui, nous vous enverrons une liste détaillée des documents à préparer (licence, programmes, CV enseignants, règlement intérieur, etc.).</p>
                </div>

                <div class="faq-item">
                    <h3>Quand recevrai-je le rapport d'inspection ?</h3>
                    <p>Le rapport détaillé est remis dans les 2 semaines suivant la visite d'inspection.</p>
                </div>

                <div class="faq-item">
                    <h3>La certification est-elle obligatoire ?</h3>
                    <p>La certification OFIECS est fortement recommandée et sera bientôt obligatoire pour tous les établissements éducatifs au Sénégal.</p>
                </div>

                <div class="faq-item">
                    <h3>Quelle est la durée de validité de la certification ?</h3>
                    <p>La certification OFIECS est valable 3 ans. Une visite de renouvellement est nécessaire à l'expiration.</p>
                </div>
            </div>
        </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        establishmentName: '',
        establishmentType: '',
        studentCount: '',
        region: '',
        address: '',
        contactName: '',
        contactRole: '',
        contactPhone: '',
        contactEmail: '',
        inspectionType: '',
        preferredDate: '',
        message: '',
        consent: false
      },
      isSubmitting: false,
      submitSuccess: false,
      submitError: false
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;

      // Simulate form submission
      setTimeout(() => {
        // Here you would send the form data to your backend
        console.log('Form submitted:', this.form);
        
        this.isSubmitting = false;
        this.submitSuccess = true;
        
        // Reset form after 5 seconds
        setTimeout(() => {
          this.resetForm();
        }, 5000);
      }, 1500);
    },
    resetForm() {
      this.form = {
        establishmentName: '',
        establishmentType: '',
        studentCount: '',
        region: '',
        address: '',
        contactName: '',
        contactRole: '',
        contactPhone: '',
        contactEmail: '',
        inspectionType: '',
        preferredDate: '',
        message: '',
        consent: false
      };
      this.submitSuccess = false;
    }
  },
  head() {
    return {
      title: 'Contact — OFIECS',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Contactez l\'OFIECS pour demander une inspection de votre établissement. Formulaire en ligne, coordonnées et horaires. Réponse sous 48h.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.contact-page {
  background: #ffffff;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 64px;
}

/* HERO */
.hero {
  padding: 240px 0 120px;
  background: linear-gradient(135deg, rgba(0, 33, 71, 0.503) 0%, rgba(0, 33, 71, 0.85) 100%), 
              url('/home/hero.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  text-align: center;
  color: #ffffff;
  position: relative;
}

.hero-badge {
  display: inline-block;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-bottom: 24px;
}

.hero h1 {
  font-size: 112px;
  font-weight: 700;
  letter-spacing: -4px;
  margin-bottom: 24px;
  line-height: 1.05;
}

.hero p {
  font-size: 32px;
  font-weight: 300;
  max-width: 980px;
  margin: 0 auto;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.95);
}

/* CONTACT INFO */
.contact-info-section {
  padding: 200px 0;
  background: #ffffff;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;
}

.info-card {
  padding: 0;
  background: transparent;
  border-radius: 0;
  text-align: center;
  border: none;
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: none;
  border-color: transparent;
  box-shadow: none;
}

.info-icon {
  font-size: 64px;
  margin-bottom: 32px;
}

.info-card h3 {
  font-size: 28px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 20px;
}

.info-card p {
  font-size: 17px;
  color: #6e6e73;
  line-height: 1.6;
}

.info-card strong {
  color: #000000;
  font-weight: 600;
}

/* FORM */
.form-section {
  padding: 200px 0;
  background: #fafafa;
}

.form-wrapper {
  max-width: 980px;
  margin: 0 auto;
}

.form-intro {
  text-align: center;
  margin-bottom: 80px;
}

.form-intro h2 {
  font-size: 80px;
  font-weight: 800;
  letter-spacing: -3px;
  margin-bottom: 32px;
  color: #1e3a8a;
}

.form-intro p {
  font-size: 24px;
  color: #6e6e73;
  line-height: 1.5;
  font-weight: 300;
}

.contact-form {
  background: #ffffff;
  padding: 80px;
  border-radius: 32px;
  border: none;
}

.form-section-title {
  font-size: 28px;
  font-weight: 700;
  color: #000000;
  margin: 60px 0 32px 0;
  padding-bottom: 20px;
  border-bottom: 1px solid #d2d2d7;
}

.form-section-title:first-child {
  margin-top: 0;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  font-size: 17px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 12px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 18px;
  font-size: 17px;
  border: 1px solid #d2d2d7;
  border-radius: 12px;
  background: #ffffff;
  color: #1d1d1f;
  transition: all 0.2s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #000000;
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.05);
}

.form-group textarea {
  resize: vertical;
  font-family: inherit;
}

.checkbox-group {
  margin: 32px 0;
}

.checkbox-label {
  display: flex;
  align-items: start;
  gap: 12px;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  width: 20px;
  height: 20px;
  margin-top: 2px;
  cursor: pointer;
}

.checkbox-label span {
  font-size: 15px;
  color: #334155;
  line-height: 1.6;
}

.btn-submit {
  width: 100%;
  padding: 22px;
  background: #000000;
  color: #ffffff;
  font-size: 19px;
  font-weight: 600;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-submit:hover {
  background: #1d1d1f;
  transform: translateY(-2px);
}

.btn-submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.success-message {
  margin-top: 24px;
  padding: 24px;
  background: #f0fdf4;
  border: 1px solid #34c759;
  border-radius: 16px;
  color: #059669;
  font-weight: 600;
  text-align: center;
  font-size: 17px;
}

.error-message {
  margin-top: 24px;
  padding: 24px;
  background: #fef2f2;
  border: 1px solid #ff3b30;
  border-radius: 16px;
  color: #dc2626;
  font-weight: 600;
  text-align: center;
  font-size: 17px;
}

/* MAP */
.map-section {
  padding: 120px 0;
  background: #ffffff;
}

.map-section h2 {
  font-size: 80px;
  font-weight: 800;
  letter-spacing: -3px;
  margin-bottom: 80px;
  color: #1e3a8a;
  text-align: center;
}

.map-placeholder {
  height: 600px;
  background: #000000;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.map-placeholder::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></svg>');
  background-size: 50px 50px;
}

.map-content {
  position: relative;
  text-align: center;
  color: #ffffff;
}

.map-icon {
  font-size: 80px;
  margin-bottom: 32px;
}

.map-content h3 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 16px;
}

.map-content p {
  font-size: 22px;
  margin-bottom: 40px;
  color: #a1a1a6;
}

.map-link {
  display: inline-block;
  padding: 18px 48px;
  background: #ffffff;
  color: #000000;
  text-decoration: none;
  border-radius: 100px;
  font-size: 17px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.map-link:hover {
  background: #f5f5f7;
  transform: translateY(-2px);
}

/* FAQ */
.faq-section {
  padding: 200px 0;
  background: #fafafa;
}

.faq-section h2 {
  font-size: 80px;
  font-weight: 800;
  letter-spacing: -3px;
  margin-bottom: 120px;
  color: #1e3a8a;
  text-align: center;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  max-width: 1100px;
  margin: 0 auto;
}

.faq-item {
  padding: 0;
  background: transparent;
  border-radius: 0;
  border: none;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: transparent;
  box-shadow: none;
}

.faq-item h3 {
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 16px;
}

.faq-item p {
  font-size: 17px;
  color: #6e6e73;
  line-height: 1.6;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .container {
    padding: 0 40px;
  }

  .hero h1 {
    font-size: 64px;
  }

  .hero p {
    font-size: 22px;
  }

  .info-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .faq-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .container {
    padding: 0 24px;
  }

  .hero {
    padding: 120px 0 80px;
  }

  .hero h1 {
    font-size: 40px;
  }

  .hero p {
    font-size: 18px;
  }

  .contact-info-section,
  .form-section,
  .map-section,
  .faq-section {
    padding: 80px 0;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .contact-form {
    padding: 32px 24px;
  }

  .form-intro h2,
  .map-section h2,
  .faq-section h2 {
    font-size: 32px;
  }

  .map-placeholder {
    height: 350px;
  }
}
</style>
