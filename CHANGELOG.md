# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [Non publié]

### Ajouté
- Page 404 personnalisée avec design   et navigation française
- Section partenaires internationaux sur la page d'accueil (UNESCO, UNICEF, Ministère)
- Logos partenaires avec effet hover élégant

### Modifié
- **Design   complet sur page Inspections** :
  - Section split-image redessinée : fond blanc, hauteur optimisée (400px), typographie impactante (88px)
  - Section tarifs : cartes blanches avec bordures subtiles, boutons bleu   (#0071e3)
  - Section CTA : fond gris clair (#f5f5f7), bouton bleu   avec effet glow
- **Section partenaires style  ** :
  - Typographie géante (88px), espacement généreux
  - Logos en couleur sur fond blanc avec shadow
  - Animation hover : scale + translateY
- Images mobiles avec border-radius   (18px/24px)

## [v0.0.3] - 2026-02-03

### Ajouté
- Scroll automatique vers le haut lors du changement de page
- Footer sticky (toujours en bas de page)

### Modifié
- Footer simplifié : suppression de la colonne navigation
- Footer mobile : affichage minimal (logo et réseaux sociaux uniquement)
- Section copyright responsive avec meilleur wrapping

## [v0.0.2] - 2026-02-03

### Corrigé
- Overflow horizontal sur mobile (overflow-x: hidden)
- Images responsives avec hauteurs adaptatives
- Footer responsive sur petits écrans
- Espacement et alignement du copyright

### Modifié
- Border-radius des images : 18px mobile, 24px tablet
- Hauteurs d'images optimisées : Hero 400px, Feature 400px, Program 320px

## [v0.0.1] - 2026-02-02

### Ajouté
- Version initiale du site OFIECS
- Pages : Accueil, À propos, Inspections, Contact
- Layout avec navigation et footer
- Design responsive de base
- Intégration Tailwind CSS
- Configuration Nuxt 3

[Non publié]: https://github.com/ndongmarvin/office2/compare/v0.0.3...HEAD
[v0.0.3]: https://github.com/ndongmarvin/office2/compare/v0.0.2...v0.0.3
[v0.0.2]: https://github.com/ndongmarvin/office2/compare/v0.0.1...v0.0.2
[v0.0.1]: https://github.com/ndongmarvin/office2/releases/tag/v0.0.1
