export default {
    isAuth(state){
        console.log("token",!!state.token, state.token);
        return !!state.token;
    },
    getRole(state){
        return state.role;
    },
    // getEmail(state){
    //     return state.userId;
    // }

}