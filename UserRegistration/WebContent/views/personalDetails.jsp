<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Personal Details</title>

<link rel="stylesheet" href="${pageContext.request.contextPath}/css/reset.css" type="text/css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/style33.css" type="text/css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/styles.css" type="text/css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/jquery.css" type="text/css" media="all">
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/Style.css" type="text/css"  id="css5">
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/pagedesign.css" type="text/css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/tabcontent.css" type="text/css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/jquery_002.css" type="text/css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/main.css"  type="text/css">

<script type="text/javascript" src="${pageContext.request.contextPath}/js/search_validate.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/stringvalidation.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js//shadowbox.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js//jquery-1.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js//dropdown.js"></script>

<script type="text/javascript" src="${pageContext.request.contextPath}/js/datetimepicker_css.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/tabcontent.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/moment.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.htm"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/validation.js"></script>


<script type="text/javascript">
	function submitFunction() {

	}
</script>

</head>
<body>
	<br />
	<div style="width: 1000px; margin-left: auto; margin-right: auto;">
		<ul class="tabs" style="height: 15px">
			<li><a href="#view1">Personal Details</a></li>
			<li><a href="#view2">Educational / Professional Details</a></li>
			<li><a href="#view3">Employment Details</a></li>
			<li><a href="#view4">Medical Details</a></li>
			<li><a href="#view5">Preview Details</a></li>
			<li><a href="#view6"></a></li>
		</ul>
		<br />
		<table style="width: 100%">
			<tr>
				<td width="80%" align="left"><div id="status_message"
						style="color: red; font-size: 11px;">&nbsp;</div>
				
				<td width="20%" align="center"><a href="#"
					onClick="helpReg('registration')">Instructions for filling the form</a></td>
				<td width="20%" align="right"><input style="color: #DD0000;"
					type="button" value="Exit Registration" onClick="cancel()" />
				
				<td></td>
			</tr>
		</table>
		
		<br/><br/><br/>
		<form id="frm" action="${pageContext.request.contextPath}/personal" method="post" enctype="multipart/form-data">
			<div style="border: 1px solid #4F94CD; border-top: 2px solid #4F94CD; padding: 20px;">
				<div id="view1">
<!-- 		<div style="border: 1px solid #4F94CD; border-top: 2px solid #4F94CD; padding: 20px;">
			<div id="view1" style="display: block;">  -->
				<div align="center">
					<table class="data" style="text-align: left; width: 98%;">
						<tbody>
							<tr>
								<td width="25%"><span class="formlabels">Nationality <font color="red"> * </font>
								</span></td>
								<td colspan="3" height="22" align="left"><label id="country" name="country" tabindex="1"> </label></td>
								<td style="width: 25%" height="22" align="left"><span class="formlabels">Secretariat Name <font color="red"> * </font></span></td>
								<td colspan="3" height="22" align="left"><label id="secretariatID" name="secretariatID" tabindex="2"> </label></td>
							</tr>
						</tbody>
					</table>
					<table class="data" style="text-align: left; width: 98%;" border="1">
						<tbody>
							<tr>

								<td colspan="4">
									<p align="left">
										<strong><span class="formlabels" style="font-style: italic; color: grey">Course Details</span></strong>
									</p>
								</td>
							</tr>
							<tr>
								<td height="25" width="20%" align="left"><span class="formlabels"> Courses offered from </span></td>
								<td width="30%"><label name="startDate" id="startDate"></label> <input value="" id="startdate" name="startdate" type="hidden"></td>
								<td height="25" width="20%" align="left"><span class="formlabels">To</span></td>
								<td width="30%"><label name="endDate" id="endDate"> </label> <input value="" id="enddate" name="enddate" type="hidden"></td>
							</tr>
							<tr>
								<td width="24%"><span class="formlabels"> Area of Study <font color="red"> * </font>
								</span></td>
								<td height="22" width="26%" align="left"><label id="stream" name="stream" tabindex="2"> </label></td>

								<td width="24%"><span class="formlabels"> Name of Course <font color="red"> * </font>
								</span></td>
								<td height="22" width="26%" align="left"><label id="course" name="course" tabindex="2"> </label></td>
							</tr>
							<tr>
								<td><span class="formlabels">Name of Institute <font color="red">* </font>
								</span></td>
								<td colspan="3"><label id="institute" name="institute"> </label></td>
							</tr>
						</tbody>
					</table>
	<table class="ds_box" id="ds_conclass" style="display: none;" cellspacing="0" cellpadding="0">
		<tbody>
			<tr>
				<td id="ds_calclass"></td>
			</tr>
		</tbody>
	</table>	
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/main.js"></script>
	
					<table class="data" style="text-align: left; width: 98%;">
						<tbody>
							<tr>
								<td colspan="4"><p align="left">
										<strong><span class="formlabels"></span> </strong>
									</p></td>
							</tr>
							<tr>
								<td colspan="4"><p align="left">
										<strong><span class="formlabels" style="font-style: italic; color: grey">Personal Details</span> </strong>
									</p></td>
							</tr>
							<tr>
								<td><span class="formlabels">Title <font color="red"> * </font>
								</span></td>
								<td colspan="1"><select name="title" id="title" class="formlabels combo" tabindex="1" onblur="showTitle()">
										<option value="0">Select Title</option>
										<option value="Mr">Mr</option>
										<option value="Ms">Ms</option>
										<option value="Mrs">Mrs</option>
										<option value="Dr">Dr</option>
								</select></td>
							</tr>
							<tr>
								<td><span class="formlabels">Name<font color="red"> * </font></span></td>
								<td><input id="name" name="name" class="mandatoryTbox" tabindex="2" onblur="showName(); return isValidName(this.value)" maxlength="100" value="" type="text"> <input id="financialYear"
									name="financialYear" value="2017-2018" type="hidden"
								> <input id="courseid" name="courseid" value="1499" type="hidden"> <input id="streamid" name="streamid" value="10" type="hidden"> <input id="countrymasterid" name="countrymasterid" value="16"
									type="hidden"
								> <input id="secttMasterid" name="secttMasterid" value="" type="hidden"></td>

								<td><span class="formlabels">Surname<font color="red"> * </font></span></td>
								<td><input id="surname" name="surname" class="mandatoryTbox" onblur="showSurname(); return isValidSurName(this.value)" tabindex="3" maxlength="100" value="" type="text"></td>
							</tr>
							<tr>
								<td><span class="formlabels">Gender<font color="red"> * </font>
								</span></td>
								<td colspan="1"><select path="gender" id="gender" name="gender" class="formlabels combo" tabindex="4" onblur="showGender()">
										<option value="0">Select Gender</option>

										<option value="Male">Male</option>

										<option value="Female">Female</option>

										<option value="Other">Other</option>


								</select></td>

								<td><span class="formlabels">Marital Status<font color="red"> *</font></span></td>
								<td colspan="1"><select path="maritalStatus" id="maritalStatus" name="maritalStatus" class="formlabels combo" tabindex="5" onblur="showMaritalStatus()">
										<option value="0">Select Marital Status</option>

										<option value="Single">Single</option>

										<option value="Married">Married</option>

										<option value="Divorcee">Divorcee</option>

										<option value="Widow/Widower">Widow/Widower</option>
								</select></td>
							</tr>
							<tr>
								<td><span class="formlabels">Date of Birth<font color="red"> * </font></span></td>
								<td><input id="dob" name="dob" class="mandatoryTbox" tabindex="6" onblur="calculateAge();showDOB()" onclick="ds_sh(this);" readonly="true" style="cursor: text" value="" type="text"> <input name="age"
									id="age" value="" type="hidden"
								></td>
 								<td><span class="formlabels">Upload Image (Max size- 150 KB in .jpg, .jpeg format, only passport size photo should be uploaded)<font color="red"> * </font>
							</span></td> 
							<td><input accept="image/jpg, image/JPG,image/JPEG, image/jpeg" name="photo1" id="photo1" class="mandatoryTbox" tabindex="7" onchange="load_image(this.id, this.value)" type="file"></td>
						
							</tr>
							<tr>
								<td><span class="formlabels">Passport Number </span></td>
								<td><input name="passportNumber" id="passportNumber" onblur="showPassportNo(); return isValidPassportNo(this.value)" value="" class="mandatoryTbox" tabindex="8" maxlength="12" type="text"></td>
								<td><span class="formlabels">Passport Issue Date </span></td>
								<td><input name="passportIssueDate" id="passportIssueDate" tabindex="9" onblur="showIssueDate()" onclick="ds_sh(this);" readonly="true" style="cursor: text" class="mandatoryTbox" value="" type="text"></td>
							</tr>
							<tr>
								<td><span class="formlabels">Place of Issuance</span></td>
								<td><input name="passportIssuePlace" id="passportIssuePlace" class="mandatoryTbox" tabindex="10" maxlength="100" value="" onblur="showIssuePlace(); return  isValidPassportIssuePlace(this.value)" type="text"></td>
								<td><span class="formlabels"> Passport Expiry Date </span></td>
								<td><input name="passportExpiryDate" tabindex="11" onclick="ds_sh(this);" readonly="true" style="cursor: text" class="mandatoryTbox" value="" id="passportExpiryDate" type="text"></td>
							</tr>
						</tbody>
					</table>

 					<div align="center">
						<table class="data" style="text-align: left; width: 98%;">
							<thead>
								<tr>
									<th width="24%"></th>
									<th style="text-align: center;" width="26%">Office</th>
									<th width="24%"></th>
									<th style="text-align: center;" width="26%">Residence</th>
								</tr>
							</thead>
							<tbody>
								<tr>

									<td><span class="formlabels">Address<font color="red">*</font></span></td>
									<td><input path="officeAddress" name="officeAddress" id="officeAddress" class="mandatoryTbox" tabindex="12" maxlength="200" onblur="showOfficeAddress(); return isValidOfficeAddress(this.value)" value=""
										type="text"
									></td>

									<td><span class="formlabels">Address<font color="red">*</font>
									</span></td>
									<td><input name="residenceAddress" maxlength="200" onblur="showResAddress(); return isValidResidenceAddress(this.value)" id="residenceAddress" class="mandatoryTbox" tabindex="13" value="" type="text"></td>
								</tr>
								<tr>
									<td><span class="formlabels">Telephone Number</span> <br> <span class="formlabels">(Country Code - Number)</span></td>
									<td><input name="officePhoneCCode" id="officePhoneCCode" maxlength="5" class="verysmallmandatoryTbox" tabindex="14" onblur="showOfficePhoneCCode(); return isValidOfficephoneCode(this.value)" value=""
										type="text"
									> <input name="officePhone" id="officePhone" onblur="showOfficePhone(); return isValidOfficephone(this.value)" value="" class="smallmandatoryTbox1" tabindex="15" maxlength="12" type="text"></td>


									<td><span class="formlabels">Telephone Number<font color="red"> * </font></span> <br> <span class="formlabels">(Country Code - Number)</span></td>
									<td><input name="residencePhoneCCode" id="residencePhoneCCode" maxlength="5" class="verysmallmandatoryTbox" tabindex="16"
										onblur="showResTelephoneCCode(); return isValidresidenceMobileNumberCCode(this.value)" value="" type="text"
									> <input name="residencePhone" id="residencePhone" onblur="showResTelephone(); return isValidresidenceMobileNumber(this.value)" value="" class="smallmandatoryTbox1" tabindex="17" maxlength="12"
										type="text"
									></td>
								</tr>


								<tr>
									<td></td>
									<td></td>
									<td><span class="formlabels">Mobile Number<br> <span class="formlabels">(Country Code - Number)</span>
									</span></td>

									<td><input path="residenceMobileNumberCCode" name="residenceMobileNumberCCode" id="residenceMobileNumberCCode" class="verysmallmandatoryTbox" tabindex="18" maxlength="5"
										onblur="showOfficeMobileNoCCode(); return isValidofficeMobileNumberCCode(this.value)" value="" type="text"
									> <input path="residenceMobileNumber" name="residenceMobileNumber" value="" id="residenceMobileNumber" class="smallmandatoryTbox1" tabindex="19"
										onblur="showOfficeMobileNo(); return isValidofficeMobileNumber(this.value)" maxlength="12" type="text"
									></td>

								</tr>

								<tr>

									<td><span class="formlabels">Fax</span><br> <span class="formlabels">(Country Code - Area Code - Number)</span></td>

									<td><input path="officeFaxCCode" id="officeFaxCCode" name="officeFaxCCode" class="verysmallmandatoryTbox" tabindex="20" maxlength="5" onblur="showOfficeFaxCCode(); return isValidofficeFaxCCode(this.value)"
										value="" type="text"
									> <input name="officeFaxACode" id="officeFaxACode" class="verysmallmandatoryTbox" tabindex="21" maxlength="5" onblur="showOfficeFaxACode(); return isValidofficeFaxACode(this.value)" value="" type="text">
										<input id="officeFax" name="officeFax" value="" class="smallmandatoryTbox" tabindex="22" maxlength="12" onblur="showOfficeFax(); return isValidofficeFax(this.value)" type="text"></td>

									<td><span class="formlabels">Fax</span><br> <span class="formlabels">(Country Code - Area Code - Number)</span></td>
									<td><input name="residenceFaxCCode" id="residenceFaxCCode" maxlength="5" class="verysmallmandatoryTbox" value="" tabindex="23" onblur="showResFaxCCode(); return isValidresidenceFaxCCode(this.value)"
										type="text"
									> <input name="residenceFaxACode" id="residenceFaxACode" maxlength="5" class="verysmallmandatoryTbox" tabindex="24" value="" onblur="showResFaxACode(); return isValidresidenceFaxACode(this.value)" type="text">
										<input name="residenceFax" id="residenceFax" maxlength="12" class="smallmandatoryTbox" tabindex="25" onblur="showResFax(); return isValidresidenceFax(this.value)" value="" type="text"></td>

								</tr>



								<tr>
									<td><span class="formlabels">Email Id<font color="red"> * </font>
									</span></td>
									<td><input name="officeEmail" id="officeEmail" maxlength="50" onblur="showOfficeEmail(); return validateEmail(this.value);" class="mandatoryTbox" tabindex="26" value="" type="text"></td>

									<td><span class="formlabels">Email Id<font color="red"> * </font><br></span> <span>(This will be used for further communications and as userid for your account)</span></td>
									<td><input name="residenceEmail" id="residenceEmail" class="mandatoryTbox" tabindex="27" maxlength="50" onblur="showEmail(); return validateEmail(this.value);" value="" type="text"></td>
								</tr>
								<tr>
									<td><span class="formlabels">Special dietary needs, if any </span></td>
									<td><input path="splDietaryNeed" name="splDietaryNeed" maxlength="100" value="" id="splDietaryNeed" class="mandatoryTbox" tabindex="28" onblur="showSpecialDiet(); return isValidsplDietaryNeed(this.value) "
										type="text"
									></td>
									<td></td>
									<td></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<p align="left">
					<strong><span class="formlabels">Person to be notified in case of emergency</span> </strong>
				</p>
				<div align="center">
					<table class="data" style="text-align: left; width: 98%;">
						<thead>
							<tr>
								<th width="24%"></th>
								<th style="text-align: center;" width="26%">Official Contact Details</th>
								<th width="24%"></th>
								<th style="text-align: center;" width="26%">Personal / Family Contact Details</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><span class="formlabels">Name<font color="red"> * </font></span></td>
								<td><input path="emergencyOfficePersonName" id="emergencyOfficePersonName" name="emergencyOfficePersonName" maxlength="100" class="mandatoryTbox" tabindex="29"
									onblur="showEmergencyOfficePersonName(); return isValidemergencyOfficePersonName(this.value)" value="" type="text"
								></td>
								<td><span class="formlabels">Name<font color="red"> * </font>
								</span></td>
								<td><input path="emergencyPersonName" accept="" value="" name="emergencyPersonName" id="emergencyPersonName" class="mandatoryTbox" tabindex="30"
									onblur="showEmergencyPersonName(); return isValidemergencyPersonName(this.value)" maxlength="100" type="text"
								></td>
							</tr>

							<tr>
								<td><span class="formlabels">Address<font color="red"> * </font>
								</span></td>
								<td><input path="emergencyPersonOfficialAddress" name="emergencyPersonOfficialAddress" id="emergencyPersonOfficialAddress" class="mandatoryTbox"
									onblur="showEmergencyPersonOfficialAddress(); return isValidemergencyPersonOfficialAddress(this.value)" tabindex="31" maxlength="200" value="" type="text"
								></td>
								<td><span class="formlabels">Address<font color="red"> * </font>
								</span></td>
								<td><input path="emergencyPersonPersonalAddress" name="emergencyPersonPersonalAddress" value="" id="emergencyPersonPersonalAddress" class="mandatoryTbox"
									onblur="showEmergencyPersonPersonalAddress(); return isValidemergencyPersonPersonalAddress(this.value)" tabindex="32" maxlength="200" type="text"
								></td>
							</tr>
							<tr>
								<td><span class="formlabels">Telephone Number</span><br> <br> <span class="formlabels">(Country Code - Area Code - Number)</span></td>
								<td><input path="emergencyPersonOfficialPhoneCCode" value="" name="emergencyPersonOfficialPhoneCCode" id="emergencyPersonOfficialPhoneCCode" class="verysmallmandatoryTbox" tabindex="33" maxlength="5"
									onblur="showEmergencyPersonOfficialPhoneCCode(); return isValidemergencyPersonOfficialPhoneCCode(this.value)" type="text"
								> <input name="emergencyPersonOfficialPhoneACode" id="emergencyPersonOfficialPhoneACode" class="verysmallmandatoryTbox" tabindex="34" maxlength="5" accept=""
									onblur="showEmergencyPersonOfficialPhoneACode(); return isValidemergencyPersonOfficialPhoneACode(this.value)" value="" type="text"
								> <input value="" name="emergencyPersonOfficialPhone" onblur="showEmergencyPersonOfficialPhone(); return isValidEmergencyPersonOfficialPhone(this.value);" id="emergencyPersonOfficialPhone" maxlength="12"
									class="smallmandatoryTbox" tabindex="35" type="text"
								></td>



								<td><span class="formlabels">Telephone Number</span><br> <br> <span class="formlabels">(Country Code - Area Code - Number)</span></td>
								<td><input name="emergencyPersonPersonalPhoneCCode" id="emergencyPersonPersonalPhoneCCode" class="verysmallmandatoryTbox" tabindex="36" maxlength="5"
									onblur="showEmergencyPersonPersonalPhoneCCode(); return isValidEmergencyPersonPersonalPhoneCCode(this.value)" value="" type="text"
								> <input name="emergencyPersonPersonalPhoneACode" id="emergencyPersonPersonalPhoneACode" class="verysmallmandatoryTbox" tabindex="37" maxlength="5"
									onblur="showEmergencyPersonPersonalPhoneACode(); return isValidEmergencyPersonPersonalPhoneACode(this.value)" value="" type="text"
								> <input name="emergencyPersonPersonalPhone" id="emergencyPersonPersonalPhone" maxlength="12" class="smallmandatoryTbox" tabindex="38" value=""
									onblur="showEmergencyPersonPersonalPhone(); return isValidEmergencyPersonPersonalPhone(this.value)" type="text"
								></td>
							</tr>
							<tr>
								<td><span class="formlabels">Mobile Number<font color="red"> * </font> <br> <br> <span class="formlabels">(Country Code - Number)</span></span></td>
								<td><input name="emergencyPersonOfficialMobileNumberCCode" value="" id="emergencyPersonOfficialMobileNumberCCode" class="verysmallmandatoryTbox" tabindex="39" maxlength="5"
									onblur="showEmergencyPersonOfficialMobileNumberCCode(); return isValidEmergencyPersonOfficialMobileNumberCCode(this.value)" type="text"
								> <input name="emergencyPersonOfficialMobileNumber" id="emergencyPersonOfficialMobileNumber" class="smallmandatoryTbox1" tabindex="40" maxlength="12" value=""
									onblur="showEmergencyPersonOfficialMobileNumber(); return isValidEmergencyPersonOfficialMobileNumber(this.value)" type="text"
								></td>
								<td><span class="formlabels">Mobile Number<font color="red"> * </font> <br> <br> <span class="formlabels">(Country Code - Number)</span></span></td>



								<td><input name="emergencyPersonPersonalMobileNumberCCode" id="emergencyPersonPersonalMobileNumberCCode" class="verysmallmandatoryTbox" tabindex="41" maxlength="5"
									onblur="showEmergencyPersonPersonalMobileNumberCCode();return isValidEmergencyPersonPersonalMobileNumberCCode(this.value)" value="" type="text"
								> <input name="emergencyPersonPersonalMobileNumber" id="emergencyPersonPersonalMobileNumber" class="smallmandatoryTbox1" tabindex="42" maxlength="12"
									onblur="showEmergencyPersonPersonalMobileNumber();return isValidEmergencyPersonPersonalMobileNumber(this.value)" value="" type="text"
								></td>
							</tr>
							<tr>
								<td><span class="formlabels">Fax Number</span><br> <br> <span class="formlabels">(Country Code - Area Code - Number)</span></td>
								<td><input name="emergencyPersonOfficialFaxCCode" id="emergencyPersonOfficialFaxCCode" class="verysmallmandatoryTbox" tabindex="43" maxlength="5"
									onblur="showEmergencyPersonOfficialFaxCCode(); return isValidEmergencyPersonOfficialFaxCCode(this.value)" value="" type="text"
								> <input name="emergencyPersonOfficialFaxACode" id="emergencyPersonOfficialFaxACode" class="verysmallmandatoryTbox" tabindex="44" maxlength="5"
									onblur="showEmergencyPersonOfficialFaxACode(); return isValidEmergencyPersonOfficialFaxACode(this.value)" value="" type="text"
								> <input name="emergencyPersonOfficialFax" id="emergencyPersonOfficialFax" maxlength="12" class="smallmandatoryTbox" tabindex="45"
									onblur="showEmergencyPersonOfficialFax(); return isValidEmergencyPersonOfficialFax(this.value)" value="" type="text"
								></td>

								<td><span class="formlabels">Fax Number</span><br> <br> <span class="formlabels">(Country Code - Area Code - Number)</span></td>
								<td><input path="emergencyPersonPersonalFaxCCode" name="emergencyPersonPersonalFaxCCode" id="emergencyPersonPersonalFaxCCode" class="verysmallmandatoryTbox" tabindex="46" maxlength="5" value=""
									onblur="showEmergencyPersonPersonalFaxCCode(); return isValidEmergencyPersonPersonalFaxCCode(this.value)" type="text"
								> <input path="emergencyPersonPersonalFaxACode" name="emergencyPersonPersonalFaxACode" id="emergencyPersonPersonalFaxACode" class="verysmallmandatoryTbox" tabindex="47" maxlength="5" value=""
									onblur="showEmergencyPersonPersonalFaxACode(); return isValidEmergencyPersonPersonalFaxACode(this.value)" type="text"
								> <input path="emergencyPersonPersonalFax" name="emergencyPersonPersonalFax" id="emergencyPersonPersonalFax" maxlength="12" class="smallmandatoryTbox" tabindex="48" value=""
									onblur="showEmergencyPersonPersonalFax(); return isValidEmergencyPersonPersonalFax(this.value)" type="text"
								></td>
							</tr>
							<tr>
								<td><span class="formlabels">Email Id<font color="red"> * </font>
								</span></td>
								<td><input name="emergencyPersonOfficialEmail" value="" id="emergencyPersonOfficialEmail" class="mandatoryTbox" tabindex="49"
									onblur="showEmergencyPersonOfficialEmail(); return validateEmail(this.value);" maxlength="50" type="text"
								></td>
								<td><span class="formlabels">Email Id<font color="red"> * </font>
								</span></td>
								<td><input name="emergencyPersonPersonalEmail" accept="" value="" id="emergencyPersonPersonalEmail" class="mandatoryTbox" tabindex="50"
									onblur="showEmergencyPersonPersonalEmail(); return validateEmail(this.value);" maxlength="50" type="text"
								></td>
							</tr>
						</tbody>
					</table>
			<span> <input id="next1" name="next1" value="NEXT" tabindex="51" onclick="nextTab('view2')" type="button"> </span>
				</div>
			</div>
	
			<div id="view2" style="display: none;">
				<p align="left">
					<span class="formlabels"><b>Educational Qualification(s)<font color="red"> * </font></b> <br>(You may add more records by clicking + sign)</span>
				</p>
				<input id="eduCount" value="1" name="eduCount" type="hidden">
				<table class="data" id="edu">
					<tbody>
						<tr style="background: #4F94CD;">
							<th width="300">Degree / Diploma / Certificates</th>
							<th width="300">Year</th>
							<th width="300">Institute Name</th>
							<th width="40"><img src="images/plusimg.jpg" onclick="addEduRow('edu');" height="20" width="20"></th>
						</tr>
						<tr>
							<td><input name="degree[0]" id="degree[0]" class="mandatoryTbox mandatoryEduTbox" tabindex="52" onkeypress="return validateData(event, 5);" type="text"></td>
							<td><input name="passingYear[0]" id="passingYear[0]" class="mandatoryTbox mandatoryEduTbox" tabindex="53" onkeypress="return validateData(event, 3);" maxlength="4" type="text"></td>
							<td><input name="eduInstituteName[0]" id="eduInstituteName[0]" class="mandatoryTbox mandatoryEduTbox" tabindex="54" onkeypress="return validateData(event, 5);" maxlength="" type="text"></td>
							<td><img src="images/cancel.jpg" onclick="document.getElementById('edu').deleteRow(1);" height="20" width="20"></td>
						</tr>


					</tbody>
				</table>

				<p align="left">
					<span class="formlabels"><b>Professional Qualification(s)</b></span>
				</p>
				<input id="profCount" value="1" name="profCount" type="hidden">
				<table class="data" id="prof">
					<tbody>
						<tr style="background: #4F94CD;">
							<th width="300">Professional Qualification</th>
							<th width="300">Year</th>
							<th width="300">Institute Name</th>
							<th width="40"><img src="images/plusimg.jpg" onclick="addProfRow('prof');" height="20" width="20"></th>
						</tr>
						<tr>
							<td><input path="profqualification" name="prof_qualification[0]" id="prof_qualification[0]" class="mandatoryTbox mandatoryProfTbox" tabindex="55" type="text"></td>
							<td><input name="prof_passingYear[0]" id="prof_passingYear[0]" class="mandatoryTbox mandatoryProfTbox" tabindex="56" onkeypress="return validateData(event, 3);" maxlength="4" type="text"></td>
							<td><input name="prof_instituteName[0]" id="prof_instituteName[0]" class="mandatoryTbox mandatoryProfTbox" tabindex="57" onkeypress="return validateData(event, 5);" type="text"></td>
							<td><img src="images/cancel.jpg" onclick="document.getElementById('prof').deleteRow(1);" height="20" width="20"></td>
						</tr>
					</tbody>
				</table>
				<span> <input id="back1" name="back1" value="BACK" onclick="backTab('view1')" tabindex="58" type="button"></span> <span> <input id="next2" name="next2" value="NEXT" onclick="nextTab('view3')"
					tabindex="59" type="button"
				>
				</span>
			</div>
 		<input type="submit" value="Register" onclick="return validateFields();" />
			<div id="view3" style="font-size: 11px; display: none;">
				<p align="left">
					<span class="formlabels"><b>Details of Previous Employment / Profession<font color="red"> * </font>
					</b></span>
				</p>
				<input id="empCount" value="1" name="empCount" type="hidden">
				<table class="data" id="empTab">
					<tbody>
						<tr style="background: #4F94CD;">
							<th width="250">Name of Employer / Department / Company</th>
							<th width="200">Position</th>
							<th width="130">From Date</th>
							<th width="130">To Date</th>
							<th width="250">Description of Work</th>
							<th width="40"><img src="images/plusimg.jpg" onclick="addEmploymentRow('empTab');" height="20" width="20"></th>
						</tr>
						<tr>
							<td><input name="employerName[0]" id="employerName[0]" class="mandatoryTbox mandatoryEmpTbox" tabindex="60" maxlength="100" type="text"></td>
							<td><input id="employmentposition[0]" name="employmentposition[0]" class="exp_date mandatoryEmpTbox" tabindex="61" maxlength="100" type="text"></td>
							<td><input name="employmentfromDate[0]" id="employmentfromDate[0]" class="exp_date mandatoryEmpTbox" onclick="ds_sh(this);" tabindex="62" readonly="true" type="text"></td>
							<td><input name="employmenttoDate[0]" id="employmenttoDate[0]" class="exp_date mandatoryEmpTbox" onclick="ds_sh(this)" tabindex="63" readonly="true" type="text"></td>
							<td><textarea type="text" name="employmentworkDescription[0]" id="employmentworkDescription[0]" class="mandatoryTbox mandatoryEmpTbox" tabindex="64" style="width: 212px; height: 55px;" maxlength="500"></textarea>

							</td>
							<td><img src="images/cancel.jpg" onclick="document.getElementById('empTab').deleteRow(1);" height="20" width="20"></td>
						</tr>
					</tbody>
				</table>

				<p align="left">
					<span class="formlabels">Employee Category <font color="red"> * </font></span>
				</p>
				<p align="left">
					<input name="employeeCategory" id="Government" value="Government" label="Government" onclick="clearOtherEmployeeCategory()" tabindex="65" onblur="showemployeeCategory()" type="radio">Government <input
						name="employeeCategory" id="Semi-government" value="Semi-government/Parastatal" label="Semi-government/Parastatal" tabindex="66" onclick="clearOtherEmployeeCategory()" type="radio"
					>Semi-government/Parastatal <input name="employeeCategory" id="Private Company" value="Private Company" label="Private Company" onclick="clearOtherEmployeeCategory()" tabindex="67" type="radio"> Private
					Company <input name="employeeCategory" id="Others" value="Others" label="Others ( Please Specify)" onclick="enterOtherEmployeeCategory()" tabindex="68" type="radio">Others <input class="mediummandatoryTbox"
						maxlength="100" id="employeeCategoryOtherVal" name="employeeCategoryOtherVal" tabindex="69" style="display: none;" type="text"
					>
				</p>

				<div align="left">
					<p align="left">
						<strong><span class="formlabels">Details of Present Employer<font color="red"> * </font>
						</span></strong>
					</p>
				</div>
				<table class="data" style="width: 50%;">
					<tbody>
						<tr>
							<td align="left"><span class="formlabels">Name of Employer Organization</span></td>
							<td><input name="currentEmployerName" id="currentEmployerName" onblur="showCurrentEmployerName(); return isValidcurrentEmployerName(this.value)" value="" class="mandatoryTbox" tabindex="70" maxlength="100"
								type="text"
							></td>
						</tr>
						<tr>
							<td align="left"><span class="formlabels">Employer Address</span></td>
							<td><input path="currentEmployerAddress" onblur="showCurrentEmployerAddress(); return isValidcurrentEmployerAddress(this.value)" value="" name="currentEmployerAddress" id="currentEmployerAddress"
								class="mandatoryTbox" tabindex="71" maxlength="100" type="text"
							></td>
						</tr>
						<tr>
							<td align="left"><span class="formlabels">Employer Telephone Number </span> <br> <span class="formlabels">(Country Code - Area Code - Number)</span></td>
							<td><input path="currentEmployerPhoneCCode" value="" name="currentEmployerPhoneCCode" id="currentEmployerPhoneCCode" class="verysmallmandatoryTbox" tabindex="72" maxlength="5"
								onblur="showCurrentEmployerPhoneCCode(); return isValidcurrentEmployerPhoneCCode(this.value)" type="text"
							> <input name="currentEmployerPhoneACode" id="currentEmployerPhoneACode" class="verysmallmandatoryTbox" tabindex="73" maxlength="5" value=""
								onblur="showCurrentEmployerPhoneACode(); return isValidcurrentEmployerPhoneACode(this.value)" type="text"
							> <input name="currentEmployerPhone" id="currentEmployerPhone" class="smallmandatoryTbox" onblur="showCurrentEmployerPhone(); return isValidcurrentEmployerPhone(this.value)" tabindex="74" value="" maxlength="12"
								type="text"
							></td>
						</tr>
						<tr>
							<td align="left"><span class="formlabels">Employer Email Id</span></td>
							<td><input path="currentEmployerEmailId" id="currentEmployerEmailId" maxlength="50" onblur="showCurrentEmployerEmailId()" name="currentEmployerEmailId" class="mandatoryTbox" tabindex="75" autocomplete="off"
								value="" type="text"
							></td>
						</tr>

						<tr>
							<td align="left"><span class="formlabels">Your Current Designation</span></td>
							<td><input path="currentDesignation" id="currentDesignation" maxlength="100" onblur="showCurrentDesignation(); return isValidcurrentDesignation(this.value)" name="currentDesignation" class="mandatoryTbox"
								tabindex="76" value="" type="text"
							></td>
						</tr>
						<tr>
							<td align="left"><span class="formlabels">Your Current Work Responsibilities</span></td>
							<td><textarea id="currentWorkDescription" maxlength="500" onblur="showCurrentWorkDescription(); return isValidcurrentWorkDescription(this.value)" name="currentWorkDescription" tabindex="77"
									class="mandatoryTbox" style="width: 212px; height: 55px;"
								></textarea></td>
						</tr>

						<tr>
							<td align="left"><span class="formlabels">Working with current Employer since</span></td>
							<td><input readonly="readonly" id="currentFromDate" onclick="ds_sh(this);" onblur="showCurrentFromDate()" name="currentFromDate" class="mandatoryTbox" tabindex="78" value="" type="text"></td>
						</tr>
					</tbody>
				</table>

				<p align="left">
					<span class="formlabels">Have you ever attended a course sponsored by the Government of India ? <font color="red"> * </font>
					</span> <input id="courseAttendedInIndia1" name="courseAttended" value="YES" label="Yes" tabindex="79" onclick="functionDisplayIn();" type="radio">YES <input id="courseAttendedInIndia2" name="courseAttended"
						value="NO" label="No" tabindex="80" onclick="functionHideIn();" type="radio"
					>NO
				</p>

				<p align="left">
					<span class="formlabels" style="display: none" id="inCourse"><b>Details of courses previously done <font color="red"> * </font>
					</b></span>
				</p>
				<input id="indCourseCount" value="1" name="indCourseCount" type="hidden">
				<div>
					<table class="data" style="display: none" id="inCourseTbl">
						<tbody>
							<tr style="background: #4F94CD;">
								<th width="330">Name of Course</th>
								<th width="330">Institute</th>
								<th width="300">Year of Passing</th>
								<th width="40"><img src="images/plusimg.jpg" onclick="addIndCourse('inCourseTbl');" height="20" width="20"></th>
							</tr>
							<tr>
								<td><input name="indiacourseName[0]" id="indiacourseName[0]" class="mandatoryTbox mandatoryInCourseTbox" tabindex="81" maxlength="100" type="text"></td>
								<td><input name="indiainstituteName[0]" id="indiainstituteName[0]" class="mandatoryTbox mandatoryInCourseTbox" tabindex="82" maxlength="100" type="text"></td>
								<td><input name="indiapassingYear[0]" id="indiapassingYear[0]" class="duration mandatoryInCourseTbox" tabindex="83" onkeypress="return validateData(event, 3);" maxlength="4" type="text"></td>
								<td><img src="images/cancel.jpg" onclick="document.getElementById('inCourseTbl').deleteRow(1);" height="20" width="20"></td>
							</tr>
						</tbody>
					</table>
				</div>

				<p align="left">
					<span class="formlabels">Have you ever attended a course outside the country ? <font color="red"> * </font>
					</span> <input name="cafc" id="courseAttendedInForeignCountry1" value="YES" label="Yes" tabindex="84" onclick="functionDisplayFr();" type="radio">YES <input name="cafc" id="courseAttendedInForeignCountry2"
						value="NO" label="No" tabindex="85" onclick="functionHideFr();" type="radio"
					>NO
				</p>
				<p align="left">
					<span class="formlabels" style="display: none" id="frCourse"><b>Details of courses previously done <font color="red"> * </font>
					</b></span>
				</p>
				<input id="frnCourseCount" value="1" name="frnCourseCount" type="hidden">
				<table class="data" style="display: none" id="frCourseTbl">
					<tbody>
						<tr style="background: #4F94CD;">
							<th width="250">Name of Course</th>
							<th width="250">Country</th>
							<th width="110">Duration In Months</th>
							<th width="100">Year</th>
							<th width="250">Sponsor</th>
							<th width="40"><img src="images/plusimg.jpg" onclick="addFornCourse('frCourseTbl');" height="20" width="20"></th>

						</tr>
						<tr>
							<td><input name="foreigncourseName[0]" maxlength="100" class="mandatoryTbox mandatoryFrCourseTbox" tabindex="86" type="text"></td>
							<td><input name="foreigncountry[0]" maxlength="100" class="mandatoryTbox mandatoryFrCourseTbox" tabindex="87" type="text"></td>
							<td><input name="foreigndurationInMonths[0]" class="year mandatoryFrCourseTbox" tabindex="88" onkeypress="return validateData(event, 3)" maxlength="3" type="text"></td>
							<td><input name="foreignpassingYear[0]" class="year mandatoryFrCourseTbox" tabindex="89" onkeypress="return validateData(event, 3)" maxlength="4" type="text"></td>
							<td><input name="foreignsponsor[0]" maxlength="100" class="mandatoryTbox mandatoryFrCourseTbox" tabindex="90" type="text"></td>
							<td><img src="images/cancel.jpg" onclick="document.getElementById('frCourseTbl').deleteRow(1);" height="20" width="20"></td>
						</tr>
					</tbody>
				</table>

				<p align="left">
					<strong><span class="formlabels">Reason For Applying <font color="red"> * </font>
					</span> </strong><br>
				</p>
				<div style="width: 50%;" align="left">
					<textarea maxlength="4000" class="mandatoryTArea" name="reasonForApplying" id="reasonForApplying" onblur="showReasonForApplying()" rows="5" tabindex="91" style="width: 100%;"></textarea>

				</div>
				<span> <input id="back2" name="back2" value="BACK" onclick="backTab('view2')" tabindex="92" type="button"></span> <span> <input id="next3" name="next3" value="NEXT" onclick="nextTab('view4')"
					tabindex="93" type="button"
				>
				</span>
			</div>

			<div id="view4" style="display: none;">
				<table class="data">
					<thead>
						<tr>
							<th colspan="6">Medical Report</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td width="10%" align="left"><span class="formlabels">Height (cm)<font color="red"> * </font>
							</span></td>
							<td width="10%" align="left"><input name="heightInCM" id="heightInCM" class="mediummandatoryTbox" onblur="showHeightInCM(); return isValidheightInCM(this.value)" value="" tabindex="94" maxlength="3"
								type="text"
							></td>


							<td width="10%" align="left"><span class="formlabels">Weight (kg)<font color="red"> * </font>
							</span></td>
							<td width="10%" align="left"><input name="weightInKG" id="weightInKG" onblur="showWeightInKG(); return isValidweightInKG(this.value)" value="" class="mediummandatoryTbox" tabindex="95" maxlength="3"
								type="text"
							></td>
							<td width="10%" align="left"><span class="formlabels">Blood Group<font color="red"> * </font>
							</span></td>
							<td width="10%" align="left"><input name="bloodGroup" id="bloodGroup" onblur="showBloodGroup(); return isValidbloodGroup(this.value)" class="mediummandatoryTbox" value="" tabindex="96" maxlength="3"
								type="text"
							></td>
						</tr>
					</tbody>
				</table>
				<br> <br>
				<div>
					<span> <input id="back2" name="back2" value="BACK" tabindex="97" onclick="backTab('view3')" type="button"></span> <span> <input tabindex="98" id="next4" name="next4" value="NEXT"
						onclick="nextTab('view5')" type="button"
					>
					</span>
				</div>
				<br> <br>

				<div align="left">
					<span><font size="2px">Note: You are required to submit a medical report, in the format provide in the Print-Out of this application form, certified by a doctor/hospital on the panel of Indian
							Mission/UN Mission, if any or as designated by Indian Mission</font> </span>
				</div>
			</div>

			<!-- Preview Page -->
			<div id="view5" style="display: none;">
				<table style="width: 100%" class="data" border="0">
					<tbody>
						<tr>
							<td style="width: 25%" align="left"><span class="formlabels">Name of the Country </span></td>
							<td style="width: 25%" align="left"><span><label id="showCountryId"></label></span></td>

							<td style="width: 25%" align="left"><span class="formlabels">Secretariat </span></td>
							<td style="width: 25%" align="left"><span><label id="showSecretariatID"></label></span></td>
						</tr>
						<tr>
							<td style="width: 25%" align="left"><span class="formlabels">Area Of Study </span></td>
							<td style="width: 25%" align="left"><span><label id="showStreamId"></label></span></td>
						</tr>
						<tr>
							<td style="width: 25%" align="left"><span class="formlabels">Course </span></td>
							<td style="width: 25%" align="left"><span><label id="showCourseId"></label></span></td>

							<td style="width: 25%" align="left"><span class="formlabels">Institute </span></td>
							<td style="width: 25%" align="left"><span><label id="showInstituteId"></label></span></td>
						</tr>
					</tbody>
				</table>
				<br>
				<p align="left">
					<span class="formlabels"><b>Personal Details</b></span>
				</p>
				<table style="width: 100%" class="data" border="0">
					<tbody>
						<tr>
							<td style="width: 25%" align="left"><span class="formlabels">Name</span></td>
							<td style="width: 25%" align="left"><span><label id="showTitleId"></label> <label id="showNameId"></label> <label id="showSurnameId"></label></span></td>

							<td style="width: 25%" align="left"><span class="formlabels">Gender </span></td>
							<td style="width: 25%" align="left"><span><label id="showGenderId"></label></span></td>
						</tr>
						<tr>
							<td style="width: 25%" align="left"><span class="formlabels">Marital Status</span></td>
							<td style="width: 25%" align="left"><span><label id="showMaritalStatusId"></label></span></td>

							<td style="width: 25%" align="left"><span class="formlabels">Date of Birth </span></td>
							<td style="width: 25%" align="left"><span><label id="showDOBId"></label></span></td>
						</tr>
						<tr>
							<td style="width: 25%" align="left"><span class="formlabels">Passport No </span></td>
							<td style="width: 25%" align="left"><span><label id="showPassportNoId"></label></span></td>

							<td style="width: 25%" align="left"><span class="formlabels">Passport Issue Date </span></td>
							<td style="width: 25%" align="left"><span><label id="showIssueDateId"></label></span></td>
						</tr>
						<tr>
							<td style="width: 25%" align="left"><span class="formlabels">Passport Issue Place </span></td>
							<td style="width: 25%" align="left"><span><label id="showIssuePlaceId"></label></span></td>

							<td style="width: 25%" align="left"><span class="formlabels">Passport Expiry Date </span></td>
							<td style="width: 25%" align="left"><span><label id="showExpiryDateId"></label></span></td>
						</tr>

					</tbody>
				</table>
				<table class="data" style="width: 100%">
					<thead>
						<tr>
							<th width="25%"></th>
							<th style="text-align: center;" width="25%">Office</th>
							<th width="25%"></th>
							<th style="text-align: center;" width="25%">Residence</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style="width: 25%" align="left"><span class="formlabels">Address </span></td>
							<td style="width: 25%" align="left"><span><label id="showOfficeAddressId"></label></span></td>

							<td style="width: 25%" align="left"><span class="formlabels">Address </span></td>
							<td style="width: 25%" align="left"><span><label id="showResAddressId"></label></span></td>

						</tr>
						<tr>
							<td style="width: 25%" align="left"><span class="formlabels">Telephone Number</span></td>
							<td style="width: 25%" align="left"><span> <label id="showOfficePhoneCCodeId"></label> <label id="showOfficePhoneId"></label></span></td>

							<td style="width: 25%" align="left"><span class="formlabels">Telephone Number</span></td>
							<td style="width: 25%" align="left"><span> <label id="showResTelephoneCCodeId"></label> <label id="showResTelephoneId"></label></span></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td style="width: 25%" align="left"><span class="formlabels">Mobile Number </span></td>
							<td style="width: 25%" align="left"><span> <label id="showOfficeMobileNoCCodeId"></label> <label id="showOfficeMobileNoId"></label></span></td>
						</tr>
						<tr>
							<td style="width: 25%" align="left"><span class="formlabels">Fax </span></td>
							<td style="width: 25%" align="left"><span> <label id="showOfficeFaxCCodeId"></label> <label id="showOfficeFaxACodeId"></label> <label id="showOfficeFaxId"></label></span></td>

							<td style="width: 25%" align="left"><span class="formlabels">Fax </span></td>
							<td style="width: 25%" align="left"><span> <label id="showResFaxCCodeId"></label> <label id="showResFaxACodeId"></label> <label id="showResFaxId"></label></span></td>
						</tr>
						<tr>
							<td style="width: 25%" align="left"><span class="formlabels">Email Id</span></td>
							<td style="width: 25%" align="left"><span><label id="showOfficeEmailId"></label></span></td>

							<td style="width: 25%" align="left"><span class="formlabels">Email Id </span></td>
							<td style="width: 25%" align="left"><span><label id="showUserId"></label></span></td>


						</tr>
						<tr>
							<td style="width: 25%" align="left"><span class="formlabels">Special Dietary </span></td>
							<td style="width: 25%" colspan="3" align="left"><span><label id="showSpecialDietId"></label></span></td>
						</tr>
					</tbody>
				</table>
				<br>
				<p align="left">
					<span class="formlabels"><b>Person to be notified in case of Emergency</b></span>
				</p>
				<table class="data">
					<thead>
						<tr>
							<th width="26%"></th>
							<th style="text-align: center;" width="26%">Official Contact Details</th>
							<th width="25%"></th>
							<th style="text-align: center;" width="25%">Personal/Family Contact Details</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td style="width: 25%" align="left"><span class="formlabels">Name</span></td>
							<td style="width: 25%" align="left"><span><label id="showEmergencyOfficePersonNameId"></label></span></td>
							<td style="width: 25%" align="left"><span class="formlabels">Name</span></td>
							<td style="width: 25%" align="left"><span><label id="showEmergencyPersonNameId"></label></span></td>
						</tr>

						<tr>
							<td style="width: 25%" align="left"><span class="formlabels">Address</span></td>
							<td style="width: 25%" align="left"><span><label id="showEmergencyPersonOfficialAddressId"></label></span></td>
							<td style="width: 25%" align="left"><span class="formlabels">Address</span></td>
							<td style="width: 25%" align="left"><span><label id="showEmergencyPersonPersonalAddressId"></label></span></td>
						</tr>

						<tr>
							<td style="width: 25%" align="left"><span class="formlabels">Telephone Number</span></td>
							<td style="width: 25%" align="left"><span> <label id="showEmergencyPersonOfficialPhoneCCodeId"></label> <label id="showEmergencyPersonOfficialPhoneACodeId"></label> <label
									id="showEmergencyPersonOfficialPhoneId"
								></label></span></td>
							<td style="width: 25%" align="left"><span class="formlabels">Telephone Number</span></td>
							<td style="width: 25%" align="left"><span> <label id="showEmergencyPersonPersonalPhoneCCodeId"></label> <label id="showEmergencyPersonPersonalPhoneACodeId"></label> <label
									id="showEmergencyPersonPersonalPhoneId"
								></label></span></td>
						</tr>
						<tr>
							<td style="width: 25%" align="left"><span class="formlabels">Mobile Number</span></td>
							<td style="width: 25%" align="left"><span> <label id="showEmergencyPersonOfficialMobileNumberCCodeId"></label> <label id="showEmergencyPersonOfficialMobileNumberId"></label></span></td>
							<td style="width: 25%" align="left"><span class="formlabels">Mobile Number</span></td>
							<td style="width: 25%" align="left"><span> <label id="showEmergencyPersonPersonalMobileNumberCCodeId"></label> <label id="showEmergencyPersonPersonalMobileNumberId"></label></span></td>
						</tr>
						<tr>
							<td style="width: 25%" align="left"><span class="formlabels">Fax Number</span></td>
							<td style="width: 25%" align="left"><span> <label id="showEmergencyPersonOfficialFaxCCodeId"></label> <label id="showEmergencyPersonOfficialFaxACodeId"></label> <label
									id="showEmergencyPersonOfficialFaxId"
								></label></span></td>
							<td style="width: 25%" align="left"><span class="formlabels">Fax Number</span></td>
							<td style="width: 25%" align="left"><span> <label id="showEmergencyPersonPersonalFaxCCodeId"></label> <label id="showEmergencyPersonPersonalFaxACodeId"></label> <label
									id="showEmergencyPersonPersonalFaxId"
								></label></span></td>
						</tr>
						<tr>
							<td style="width: 25%" align="left"><span class="formlabels">Email Id</span></td>
							<td style="width: 25%" align="left"><span><label id="showEmergencyPersonOfficialEmailId"></label></span></td>
							<td style="width: 25%" align="left"><span class="formlabels">Email Id</span></td>
							<td style="width: 25%" align="left"><span><label id="showEmergencyPersonPersonalEmailId"></label></span></td>
						</tr>
					</tbody>
				</table>
				<br>
				<p align="left">
					<span class="formlabels"><b>Educational Qualifications</b></span>
				</p>
				<table id="showEdu" class="data" style="width: 100%">
					<thead>
						<tr>
							<th style="text-align: center;" width="45%">Degree / Diploma / Certificates</th>
							<th style="text-align: center;" width="10%">Year</th>
							<th style="text-align: center;" width="45%">Name of Educational Institute</th>
						</tr>
					</thead>
				</table>

				<table id="edudata" class="data" style="width: 100%">
					<tbody>
						<tr>
							<td style="text-align: center;" width="45%"></td>
							<td style="text-align: center;" width="10%"></td>
							<td style="text-align: center;" width="45%"></td>
						</tr>
					</tbody>
				</table>
				<br>
				<p align="left">
					<span class="formlabels"><b>Professional Qualifications</b></span>
				</p>
				<table id="showProf" class="data" style="width: 100%">
					<thead>
						<tr>
							<th style="text-align: center;" width="45%">Professional Qualification</th>
							<th style="text-align: center;" width="10%">Year</th>
							<th style="text-align: center;" width="45%">Name of Institute</th>
						</tr>
					</thead>

				</table>
				<table id="profdata" class="data" style="width: 100%">
					<tbody>
						<tr>
							<td style="text-align: center;" width="45%"></td>
							<td style="text-align: center;" width="10%"></td>
							<td style="text-align: center;" width="45%"></td>
						</tr>
					</tbody>
				</table>
				<br>
				<p align="left">
					<span class="formlabels"><b>Previous Employment Details</b></span>
				</p>
				<table id="showEmpTab" class="data" style="width: 100%">
					<thead>
						<tr>
							<th style="text-align: center;" width="25%">Name of Employer / Department / Company</th>
							<th style="text-align: center;" width="15%">Position</th>
							<th style="text-align: center;" width="10%">From Date</th>
							<th style="text-align: center;" width="10%">To Date</th>
							<th style="text-align: center;" width="40%">Description of Work</th>
						</tr>

					</thead>

				</table>
				<table id="empdata" class="data" style="width: 100%">
					<tbody>
						<tr>
							<td style="text-align: center;" width="25%"></td>
							<td style="text-align: center;" width="15%"></td>
							<td style="text-align: center;" width="10%"></td>
							<td style="text-align: center;" width="10%"></td>
							<td style="text-align: center;" width="40%"></td>
						</tr>
					</tbody>
				</table>
				<br>
				<p align="left">
					<span class="formlabels">Employee Category </span> <label id="showemployeeCategoryId"></label>
				</p>
				<br>
				<div align="left">
					<p align="left">
						<strong><span class="formlabels">Details of Present Employer </span> </strong>
					</p>
				</div>
				<table border="1">
					<tbody>
						<tr>
							<td style="width: 30%;" align="left"><span class="formlabels">Name</span></td>
							<td style="width: 70%"><span><label id="showCurrentEmployerNameId"></label></span></td>
						</tr>
						<tr>
							<td style="width: 30%" align="left"><span class="formlabels">Address</span></td>
							<td style="width: 70%"><span><label id="showCurrentEmployerAddressId"></label></span></td>
						</tr>
						<tr>
							<td style="width: 30%" align="left"><span class="formlabels">Telephone Number</span></td>
							<td style="width: 70%"><span> <label id="showCurrentEmployerPhoneCCodeId"></label> <label id="showCurrentEmployerPhoneACodeId"></label> <label id="showCurrentEmployerPhoneId"></label></span></td>
						</tr>
						<tr>
							<td style="width: 30%" align="left"><span class="formlabels">Email Id</span></td>
							<td style="width: 70%"><span><label id="showCurrentEmployerEmailIdId"></label></span></td>
						</tr>
						<tr>
							<td style="width: 30%" align="left"><span class="formlabels">Designation </span></td>
							<td style="width: 70%"><span><label id="showCurrentDesignationId"></label></span></td>
						</tr>
						<tr>
							<td style="width: 30%" align="left"><span class="formlabels">Work Description </span></td>
							<td style="width: 70%"><span><label id="showCurrentWorkDescriptionId"></label></span></td>
						</tr>
						<tr>
							<td style="width: 30%" align="left"><span class="formlabels">Working Since </span></td>
							<td style="width: 70%"><span><label id="showCurrentFromDateId"></label></span></td>
						</tr>
					</tbody>
				</table>
				<br>
				<p align="left">
					<span class="formlabels"><b>Course attended in India Details</b></span>
				</p>
				<table id="showInCourseTbl" class="data" style="width: 100%">
					<thead>
						<tr>
							<th style="text-align: center;" width="45%">Name of Course</th>
							<th style="text-align: center;" width="45%">Institute</th>
							<th style="text-align: center;" width="10%">Year of Passing</th>
						</tr>

					</thead>

				</table>
				<table id="indcoursedata" class="data" style="width: 100%">
					<tbody>
						<tr>
							<td style="text-align: center;" width="45%"></td>
							<td style="text-align: center;" width="45%"></td>
							<td style="text-align: center;" width="10%"></td>

						</tr>
					</tbody>
				</table>
				<br>
				<p align="left">
					<span class="formlabels"><b>Course attended in Foreign Country Details</b></span>
				</p>
				<table id="showFrCourseTbl" class="data" style="width: 100%">
					<thead>
						<tr>
							<th width="25%">Name of Course</th>
							<th width="25%">Country</th>
							<th width="10%">Duration In Months</th>
							<th width="10%">Year</th>
							<th width="30%">Sponsor</th>
						</tr>

					</thead>

				</table>
				<table id="frncoursedata" class="data" style="width: 100%">
					<tbody>
						<tr>
							<td style="text-align: center;" width="25%"></td>
							<td style="text-align: center;" width="25%"></td>
							<td style="text-align: center;" width="10%"></td>
							<td style="text-align: center;" width="10%"></td>
							<td style="text-align: center;" width="30%"></td>
						</tr>
					</tbody>
				</table>
				<br>
				<table class="data" width="100%" border="1" align="center">
					<tbody>
						<tr>
							<td style="width: 25%" align="left"><span class="formlabels">Reason for applying</span></td>
							<td style="width: 25%" align="left"><span><label id="showReasonForApplyingId"></label></span></td>
						</tr>
					</tbody>
				</table>
				<br>
				<table class="data" width="100%" border="1" align="center">
					<thead>
						<tr>
							<th colspan="6">Medical Report</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style="width: 15%" align="left"><span class="formlabels">Height (cm)</span></td>
							<td style="width: 15%"><span><label id="showHeightInCMId"></label></span></td>

							<td style="width: 15%" align="left"><span class="formlabels">Weight (kg)</span></td>
							<td style="width: 15%"><span><label id="showWeightInKGId"></label></span></td>
							<td style="width: 15%" align="left"><span class="formlabels">Blood Group</span></td>
							<td style="width: 15%"><span><label id="showBloodGroupId"></label></span></td>
						</tr>
					</tbody>
				</table>


				<span> <input id="back4" name="back1" value="BACK" tabindex="99" onclick="backTab('view4')" type="button"></span> <span> <input tabindex="100" id="next5" name="next5" value="SUBMIT"
					onclick="nextTab('view6')" type="button"
				>
				</span>
			</div>

			<div id="view6" style="display: none;">
				<span align="left" style="font-size: 12px;"><b><font color="blue">You may like to cross-check the information submitted by clicking on Preview Details tab.</font></b></span><br> <span align="left"
					style="font-size: 12px;"
				><b><font color="black">We are creating an account for you with the login credentials given below. A confirmation mail will be sent to your email Id. Please click on the activation link to authenticate
							your candidature. You are required to take the printout of application by logging-in your account at <a href="#" onclick="openHome();">www.itecgoi.in</a>
					</font></b></span> <br> <br>

				<div align="left">
					<table style="font-size: 11px;">

						<tbody>
							<tr>
								<td colspan="3"><span class="formlabels">Your username will be your email id : <font color="black"><label id="showUserId1"></label></font>
								</span></td>
							</tr>
							<tr>
								<td><br> <span class="formlabels">Password</span> <font color="red"> * </font></td>
								<td><input name="password" id="password" maxlength="50" class="mandatoryTbox" tabindex="101" autocomplete="off" type="password"></td>
								<td><span> (Password should contain atleast one digit, one Upper Case letter,</span><br> <span> one Special Character (!@#$%^&amp;+=) and minimum length should be 8)</span></td>
							</tr>
							<tr>
								<td><span class="formlabels">Retype Password<font color="red"> * </font></span></td>
								<td><input id="retypedPassword" maxlength="50" class="mandatoryTbox" tabindex="102" autocomplete="off" type="password"></td>
							</tr>
						</tbody>
					</table>
				</div>

				<div style="font-size: 11px;" align="left">
					<br> <input id="undertaking" name="undertaking" tabindex="103" type="checkbox"> I certify that
					<ol>
						<li>
							<p>&nbsp;&nbsp;&nbsp;&nbsp;1. I have read the course brochure and that I am aware of the course contents and living conditions in India.</p>
						</li>
						<li>
							<p>&nbsp;&nbsp;&nbsp;&nbsp;2. I have sufficient knowledge of English to participate in the training programme.</p>
						</li>
						<li>
							<p>&nbsp;&nbsp;&nbsp;&nbsp;3. I am medically fit to participate in the Course and have submitted a medical certificate from the designated doctor.</p>
						</li>
						<li>
							<p>&nbsp;&nbsp;&nbsp;&nbsp;4. I have not attended any programme previously sponsored by Government of India.</p>
						</li>
						<li>
							<p>&nbsp;&nbsp;&nbsp;&nbsp;5. I have not applied for or am not required to attend any other training course / conference / meeting etc. during the period of the course applied for.</p>
						</li>
					</ol>
					<br>
					<p>
						<b> If accepted for the ITEC/SCAAP training programme, I also undertake to:</b>
					</p>

					<ol type="a">
						<li><p>&nbsp;&nbsp;&nbsp;&nbsp;a. Comply with the instructions and abide by the Rules, Regulations and guidelines as may be stipulated by both the nominating and sponsoring Governments in respect of the
								training;</p></li>
						<li><p>&nbsp;&nbsp;&nbsp;&nbsp;b. Follow the full and complete course of study/training and abide by the Rules of the University/Institution/Establishment in which I undertake to study or undergo training;</p></li>
						<li><p>&nbsp;&nbsp;&nbsp;&nbsp;c. Submit periodic assessments/ tests conducted by the Institute(progress report which may be prescribed);</p></li>
						<li><p>&nbsp;&nbsp;&nbsp;&nbsp;d. Refrain from engaging in political activity, or any form of employment for profit or gain;</p></li>
						<li><p>&nbsp;&nbsp;&nbsp;&nbsp;e. Return to my home country at the end of the course of study or training;</p></li>
						<li><p>&nbsp;&nbsp;&nbsp;&nbsp;f. I also fully understand that if I am granted a training award, it may be subsequently withdrawn if I fail to make adequate progess or for other sufficient cause determined
								by the host Government.</p></li>
						<li><p>&nbsp;&nbsp;&nbsp;&nbsp;g. I confirm that I will not travel to India to attend the Course applied for in case I am pregnant-(for lady participants).</p></li>
					</ol>
					<br>
				</div>


				<div align="center">
					<table>
						<tbody>
							<tr>
								<td><img src="captcha.php?rand=1536985654" id="captchaimg"></td>
							</tr>
							<tr>
								<td><input value="Refresh" onclick="Captcha()" tabindex="105" type="button"></td>
							</tr>
							<tr>
								<td><span class="formlabels">Kindly enter text:</span> <input name="j_captcha_response" id="j_captcha_response" class="mandatoryTbox" tabindex="106" type="text">
									<div id="msg"></div></td>
							</tr>
							<tr>
								<td><input id="back3" name="back3" value="BACK" onclick="backTab('view5')" tabindex="107" type="button"> <input value="Submit Details" name="submit" onclick="return validateFields();" tabindex="108"
									type="submit"
								></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
  	</form>
	
	</div>
</body>
</html>