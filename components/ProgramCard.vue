<template>
  <div class="program-card" @click="handleClick">
    <img 
      :src="imageSrc" 
      :alt="title" 
      class="program-image"
    >
    <div class="program-meta">{{ ageRange }}</div>
    <h3 class="program-title">{{ title }}</h3>
    <p class="program-description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProgramCard',
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
    ageRange: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
}
</script>

<style scoped>
.program-card {
  cursor: pointer;
  transition: transform 0.3s;
}

.program-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 32px;
  margin-bottom: 40px;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.program-card:hover .program-image {
  transform: scale(1.02);
}

.program-meta {
  font-size: 14px;
  color: #999999;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.program-title {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: -1px;
  color: #000000;
}

.program-description {
  font-size: 20px;
  color: #666666;
  font-weight: 300;
  line-height: 1.6;
}

@media (max-width: 640px) {
  .program-image {
    height: 350px;
  }

  .program-title {
    font-size: 32px;
  }

  .program-description {
    font-size: 18px;
  }
}
</style>