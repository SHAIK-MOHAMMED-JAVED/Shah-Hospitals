<template>
    <h2>Appointments report</h2>
    <table>
        <thead>
            <th>Patient Name</th>
            <th>Patient Email</th>
            <th>Patient Phone</th>
            <th>Doctor Name</th>
            <th>Location</th>
            <!-- <th>Timing</th> -->
        </thead>
        <tbody>
            <tr v-for="report in reportDetails" :key="report.id">
                <td>{{report.userData[0].name}}</td>
                <td>{{report.userData[0].email}}</td>
                <td>{{report.userData[0].phone}}</td>
                <td>{{report.docsData.name}}</td>
                <td>{{report.docsData.location}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    data() {
        return {
            reportDetails: []
        }
    },
    async created() {
        this.reportDetails = await this.$store.getters['admin/getAppointmentList'];
        console.log(this.reportDetails);
    }
}
</script>

<style scoped>
* {
    text-align: center;
}
table th, td {
    padding: 2rem;
}
</style>