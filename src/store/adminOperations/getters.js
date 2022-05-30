export default {
    getLocations(state){
        return state.locations;
    },
    getTreatmentObj(state){
        return state.treatmentObj;
    },
    getTreatments(state){
        return state.treatments;
    },
    getDocsList(state){
        return state.doctorsLsit;
    },
    getCurrentBookId(state){
        return state.currentBookingId;
    },
    getCurrentBooKObj(state){
        return state.currentObj;
    },
    getAppointmentList(state){
        return state.appointmentList;
    }
}