export default {
    async registerUser(context, payload) {
        console.log('regester user', payload);
        const response = await fetch('https://fir-app-ded6e-default-rtdb.firebaseio.com/registeredUsers.json', {
            method: 'post',
            body: JSON.stringify({
                name: payload.name,
                email: payload.email,
                phone: payload.phone,
                password: payload.password
            })

        });
        const respData = await response.json();
        if (!response.ok) {
            const error = new Error(respData.message || 'Failed to register');
            return error;
        }
        // context.commit('setRegisteredUser', payload);
        await context.dispatch('getUserData', payload);
    },
    async getUserData(context, payload){
        console.log('get user', payload);
        const response = await fetch('https://fir-app-ded6e-default-rtdb.firebaseio.com/registeredUsers.json', {
            method: 'get',

        });
        const respData = await response.json();
        if (!response.ok) {
            const error = new Error(respData.message || 'Failed to fetch');
            return error;
        }
        let arrayobj = [];
        for (const obj in respData) {
            const object = {
                id: obj,
                name: respData[obj].name,
                email: respData[obj].email,
                phone: respData[obj].phone,
                password: respData[obj].password
            }
            arrayobj.push(object);
        }
        const userObj = arrayobj.filter(obj => obj.email === payload);
        console.log(userObj, "user obj");
        // const obj = {
        //     locations,
        //     treatmentObj: arrayobj
        // }
        context.commit('setRegisteredUser', userObj);
    }
}