webpackJsonp([0],{"+1xU":function(t,e,n){"use strict";function o(t){n("xrD/")}var a=n("MuRX"),i=n("tSPw"),s=n("VU/8"),r=o,c=s(a.a,i.a,!1,r,"data-v-1c30918c",null);e.a=c.exports},"/Lli":function(t,e,n){"use strict";function o(t){n("3bdZ")}var a=n("Q2es"),i=n("4g+h"),s=n("VU/8"),r=o,c=s(a.a,i.a,!1,r,"data-v-814deb3e",null);e.a=c.exports},"/u+v":function(t,e,n){"use strict";e.a={name:"patient-menu",beforeCreate:function(){console.log(this.$route.path)},computed:{routePath:function(){return console.log(this.$route.path.split("/")),this.$route.path.split("/")[2]}},data:function(){return{activeMenu:2}}}},"07PK":function(t,e,n){"use strict";e.a={name:"HelloWorld",beforeMount:function(){var t=this.$store.getters.getGoogleId;void 0!=t&&0==t.length&&this.$router.push("/signin"),this.$router.push("/dashboard/my-appointments")}}},"15/6":function(t,e){},"3E7n":function(t,e,n){"use strict";function o(t){n("15/6")}var a=n("4zTA"),i=n("klTQ"),s=n("VU/8"),r=o,c=s(a.a,i.a,!1,r,"data-v-67a29a59",null);e.a=c.exports},"3bdZ":function(t,e){},"3ixs":function(t,e,n){"use strict";function o(t){n("shu1")}var a=n("/u+v"),i=n("uWku"),s=n("VU/8"),r=o,c=s(a.a,i.a,!1,r,"data-v-7382d0c1",null);e.a=c.exports},"4g+h":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["booking"==t.bookingStatus?n("div",[n("h1",{staticClass:"title"},[t._v("Confirming Your Booking. Please Wait")])]):"success"==t.bookingStatus?n("div",[n("h1",{staticClass:"title"},[t._v("Booking Successful")]),t._v(" "),n("h3",[t._v("Your token no: "+t._s(t.bookingData.tokenno))]),t._v(" "),n("p",{staticClass:"doctor-name"},[t._v("Doctor: "+t._s(t.bookingData.doctorName))]),t._v(" "),n("button",{staticClass:"button care-stack-button"},[n("router-link",{attrs:{to:"/dashboard/my-appointments"}},[t._v("Home")])],1)]):"failed"==t.bookingStatus?n("div",[n("h2",[t._v("Booking Failed")]),t._v(" "),n("button",{staticClass:"button care-stack-button"},[n("router-link",{attrs:{to:"/dashboard/my-appointments"}},[t._v("Home")])],1)]):t._e()])},a=[],i={render:o,staticRenderFns:a};e.a=i},"4zTA":function(t,e,n){"use strict";e.a={computed:{doctors:function(){return this.$store.getters.getDoctorSchedule},selectedData:function(){return this.$store.getters.getBookedData},departments:function(){return this.$store.getters.getDepartments},selectedDateObject:function(){return this.selectedDateString.length>0?new Date(this.selectedDateString):null},selectedDateString:{get:function(){return this.$store.getters.getBookingDate},set:function(t){this.$store.commit("setBookingDate",t)}},departmentFilter:{get:function(){return this.$store.getters.getBookingDepartment},set:function(t){this.$store.commit("setDepartment",t)}},choosableDoctors:function(){var t=this;return this.selectedDateString.length>0&&null!=this.selectedDateObject?this.doctors.filter(function(e){return!(!e.available.find(function(e){return e.days==t.days[t.selectedDateObject.getDay()]})||e.department!=t.departmentFilter)}):[]},computedTime:function(){var t=this;if(this.selectedData.doctor.doctorid){var e=this.selectedData.doctor,n=e.available.find(function(e){return e.days==t.days[t.selectedDateObject.getDay()]});return console.log(n),n.time.split("-")[0]}return""}},data:function(){return{allDates:[],showCredentialInputs:!1,choosableDates:[],selectedDoctor:[],today:"",lastDate:"",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},created:function(){this.setDates()},beforeMount:function(){this.$store.getters.isDoctorListEmpty&&this.$store.dispatch("fetchDoctorSchedule")},methods:{setDates:function(){var t=new Date,e=t.getDate();this.today=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+e,t.setDate(e+7),this.lastDate=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()},confirmBooking:function(){console.log("confirming booking");var t=this.selectedDateObject.getDate()+"/"+this.selectedDateObject.getMonth()+"/"+this.selectedDateObject.getFullYear(),e={googleid:this.$store.getters.getGoogleId,doctorName:this.selectedData.doctor.name,doctorid:this.selectedData.doctor.doctorid,date:t,time:this.computedTime,email:this.$store.getters.getEmail};this.$store.dispatch("confirmBooking",e),this.$router.push("/dashboard/booking-status")}}}},"5plq":function(t,e,n){"use strict";e.a={name:"google-sign-in",mounted:function(){window.gapi.load("auth2",function(){var t=this;window.gapi.auth2.init({client_id:"191012504879-vs5sv3jbnq82dttsanje6e9h942phlvv.apps.googleusercontent.com",cookiepolicy:"single_host_origin"}).attachClickHandler(this.$refs.googleSignIn,{},function(e){t.$emit("signedIn",e)},function(t){return console.log(t)})}.bind(this))}}},"78Nm":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"title"},[t._v("My Appointments")]),t._v(" "),t.cancelling?n("div",[n("h3",[t._v("Cancelling..")])]):t.appointments.length>0?n("div",{staticClass:"grid-x"},t._l(t.appointments,function(e){return n("div",{staticClass:"small-6 medium-4 large-3 cell card"},[n("div",{staticClass:"card-header"},[n("p",{staticClass:"header-title"},[t._v("APPOINTMENT WITH")]),t._v(" "),n("h3",[t._v("Dr. "+t._s(e.doctorName))]),t._v(" "),n("p",[t._v("Date: "+t._s(e.date))])]),t._v(" "),n("div",{staticClass:"card-footer"},[n("button",{staticClass:"button alert",on:{click:function(n){t.cancelAppointment(e)}}},[t._v("Cancel Appointment")])])])})):n("div",{staticClass:"no-appointment"},[n("p",[t._v("You don't have any pending appointments")])])])},a=[],i={render:o,staticRenderFns:a};e.a=i},AJgR:function(t,e,n){t.exports=n.p+"static/img/p+.d2dddef.jpg"},ApaE:function(t,e,n){"use strict";function o(t){n("CII0")}var a=n("SwRy"),i=n("Vs9D"),s=n("VU/8"),r=o,c=s(a.a,i.a,!1,r,"data-v-f18e8aea",null);e.a=c.exports},CII0:function(t,e){},Df1e:function(t,e){},Ecps:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",{attrs:{title:"header"}},[t._v("Loading..")])},a=[],i={render:o,staticRenderFns:a};e.a=i},F8vZ:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i={render:o,staticRenderFns:a};e.a=i},IhlW:function(t,e,n){"use strict";function o(t){n("NYXX")}var a=n("R0JR"),i=n("78Nm"),s=n("VU/8"),r=o,c=s(a.a,i.a,!1,r,"data-v-4f43d61f",null);e.a=c.exports},Jb8R:function(t,e,n){"use strict";var o=n("mvHQ"),a=n.n(o),i=n("L9+x");e.a={name:"sign-in",data:function(){return{loader:!1,actionCompleted:!1,registered:!1}},watch:{actionCompleted:function(t){t&&this.registered?this.navigate("dashboard/my-appointments"):t&&!this.registered&&this.navigate("signup")}},components:{"google-sign-in":i.a},methods:{getCredentials:function(t){console.log(t),this.isRegistered(t)},navigate:function(t){this.$router.push(t)},setStorage:function(t){localStorage.setItem("user-name",t.w3.ig),localStorage.setItem("user-dp",t.w3.Paa),localStorage.setItem("user-email",t.w3.U3),localStorage.setItem("user-googleid",t.w3.Eea)},isRegistered:function(t){var e=this,n={method:"POST",headers:{"Content-Type":"application/json"},body:a()({googleid:t.w3.Eea})},o=this;fetch("http://ec2-13-58-90-106.us-east-2.compute.amazonaws.com/api/checkUserexists",n).then(function(t){return o.loader=!0,t.json()}).then(function(n){console.log(n),e.registered=n.registered,e.setStorage(t),e.actionCompleted=!0}).catch(function(t){return console.log(t)})}}}},KGMf:function(t,e,n){"use strict";function o(t){n("nPC3")}var a=n("PeZT"),i=n("LGO8"),s=n("VU/8"),r=o,c=s(a.a,i.a,!1,r,"data-v-6fea4e1e",null);e.a=c.exports},"L9+x":function(t,e,n){"use strict";var o=n("5plq"),a=n("q1ic"),i=n("VU/8"),s=i(o.a,a.a,!1,null,null,null);e.a=s.exports},LGO8:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"title"},[t._v("Schedule")]),t._v(" "),t.loader?t._e():n("div",{staticClass:"grid-x grid-margin-x schedule-container"},t._l(t.schedule,function(e){return n("div",{staticClass:"small-12 cell doctor-container"},[n("div",{staticClass:"doctor-header"},[n("h3",[t._v("Dr."+t._s(e.name))]),t._v(" "),n("p",[t._v(t._s(e.department.toUpperCase()))]),t._v(" "),n("div",{staticClass:"grid-x timings"},t._l(e.available,function(e){return n("div",{staticClass:"cell availability"},[n("p",{staticClass:"available-day"},[n("b",[t._v(t._s(e.days))])]),t._v(" "),n("p",{staticClass:"available-time"},[t._v(t._s(e.time))])])}))]),t._v(" "),n("div",{staticClass:"grid-x doctor-footer"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedDate,expression:"selectedDate"}],staticClass:"small-6 medium-3 large-3 cell",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedDate=e.target.multiple?n:n[0]}}},t._l(t.getAvailableDates(e.available),function(e){return n("option",{domProps:{value:e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}},[t._v("\n                        "+t._s(t.days[e.getDay()])+", "+t._s(e.getDate())+" "+t._s(t.months[e.getMonth()])+"\n                    ")])})),t._v(" "),n("button",{staticClass:"small-6 medium-4 large-3 cell care-stack-button button",on:{click:function(n){t.bookAppointment(e)}}},[t._v("Book An Appointment")])])])}))])},a=[],i={render:o,staticRenderFns:a};e.a=i},M93x:function(t,e,n){"use strict";function o(t){n("nR4J")}var a=n("xJD8"),i=n("F8vZ"),s=n("VU/8"),r=o,c=s(a.a,i.a,!1,r,null,null);e.a=c.exports},MuRX:function(t,e,n){"use strict";e.a={name:"my-appointments",computed:{appointments:function(){return this.$store.getters.getPreviousAppointments}},data:function(){return{}},beforeMount:function(){var t={googleid:this.$store.getters.getGoogleId};this.$store.dispatch("fetchPreviousAppointments",t)}}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),a=n("M93x"),i=n("YaEn"),s=n("wtEF");o.a.config.productionTip=!1,new o.a({el:"#app",router:i.a,store:s.a,template:"<App/>",components:{App:a.a}})},NYXX:function(t,e){},PeZT:function(t,e,n){"use strict";e.a={name:"doctor-schedule",computed:{schedule:function(){return this.$store.getters.getDoctorSchedule}},data:function(){return{loader:!1,selectedDate:"",bookableDates:[],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},beforeMount:function(){this.setDates(),this.$store.getters.isDoctorListEmpty&&this.$store.dispatch("fetchDoctorSchedule")},methods:{bookAppointment:function(t){console.log(t.department),this.$store.commit("setBookingParameters",{doctor:t,department:t.department,date:this.selectedDate}),this.$router.push("/dashboard/book-appointment")},setDates:function(){var t,e=new Date,n=e.getDate();for(t=0;t<7;++t)e.setDate(n+t),this.bookableDates.push(new Date(e))},getAvailableDates:function(t){var e=this;return this.bookableDates.filter(function(n){return!!t.find(function(t){return t.days==e.days[n.getDay()]})})}}}},Q2es:function(t,e,n){"use strict";e.a={name:"booking-status",computed:{bookingStatus:function(){return this.$store.getters.getBookingStatus},bookingData:function(){return this.$store.getters.getBookedData}},beforeDestroy:function(){this.$store.commit("clearBookingData")}}},R0JR:function(t,e,n){"use strict";e.a={name:"my-appointments",computed:{appointments:function(){return this.$store.getters.getCurrentAppointmentList},cancelling:function(){return this.$store.getters.getCancellingStatus}},watch:{cancelling:function(t){1==t?this.cancelFlag=!0:this.cancelFlag&&this.refreshList()}},data:function(){return{cancelFlag:!1}},beforeMount:function(){this.refreshList()},methods:{refreshList:function(){var t={googleid:this.$store.getters.getGoogleId};this.$store.dispatch("fetchMyAppointments",t)},cancelAppointment:function(t){console.log(t),this.$store.dispatch("cancelAppointment",t)}}}},SwRy:function(t,e,n){"use strict";e.a={name:"signup",watch:{actionComplete:function(t){t&&this.$router.push("otp-verify")}},computed:{actionComplete:function(){return this.$store.getters.isActionComplete},username:function(){return this.$store.getters.getUsername}},data:function(){return{userObject:{age:"",gender:"",address:"",bloodGroup:"",phoneNumber:""},loader:!1}},methods:{signup:function(){this.userObject.name=localStorage.getItem("user-name"),this.userObject.email=localStorage.getItem("user-email"),this.userObject.photoUrl=localStorage.getItem("user-dp"),this.userObject.googleid=localStorage.getItem("user-googleid"),this.loader=!0,this.$store.dispatch("register",this.userObject)}}}},TGvd:function(t,e,n){"use strict";function o(t){n("om9X")}var a=n("aEfQ"),i=n("y37/"),s=n("VU/8"),r=o,c=s(a.a,i.a,!1,r,null,null);e.a=c.exports},UjVw:function(t,e,n){"use strict";e.a={isActionComplete:function(t){return t.user.registerComplete},getGoogleId:function(t){return t.user.googleid},getUsername:function(t){return t.user.name},getPhoneNumber:function(t){return t.user.phoneNumber},getEmail:function(t){return t.user.email},getVerificationStatus:function(t){return t.user.otp},isDoctorListEmpty:function(t){return 0==t.doctor.schedule.length},getDoctorSchedule:function(t){return t.doctor.schedule},getDepartments:function(t){return t.doctor.schedule.map(function(t){return t.department})},getBookingDate:function(t){return t.booking.date},getBookingDepartment:function(t){return t.booking.department},getBookedData:function(t){return t.booking},getBookingStatus:function(t){return t.booking.bookingStatus},getCancellingStatus:function(t){return t.cancelBooking.cancelling},getCurrentAppointmentList:function(t){return t.currentAppointments},getPreviousAppointments:function(t){return t.previousAppointments}}},Vs9D:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-base"},[n("div",{staticClass:"grid-container hor-center"},[n("div",{staticClass:"signup-text"},[n("h2",[t._v("Complete Signup")]),t._v(" "),n("p",[t._v("Welcome "),n("b",[t._v(t._s(t.username))]),t._v(", we just need to collect a few more data")])]),t._v(" "),n("div",{staticClass:"grid-x"},[n("div",{staticClass:"small-10 medium-8 large-6 cell sign-up-fields"},[n("div",{staticClass:"grid-x"},[n("div",{staticClass:"small-6 cell top-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userObject.age,expression:"userObject.age"}],attrs:{type:"text",placeholder:"Age"},domProps:{value:t.userObject.age},on:{input:function(e){e.target.composing||t.$set(t.userObject,"age",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"small-6 cell top-right"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.userObject.gender,expression:"userObject.gender"}],class:{"select-selected":""!=t.userObject.gender},attrs:{id:"gender"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.userObject,"gender",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:""}},[t._v("-gender-")]),t._v(" "),n("option",{attrs:{value:"female"}},[t._v("Female")]),t._v(" "),n("option",{attrs:{value:"male"}},[t._v("Male")]),t._v(" "),n("option",{attrs:{value:"others"}},[t._v("Others")])])])]),t._v(" "),n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.userObject.address,expression:"userObject.address"}],attrs:{type:"textarea",placeholder:"Address"},domProps:{value:t.userObject.address},on:{input:function(e){e.target.composing||t.$set(t.userObject,"address",e.target.value)}}})]),t._v(" "),n("div",[n("div",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.userObject.bloodGroup,expression:"userObject.bloodGroup"}],class:{"select-selected":""!=t.userObject.bloodGroup},attrs:{name:"blood-group"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.userObject,"bloodGroup",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:""}},[t._v("-blood group-")]),t._v(" "),n("option",{attrs:{value:"O+ve"}},[t._v("O positive")]),t._v(" "),n("option",{attrs:{value:"O+ve"}},[t._v("O negative")]),t._v(" "),n("option",{attrs:{value:"O+ve"}},[t._v("A positive")]),t._v(" "),n("option",{attrs:{value:"O+ve"}},[t._v("A negative")]),t._v(" "),n("option",{attrs:{value:"O+ve"}},[t._v("B positive")]),t._v(" "),n("option",{attrs:{value:"O+ve"}},[t._v("B negative")]),t._v(" "),n("option",{attrs:{value:"O+ve"}},[t._v("AB positive")]),t._v(" "),n("option",{attrs:{value:"unknown"}},[t._v("Unknown")])])])]),t._v(" "),n("div",[n("div",{staticClass:"bottom"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userObject.phoneNumber,expression:"userObject.phoneNumber"}],attrs:{type:"text",placeholder:"Phone Number"},domProps:{value:t.userObject.phoneNumber},on:{input:function(e){e.target.composing||t.$set(t.userObject,"phoneNumber",e.target.value)}}})]),t._v(" "),n("p",{staticClass:"signup-text"},[t._v("We use this phone number to verfy your identity by sending an OTP")])])])]),t._v(" "),t.loader?t.actionComplete?t._e():n("div",[t._v("Loading....")]):n("div",{staticClass:"signup-text"},[n("button",{staticClass:"button",on:{click:t.signup}},[t._v("Submit")])])])])},a=[],i={render:o,staticRenderFns:a};e.a=i},WTQb:function(t,e){},YaEn:function(t,e,n){"use strict";var o=n("7+uW"),a=n("/ocq"),i=n("gORT"),s=n("ezBX"),r=n("ApaE"),c=n("wjP8"),u=n("TGvd"),l=n("IhlW"),d=n("3E7n"),p=n("KGMf"),m=n("+1xU"),v=n("/Lli");o.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Hello",component:i.a},{path:"/signin",name:"SignIn",component:s.a},{path:"/signup",name:"SignUp",component:r.a},{path:"/otp-verify",name:"OTPVerify",component:c.a},{path:"/dashboard",name:"Dashboard",component:u.a,children:[{path:"",name:"IndexRoute",redirect:"my-appointments"},{path:"my-appointments",name:"MyAppointments",component:l.a},{path:"previous-appointments",name:"PreviousAppointments",component:m.a},{path:"schedule",name:"DoctorSchedule",component:p.a},{path:"book-appointment",name:"BookAppointment",component:d.a},{path:"booking-status",name:"BookingStatus",component:v.a}]}]})},aEfQ:function(t,e,n){"use strict";var o=n("3ixs");e.a={name:"dashboard",components:{"patient-menu":o.a}}},ezBX:function(t,e,n){"use strict";function o(t){n("Df1e")}var a=n("Jb8R"),i=n("yAmi"),s=n("VU/8"),r=o,c=s(a.a,i.a,!1,r,null,null);e.a=c.exports},gORT:function(t,e,n){"use strict";function o(t){n("WTQb")}var a=n("07PK"),i=n("Ecps"),s=n("VU/8"),r=o,c=s(a.a,i.a,!1,r,"data-v-de3b8766",null);e.a=c.exports},jUgz:function(t,e,n){t.exports=n.p+"static/img/p+.f513817.png"},jheG:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-base"},[n("div",{staticClass:"grid-container hor-center"},[t._m(0),t._v(" "),n("div",{staticClass:"grid-x"},[n("div",{staticClass:"small-4 cell"}),t._v(" "),n("div",{staticClass:"small-4 cell"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.otpVal,expression:"otpVal"}],attrs:{type:"text",placeholder:"Enter OTP here"},domProps:{value:t.otpVal},on:{input:function(e){e.target.composing||(t.otpVal=e.target.value)}}})])]),t._v(" "),t.loader?"verifying"==t.otpStatus?n("div",[t._v("\n            Loading..\n        ")]):"failed"==t.otpStatus?n("div",[t._v("\n            Failed to verify OTP\n            "),n("div",[n("button",{staticClass:"button success",on:{click:t.verifyOtp}},[t._v("Submit")])]),t._v(" "),n("div",[n("button",{staticClass:"button success",on:{click:t.requestOtp}},[t._v("Request Again")])])]):t._e():n("div",{staticClass:"grid-x buttons"},[n("div",{staticClass:"small-1 cell"},[n("button",{staticClass:"button care-stack-button",on:{click:t.verifyOtp}},[t._v("Submit")])]),t._v(" "),n("div",{staticClass:"small-1 cell"},[n("button",{staticClass:"button success",on:{click:t.requestOtp}},[t._v("Resend")])])])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("OTP")])])}],i={render:o,staticRenderFns:a};e.a=i},klTQ:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"grid-x grid-padding-x"},[n("div",{staticClass:"small-2 cell"}),t._v(" "),n("div",{staticClass:"small-4 cell department-select"},[n("label",{attrs:{for:"department"}},[t._v("Select Department")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.departmentFilter,expression:"departmentFilter"}],attrs:{id:"department"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.departmentFilter=e.target.multiple?n:n[0]}}},t._l(t.departments,function(e){return n("option",[t._v(t._s(e))])}))]),t._v(" "),n("div",{staticClass:"small-4 cell date-container"},[n("label",{attrs:{for:"select-date"}},[t._v("Select Date")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedDateString,expression:"selectedDateString"}],attrs:{type:"date",min:t.today,max:t.lastDate},domProps:{value:t.selectedDateString},on:{input:function(e){e.target.composing||(t.selectedDateString=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"grid-x grid-padding-x doctor-select-area"},[n("div",{staticClass:"small-4 cell"}),t._v(" "),t.selectedDateString.length>0?n("div",{staticClass:"small-4 cell doctorselector"},[t.choosableDoctors.length>0?n("div",[n("label",{attrs:{for:"doctor-select"}},[t._v("Select doctor")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedData.doctor,expression:"selectedData.doctor"}],attrs:{id:"doctor-select"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.selectedData,"doctor",e.target.multiple?n:n[0])}}},t._l(t.choosableDoctors,function(e){return n("option",{domProps:{value:e}},[t._v("\n                        "+t._s(e.name)+"\n                    ")])}))]):0==t.departmentFilter.length?n("div",[n("p",[t._v("Select department")])]):n("div",[n("p",[t._v("No doctors available for consultation in the given date")])])]):n("div",{staticClass:"small-4 cell"},[n("p",[t._v("Please select a date")])])]),t._v(" "),n("div",[n("div",[n("button",{staticClass:"button",on:{click:t.confirmBooking}},[t._v("\n                Book Appointment\n            ")])])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"title"},[t._v("Book Appointment")])])}],i={render:o,staticRenderFns:a};e.a=i},mUbh:function(t,e,n){"use strict";var o=n("mvHQ"),a=n.n(o),i="http://ec2-13-58-90-106.us-east-2.compute.amazonaws.com";e.a={register:function(t,e){var n={method:"POST",headers:{"Content-Type":"application/json"},body:a()(e)};console.log(e),fetch(i+"/api/patientDetails",n).then(function(t){return t.text()}).then(function(n){console.log(n),t.commit("registerUser",e)}).catch(function(t){return console.log(t)})},prepareOtpVerification:function(t,e){var n={method:"POST",headers:{"Content-Type":"application/json"},body:a()(e)};console.log(e),fetch(i+'/api/mobileVerification"',n).then(function(t){return t.text}).then(function(t){return console.log(t)}).catch(function(t){return console.log(t)}),t.commit("updateOtpStatus","verifying")},verifyOtp:function(t,e){var n={method:"POST",headers:{"Content-Type":"application/json"},body:a()(e)};fetch(i+"/api/verify",n).then(function(t){return t.json()}).then(function(e){console.log(e);var n=e.verified?"success":"failed";console.log("status",n),t.commit("updateOtpStatus",n)}).catch(function(t){return console.log(t)})},fetchDoctorSchedule:function(t){fetch(i+"/api/doctorDetails").then(function(t){return t.json()}).then(function(e){console.log(e),t.commit("updateDoctorSchedule",e)})},confirmBooking:function(t,e){t.commit("setBookingProgress");var n={method:"POST",headers:{"Content-Type":"application/json"},body:a()(e)};fetch(i+"/api/booking",n).then(function(t){return t.json()}).then(function(e){t.commit("setBookingStatus",e)}).catch(function(t){return console.log(t)})},fetchMyAppointments:function(t,e){var n={method:"POST",headers:{"Content-Type":"application/json"},body:a()(e)};fetch(i+"/api/currentAppointements",n).then(function(t){return t.json()}).then(function(e){t.commit("updateCurrentAppointmentList",e)}).catch(function(t){return console.log(t)})},fetchPreviousAppointments:function(t,e){var n={method:"POST",headers:{"Content-Type":"application/json"},body:a()(e)};fetch(i+"/api/previousAppointements",n).then(function(t){return t.json()}).then(function(e){t.commit("updatePreviousAppointments",e)}).catch(function(t){return console.log(t)})},cancelAppointment:function(t,e){t.commit("setCancellingStatus"),console.log(e);var n={method:"POST",headers:{"Content-Type":"application/json"},body:a()(e)};fetch(i+"/api/delete",n).then(function(t){return t.text()}).then(function(e){console.log(e),t.commit("setCancelStatus",!0)}).catch(function(t){return console.log(t)})}}},nPC3:function(t,e){},nR4J:function(t,e){},om9X:function(t,e){},q1ic:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{ref:"googleSignIn",staticClass:"button alert"},[t._v("Sign in Using Google")])])},a=[],i={render:o,staticRenderFns:a};e.a=i},sbqS:function(t,e){},shu1:function(t,e){},tSPw:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"title"},[t._v("Previous Appointments")]),t._v(" "),0!=t.appointments.length?n("div",{staticClass:"grid-x flex-container"},t._l(t.appointments,function(e){return n("div",{staticClass:"small-12 medium-10 large-10 cell card"},[n("div",{staticClass:"card-header"},[n("h3",[t._v("Dr. "+t._s(e.doctorName))]),t._v(" "),n("p",[t._v("Date: "+t._s(e.date))])])])})):n("div",{staticClass:"no-appointment"},[n("p",[t._v("You haven't had any appointments yet.")])])])},a=[],i={render:o,staticRenderFns:a};e.a=i},uWku:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-container"},[t._m(0),t._v(" "),n("ul",[n("li",{class:{"active-menu":"book-appointment"==this.routePath},on:{click:function(e){t.activeMenu=1}}},[n("router-link",{attrs:{to:"/dashboard/book-appointment"}},[t._v("Book an Appointment")])],1),t._v(" "),n("li",{class:{"active-menu":"my-appointments"==this.routePath},on:{click:function(e){t.activeMenu=2}}},[n("router-link",{attrs:{to:"/dashboard/my-appointments"}},[t._v("My Appointments")])],1),t._v(" "),n("li",{class:{"active-menu":"schedule"==this.routePath},on:{click:function(e){t.activeMenu=3}}},[n("router-link",{attrs:{to:"/dashboard/schedule"}},[t._v("Doctors' Schedule")])],1),t._v(" "),n("li",{class:{"active-menu":"previous-appointments"==this.routePath},on:{click:function(e){t.activeMenu=4}}},[n("router-link",{attrs:{to:"/dashboard/previous-appointments"}},[t._v("Previous Appointments")])],1)])])},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"menu-header"},[o("img",{attrs:{src:n("jUgz")}}),t._v(" "),o("div",[o("h2",[t._v("Patient+")])])])}],i={render:o,staticRenderFns:a};e.a=i},ukYY:function(t,e,n){"use strict";e.a={registerUser:function(t,e){var n={};n.name=e.name,n.email=e.email,n.photoUrl=e.photoUrl,n.phoneNumber=e.phoneNumber,n.googleid=e.googleid,n.loggedIn=!0,n.otp="unverified",t.user=n,t.user.registerComplete=!0},updateOtpStatus:function(t,e){t.user.otp=e},updateDoctorSchedule:function(t,e){console.log(e),t.doctor.schedule=e},setDepartment:function(t,e){t.booking.department=e},setBookingDate:function(t,e){t.booking.date=e},setBookingParameters:function(t,e){t.booking.doctor=e.doctor,t.booking.date=e.date,t.booking.department=e.department},setBookingProgress:function(t){t.booking.bookingStatus="booking"},setBookingStatus:function(t,e){console.log(e),void 0!=e.tokenno?(t.booking.bookingStatus="success",t.booking.tokenno=e.tokenno,t.booking.doctorName=e.doctorName):t.booking.bookingStatus="failed"},clearBookingData:function(t){t.booking={date:"",googleid:"",bookingStatus:"notbooked",tokenno:"",department:"",doctor:{},doctorName:""}},updateCurrentAppointmentList:function(t,e){console.log(e),t.currentAppointments=e},setDoctorId:function(t,e){console.log(e),t.booking.doctorid=e},updatePreviousAppointments:function(t,e){console.log(e),t.previousAppointments=e},setCancellingStatus:function(t){t.cancelBooking.cancelling=!0},setCancelStatus:function(t,e){console.log(e),t.cancelBooking.cancelling=!1,t.cancelBooking.cancelled=!0}}},vkA4:function(t,e,n){"use strict";e.a={watch:{otpStatus:function(t){"success"==t&&this.$router.push("dashboard/my-appointments")}},computed:{otpStatus:function(){return this.$store.getters.getVerificationStatus},googleid:function(){return this.$store.getters.getGoogleId},phoneNumber:function(){return this.$store.getters.getPhoneNumber}},data:function(){return{otpVal:"",loader:!1}},beforeMount:function(){this.requestOtp()},methods:{verifyOtp:function(){var t={otpno:this.otpVal,googleid:this.googleid};this.loader=!0,this.$store.dispatch("verifyOtp",t)},requestOtp:function(){var t={googleid:this.googleid,mobilenumber:this.phoneNumber};this.$store.dispatch("prepareOtpVerification",t)}}}},wjP8:function(t,e,n){"use strict";function o(t){n("sbqS")}var a=n("vkA4"),i=n("jheG"),s=n("VU/8"),r=o,c=s(a.a,i.a,!1,r,"data-v-4771b0b4",null);e.a=c.exports},wtEF:function(t,e,n){"use strict";var o=n("7+uW"),a=n("NYxO"),i=n("UjVw"),s=n("ukYY"),r=n("mUbh");o.a.use(a.a);var c=new a.a.Store({state:{user:{loggedIn:null!=localStorage.getItem("user-name"),name:localStorage.getItem("user-name"),photoUrl:localStorage.getItem("user-dp"),email:localStorage.getItem("user-email"),googleid:localStorage.getItem("user-googleid"),registerComplete:!1,phoneNumber:"",otp:"unverified"},doctor:{schedule:[]},booking:{date:"",googleid:"",bookingStatus:"notbooked",tokenno:"",department:"",doctor:{},doctorName:""},currentAppointments:[],previousAppointments:[],cancelBooking:{cancelling:!1,cancelled:!0}},getters:i.a,mutations:s.a,actions:r.a});e.a=c},xJD8:function(t,e,n){"use strict";e.a={name:"app"}},"xrD/":function(t,e){},"y37/":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"patient-menu"},[n("patient-menu")],1),t._v(" "),n("div",{staticClass:"content-area"},[n("router-view")],1)])},a=[],i={render:o,staticRenderFns:a};e.a=i},yAmi:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),t.loader?t.actionCompleted?t._e():n("div",[t._v("\n        Loading...\n    ")]):n("div",[n("google-sign-in",{on:{signedIn:t.getCredentials}})],1)])},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"logo"},[o("img",{attrs:{src:n("AJgR")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Patient +")])])}],i={render:o,staticRenderFns:a};e.a=i}},["NHnr"]);
//# sourceMappingURL=app.3fddd0cbdc95eed1d580.js.map