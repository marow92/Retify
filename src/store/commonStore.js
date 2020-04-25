const initialState = () => ({
    isLoading: false,
});

export default {
    namespaced: true,
    state: initialState(),
    mutations: {
        setIsLoading(state, payload) {
            state.isLoading = payload.isLoading;
        },
    },
    actions: {
        showLoading({ commit }) {
            commit("setIsLoading", { isLoading: true });
        },
        hideLoading({ commit }) {
            commit("setIsLoading", { isLoading: false });
        },
    },
};
