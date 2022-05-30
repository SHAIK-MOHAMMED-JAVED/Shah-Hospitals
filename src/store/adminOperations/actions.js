export default {
    async addTreatment(context, payload) {
        const reqObj = {
            location: payload.location,
            treatmentType: payload.treatmentType,
            state: payload.state
        }
        // const await 
        // // const token = context.rootGetters.token;
        // const existObj = await context.getters.getTreatmentObj;
        // console.log(existObj);
        // const arr = existObj.filter(obj => obj.treatment === payload.treatmentType);
        // if (arr.lenght<=0) {

        // }
        const response = await fetch(`https://fir-app-ded6e-default-rtdb.firebaseio.com/treatmentType.json`, {
            method: 'post',
            body: JSON.stringify(reqObj)
        });
        const respData = await response.json();
        console.log("add treat", respData);
        if (!response.ok) {
            const error = new Error(respData.message || 'Failed to Add Treatment.');
            return error;
        }

    },
    async getTreatment(context) {
        // const reqObj = {
        //     location: payload.location,
        //     treatmentType: payload.treatmentType,
        //     state: payload.state
        // }
        // const token = context.rootGetters.token;
        const response = await fetch(`https://fir-app-ded6e-default-rtdb.firebaseio.com/treatmentType.json`, {
            method: 'get',
            // body: JSON.stringify(reqObj)
        });
        const respData = await response.json();
        console.log("get treat", respData);
        if (!response.ok) {
            const error = new Error(respData.message || 'Failed to Add Treatment.');
            return error;
        }
        let arrayobj = [];
        for (const obj in respData) {
            console.log(respData[obj].location);
            const object = {
                id: obj,
                location: respData[obj].location,
                treatment: respData[obj].treatmentType,
                state: respData[obj].state
            }
            arrayobj.push(object);
        }
        const locations = [...new Set(arrayobj.map(obj => obj.location))];
        // console.log(loc, "loc");
        const obj = {
            locations,
            treatmentObj: arrayobj
        }
        context.commit('filterData', obj);
        // console.log(context);
        // const treatments = [];
        // for(const key in respData){

        // }
        // context.commit('addTreatment', )
    },
    getTreatmentValues(context, payload) {
        const arrobj = context.getters['getTreatmentObj'];
        console.log(payload, arrobj);
        const arrayobj = arrobj.filter(obj => obj.state && obj.location === payload);
        const UniqarrayObj = [...new Set(arrayobj.map(obj => obj.treatment))]
        console.log(UniqarrayObj, arrayobj, arrayobj[0].treatment);
        context.commit('setTreatmentObj', arrayobj);
    },
    async registerDoctor(context, payload) {
        const response = await fetch('https://fir-app-ded6e-default-rtdb.firebaseio.com/doctorsList.json', {
            method: 'post',
            body: JSON.stringify(payload)
        });
        const respData = await response.json();
        console.log('registered Doc', respData)
        if (!response.ok) {
            const error = new Error(respData.message || 'Failed to register');
            return error;
        }
    },
    async getDoctorsList(context, payload) {
        const response = await fetch('https://fir-app-ded6e-default-rtdb.firebaseio.com/doctorsList.json', {
            method: 'get',
        });
        const respData = await response.json();
        console.log('docs list', respData);

        if (!response.ok) {
            const error = new Error(respData.message || 'Failed to Fetch the List');
            return error;
        }
        const arrayobj = [];
        for (const obj in respData) {
            arrayobj.push({ id: obj, ...respData[obj] });
        }
        console.log(arrayobj, arrayobj[0].specialization.toLowerCase().includes(payload.specialization.toLowerCase()));
        const newList = arrayobj.filter(obj => obj.specialization.toLowerCase().includes(payload.specialization.toLowerCase()) && obj.location.toLowerCase() === payload.location.toLowerCase() && obj.status);
        console.log("New List", newList);
        context.commit('setDocsList', newList);
    },
    // async bookAppointment(context, payload){
    //     const response = await fetch('https://fir-app-ded6e-default-rtdb.firebaseio.com/bookedAppointment.json', {
    //         method: 'post',
    //         body: JSON.stringify()
    //     })
    // },
    async setAppointment(context, payload) {
        // console.log(context, payload);
        // // await context.dispatch('user/getUserData', payload.userMail);
        // const userData = await context.getters['user/getRegisteredUser'];
        console.log(payload);
        const response = await fetch('https://fir-app-ded6e-default-rtdb.firebaseio.com/appointmentList.json', {
            method: 'post',
            body: JSON.stringify(payload)
        });
        const respData = await response.json();
        if (!response.ok) {
            const error = new Error(respData.message || 'Failed to register');
            return error;
        }
        console.log('Booked Appointment', respData.name);
        context.commit('setCurrentBookId', respData.name);

    },
    async getAppointmentList(context, payload) {
        const response = await fetch('https://fir-app-ded6e-default-rtdb.firebaseio.com/appointmentList.json', {
            method: 'get',
        });
        const respData = await response.json();
        console.log('Appoinment list', respData, payload);

        if (!response.ok) {
            const error = new Error(respData.message || 'Failed to Fetch the List');
            return error;
        }
        const arrayobj = [];
        for (const obj in respData) {
            arrayobj.push({ id: obj, ...respData[obj] });
        }
        // console.log(arrayobj, arrayobj[0].specialization.toLowerCase().includes(payload.specialization.toLowerCase()));
        const newList = arrayobj.filter(obj => obj.id === payload);
        console.log("New List", newList);

        context.commit('setCurrentAppointmentObj', newList);
        context.commit('setAppointmentList', arrayobj);
    }
    

}