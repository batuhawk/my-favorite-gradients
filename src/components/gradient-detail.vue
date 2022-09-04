<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    name: 'Gradient Detail',

    setup() {},

    /*States & Getters defined in computed*/
    computed: {
        ...mapState('gradients', ['isOpen', 'whichGradient']),
        ...mapGetters('gradients', ['getGradientById']),
    },

  /*Actions & Mutations defined in methods*/
    methods: {
        ...mapActions('gradients', ['gradientDetailClose']),

        copyToClipboard() {
            this.$refs['copy'].innerText = 'COPIED!';
            setTimeout(() => { this.$refs['copy'].innerText = 'COPY' }, 2000);

            navigator.clipboard.writeText(this.$refs['gradient-css'].innerText);
        }
    }
}
</script>

<template>
    <div class="gradient-detail" v-if="isOpen">
        <div class="close-button" @click="gradientDetailClose(false)">✖</div>
        <div class="content">
            <div class="main-gradient" :style="{ background: getGradientById.gradient_css }"></div>
            <div class="gradient-colors">
                <div class="color-one">
                    <div class="color" :style="{background: getGradientById.color_one}"></div>
                    {{ getGradientById.color_one }}
                </div>
                <div class="color-two">
                    <div class="color" :style="{background: getGradientById.color_two}"></div>
                    {{ getGradientById.color_two }}
                </div>
            </div>
            <div class="gradient-css">
                <div class="gradient-info" ref="gradient-css">background: {{ getGradientById.gradient_css }};</div>
                <a class="copy-button" ref="copy" @click="copyToClipboard()">COPY</a>
            </div>
        </div>
    </div>
</template>