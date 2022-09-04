<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'Gradients',

  setup() {},

  /*States & Getters defined in computed*/
  computed: {
    ...mapGetters('gradients' ,['getAllGradients']),
  },

  /*Actions & Mutations defined in methods*/
  methods: {
    ...mapActions('gradients', ['getGradientById',]),
  }
}
</script>

<template>
    <div class="gradient"
     v-for="(gradient, index) in getAllGradients"
      :key="index"
       :style="{ background: gradient.gradient_css }"
       @click="getGradientById(index)">
       </div>
</template>