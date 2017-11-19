import Vue from "vue";
import Router from "vue-router";

import HelloWorld from "@/components/HelloWorld";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import Otp from "@/components/Otp";
import Dashboard from "@/components/Dashboard";
import MyAppointments from "@/components/MyAppointments";
import BookAppointment from "@/components/BookAppointment";
import DoctorSchedule from "@/components/DoctorSchedule";
import PreviousAppointment from "@/components/PreviousAppointment";
import BookingStatus from "@/components/BookingStatus";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "Hello",
			component: HelloWorld
		},
		{
			path: "/signin",
			name: "SignIn",
			component: SignIn
		},
		{
			path: "/signup",
			name: "SignUp",
			component: SignUp
		},
		{
			path: "/otp-verify",
			name: "OTPVerify",
			component: Otp
		},
		{
			path: "/dashboard",
			name: "Dashboard",
			component: Dashboard,
			children: [
				{
					path: "",
					name: "IndexRoute",
					redirect: "my-appointments"
				},
				{
					path: "my-appointments",
					name: "MyAppointments",
					component: MyAppointments
				},
				{
					path: "previous-appointments",
					name: "PreviousAppointments",
					component: PreviousAppointment
				},
				{
					path: "schedule",
					name: "DoctorSchedule",
					component: DoctorSchedule
				},
				{
					path: "book-appointment",
					name: "BookAppointment",
					component: BookAppointment
				},
				{
					path: "booking-status",
					name: "BookingStatus",
					component: BookingStatus
				}
			]
		}
	]
});
