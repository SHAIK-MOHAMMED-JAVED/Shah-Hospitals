export default {
    filterData(state, payload) {
        console.log(payload, "payload");
        state.locations = payload.locations;
        state.treatmentObj = payload.treatmentObj;
    },
    setTreatmentObj(state, payload){
        state.treatments = payload;
    },
    setDocsList(state, payload){
        state.doctorsLsit = payload;
    },
    setCurrentBookId(state, payload){
        state.currentBookingId =payload;
    },
    setCurrentAppointmentObj(state, payload){
        state.currentObj = payload;
    },
    setAppointmentList(state, payload){
        state.appointmentList = payload;
    }
}