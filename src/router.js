import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/main/HomeComponent.vue';
import LoginComponent from './components/Pages/login/LoginComponent.vue';
import SignupComponent from './components/Pages/signup/SignupComponent.vue';

import AdminDashboard from './components/admin/AdminDashboard.vue';
import AdminProfile from './components/Pages/adminFiles/AdminProfile.vue';
import AddPackage from './components/Pages/adminFiles/AddPackage.vue';
import RegisterDoctorComponent from './components/Pages/adminFiles/RegisterDoctorComponent.vue';
import ReportComponent from './components/Pages/adminFiles/ReportComponent.vue';

import UserDashboard from './components/user/UserDashboard.vue';
import UserProfileComponent from './components/user/userProfileComponent.vue';
import ThanksComponent from './components/user/ThanksComponent.vue';
// import BookAppointMent from './components/user/BookAppointMentComponent.vue';

import AppointComponent from './components/Pages/AppointmentComponent.vue';

import AboutusComponent from './components/Pages/navbar/AboutusComponent.vue';
import SpecialitiesComponent from './components/Pages/navbar/SpecialitiesComponent.vue';
import PatientComponent from './components/Pages/navbar/PatientComponent.vue';
import ContactusComponent from './components/Pages/navbar/ContactusComponent.vue';
import PageNotFound from './components/Pages/PageNotFound.vue';
import store from './store';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/home" },
        { path: '/home', component: HomeComponent },
        { path: '/login', component: LoginComponent, meta: { requiresUnauth: true } },
        { path: '/signup', component: SignupComponent, meta: { requiresUnauth: true } },
        { path: '/aboutus', component: AboutusComponent },
        { path: '/specialities', component: SpecialitiesComponent },
        {
            path: '/patient', component: PatientComponent, meta: { requiresAuth: true },
            // children: [
            //     {path: ':location', component: AppointComponent }
            // ]
        },
        { name: 'Appointment', path: '/bookAppointment/:id', component: AppointComponent },

        {
            path: '/adminDash', component: AdminDashboard, meta: { requiresAuth: true }, props: true, children: [
                { path: '', redirect: '/adminDash/registerDoctor' },
                { path: 'profile', component: AdminProfile, },
                { path: 'addpackage', component: AddPackage },
                { path: 'report', component: ReportComponent },
                { path: 'registerDoctor', component: RegisterDoctorComponent },

            ]
        },
        {
            path: '/userDash', component: UserDashboard, meta: { requiresAuth: true },
            children: [
                { path: '', redirect: '/userDash/profile' },
                { path: 'profile', component: UserProfileComponent }
                // { path: 'patient', component: PatientComponent, meta: { requiresAuth: true }, children: [
                // { path: 'bookAppointment', BookAppointment }
                // ] },
            ]
        },
        { path: '/contactus', component: ContactusComponent },
        { path: '/logout', component: HomeComponent },
        { path: '/thanksPage', component: ThanksComponent },
        { path: '/:notFound(.*)', component: PageNotFound }
    ],
});

router.beforeEach(async (to, _, next) => {
    console.log(to, !store.getters.isAuth);
    if (to.meta.requiresAuth && await !store.getters.isAuth) {
        console.log('1');
        next('/login');
    } else if (to.meta.requiresUnAuth && await store.getters.isAuth) {
        console.log('2');
        next('/home');
    } else {
        console.log('3');
        next();
    }
});
// router.afterEach((to, _, next) => {
//     console.log(to, !store.getters.isAuth);
//     if(to.meta.requiresAuth && !store.getters.isAuth) {
//         console.log('1');
//         next('/login');
//     }else if(to.meta.requiresUnAuth && store.getters.isAuth) {
//         console.log('2');
//         next('/home');
//     }else{
//         console.log('3');
//         next();
//     }
// });
export default router;