
export default {
    async login(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA71wbqe0R4SJBSk5hGjGknblZTFi71BlA'
        })
    },
    async signup(context, payload) {

        return context.dispatch('auth', {
            ...payload,
            url: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA71wbqe0R4SJBSk5hGjGknblZTFi71BlA'
        })
    },
    async auth(context, payload) {
        let url = payload.url;
        const response = await fetch(url, {
            method: 'post',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                role: payload.role,
                returnSecureToken: true,
            })
        });
        const respData = await response.json();
        console.log("action/auth", respData.error);
        if(!response.ok){
            alert(respData.error.message);
            const error = new Error(respData.error || 'Failed to Authenticate.');
            return error;
        }
        console.log("call", payload.role, url);
        if(payload.role === 'user' && url === 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA71wbqe0R4SJBSk5hGjGknblZTFi71BlA'){
            context.dispatch('user/registerUser', payload);
        }else {
            localStorage.setItem('userId',  respData.localId);
            localStorage.setItem('token', respData.idToken);
            localStorage.setItem('role', payload.role);
            localStorage.setItem('email', respData.email);

            context.commit('setUser', {
                token: respData.idToken,
                userId: respData.localId,
                role: payload.role,
                email: respData.email,
                // name: payload.name,
            })
        }

       
        // localStorage.setItem('name', payload.name);

        
    },
    logout(context){
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('role');
        // localStorage.removeItem('name');
        localStorage.removeItem('email');

        context.commit('setUser', {
            token: null,
            userId: null,
            role: null,
            // name: null,
            email: null
        })
    },
    tryLogin(context){
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const role = localStorage.getItem('role');
        // const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');
         if( token && userId){
             context.commit('setUser', {
                 token,
                 userId,
                 role,
                //  name,
                 email
             })
         }
    }
}