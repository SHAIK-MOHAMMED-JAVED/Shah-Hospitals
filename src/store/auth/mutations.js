export default {
    setUser(state, payload){
        state.token = payload.token;
        state.userId = payload.userId;
        state.role = payload.role;
        // state.name = payload.name;
        state.email = payload.email;
    }
}