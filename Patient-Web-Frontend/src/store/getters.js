export default {
	//registration getters
	isActionComplete(state) {
		return state.user.registerComplete;
	},
	//user profile helpers
	getGoogleId(state) {
		return state.user.googleid;
	},
	getUsername(state) {
		return state.user.name;
	},
	getPhoneNumber(state) {
		return state.user.phoneNumber;
	},
	getEmail(state) {
		return state.user.email;
	},
	//otp getters
	getVerificationStatus(state) {
		return state.user.otp;
	},
	//doctor infromation getters
	isDoctorListEmpty(state) {
		return state.doctor.schedule.length == 0;
	},
	getDoctorSchedule(state) {
		return state.doctor.schedule;
	},
	getDepartments(state) {
		return state.doctor.schedule.map(doctor => doctor.department);
	},
	//booking information getters
	getBookingDate(state) {
		return state.booking.date;
	},
	getBookingDepartment(state) {
		return state.booking.department;
	},
	getBookedData(state) {
		return state.booking;
	},
	getBookingStatus(state) {
		return state.booking.bookingStatus;
	},
	getCancellingStatus(state) {
		return state.cancelBooking.cancelling;
	},
	//current appointments getters
	getCurrentAppointmentList(state) {
		return state.currentAppointments;
	},
	//previous appointment getters
	getPreviousAppointments(state) {
		return state.previousAppointments;
	}
};
