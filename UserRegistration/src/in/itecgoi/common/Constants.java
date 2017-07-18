package in.itecgoi.common;

public interface Constants {
	
	public final String DB_Drivers = "org.postgresql.Driver";
	public final String DB_URL = "jdbc:postgresql://localhost:5432/testdb";
	public final String DB_UserId = "postgres";
	public final String DB_Password = "software";
	
	// EMail server configurations.
	public final String EMAIL_SERVER = "smtp.cdac.in";
	public final String EMAIL_SERVER_USER_ID = "ashusingh@cdac.in";
	public final String EMAIL_SERVER_PASSWORD = "software!@12";
	public final String EMAIL_REGISTRATION_FROM = "itec-admin@cdac.in";
	public final String EMAIL_REGISTRATION_SUBJECT = "ITEC registration confirmation.";
	
	public final String FILE_UPLOAD_PATH = "C:\\temp\\fileUpload";
	public final String DB_SELECT_Query_Address_Details = "SELECT * FROM address_details WHERE res_email = ?";
	public final String DB_Insert_Query_Personal_Details = "INSERT INTO personal_details"
			+ "(c_id, title, c_namevar, c_surname, c_gender, c_marital_stat, c_age, c_dp, pp_num, pp_iss_dt, pp_place_of_iss, pp_exp_dt) "
			+ "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
	
	public final String DB_Sequece_Query = "SELECT nextval('c_id')";
	public final String DB_Sequence_Reset_Query = "ALTER SEQUENCE c_id RESTART WITH 1";

	public final String DB_Insert_Query_Address_Details = "INSERT INTO address_details(c_id, ofc_addr, ofctel_concode, ofctel_num, ofcfax_concode, ofcfax_arcode, ofcfax_num, ofc_email, res_addr, res_tel_concode, res_tel_num, mob_concode, mob_num, res_fax_concode, res_fax_arcode, res_fax_num, res_email, sp_diet_needs) "
			+ "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
	
	public final String DB_Insert_Query_Emergency_Contats = "INSERT INTO emergency_contact(c_id, off_con_name, off_con_addr, off_con_concode, off_con_arcode, off_con_num, off_con_fax_concode, off_con_fax_arcode, off_con_fax_num, off_con_mob_concode, off_con_mob_num, off_con_email, prs_con_name, prs_con_addr, prs_con_concode, prs_con_arcode, prs_con_num, prs_con_mob_concode, prs_con_mob_num, prs_con_fax_concode, prs_con_fax_arcode, prs_con_fax_num, prs_con_email) "
			+ "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
	
	public final String DB_Insert_Query_Educational_Qualifications = "INSERT INTO edu_qualification(c_id, edu_qualification_name, passing_year, institute_name) VALUES(?, ?, ?, ?)";
	
	public final String DB_Insert_Query_Professional_Qualifications = "INSERT INTO prof_qualifications(c_id, prof_qualification_name, passing_year, institute_name) VALUES(?, ?, ?, ?)";

	public final String RegConfirmationSelectQuery = "SELECT a.title, a.c_namevar, a.c_surname"
			+ " FROM personal_details AS a, address_details AS b"
			+ " WHERE a.c_id = b.c_id"
			+ " AND b.res_email = ? "
			+ " AND a.c_id = ? ";
	
	public final String RegConfirmationUpdateQuery = "INSERT INTO registration_confirmation(c_id, is_confirmed, confirmation_date) VALUES(?, ?, ?);";
	
	public final String RegConfirmationAppologyMsgForNoDetails = 
			"Dear User,"
		+ "\nWe are not able to find details for the user for which registration confirmation was requested."
		+ "\nPlease retry the link again, if the problem persists then please reach out to us on: ashusingh@cdac.in:";
	
	public final String RegConfirmationAppologyLinkExpired = "\nYour registration link has expired, hence registration was not successful."
						+ "\n\nWe have sent you another email with registrtation url. Kindly confirm your registration within 48 hours.";
;
}
