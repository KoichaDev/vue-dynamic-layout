import { ref } from 'vue';

export const LAYOUTS = {
    auth: Symbol('auth'),
    login: Symbol('login'),
};

const layout = ref(LAYOUTS.auth);

const setLayout = (layoutType) => {
    layout.value = layoutType;
};

export const useLayout = () => {
    return {
        layout,
        setLayout,
        LAYOUTS,
    };
};
