const host = "http://ec2-13-58-90-106.us-east-2.compute.amazonaws.com";
export default {
	register(context, userObject) {
		var options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(userObject)
		};
		console.log(userObject);
		fetch(`${host}/api/patientDetails`, options)
			.then(response => response.text())
			.then(data => {
				console.log(data);
				context.commit("registerUser", userObject);
			})
			.catch(err => console.log(err));
	},
	prepareOtpVerification(context, data) {
		var options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		};
		console.log(data);
		fetch(`${host}/api/mobileVerification"`, options)
			.then(response => response.text)
			.then(data => console.log(data))
			.catch(err => console.log(err));
		context.commit("updateOtpStatus", "verifying");
	},
	verifyOtp(context, data) {
		var options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		};
		fetch(`${host}/api/verify`, options)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				var status = data.verified ? "success" : "failed";
				console.log("status", status);
				context.commit("updateOtpStatus", status);
			})
			.catch(err => console.log(err));
	},
	fetchDoctorSchedule(context) {
		fetch(`${host}/api/doctorDetails`)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				context.commit("updateDoctorSchedule", data);
			});
	},
	confirmBooking(context, data) {
		context.commit("setBookingProgress");
		var options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		};
		fetch(`${host}/api/booking`, options)
			.then(response => response.json())
			.then(data => {
				context.commit("setBookingStatus", data);
			})
			.catch(err => console.log(err));
	},
	fetchMyAppointments(context, data) {
		var options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		};
		fetch(`${host}/api/currentAppointements`, options)
			.then(response => response.json())
			.then(data => {
				context.commit("updateCurrentAppointmentList", data);
			})
			.catch(err => console.log(err));
	},
	fetchPreviousAppointments(context, data) {
		var options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		};
		fetch(`${host}/api/previousAppointements`, options)
			.then(response => response.json())
			.then(data => {
				context.commit("updatePreviousAppointments", data);
			})
			.catch(err => console.log(err));
	},
	cancelAppointment(context, data) {
		context.commit("setCancellingStatus");
		console.log(data);
		var options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		};
		fetch(`${host}/api/delete`, options)
			.then(response => response.text())
			.then(data => {
				console.log(data);
				context.commit("setCancelStatus", true);
			})
			.catch(err => console.log(err));
	}
};
