export default {
	registerUser(state, userObject) {
		var user = {};
		user.name = userObject.name;
		user.email = userObject.email;
		user.photoUrl = userObject.photoUrl;
		user.phoneNumber = userObject.phoneNumber;
		user.googleid = userObject.googleid;
		user.loggedIn = true;
		user.otp = "unverified";
		state.user = user;
		state.user.registerComplete = true;
	},
	updateOtpStatus(state, status) {
		state.user.otp = status;
	},
	updateDoctorSchedule(state, data) {
		console.log(data);
		state.doctor.schedule = data;
	},
	setDepartment(state, data) {
		state.booking.department = data;
	},
	setBookingDate(state, data) {
		state.booking.date = data;
	},
	setBookingParameters(state, data) {
		state.booking.doctor = data.doctor;
		state.booking.date = data.date;
		state.booking.department = data.department;
	},
	setBookingProgress(state) {
		state.booking.bookingStatus = "booking";
	},
	setBookingStatus(state, data) {
		console.log(data);
		if (data.tokenno != undefined) {
			state.booking.bookingStatus = "success";
			state.booking.tokenno = data.tokenno;
			state.booking.doctorName = data.doctorName;
		} else state.booking.bookingStatus = "failed";
	},
	clearBookingData(state) {
		state.booking = {
			date: "",
			googleid: "",
			bookingStatus: "notbooked",
			tokenno: "",
			department: "",
			doctor: {},
			doctorName: ""
		};
	},
	updateCurrentAppointmentList(state, data) {
		console.log(data);
		state.currentAppointments = data;
	},
	setDoctorId(state, doctorid) {
		console.log(doctorid);
		state.booking.doctorid = doctorid;
	},
	updatePreviousAppointments(state, data) {
		console.log(data);
		state.previousAppointments = data;
	},
	setCancellingStatus(state) {
		state.cancelBooking.cancelling = true;
	},
	setCancelStatus(state, data) {
		console.log(data);
		state.cancelBooking.cancelling = false;
		state.cancelBooking.cancelled = true;
	}
};
