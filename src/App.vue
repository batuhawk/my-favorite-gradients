<script>
import Gradients from './components/gradients.vue';
import GradientDetail from './components/gradient-detail.vue';

export default {
  name: 'App',

  components: {
    Gradients,
    GradientDetail
  },

  setup() {
    return {
      title: "MY FAVORITE GRADIENTS",
      description: "Basically, this project is based on my favorite gradients. Maybe right now there are a couple of gradients but whenever I see the another lovely gradients I will add so Let's fun!"
    };
  },
}
</script>

<template>
  <div class="header">
    <div class="row">
      <h3 class="title">{{ title }}</h3>
    </div>
  </div>
  <div class="content">
    <div class="description">{{ description }}</div>
    <div class="row">
      <gradients></gradients>
      <gradient-detail></gradient-detail>
    </div>
  </div>
</template>