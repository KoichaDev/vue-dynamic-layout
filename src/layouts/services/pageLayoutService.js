import { reactive } from 'vue';
// Available layouts
export const LAYOUTS = {
    standard: Symbol('standard'),
    auth: Symbol('auth'),
};
const initialState = {
    layout: LAYOUTS.standard,
};
/*
 * In Vue 2 you would use an observable instead
 * @example
 * const state = Vue.observable(initialState)
 */
const state = reactive(initialState);
/**
 * Computed that allows consuming the current layout value
 */
export const layoutComputed = {
    layout: {
        get() {
            return state.layout;
        },
        set(layoutType) {
            state.layout = layoutType;
        },
    },
};
/**
 * Sets new layouts value
 * @param {Symbol} layoutType
 */
export const setLayout = (layoutType) => {
    state.layout = layoutType;
};
