import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';


export default {
    namespaced: true,
    state() {
        return {
            treatmentObj: [],
            locations: [],
            treatments: [],
            doctorsLsit: [],
            currentBookingId: '',
            currentObj: [],
            appointmentList: []
        }
    },
    mutations,
    actions,
    getters
}
