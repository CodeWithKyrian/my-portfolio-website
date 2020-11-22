export const state = () => ({
    colorOnScroll: 400,
})

export const mutations = {
    CHANGE_COLOR_ON_SCROLL(state, colorOnScroll) {
        state.colorOnScroll = colorOnScroll;
    }
}