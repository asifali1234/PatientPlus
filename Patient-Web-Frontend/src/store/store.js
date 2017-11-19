import Vue from "vue";
import Vuex from "vuex";

import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		user: {
			loggedIn: localStorage.getItem("user-name") == null ? false : true,
			name: localStorage.getItem("user-name"),
			photoUrl: localStorage.getItem("user-dp"),
			email: localStorage.getItem("user-email"),
			googleid: localStorage.getItem("user-googleid"),
			registerComplete: false,
			phoneNumber: "",
			otp: "unverified"
		},
		doctor: {
			schedule: []
		},
		booking: {
			date: "",
			googleid: "",
			bookingStatus: "notbooked",
			tokenno: "",
			department: "",
			doctor: {},
			doctorName: ""
		},
		currentAppointments: [],
		previousAppointments: [],
		cancelBooking: {
			cancelling: false,
			cancelled: true
		}
	},
	getters,
	mutations,
	actions
});

export default store;
