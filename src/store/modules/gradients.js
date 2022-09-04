const state = {
  gradients: [
    {
      color_one: '#447A7A',
      color_two: '#F9E866',
      gradient_css: 'linear-gradient(130deg, #447A7A, #F9E866)',
    },
    {
      color_one: '#E26E43',
      color_two: '#F8CE0E',
      gradient_css: 'linear-gradient(130deg, #E26E43, #F8CE0E)',
    },
    {
      color_one: '#8E2DE2',
      color_two: '#4A00E0',
      gradient_css: 'linear-gradient(130deg, #8E2DE2, #4A00E0)',
    },
    {
      color_one: '#EF33B1',
      color_two: '#F6E6BC',
      gradient_css: 'linear-gradient(130deg, #EF33B1, #F6E6BC)',
    },
    {
      color_one: '#0A8270',
      color_two: '#7CFF6B',
      gradient_css: 'linear-gradient(130deg, #0A8270, #7CFF6B)',
    },
    {
      color_one: '#6CD0FF',
      color_two: '#1C2E4C',
      gradient_css: 'linear-gradient(130deg, #6CD0FF, #1C2E4C)',
    },
    {
      color_one: '#A96F44',
      color_two: '#F2ECB6',
      gradient_css: 'linear-gradient(130deg, #A96F44, #F2ECB6)',
    },
    {
      color_one: '#23494A',
      color_two: '#BFFFC7',
      gradient_css: 'linear-gradient(130deg, #23494A, #BFFFC7)',
    },
    {
      color_one: '#fffbd5',
      color_two: '#b20a2c',
      gradient_css: 'linear-gradient(130deg, #fffbd5, #b20a2c)',
    },
    {
      color_one: '#4B086D',
      color_two: '#ACC0FE',
      gradient_css: 'linear-gradient(130deg, #4B086D, #ACC0FE)',
    },
    {
      color_one: '#FC210D',
      color_two: '#F7CE38',
      gradient_css: 'linear-gradient(130deg, #FC210D, #F7CE38)',
    },
    {
      color_one: '#E21C34',
      color_two: '#500B28',
      gradient_css: 'linear-gradient(130deg, #E21C34, #500B28)',
    },
  ],

  isOpen: false,
  whichGradient: null,
};

const getters = {
  getAllGradients(state) {
    return state.gradients;
  },

  getGradientById(state) {
    return state.gradients[state.whichGradient];
  },
};

const mutations = {
  getGradientById(state, id) {
    state.whichGradient = id;
    state.isOpen = true;
  },

  gradientDetailClose(state, close) {
    return (state.isOpen = close);
  },
};

const actions = {
  getGradientById({ commit }, id) {
    commit('getGradientById', id);
  },

  gradientDetailClose({ commit }, close) {
    commit('gradientDetailClose', close);
  },
};

export const gradients = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
