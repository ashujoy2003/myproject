function nextTab(id)
{
	var error = "";

	if (id == 'view2')
	{
		if (document.getElementById("title").value == 0) 
		{
			error += "<tr><td>Select Title (in Personal Details Tab).</td></tr>";
		}

		if (document.getElementById("name").value == "") 
		{
			error += "<tr><td>Enter Name (in Personal Details Tab).</td></tr>";
		}
		
		if (document.getElementById("surname").value == "") 
		{
			error += "<tr><td>Enter Surname (in Personal Details Tab).</td></tr>";
		}

		if (document.getElementById("gender").value == 0) 
		{
			error += "<tr><td>Select Gender (in Personal Details Tab).</td></tr>";
		}
		
		if (document.getElementById("maritalStatus").value == 0) 
		{
			error += "<tr><td>Select Marital Status (in Personal Details Tab).</td></tr>";
		}

		if (document.getElementById("dob").value == "") 
		{
			error += "<tr><td>Enter Date of birth (in Personal Details Tab).</td></tr>";
		}
		if (document.getElementById("dob").value != "") 
		{
			if (checkDate(document.getElementById("dob").value))
			{
				error += "<tr><td>Date Of Birth must be less than Current Date (in Personal Details Tab).</td></tr>";
			}
		}
		document.getElementById("age").value = calculateAge();

		if (document.getElementById("photo1").value == "") 
		{
			error += "<tr><td>Photograph is mandatory to be uploaded (in Personal Details Tab).</td></tr>";
		}

		if (document.getElementById("passportNumber").value != "") 
		{
			if (document.getElementById("passportIssueDate").value == "")
			{
				error += "<tr><td>Enter Passport Issue Date (in Personal Details Tab).</td></tr>";
			}
			else if (document.getElementById("passportIssueDate").value != "")
			{
				if (checkDate(document.getElementById("passportIssueDate").value))
				{
					error += "<tr><td>Passport Issue Date must be less than Current Date (in Personal Details Tab).</td></tr>";
				}
			}
			if (document.getElementById("passportIssuePlace").value == "")
			{
				error += "<tr><td>Enter Passport Issue Place (in Personal Details Tab).</td></tr>";
			}
			if (document.getElementById("passportExpiryDate").value == "")
			{
				error += "<tr><td>Enter Passport Expiry Date (in Personal Details Tab).</td></tr>";
			}
			else if (document.getElementById("passportExpiryDate").value != "")
			{
				if (!checkDate(document.getElementById("passportExpiryDate").value))
				{
					error += "<tr><td>Passport Expiry Date must be greater than Current Date (in Personal Details Tab).</td></tr>";
				}
			}
		}
			
		if (document.getElementById("officeAddress").value == "") 
		{
			error += "<tr><td>Enter Office Address (in Personal Details Tab).</td></tr>";
		}

		if (document.getElementById("residenceAddress").value == "") 
		{
			error += "<tr><td>Enter Residence Address (in Personal Details Tab).</td></tr>";
		}
		
		if (document.getElementById("residenceMobileNumberCCode").value == "") 
		{
			error += "<tr><td>Enter Residence Telephone Number Country Code (in Personal Details Tab).</td></tr>";
		}
		
		if (document.getElementById("residenceMobileNumber").value == "") 
		{
			error += "<tr><td>Enter Residence Telephone Number (in Personal Details Tab).</td></tr>";
		}
		
		if (document.getElementById("officeEmail").value == "") 
		{
			error += "<tr><td>Enter Office Email Id(in Personal Details Tab).</td></tr>";
		}
			
		if (document.getElementById("officeEmail").value != "")
		{
			if (!validateEmail(document.getElementById("officeEmail").value))
			{
				error += "<tr><td>Official Email id is invalid (in Personal Details Tab).</td></tr>";
			}
		}

		if (document.getElementById("residenceEmail").value == "") 
		{
			error += "<tr><td>Enter Residence Email Id (in Personal Details Tab).</td></tr>";
		}
		
		if (document.getElementById("residenceEmail").value != "")
		{
			if (!validateEmail(document.getElementById("residenceEmail").value)){
				error += "<tr><td>Residence Email id is invalid (in Personal Details Tab).</td></tr>";
			}
		}
		
		if (document.getElementById("emergencyOfficePersonName").value == "") 
		{
			error += "<tr><td>Enter Emergency Office Person Name (in Personal Details Tab).</td></tr>";
		}

		if (document.getElementById("emergencyPersonName").value == "") 
		{
			error += "<tr><td>Enter emergency Personal Person Name (in Personal Details Tab).</td></tr>";
		}

		if (document.getElementById("emergencyPersonOfficialAddress").value == "") 
		{
			error += "<tr><td>Enter Emergency Person Official Address (in Personal Details Tab).</td></tr>";
		}

		if (document.getElementById("emergencyPersonPersonalAddress").value == "") 
		{
			error += "<tr><td>Enter Emergency Person Personal Address (in Personal Details Tab).</td></tr>";
		}

		if (document.getElementById("emergencyPersonOfficialMobileNumberCCode").value == "") 
		{
			error += "<tr><td>Enter Emergency Person Official Mobile Number Country Code (in Personal Details Tab).</td></tr>";
		}
		
		if (document.getElementById("emergencyPersonOfficialMobileNumber").value == "") 
		{
			error += "<tr><td>Enter Emergency Person Official Mobile Number (in Personal Details Tab).</td></tr>";
		}
		
		if (document.getElementById("emergencyPersonPersonalMobileNumberCCode").value == "") 
		{
			error += "<tr><td>Enter Emergency Person Personal Mobile Number Country Code (in Personal Details Tab).</td></tr>";
		}
		if (document.getElementById("emergencyPersonPersonalMobileNumber").value == "") 
		{
			error += "<tr><td>Enter Emergency Person Personal Mobile Number (in Personal Details Tab).</td></tr>";
		}

		if (document.getElementById("emergencyPersonOfficialEmail").value == "") 
		{
			error += "<tr><td>Enter Emergency Person Official Email Id(in Personal Details Tab).</td></tr>";
		}
		if (document.getElementById("emergencyPersonOfficialEmail").value != "")
		{
			if (!validateEmail(document.getElementById("emergencyPersonOfficialEmail").value))
			{
				error += "<tr><td>Emergency Person Official Email id is invalid (in Personal Details Tab).</td></tr>";
			}
		}

		if (document.getElementById("emergencyPersonPersonalEmail").value == "") 
		{
			error += "<tr><td>Enter Emergency Person Personal Email Id (in Personal Details Tab).</td></tr>";
		}
		if (document.getElementById("emergencyPersonPersonalEmail").value != "")
		{
			if (!validateEmail(document.getElementById("emergencyPersonPersonalEmail").value))
			{
				error += "<tr><td>Emergency Person Personal Email id is invalid (in Personal Details Tab).</td></tr>";
			}
		}

		if (error != "") {
			var errorTbl = "<table align='center' style='text-align: left;'>";
			errorTbl += error;
			errorTbl += "</table>";
			jAlert(errorTbl, "Input Fields Missing!!! ");
			return false;
		}
		else 
		{
			error = "";
			document.getElementById("view1").style.display = "none";
			document.getElementById(id).style.display = "block";
		}

		showCountry(); showSecretariat(); showStream(); showCourse(); showInstitute(); showTitle(); showName(); showSurname(); showGender(); showMaritalStatus(); showDOB(); showPassportNo(); showIssueDate(); showIssuePlace(); showExpiryDate(); showResAddress(); showResFaxCCode(); showResFaxACode(); showResFax();showEmail(); showResTelephoneCCode(); showResTelephone(); showOfficeAddress(); showOfficeFaxCCode();
		showOfficeFaxACode(); showOfficeFax(); showOfficeEmail(); showOfficeMobileNoCCode(); 
		showOfficeMobileNo(); showSpecialDiet(); showEmergencyOfficePersonName(); showEmergencyPersonName(); showEmergencyPersonOfficialAddress(); showEmergencyPersonPersonalAddress(); 	showEmergencyPersonOfficialPhoneCCode(); showEmergencyPersonOfficialPhoneACode(); showEmergencyPersonOfficialPhone(); showEmergencyPersonPersonalPhoneCCode(); showEmergencyPersonPersonalPhoneACode(); showEmergencyPersonPersonalPhone();
		showEmergencyPersonOfficialMobileNumberCCode(); showEmergencyPersonOfficialMobileNumber(); showEmergencyPersonPersonalMobileNumberCCode(); showEmergencyPersonPersonalMobileNumber(); showEmergencyPersonOfficialFaxCCode(); showEmergencyPersonOfficialFaxACode(); 
		showEmergencyPersonOfficialFax(); showEmergencyPersonPersonalFaxCCode(); showEmergencyPersonPersonalFaxACode(); showEmergencyPersonPersonalFax(); 
		showEmergencyPersonOfficialEmail(); showEmergencyPersonPersonalEmail();
	}
	if (id == 'view3')
	{
		if (!checkDynamicInput(".mandatoryEduTbox"))
		{
			error += "<tr><td>Enter Missing values of Educational Components (in Educational/Professional Details Tab). </td></tr>";
		}
		
		if (checkDynamicInput(".mandatoryEduTbox"))
		{
			var eduErr = checkYear("edu", 1);
			if (eduErr != "All Good")
			{
				error += "<tr><td>" + eduErr + " in Educational Details (in Educational/Professional Details Tab). </td></tr>";
			}
		}
		if (checkDynamicInput(".mandatoryProfTbox"))
		{
			var profErr = checkYear("prof", 1);
			if (profErr != "All Good")
			{
				error += "<tr><td>" + profErr + " in Professional Details (in Educational/Professional Details Tab). </td></tr>";
			}
		}

		if (error != "") {
			var errorTbl = "<table align='center' style='text-align: left;'>";
			errorTbl += error;
			errorTbl += "</table>";
			jAlert(errorTbl, "Input Fields Missing!!! ");
			return false;
		}
		else 
		{
			document.getElementById("view2").style.display = "none";
			document.getElementById(id).style.display = "block";
			error = "";
		}
		showCountry(); showSecretariat(); showStream(); showCourse(); showInstitute(); showTitle(); showName(); showSurname(); showGender(); showMaritalStatus(); showDOB(); showPassportNo(); showIssueDate(); showIssuePlace(); showExpiryDate(); showResAddress(); showResFaxCCode(); showResFaxACode(); showResFax();showEmail(); showResTelephoneCCode(); showResTelephone(); showOfficeAddress(); showOfficeFaxCCode();
		showOfficeFaxACode(); showOfficeFax(); showOfficeEmail(); showOfficeMobileNoCCode(); 
		showOfficeMobileNo(); showSpecialDiet(); showEmergencyOfficePersonName(); showEmergencyPersonName(); showEmergencyPersonOfficialAddress(); showEmergencyPersonPersonalAddress(); 		showEmergencyPersonOfficialPhoneCCode(); showEmergencyPersonOfficialPhoneACode(); showEmergencyPersonOfficialPhone(); showEmergencyPersonPersonalPhoneCCode(); showEmergencyPersonPersonalPhoneACode(); showEmergencyPersonPersonalPhone();
		showEmergencyPersonOfficialMobileNumberCCode(); showEmergencyPersonOfficialMobileNumber(); showEmergencyPersonPersonalMobileNumberCCode(); showEmergencyPersonPersonalMobileNumber(); showEmergencyPersonOfficialFaxCCode(); showEmergencyPersonOfficialFaxACode(); 
		showEmergencyPersonOfficialFax(); showEmergencyPersonPersonalFaxCCode(); showEmergencyPersonPersonalFaxACode(); showEmergencyPersonPersonalFax(); 
		showEmergencyPersonOfficialEmail(); showEmergencyPersonPersonalEmail(); showEducationalQualification(); showProfessionalQualification();
	}
	if (id == 'view4')
	{
		if (!checkDynamicInput(".mandatoryEmpTbox"))
		{
			error += "<tr><td>Enter Missing Values of Employment Details (in Employment Details Tab). </td></tr>";
		}

		if (checkDynamicInput(".mandatoryEmpTbox"))
		{
			var fromDateErr = checkDynamicDate('empTab', 2);
			if (fromDateErr != "All Good")
			{
				error += "<tr><td>From " + fromDateErr + "(in Employment Detail Tab).</td></tr>";
			}
			var toDateErr = checkDynamicDate('empTab', 3);
			if (toDateErr != "All Good")
			{
				error += "<tr><td>To " + toDateErr + " (in Employment Detail Tab).</td></tr>";
			}
			var dateErr = checkEmpDates('empTab', 2, 3);
			if (dateErr != "All Good")
			{
				error += "<tr><td>" + dateErr + " (in Employment Detail Tab). </td></tr>";
			}
		}

		if (document.getElementById("Government").checked == false && document.getElementById("Semi-government").checked == false && document.getElementById("Private Company").checked == false && document.getElementById("Others").checked == false) 
		{
			error += "<tr><td>Select Employee Category (in Employment Details Tab).</td></tr>";
		}
		if (document.getElementById("Others").checked == true)
		{
			if (document.getElementById("employeeCategoryOtherVal").value == "")
			{
				error += "<tr><td>Enter Value for Other Employee Category (in Employment Details Tab).</td></tr>";
			}
		}

		if (document.getElementById("currentEmployerName").value == "") 
		{
			error += "<tr><td>Enter Current Employer Name (in Employment Details Tab).</td></tr>";
		}
		if (document.getElementById("currentEmployerAddress").value == "") 
		{
			error += "<tr><td>Enter Current Employer Address (in Employment Details Tab).</td></tr>";
		}
		if (document.getElementById("currentEmployerPhoneCCode").value == "") 
		{
			error += "<tr><td>Enter Current Employer Phone Country Code (in Employment Details Tab).</td></tr>";
		}
		if (document.getElementById("currentEmployerPhone").value == "") 
		{
			error += "<tr><td>Enter Current Employer Phone (in Employment Details Tab).</td></tr>";
		}
		if (document.getElementById("currentEmployerEmailId").value == "") 
		{
			error += "<tr><td>Enter Current Employer EmailId (in Employment Details Tab).</td></tr>";
		}
		if (document.getElementById("currentEmployerEmailId").value != "")
		{
			if (!validateEmail(document.getElementById("currentEmployerEmailId").value))
			{
				error += "<tr><td>Current Employer Email id is invalid (in Personal Details Tab).</td></tr>";
			}
		}
		if (document.getElementById("currentDesignation").value == "") 
		{
			error += "<tr><td>Enter Current Designation (in Employment Details Tab).</td></tr>";
		}
		if (document.getElementById("currentWorkDescription").value == "") 
		{
			error += "<tr><td>Enter Current Work Responsibilities (in Employment Details Tab).</td></tr>";
		}
		if (document.getElementById("currentFromDate").value == "") 
		{
			error += "<tr><td>Enter Current From Date (in Employment Details Tab).</td></tr>";
		}
		if (document.getElementById("courseAttendedInIndia1").checked == false && document.getElementById("courseAttendedInIndia2").checked == false) 
		{
			error += "<tr><td>Select whether Course Attended in India or not (in Employment Details Tab).</td></tr>";
		}

		if (document.getElementById("courseAttendedInIndia1").checked == true)
		{
			if (!checkDynamicInput(".mandatoryInCourseTbox"))
			{
				error += "<tr><td>Enter Missing values of Course Previously Done in India (in Employment Details Tab). </td></tr>";
			}
			var inCourseErr = checkYear("inCourseTbl", 2);
			if (inCourseErr != "All Good")
			{
				error += "<tr><td>" + inCourseErr + "in Indian Course (in Employment Details Tab). </td></tr>";
			}
		}

		if (document.getElementById("courseAttendedInForeignCountry1").checked == false && document.getElementById("courseAttendedInForeignCountry2").checked == false) 
		{
			error += "<tr><td>Select whether Course Attended in other Country or not (in Employment Details Tab).</td></tr>";
		}

		if (document.getElementById("courseAttendedInForeignCountry1").checked == true)
		{
			if (!checkDynamicInput(".mandatoryFrCourseTbox"))
			{
				error += "<tr><td>Enter Missing values of Course Previously Done in Foreign Country (in Employment Details Tab). </td></tr>";
			}
			var frCourseErr = checkYear("frCourseTbl", 3);
			if (frCourseErr != "All Good")
			{
				error += "<tr><td>" + frCourseErr + "in Foreign Course (in Employment Details Tab). </td></tr>";
			}
		}

		var reason = document.getElementById("reasonForApplying");

		if (reason.value == "") {
			error += "<tr><td>Enter reason for applying for the course (in Employment Details Tab).</td></tr>";
		}

		if (error != "") 
		{
			var errorTbl = "<table align='center' style='text-align: left;'>";
			errorTbl += error;
			errorTbl += "</table>";
			jAlert(errorTbl, "Input Fields Missing!!! ");
			return false;
		}
		else {
			document.getElementById("view3").style.display = "none";
			document.getElementById(id).style.display = "block";
			error = "";
		}
		showCountry(); showSecretariat(); showStream(); showCourse(); showInstitute(); showTitle(); showName(); showSurname(); showGender(); showMaritalStatus(); showDOB(); showPassportNo(); showIssueDate(); showIssuePlace(); showExpiryDate(); showResAddress(); showResFaxCCode(); showResFaxACode(); showResFax();showEmail(); showResTelephoneCCode(); showResTelephone(); showOfficeAddress(); showOfficeFaxCCode();
		showOfficeFaxACode(); showOfficeFax(); showOfficeEmail(); showOfficeMobileNoCCode(); 
		showOfficeMobileNo(); showSpecialDiet(); showEmergencyOfficePersonName(); showEmergencyPersonName(); showEmergencyPersonOfficialAddress(); showEmergencyPersonPersonalAddress(); 		showEmergencyPersonOfficialPhoneCCode(); showEmergencyPersonOfficialPhoneACode(); showEmergencyPersonOfficialPhone(); showEmergencyPersonPersonalPhoneCCode(); showEmergencyPersonPersonalPhoneACode(); showEmergencyPersonPersonalPhone();
		showEmergencyPersonOfficialMobileNumberCCode(); showEmergencyPersonOfficialMobileNumber(); showEmergencyPersonPersonalMobileNumberCCode(); showEmergencyPersonPersonalMobileNumber(); showEmergencyPersonOfficialFaxCCode(); showEmergencyPersonOfficialFaxACode(); 
		showEmergencyPersonOfficialFax(); showEmergencyPersonPersonalFaxCCode(); showEmergencyPersonPersonalFaxACode(); showEmergencyPersonPersonalFax(); 
		showEmergencyPersonOfficialEmail(); showEmergencyPersonPersonalEmail(); showEducationalQualification(); showProfessionalQualification();
		showEmploymentDetail(); showemployeeCategory(); showCurrentEmployerName(); showCurrentEmployerAddress(); showCurrentEmployerPhoneCCode(); showCurrentEmployerPhoneACode(); showCurrentEmployerPhone(); showCurrentEmployerEmailId(); showIndianCourseDetail(); showForeignCourseDetail(); 
		showReasonForApplying(); showCurrentDesignation(); showCurrentWorkDescription();showCurrentFromDate();
	}
	if (id == 'view5')
	{
		if (document.getElementById("heightInCM").value == "")
		{
			error += "<tr><td>Enter Height (in Medical Details Tab).</td></tr>";
		}
		
		if (document.getElementById("weightInKG").value == "")
		{
			error += "<tr><td>Enter Weight (in Medical Details Tab).</td></tr>";
		}
		
		if (document.getElementById("bloodGroup").value == "")
		{
			error += "<tr><td>Enter Blood Group (in Medical Details Tab).</td></tr>";
		}

		if (error != "") 
		{
			var errorTbl = "<table align='center' style='text-align: left;'>";
			errorTbl += error;
			errorTbl += "</table>";
			jAlert(errorTbl, "Input Fields Missing!!! ");
			return false;
		}
		else 
		{
			document.getElementById("view4").style.display = "none";
			document.getElementById(id).style.display = "block";
			error = "";
		}
		showCountry(); showSecretariat(); showStream(); showCourse(); showInstitute(); showTitle(); showName(); showSurname(); showGender(); showMaritalStatus(); showDOB(); showPassportNo(); showIssueDate(); showIssuePlace(); showExpiryDate(); showResAddress(); showResFaxCCode(); showResFaxACode(); showResFax();showEmail(); showResTelephoneCCode(); showResTelephone(); showOfficeAddress(); showOfficeFaxCCode();
		showOfficeFaxACode(); showOfficeFax(); showOfficeEmail(); showOfficeMobileNoCCode(); 
		showOfficeMobileNo(); showSpecialDiet(); showEmergencyOfficePersonName(); showEmergencyPersonName(); showEmergencyPersonOfficialAddress(); showEmergencyPersonPersonalAddress();
		showEmergencyPersonOfficialPhoneCCode(); showEmergencyPersonOfficialPhoneACode(); showEmergencyPersonOfficialPhone(); showEmergencyPersonPersonalPhoneCCode(); showEmergencyPersonPersonalPhoneACode(); showEmergencyPersonPersonalPhone();
		showEmergencyPersonOfficialMobileNumberCCode(); showEmergencyPersonOfficialMobileNumber(); showEmergencyPersonPersonalMobileNumberCCode(); showEmergencyPersonPersonalMobileNumber(); showEmergencyPersonOfficialFaxCCode(); showEmergencyPersonOfficialFaxACode(); 
		showEmergencyPersonOfficialFax(); showEmergencyPersonPersonalFaxCCode(); showEmergencyPersonPersonalFaxACode(); showEmergencyPersonPersonalFax(); 
		showEmergencyPersonOfficialEmail(); showEmergencyPersonPersonalEmail(); 
		showEducationalQualification(); showProfessionalQualification(); showEmploymentDetail(); showemployeeCategory(); showCurrentEmployerName(); showCurrentEmployerAddress(); showCurrentEmployerPhoneCCode(); showCurrentEmployerPhoneACode(); showCurrentEmployerPhone(); showCurrentEmployerEmailId(); showIndianCourseDetail(); showForeignCourseDetail(); 
		showReasonForApplying(); showHeightInCM(); showWeightInKG(); showBloodGroup();showCurrentDesignation();
		showCurrentWorkDescription();showCurrentFromDate();
	}
	if (id == 'view6') {
		document.getElementById("view5").style.display = "none";
		document.getElementById(id).style.display = "block";
		error = "";
	}
}

function backTab(id) 
{
	if (id == 'view1')
	{
		document.getElementById("view2").style.display = "none";
		document.getElementById(id).style.display = "block";
	}
	if (id == 'view2')
	{
		document.getElementById("view3").style.display = "none";
		document.getElementById(id).style.display = "block";
	}
	if (id == 'view3')
	{
		document.getElementById("view4").style.display = "none";
		document.getElementById(id).style.display = "block";
	}
	if (id == 'view4')
	{
		document.getElementById("view5").style.display = "none";
		document.getElementById(id).style.display = "block";
	}
}
/*
 * Calender JS 
 */

var ds_i_date = new Date();
ds_c_month = ds_i_date.getMonth() + 1;
ds_c_year = ds_i_date.getFullYear();

//Output Element
var ds_oe = ds_getel('ds_calclass');
// Container
var ds_ce = ds_getel('ds_conclass');

// Output Buffering
var ds_ob = ''; 

// Get Element By Id
function ds_getel(id) {
	return document.getElementById(id);
}

// Get the left and the top of the element.
function ds_getleft(el) {
	var tmp = el.offsetLeft;
	el = el.offsetParent
	while(el) {
		tmp += el.offsetLeft;
		el = el.offsetParent;
	}
	//alert("left:"+tmp);
	return tmp;
}
function ds_gettop(el) {
	var tmp = el.offsetTop;
	el = el.offsetParent
	while(el) {
		tmp += el.offsetTop;
		el = el.offsetParent;
	}
	//alert("top:"+tmp);
	return tmp;
}


function ds_ob_clean() {
	ds_ob = '';
}
function ds_ob_flush() {
	ds_oe.innerHTML = ds_ob;
	ds_ob_clean();
}
function ds_echo(t) {
	ds_ob += t;
}

var ds_element; // Text Element...

var ds_monthnames = [
'January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'
]; // You can translate it for your language.

var ds_daynames = [
'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
]; // You can translate it for your language.

// Calendar template
function ds_template_main_above(t) {
	return '<table cellpadding="3" cellspacing="1" class="ds_tbl">'
	     + '<tr>'
		 + '<td class="ds_head" style="cursor: pointer" onclick="ds_py();">&lt;&lt;</td>'
		 + '<td class="ds_head" style="cursor: pointer" onclick="ds_pm();">&lt;</td>'
		 + '<td class="ds_head" style="cursor: pointer" onclick="ds_hi();" colspan="3">[Close]</td>'
		 + '<td class="ds_head" style="cursor: pointer" onclick="ds_nm();">&gt;</td>'
		 + '<td class="ds_head" style="cursor: pointer" onclick="ds_ny();">&gt;&gt;</td>'
		 + '</tr>'
	     + '<tr>'
		 + '<td colspan="7" class="ds_head">' + t + '</td>'
		 + '</tr>'
		 + '<tr>';
}

function ds_template_day_row(t) {
	return '<td class="ds_subhead">' + t + '</td>';
	// Define width in CSS, XHTML 1.0 Strict doesn't have width property for it.
}

function ds_template_new_week() {
	return '</tr><tr>';
}

function ds_template_blank_cell(colspan) {
	return '<td colspan="' + colspan + '"></td>'
}

function ds_template_day(d, m, y) {
	return '<td class="ds_cell" onclick="ds_onclick(' + d + ',' + m + ',' + y + ')">' + d + '</td>';
	// Define width the day row.
}

function ds_template_main_below() {
	return '</tr>'
	     + '</table>';
}

function ieClicked() {
	if (document.all) {
		return false;
	}
}
function firefoxClicked(e) {
	if (document.layers || (document.getElementById && !document.all)) {
		if (e.which == 2 || e.which == 3) {
			return false;
		}
	}
}
if (document.layers) {
	document.captureEvents(Event.MOUSEDOWN);
	document.onmousedown = firefoxClicked;
} else {
	document.onmouseup = firefoxClicked;
	document.oncontextmenu = ieClicked;
}
document.oncontextmenu = new Function("return false")
document.onpaste = new Function("return false");
document.oncopy = new Function("return false");
document.oncut = new Function("return false");


$(function () {

	document.getElementById("financialYear").value = '2017-2018';
	document.getElementById("courseid").value = '1499';
	document.getElementById("streamid").value = '10';
	document.getElementById("countrymasterid").value = '16';
	document.getElementById("secttMasterid").value = '';


		});


function load_image(id, ext)
{
	if (validateExtension(ext) == false)
	{
		alert("Upload only JPEG or JPG format ");
		document.getElementById("photo1").value = "";
		document.getElementById("file").focus();
		return;
	}
	var uploadedFile = document.getElementById('photo1');
	var fileSize = uploadedFile.files[0].size;
	
	if (fileSize > 153600) {
		alert("File size cannot exceed 150 KB");
		document.getElementById("photo1").value = "";
		document.getElementById("file").focus();
		return false;
	}
}

function validateExtension(v)
{
	var allowedExtensions = new Array("jpg", "JPG", "jpeg", "JPEG");
	for (var ct = 0; ct < allowedExtensions.length; ct++)
	{
		sample = v.lastIndexOf(allowedExtensions[ct]);
		if (sample != -1) {
		return true;
		}
	}
	return false;
}


function functionDisplayIn() {
	document.getElementById("inCourse").style.display = 'block';
	document.getElementById("inCourseTbl").style.display = 'block';
}
function functionHideIn() {
	document.getElementById("inCourse").style.display = 'none';
	document.getElementById("inCourseTbl").style.display = 'none';
}
function functionDisplayFr() {
	document.getElementById("frCourse").style.display = 'block';
	document.getElementById("frCourseTbl").style.display = 'block';
}
function functionHideFr() {
	document.getElementById("frCourse").style.display = 'none';
	document.getElementById("frCourseTbl").style.display = 'none';
}

function refreshCaptcha() {
	var img = document.images['captchaimg'];
	img.src = img.src.substring(0, img.src.lastIndexOf("?")) + "?rand=" + Math.random() * 1000;
}


function Captcha()
{
	var img = document.images['captchaimg'];
	img.src = img.src.substring(0, img.src.lastIndexOf("?")) + "?rand=" + Math.random() * 100;
}

function cancel() {
	var msg = "Do you really want to exit the registration process ?";
	var c = window.confirm(msg);
	
	if (c) {
		window.location.href = "index.php";
	}
}

function SetWidthToAuto(drpLst) {
	drpLst.style.width = 'auto';
}

function ResetWidth(drpLst) {
	drpLst.style.width = '150px';
}

function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

var isSecretariatMandatory = false;

function checkDate(check_date)
{
	var currDate = new Date();
	var tempstart = new Array();
	tempstart = check_date.split("-");
	check_date = new Date(tempstart[2], tempstart[1] - 1, tempstart[0]);
	if (check_date > currDate)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function checkYear(tableName, col)
{
	var eduTable = document.getElementById(tableName);
	var edurow = eduTable.getElementsByTagName('tr');
	var err = "All Good";
	for (var j = 1; j < edurow.length; j++)
	{
		cells = edurow[j].getElementsByTagName('input');
		var currYear = new Date().getFullYear();
		check_year = cells[col].value;
		if (check_year.length < 4)
		{
			err = "Enter Passing Year in 4 digits ";
			cells[col].focus();
		}
		else if (check_year > currYear)
		{
			cells[col].value = '';
			cells[col].focus();
			err = "Passing Year can not be greater than current year ";
		}
	}
	return err;
}

function checkDynamicDate(tableName, col)
{
	var empTable = document.getElementById(tableName);
	var emprow = empTable.getElementsByTagName('tr');
	var err = "All Good";
	for (var j = 1; j < emprow.length; j++)
	{
		cells = emprow[j].getElementsByTagName('input');
		check_date = cells[col].value;
		
		var currDate = new Date();
		var tempstart = new Array();
		tempstart = check_date.split("-");
		check_date = new Date(tempstart[2], tempstart[1] - 1, tempstart[0]);
		if (check_date > currDate)
		{
			cells[col].value = '';
			cells[col].focus();
			err = "Date can not be greater than current date ";
		}
		else
		{
			err = "All Good";
		}
	}
	return err;
}

function checkEmpDates(tableName, col1, col2)
{
	var empTable = document.getElementById(tableName);
	var emprow = empTable.getElementsByTagName('tr');
	var err = "All Good";
	for (var j = 1; j < emprow.length; j++)
	{
		cells = emprow[j].getElementsByTagName('input');
		from_date = cells[col1].value;
		to_date = cells[col2].value;
		
		tempFromDate = from_date.split("-");
		tempToDate = to_date.split("-");
		from_date = new Date(tempFromDate[2], tempFromDate[1] - 1, tempFromDate[0]);
		to_date = new Date(tempToDate[2], tempToDate[1] - 1, tempToDate[0]);
		if (from_date > to_date)
		{
			err = "From Date can not be greater than To date ";
			return err;
		}
		else
		{
			err = "All Good";
		}
	}
	return err;
}


function checkDynamicInput(className) {
	var allGood = false;
	$(className).each(function () 
	{
		var val = $(this).val();
		if (val != "" || val != 0) 
		{
			allGood = true;
		}
		else
		{
			allGood = false;
		}
		if (!allGood) 
		{
			return allGood;
		}
	});
	
	return allGood;
}

function clearOtherEmployeeCategory() {
	document.getElementById("employeeCategoryOtherVal").value = "";
	document.getElementById("employeeCategoryOtherVal").disabled = true;
	document.getElementById("employeeCategoryOtherVal").style.display = "none";
}

function enterOtherEmployeeCategory() {
	document.getElementById("employeeCategoryOtherVal").disabled = false;
	document.getElementById("employeeCategoryOtherVal").style.display = "inline";
}

function addEduRow(tableId) {
	var table = document.getElementById(tableId);
	var rowCount = table.rows.length;
	var idx = rowCount - 1;
	var row = table.insertRow(rowCount);

	var cell1 = row.insertCell(0);
	var element1 = document.createElement("input");
	element1.type = "text";
	element1.name = "degree[" + idx + "]";
	element1.id = "degree[" + idx + "]";
	element1.className = "mandatoryTbox mandatoryEduTbox";
	cell1.appendChild(element1);

	var cell2 = row.insertCell(1);
	var element2 = document.createElement("input");
	element2.type = "text";
	element2.name = "passingYear[" + idx + "]";
	element2.id = "passingYear[" + idx + "]";
	element2.className = "mandatoryTbox mandatoryEduTbox";
	element2.setAttribute("onkeypress", "return validateData(event,3)");

	element2.maxLength = "4";
	cell2.appendChild(element2);


	var cell3 = row.insertCell(2);
	var element3 = document.createElement("input");
	element3.type = "text";
	element3.name = "eduInstituteName[" + idx + "]";
	element3.id = "eduInstituteName[" + idx + "]";
	element3.className = " mandatoryTbox mandatoryEduTbox";
	cell3.appendChild(element3);

	var cell4 = row.insertCell(3);
	var element4 = document.createElement("img");
	element4.src = "images/cancel.jpg";
	element4.width = "20";
	element4.height = "20";
	element4.onclick = function () 
	{
		document.getElementById(tableId).deleteRow(this.parentNode.parentNode.rowIndex);
	};
	cell4.appendChild(element4);

	document.getElementById("eduCount").value = rowCount;
}

function addProfRow(tableId) {
	var table = document.getElementById(tableId);
	var rowCount = table.rows.length;
	var idx = rowCount - 1;
	var row = table.insertRow(rowCount);

	var cell1 = row.insertCell(0);
	var element1 = document.createElement("input");
	element1.type = "text";
	element1.name = "prof_qualification[" + idx + "]";
	element1.className = "mandatoryTbox mandatoryProfTbox";
	cell1.appendChild(element1);

	var cell2 = row.insertCell(1);
	var element2 = document.createElement("input");
	element2.type = "text";
	element2.name = "prof_passingYear[" + idx + "]";
	element2.className = "mandatoryTbox mandatoryProfTbox";
	element2.setAttribute("onkeypress", "return validateData(event,3)");
	element2.maxLength = "4";
	cell2.appendChild(element2);

	var cell3 = row.insertCell(2);
	var element3 = document.createElement("input");
	element3.type = "text";
	element3.name = "prof_instituteName[" + idx + "]";
	element3.className = "mandatoryTbox mandatoryProfTbox";
	cell3.appendChild(element3);

	var cell4 = row.insertCell(3);
	var element4 = document.createElement("img");
	element4.src = "images/cancel.jpg";
	element4.width = "20";
	element4.height = "20";
	element4.onclick = function () 
	{
		document.getElementById(tableId).deleteRow(this.parentNode.parentNode.rowIndex);
	};
	cell4.appendChild(element4);

	document.getElementById("profCount").value = rowCount;
}

function addEmploymentRow(tableId) {
	var table = document.getElementById(tableId);
	var rowCount = table.rows.length;
	var idx = rowCount - 1;
	var row = table.insertRow(rowCount);

	var cell1 = row.insertCell(0);
	var element1 = document.createElement("input");
	element1.type = "text";
	element1.name = "employerName[" + idx + "]";
	element1.id = "employerName[" + idx + "]";
	element1.className = "mandatoryTbox mandatoryEmpTbox";
	cell1.appendChild(element1);

	var cell2 = row.insertCell(1);
	var element2 = document.createElement("input");
	element2.type = "text";
	element2.name = "employmentposition[" + idx + "]";
	element2.id = "employmentposition[" + idx + "]";
	element2.className = "exp_date mandatoryEmpTbox";
	cell2.appendChild(element2);

	var cell3 = row.insertCell(2);
	var element3 = document.createElement("input");
	element3.type = "text";
	element3.readOnly = true;
	element3.name = "employmentfromDate[" + idx + "]";
	element3.id = "employmentfromDate[" + idx + "]";
	element3.className = "exp_date mandatoryEmpTbox";
	element3.onclick = function () 
	{
		ds_sh(this);
	};
	cell3.appendChild(element3);

	var cell4 = row.insertCell(3);
	var element4 = document.createElement("input");
	element4.type = "text";
	element4.readOnly = true;
	element4.name = "employmenttoDate[" + idx + "]";
	element4.id = "employmenttoDate[" + idx + "]";
	element4.className = "exp_date mandatoryEmpTbox";
	element4.onclick = function () 
	{
		ds_sh(this);
	};
	cell4.appendChild(element4);

	var cell5 = row.insertCell(4);
	var element5 = document.createElement("textarea");
	element5.type = "text";
	element5.id = "employmentworkDescription[" + idx + "]";
	element5.name = "employmentworkDescription[" + idx + "]";
	element5.className = "mandatoryTbox mandatoryEmpTbox";
	element5.setAttribute('style', 'width:212px; height:55px');
	cell5.appendChild(element5);

	var cell6 = row.insertCell(5);
	var element6 = document.createElement("img");
	element6.src = "images/cancel.jpg";
	element6.width = "20";
	element6.height = "20";
	element6.onclick = function () 
	{
		document.getElementById(tableId).deleteRow(this.parentNode.parentNode.rowIndex);
	};
	cell6.appendChild(element6);

	document.getElementById("empCount").value = rowCount;
}

function addIndCourse(tableId) {

	var table = document.getElementById(tableId);
	var rowCount = table.rows.length;
	var idx = rowCount - 1;
	var row = table.insertRow(rowCount);

	var cell1 = row.insertCell(0);
	var element1 = document.createElement("input");
	element1.type = "text";
	element1.name = "indiacourseName[" + idx + "]";
	element1.className = "mandatoryTbox mandatoryInCourseTbox";
	cell1.appendChild(element1);

	var cell2 = row.insertCell(1);
	var element2 = document.createElement("input");
	element2.type = "text";
	element2.name = "indiainstituteName[" + idx + "]";
	element2.className = "mandatoryTbox mandatoryInCourseTbox";
	cell2.appendChild(element2);

	var cell3 = row.insertCell(2);
	var element3 = document.createElement("input");
	element3.type = "text";
	element3.name = "indiapassingYear[" + idx + "]";
	element3.setAttribute("onkeypress", "return validateData(event,3)");
	element3.maxLength = "4";
	element3.className = "duration mandatoryInCourseTbox";
	cell3.appendChild(element3);

	var cell4 = row.insertCell(3);
	var element4 = document.createElement("img");
	element4.src = "images/cancel.jpg";
	element4.width = "20";
	element4.height = "20";
	element4.onclick = function () 
	{
		document.getElementById(tableId).deleteRow(this.parentNode.parentNode.rowIndex);
	};
	cell4.appendChild(element4);

	document.getElementById("indCourseCount").value = rowCount;
}

function addFornCourse(tableId) 
{
	var table = document.getElementById(tableId);
	var rowCount = table.rows.length;
	var idx = rowCount - 1;
	var row = table.insertRow(rowCount);

	var cell1 = row.insertCell(0);
	var element1 = document.createElement("input");
	element1.type = "text";
	element1.name = "foreigncourseName[" + idx + "]";
	element1.className = "mandatoryTbox mandatoryFrCourseTbox";
	cell1.appendChild(element1);

	var cell2 = row.insertCell(1);
	var element2 = document.createElement("input");
	element2.type = "text";
	element2.name = "foreigncountry[" + idx + "]";
	element2.className = "mandatoryTbox mandatoryFrCourseTbox";
	cell2.appendChild(element2);

	var cell3 = row.insertCell(2);
	var element3 = document.createElement("input");
	element3.type = "text";
	element3.name = "foreigndurationInMonths[" + idx + "]";
	element3.setAttribute("onkeypress", "return validateData(event,3)");

	element3.className = "year mandatoryFrCourseTbox";
	cell3.appendChild(element3);

	var cell4 = row.insertCell(3);
	var element4 = document.createElement("input");
	element4.type = "text";
	element4.name = "foreignpassingYear[" + idx + "]";
	element4.setAttribute("onkeypress", "return validateData(event,3)");
	element4.maxLength = "4";
	element4.className = "year mandatoryFrCourseTbox";
	cell4.appendChild(element4);

	var cell5 = row.insertCell(4);
	var element5 = document.createElement("input");
	element5.type = "text";
	element5.name = "foreignsponsor[" + idx + "]";
	element5.className = "mandatoryTbox mandatoryFrCourseTbox";
	cell5.appendChild(element5);

	var cell6 = row.insertCell(5);
	var element6 = document.createElement("img");
	element6.src = "images/cancel.jpg";

	element6.width = "20";
	element6.height = "20";
	element6.onclick = function () 
	{
		document.getElementById(tableId).deleteRow(this.parentNode.parentNode.rowIndex);
	};
	cell6.appendChild(element6);

	document.getElementById("frnCourseCount").value = rowCount;
}

var ageCriteria = "";

function calculateAge() 
{
	var dob = document.getElementById("dob");
	var dob1 = moment(dob.value, "DD-MM-YYYY");

	var years = moment().diff(dob1, "years");
	return years;
}


function openCal(calid)
{
	document.getElementById(calid).click();
}


function validatePwd()
{
	var regexp = /^.*(?=.{8,})(?=.*\d)(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&+=]).*$/;
	var pwd = document.getElementById("password").value.match(regexp);
	if (pwd == null)
		return true;
}
function validateCaptcha()
{
	var j = document.getElementById("j_captcha_response").value;
	$.ajax({
		async: false,
		url: "cap.php",
		type: "POST",
		data: "text=" + j,
		dataType: "html",
		success: function (data) 
		{
		if (data == "fail")
			result = "fail";
		else
			result = "pass";
		}
	});
	return result;
}


// This one draws calendar...
function ds_draw_calendar(m, y) {
	// First clean the output buffer.
	ds_ob_clean();
	// Here we go, do the header
	ds_echo (ds_template_main_above(ds_monthnames[m - 1] + ' ' + y));
	for (i = 0; i < 7; i ++) {
		ds_echo (ds_template_day_row(ds_daynames[i]));
	}
	// Make a date object.
	var ds_dc_date = new Date();
	ds_dc_date.setMonth(m - 1);
	ds_dc_date.setFullYear(y);
	ds_dc_date.setDate(1);
	if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
		days = 31;
	} else if (m == 4 || m == 6 || m == 9 || m == 11) {
		days = 30;
	} else {
		days = (y % 4 == 0) ? 29 : 28;
	}
	var first_day = ds_dc_date.getDay();
	var first_loop = 1;
	// Start the first week
	ds_echo (ds_template_new_week());
	// If sunday is not the first day of the month, make a blank cell...
	if (first_day != 0) {
		ds_echo (ds_template_blank_cell(first_day));
	}
	var j = first_day;
	for (i = 0; i < days; i ++) {
		// Today is sunday, make a new week.
		// If this sunday is the first day of the month,
		// we've made a new row for you already.
		if (j == 0 && !first_loop) {
			// New week!!
			ds_echo (ds_template_new_week());
		}
		// Make a row of that day!
		ds_echo (ds_template_day(i + 1, m, y));
		// This is not first loop anymore...
		first_loop = 0;
		// What is the next day?
		j ++;
		j %= 7;
	}
	// Do the footer
	ds_echo (ds_template_main_below());
	// And let's display..
	ds_ob_flush();
	
	// Scroll it into view.
	//ds_ce.scrollIntoView();
}

// A function to show the calendar.
// When user click on the date, it will set the content of t.
function ds_sh123(t) {
	// Set the element to set...
	ds_element = t;
	// Make a new date, and set the current month and year.
	var ds_sh_date = new Date();
	ds_c_month = ds_sh_date.getMonth() + 1;
	ds_c_year = ds_sh_date.getFullYear();
	// Draw the calendar
	ds_draw_calendar(ds_c_month, ds_c_year);
	// To change the position properly, we must show it first.
	ds_ce.style.display = '';
	// Move the calendar container!
	
	//the_left = ds_getleft(t);
	//the_top = ds_gettop(t) + t.offsetHeight;
	//ds_ce.style.left = the_left + 'px';
	//ds_ce.style.top = the_top + 'px';
	// Scroll it into view.
	//ds_ce.scrollIntoView();
}

function ds_sh(t) {
	// Set the element to set...
	ds_element = t;
	// Make a new date, and set the current month and year.
	var ds_sh_date = new Date();
	ds_c_month = ds_sh_date.getMonth() + 1;
	ds_c_year = ds_sh_date.getFullYear();
	// Draw the calendar
	ds_draw_calendar(ds_c_month, ds_c_year);
	// To change the position properly, we must show it first.
	ds_ce.style.display = '';
	// Move the calendar container!
	
	the_left = ds_getleft(t);
	the_top = ds_gettop(t) + t.offsetHeight;
	ds_ce.style.left = the_left + 'px';
	ds_ce.style.top = the_top + 'px';
	// Scroll it into view.
	//ds_ce.scrollIntoView();
}

// Hide the calendar.
function ds_hi() {
	ds_ce.style.display = 'none';
}

// Moves to the next month...
function ds_nm() {
	// Increase the current month.
	ds_c_month ++;
	// We have passed December, let's go to the next year.
	// Increase the current year, and set the current month to January.
	if (ds_c_month > 12) {
		ds_c_month = 1; 
		ds_c_year++;
	}
	// Redraw the calendar.
	ds_draw_calendar(ds_c_month, ds_c_year);
}

// Moves to the previous month...
function ds_pm() {
	ds_c_month = ds_c_month - 1; // Can't use dash-dash here, it will make the page invalid.
	// We have passed January, let's go back to the previous year.
	// Decrease the current year, and set the current month to December.
	if (ds_c_month < 1) {
		ds_c_month = 12; 
		ds_c_year = ds_c_year - 1; // Can't use dash-dash here, it will make the page invalid.
	}
	// Redraw the calendar.
	ds_draw_calendar(ds_c_month, ds_c_year);
}

// Moves to the next year...
function ds_ny() {
	// Increase the current year.
	ds_c_year++;
	// Redraw the calendar.
	ds_draw_calendar(ds_c_month, ds_c_year);
}

// Moves to the previous year...
function ds_py() {
	// Decrease the current year.
	ds_c_year = ds_c_year - 1; // Can't use dash-dash here, it will make the page invalid.
	// Redraw the calendar.
	ds_draw_calendar(ds_c_month, ds_c_year);
}

// Format the date to output.
function ds_format_date(d, m, y) {
	// 2 digits month.
	m2 = '00' + m;
	m2 = m2.substr(m2.length - 2);
	// 2 digits day.
	d2 = '00' + d;
	d2 = d2.substr(d2.length - 2);
	// YYYY-MM-DD
	//sanjay
	//return y + '-' + m2 + '-' + d2;
	return d2 + '-' + m2 + '-' + y;
}

// When the user clicks the day.
function ds_onclick(d, m, y) {
	// Hide the calendar.
	ds_hi();
	// Set the value of it, if we can.
	if (typeof(ds_element.value) != 'undefined') {
		ds_element.value = ds_format_date(d, m, y);
	// Maybe we want to set the HTML in it.
	} else if (typeof(ds_element.innerHTML) != 'undefined') {
		ds_element.innerHTML = ds_format_date(d, m, y);
	// I don't know how should we display it, just alert it to user.
	} else {
		alert (ds_format_date(d, m, y));
	}
}


function load_image(id, ext) {
	if (validateExtension(ext) == false) {
		alert("Upload only JPEG or JPG format ");
		document.getElementById("photo1").value = "";
		document.getElementById("file").focus();
		return;
	}
	var uploadedFile = document.getElementById('photo1');
	var fileSize = uploadedFile.files[0].size;

	if (fileSize > 153600) {
		alert("File size cannot exceed 150 KB");
		document.getElementById("photo1").value = "";
		document.getElementById("file").focus();
		return false;
	}
}

function calculateAge() {
	var dob = document.getElementById("dob");
	var dob1 = moment(dob.value, "DD-MM-YYYY");

	var years = moment().diff(dob1, "years");
	return years;
}

function validateFields() {
	//alert("About to start the validtions...");
	var error = "";

	if (document.getElementById("title").value == 0) {
		error += "<tr><td>Select Title (in Personal Details Tab).</td></tr>";
	}

	if (document.getElementById("name").value == "") {
		error += "<tr><td>Enter Name (in Personal Details Tab).</td></tr>";
	}

	if (document.getElementById("surname").value == "") {
		error += "<tr><td>Enter Surname (in Personal Details Tab).</td></tr>";
	}

	if (document.getElementById("gender").value == 0) {
		error += "<tr><td>Select Gender (in Personal Details Tab).</td></tr>";
	}

	if (document.getElementById("maritalStatus").value == 0) {
		error += "<tr><td>Select Marital Status (in Personal Details Tab).</td></tr>";
	}

	if (document.getElementById("dob").value == "") {
		error += "<tr><td>Enter Date of birth (in Personal Details Tab).</td></tr>";
	}
	if (document.getElementById("dob").value != "") {
		if (checkDate(document.getElementById("dob").value)) {
			error += "<tr><td>Date Of Birth must be less than Current Date (in Personal Details Tab).</td></tr>";
		}
	}
	document.getElementById("age").value = calculateAge();
	
	if (document.getElementById("photo1").value == "") {
		error += "<tr><td>Photograph is mandatory to be uploaded (in Personal Details Tab).</td></tr>";
	}

	if (document.getElementById("passportNumber").value != "") {
		if (document.getElementById("passportIssueDate").value == "") {
			error += "<tr><td>Enter Passport Issue Date (in Personal Details Tab).</td></tr>";
		} else if (document.getElementById("passportIssueDate").value != "") {
			if (checkDate(document.getElementById("passportIssueDate").value)) {
				error += "<tr><td>Passport Issue Date must be less than Current Date (in Personal Details Tab).</td></tr>";
			}
		}
		if (document.getElementById("passportIssuePlace").value == "") {
			error += "<tr><td>Enter Passport Issue Place (in Personal Details Tab).</td></tr>";
		}
		if (document.getElementById("passportExpiryDate").value == "") {
			error += "<tr><td>Enter Passport Expiry Date (in Personal Details Tab).</td></tr>";
		} else if (document.getElementById("passportExpiryDate").value != "") {
			if (!checkDate(document.getElementById("passportExpiryDate").value)) {
				error += "<tr><td>Passport Expiry Date must be greater than Current Date (in Personal Details Tab).</td></tr>";
			}
		}
	}

	if (document.getElementById("officeAddress").value == "") {
		error += "<tr><td>Enter Office Address (in Personal Details Tab).</td></tr>";
	}

	if (document.getElementById("residenceAddress").value == "") {
		error += "<tr><td>Enter Residence Address (in Personal Details Tab).</td></tr>";
	}

	if (document.getElementById("residenceMobileNumberCCode").value == "") {
		error += "<tr><td>Enter Residence Telephone Number Country Code (in Personal Details Tab).</td></tr>";
	}

	if (document.getElementById("residenceMobileNumber").value == "") {
		error += "<tr><td>Enter Residence Telephone Number (in Personal Details Tab).</td></tr>";
	}

	if (document.getElementById("officeEmail").value == "") {
		error += "<tr><td>Enter Office Email Id(in Personal Details Tab).</td></tr>";
	}

	if (document.getElementById("officeEmail").value != "") {
		if (!validateEmail(document.getElementById("officeEmail").value)) {
			error += "<tr><td>Official Email id is invalid (in Personal Details Tab).</td></tr>";
		}
	}

	if (document.getElementById("residenceEmail").value == "") {
		error += "<tr><td>Enter Residence Email Id (in Personal Details Tab).</td></tr>";
	}

	if (document.getElementById("residenceEmail").value != "") {
		if (!validateEmail(document.getElementById("residenceEmail").value)) {
			error += "<tr><td>Residence Email id is invalid (in Personal Details Tab).</td></tr>";
		}
	}

	if (document.getElementById("emergencyOfficePersonName").value == "") {
		error += "<tr><td>Enter Emergency Office Person Name (in Personal Details Tab).</td></tr>";
	}

	if (document.getElementById("emergencyPersonName").value == "") {
		error += "<tr><td>Enter emergency Personal Person Name (in Personal Details Tab).</td></tr>";
	}

	if (document.getElementById("emergencyPersonOfficialAddress").value == "") {
		error += "<tr><td>Enter Emergency Person Official Address (in Personal Details Tab).</td></tr>";
	}

	if (document.getElementById("emergencyPersonPersonalAddress").value == "") {
		error += "<tr><td>Enter Emergency Person Personal Address (in Personal Details Tab).</td></tr>";
	}

	if (document.getElementById("emergencyPersonOfficialMobileNumberCCode").value == "") {
		error += "<tr><td>Enter Emergency Person Official Mobile Number Country Code (in Personal Details Tab).</td></tr>";
	}

	if (document.getElementById("emergencyPersonOfficialMobileNumber").value == "") {
		error += "<tr><td>Enter Emergency Person Official Mobile Number (in Personal Details Tab).</td></tr>";
	}

	if (document.getElementById("emergencyPersonPersonalMobileNumberCCode").value == "") {
		error += "<tr><td>Enter Emergency Person Personal Mobile Number Country Code (in Personal Details Tab).</td></tr>";
	}
	if (document.getElementById("emergencyPersonPersonalMobileNumber").value == "") {
		error += "<tr><td>Enter Emergency Person Personal Mobile Number (in Personal Details Tab).</td></tr>";
	}

	if (document.getElementById("emergencyPersonOfficialEmail").value == "") {
		error += "<tr><td>Enter Emergency Person Official Email Id(in Personal Details Tab).</td></tr>";
	}
	if (document.getElementById("emergencyPersonOfficialEmail").value != "") {
		if (!validateEmail(document
				.getElementById("emergencyPersonOfficialEmail").value)) {
			error += "<tr><td>Emergency Person Official Email id is invalid (in Personal Details Tab).</td></tr>";
		}
	}

	if (document.getElementById("emergencyPersonPersonalEmail").value == "") {
		error += "<tr><td>Enter Emergency Person Personal Email Id (in Personal Details Tab).</td></tr>";
	}
	if (document.getElementById("emergencyPersonPersonalEmail").value != "") {
		if (!validateEmail(document
				.getElementById("emergencyPersonPersonalEmail").value)) {
			error += "<tr><td>Emergency Person Personal Email id is invalid (in Personal Details Tab).</td></tr>";
		}
	}

	if (error != "") {
		var errorTbl = "<table align='center' style='text-align: left;'>";
		errorTbl += error;
		errorTbl += "</table>";
		//alert(errorTbl);
		jAlert(errorTbl, "Input Fields Missing!!! ");
		return false;
	}
	return true;
}

function showTitle() {
	document.getElementById("showTitleId").innerHTML = document
			.getElementById("title").value;
}
function showName() {
	document.getElementById("showNameId").innerHTML = document
			.getElementById("name").value;
}
function showSurname() {
	document.getElementById("showSurnameId").innerHTML = document
			.getElementById("surname").value;
}
function showGender() {
	document.getElementById("showGenderId").innerHTML = document
			.getElementById("gender").value;
}
function showMaritalStatus() {
	document.getElementById("showMaritalStatusId").innerHTML = document
			.getElementById("maritalStatus").value;
}
function showDOB() {
	document.getElementById("showDOBId").innerHTML = document
			.getElementById("dob").value;
}
function showPassportNo() {
	document.getElementById("showPassportNoId").innerHTML = document
			.getElementById("passportNumber").value;
}
function showIssueDate() {
	document.getElementById("showIssueDateId").innerHTML = document
			.getElementById("passportIssueDate").value;
}
function showIssuePlace() {
	document.getElementById("showIssuePlaceId").innerHTML = document
			.getElementById("passportIssuePlace").value;
}
function showExpiryDate() {
	document.getElementById("showExpiryDateId").innerHTML = document
			.getElementById("passportExpiryDate").value;
}
function showResAddress() {
	document.getElementById("showResAddressId").innerHTML = document
			.getElementById("residenceAddress").value;
}
function showResFaxCCode() {
	document.getElementById("showResFaxCCodeId").innerHTML = document
			.getElementById("residenceFaxCCode").value;
}
function showResFaxACode() {
	document.getElementById("showResFaxACodeId").innerHTML = document
			.getElementById("residenceFaxACode").value;
}
function showResFax() {
	document.getElementById("showResFaxId").innerHTML = document
			.getElementById("residenceFax").value;
}
function showResTelephoneCCode() {
	document.getElementById("showResTelephoneCCodeId").innerHTML = document
			.getElementById("residenceMobileNumberCCode").value;
}
function showResTelephone() {
	document.getElementById("showResTelephoneId").innerHTML = document
			.getElementById("residenceMobileNumber").value;
}
function showOfficeAddress() {
	document.getElementById("showOfficeAddressId").innerHTML = document
			.getElementById("officeAddress").value;
}
function showOfficeFaxCCode() {
	document.getElementById("showOfficeFaxCCodeId").innerHTML = document
			.getElementById("officeFaxCCode").value;
}
function showOfficeFaxACode() {
	document.getElementById("showOfficeFaxACodeId").innerHTML = document
			.getElementById("officeFaxACode").value;
}
function showOfficeFax() {
	document.getElementById("showOfficeFaxId").innerHTML = document
			.getElementById("officeFax").value;
}
function showOfficeEmail() {
	document.getElementById("showOfficeEmailId").innerHTML = document
			.getElementById("officeEmail").value;

}
function showOfficeMobileNoCCode() {
	document.getElementById("showOfficeMobileNoCCodeId").innerHTML = document
			.getElementById("officeMobileNumberCCode").value;
}
function showOfficeMobileNo() {
	document.getElementById("showOfficeMobileNoId").innerHTML = document
			.getElementById("officeMobileNumber").value;
}
function showOfficePhoneCCode() {
	document.getElementById("showOfficePhoneCCodeId").innerHTML = document
			.getElementById("officePhoneCCode").value;
}
function showOfficePhone() {
	document.getElementById("showOfficePhoneId").innerHTML = document
			.getElementById("officePhone").value;
}
function showSpecialDiet() {
	document.getElementById("showSpecialDietId").innerHTML = document
			.getElementById("splDietaryNeed").value;

}

function showEmergencyOfficePersonName() {
	document.getElementById("showEmergencyOfficePersonNameId").innerHTML = document
			.getElementById("emergencyOfficePersonName").value;
}
function showEmergencyPersonName() {
	document.getElementById("showEmergencyPersonNameId").innerHTML = document
			.getElementById("emergencyPersonName").value;
}
function showEmergencyPersonOfficialAddress() {
	document.getElementById("showEmergencyPersonOfficialAddressId").innerHTML = document
			.getElementById("emergencyPersonOfficialAddress").value;
}
function showEmergencyPersonPersonalAddress() {
	document.getElementById("showEmergencyPersonPersonalAddressId").innerHTML = document
			.getElementById("emergencyPersonPersonalAddress").value;
}
function showEmergencyPersonOfficialPhoneCCode() {
	document.getElementById("showEmergencyPersonOfficialPhoneCCodeId").innerHTML = document
			.getElementById("emergencyPersonOfficialPhoneCCode").value;
}
function showEmergencyPersonOfficialPhoneACode() {
	document.getElementById("showEmergencyPersonOfficialPhoneACodeId").innerHTML = document
			.getElementById("emergencyPersonOfficialPhoneACode").value;
}
function showEmergencyPersonOfficialPhone() {
	document.getElementById("showEmergencyPersonOfficialPhoneId").innerHTML = document
			.getElementById("emergencyPersonOfficialPhone").value;
}
function showEmergencyPersonPersonalPhoneCCode() {
	document.getElementById("showEmergencyPersonPersonalPhoneCCodeId").innerHTML = document
			.getElementById("emergencyPersonPersonalPhoneCCode").value;
}
function showEmergencyPersonPersonalPhoneACode() {
	document.getElementById("showEmergencyPersonPersonalPhoneACodeId").innerHTML = document
			.getElementById("emergencyPersonPersonalPhoneACode").value;
}
function showEmergencyPersonPersonalPhone() {
	document.getElementById("showEmergencyPersonPersonalPhoneId").innerHTML = document
			.getElementById("emergencyPersonPersonalPhone").value;
}
function showEmergencyPersonOfficialMobileNumberCCode() {
	document.getElementById("showEmergencyPersonOfficialMobileNumberCCodeId").innerHTML = document
			.getElementById("emergencyPersonOfficialMobileNumberCCode").value;
}
function showEmergencyPersonOfficialMobileNumber() {
	document.getElementById("showEmergencyPersonOfficialMobileNumberId").innerHTML = document
			.getElementById("emergencyPersonOfficialMobileNumber").value;
}
function showEmergencyPersonPersonalMobileNumberCCode() {
	document.getElementById("showEmergencyPersonPersonalMobileNumberCCodeId").innerHTML = document
			.getElementById("emergencyPersonPersonalMobileNumberCCode").value;
}
function showEmergencyPersonPersonalMobileNumber() {
	document.getElementById("showEmergencyPersonPersonalMobileNumberId").innerHTML = document
			.getElementById("emergencyPersonPersonalMobileNumber").value;
}
function showEmergencyPersonOfficialFaxCCode() {
	document.getElementById("showEmergencyPersonOfficialFaxCCodeId").innerHTML = document
			.getElementById("emergencyPersonOfficialFaxCCode").value;
}
function showEmergencyPersonOfficialFaxACode() {
	document.getElementById("showEmergencyPersonOfficialFaxACodeId").innerHTML = document
			.getElementById("emergencyPersonOfficialFaxACode").value;
}
function showEmergencyPersonOfficialFax() {
	document.getElementById("showEmergencyPersonOfficialFaxId").innerHTML = document
			.getElementById("emergencyPersonOfficialFax").value;
}
function showEmergencyPersonPersonalFaxCCode() {
	document.getElementById("showEmergencyPersonPersonalFaxCCodeId").innerHTML = document
			.getElementById("emergencyPersonPersonalFaxCCode").value;
}
function showEmergencyPersonPersonalFaxACode() {
	document.getElementById("showEmergencyPersonPersonalFaxACodeId").innerHTML = document
			.getElementById("emergencyPersonPersonalFaxACode").value;
}
function showEmergencyPersonPersonalFax() {
	document.getElementById("showEmergencyPersonPersonalFaxId").innerHTML = document
			.getElementById("emergencyPersonPersonalFax").value;
}
function showEmergencyPersonOfficialEmail() {
	document.getElementById("showEmergencyPersonOfficialEmailId").innerHTML = document
			.getElementById("emergencyPersonOfficialEmail").value;
}
function showEmergencyPersonPersonalEmail() {
	document.getElementById("showEmergencyPersonPersonalEmailId").innerHTML = document
			.getElementById("emergencyPersonPersonalEmail").value;
}
function isValidName(str) {
	var iChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ. '";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Name should contain only a-z, A-Z, single quote, dot and space.");
			document.getElementById("name").value = "";
			return false;
		}
	}
	return true;
}

function isValidSurName(str) {
	var iChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.' ";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Surame should contain only a-z, A-Z, single quote, dot and space.");
			document.getElementById("surname").value = "";

			return false;
		}
	}
	return true;
}

function isValidPassportNo(str) {
	var iChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Passport Number should contain only alphanumeric data.");
			document.getElementById("passportNumber").value = "";

			return false;
		}
	}
	return true;
}

function isValidPassportIssuePlace(str) {
	var iChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 '&";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Passport Issue Place should contain a-z, A-Z, 0-9, ', & and space.");
			document.getElementById("passportIssuePlace").value = "";

			return false;
		}
	}
	return true;
}
function isValidOfficeAddress(str) {
	var iChars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-/,.#$()';\: &";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Office Address should contain only alphanumeric data,space ,&,$,-,(),/'.");
			document.getElementById("officeAddress").value = "";

			return false;
		}
	}
	return true;
}

function isValidResidenceAddress(str) {
	var iChars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-/,.#$()';\: &";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Residence Address should contain only alphanumeric data,space ,&,$,-,(),/'.");
			document.getElementById("residenceAddress").value = "";

			return false;
		}
	}
	return true;
}
function isValidOfficephoneCode(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Office phone Code should contain only numeric data");
			document.getElementById("officePhoneCCode").value = "";

			return false;
		}
	}
	return true;
}
function isValidOfficephone(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Office phone should contain only numeric data");
			document.getElementById("officePhone").value = "";

			return false;
		}
	}
	return true;
}
function isValidresidenceMobileNumberCCode(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Residence mobile number code should contain only numeric data");
			document.getElementById("residenceMobileNumberCCode").value = "";

			return false;
		}
	}
	return true;
}
function isValidresidenceMobileNumber(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Residence mobile number should contain only numeric data");
			document.getElementById("residenceMobileNumber").value = "";

			return false;
		}
	}
	return true;
}
function isValidofficeMobileNumberCCode(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Office Mobile Number CCode should contain only numeric data");
			document.getElementById("officeMobileNumberCCode").value = "";

			return false;
		}
	}
	return true;
}
function isValidofficeMobileNumber(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Office Mobile Number  should contain only numeric data");
			document.getElementById("officeMobileNumber").value = "";

			return false;
		}
	}
	return true;
}
function isValidofficeFaxCCode(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Office Fax CCode  should contain only numeric data");
			document.getElementById("officeFaxCCode").value = "";

			return false;
		}
	}
	return true;
}
function isValidofficeFaxACode(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Office Fax ACode  should contain only numeric data");
			document.getElementById("officeFaxACode").value = "";

			return false;
		}
	}
	return true;
}
function isValidofficeFax(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Office Fax should contain only numeric data");
			document.getElementById("officeFax").value = "";

			return false;
		}
	}
	return true;
}
function isValidresidenceFaxCCode(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Residence Fax CCode should contain only numeric data");
			document.getElementById("residenceFaxCCode").value = "";

			return false;
		}
	}
	return true;
}
function isValidresidenceFaxACode(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Residence Fax ACode should contain only numeric data");
			document.getElementById("residenceFaxACode").value = "";

			return false;
		}
	}
	return true;
}

function isValidresidenceFax(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Residence Fax should contain only numeric data");
			document.getElementById("residenceFax").value = "";

			return false;
		}
	}
	return true;
}
function isValidemergencyOfficePersonName(str) {
	var iChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.' ";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Name should contain only a-z, A-Z, single quote, dot and space.");
			document.getElementById("emergencyOfficePersonName").value = "";

			return false;
		}
	}
	return true;
}
function isValidemergencyPersonName(str) {
	var iChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.' ";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Name should contain only a-z, A-Z, single quote, dot and space.");
			document.getElementById("emergencyPersonName").value = "";

			return false;
		}
	}
	return true;
}
function isValidemergencyPersonOfficialAddress(str) {
	var iChars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-/,.#$()';\: &";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Address should contain only alphanumeric data,space ,&,$,-,(),/'.");
			document.getElementById("emergencyPersonOfficialAddress").value = "";

			return false;
		}
	}
	return true;
}
function isValidemergencyPersonPersonalAddress(str) {
	var iChars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-/,.#$()';\: &";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Address should contain only alphanumeric data,space ,&,$,-,(),/'.");
			document.getElementById("emergencyPersonPersonalAddress").value = "";

			return false;
		}
	}
	return true;
}
function isValidemergencyPersonOfficialPhoneCCode(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Phone number should contain only numeric data");
			document.getElementById("emergencyPersonOfficialPhoneCCode").value = "";

			return false;
		}
	}
	return true;
}
function isValidemergencyPersonOfficialPhoneACode(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Phone number should contain only numeric data");
			document.getElementById("emergencyPersonOfficialPhoneACode").value = "";

			return false;
		}
	}
	return true;
}

function isValidEmergencyPersonOfficialPhone(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Phone number should contain only numeric data");
			document.getElementById("emergencyPersonOfficialPhone").value = "";

			return false;
		}
	}
	return true;
}

function isValidEmergencyPersonPersonalPhoneCCode(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Phone number should contain only numeric data");
			document.getElementById("emergencyPersonPersonalPhoneCCode").value = "";

			return false;
		}
	}
	return true;
}

function isValidEmergencyPersonPersonalPhoneACode(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Phone number should contain only numeric data");
			document.getElementById("emergencyPersonPersonalPhoneACode").value = "";

			return false;
		}
	}
	return true;
}

function isValidEmergencyPersonPersonalPhone(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Phone number should contain only numeric data");
			document.getElementById("emergencyPersonPersonalPhone").value = "";

			return false;
		}
	}
	return true;
}

function isValidEmergencyPersonOfficialMobileNumberCCode(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Phone number should contain only numeric data");
			document.getElementById("emergencyPersonOfficialMobileNumberCCode").value = "";

			return false;
		}
	}
	return true;
}

function isValidEmergencyPersonOfficialMobileNumber(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Phone number should contain only numeric data");
			document.getElementById("emergencyPersonOfficialMobileNumber").value = "";

			return false;
		}
	}
	return true;
}

function isValidEmergencyPersonPersonalMobileNumberCCode(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Phone number should contain only numeric data");
			document.getElementById("emergencyPersonPersonalMobileNumberCCode").value = "";

			return false;
		}
	}
	return true;
}

function isValidEmergencyPersonPersonalMobileNumber(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Phone number should contain only numeric data");
			document.getElementById("emergencyPersonPersonalMobileNumber").value = "";

			return false;
		}
	}
	return true;
}

function isValidEmergencyPersonOfficialFaxCCode(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Fax number should contain only numeric data");
			document.getElementById("emergencyPersonOfficialFaxCCode").value = "";

			return false;
		}
	}
	return true;
}

function isValidEmergencyPersonOfficialFaxACode(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Fax number should contain only numeric data");
			document.getElementById("emergencyPersonOfficialFaxACode").value = "";

			return false;
		}
	}
	return true;
}

function isValidEmergencyPersonOfficialFax(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Fax number should contain only numeric data");
			document.getElementById("emergencyPersonOfficialFax").value = "";

			return false;
		}
	}
	return true;
}

function isValidEmergencyPersonPersonalFaxCCode(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Fax number should contain only numeric data");
			document.getElementById("emergencyPersonPersonalFaxCCode").value = "";

			return false;
		}
	}
	return true;
}

function isValidEmergencyPersonPersonalFaxACode(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Fax number should contain only numeric data");
			document.getElementById("emergencyPersonPersonalFaxACode").value = "";

			return false;
		}
	}
	return true;
}

function isValidEmergencyPersonPersonalFax(str) {
	var iChars = "1234567890";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Fax number should contain only numeric data");
			document.getElementById("emergencyPersonPersonalFax").value = "";

			return false;
		}
	}
	return true;
}
function isValidsplDietaryNeed(str) {
	var iChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 ,.";

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) == -1) {
			alert("Fax number should contain only numeric data,space , . and comma");
			document.getElementById("splDietaryNeed").value = "";

			return false;
		}
	}
	return true;
}
