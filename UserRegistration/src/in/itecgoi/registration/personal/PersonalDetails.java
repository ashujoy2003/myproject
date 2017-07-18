package in.itecgoi.registration.personal;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
//import java.sql.ResultSet;
import java.sql.SQLException;
//import java.sql.Statement;
import java.text.SimpleDateFormat;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

//import com.oreilly.servlet.MultipartRequest;

import in.itecgoi.common.Constants;
import in.itecgoi.utils.MiscUtils;
import in.itecgoi.utils.RegistrationNumber;
import in.itecgoi.utils.SendEmail;

import java.util.Base64;
import java.util.Enumeration;
import java.util.Iterator;

/**
 * Servlet implementation class PersonalDetails
 * 
 * @param <Protected>
 */

@WebServlet("/personal")
@MultipartConfig(fileSizeThreshold = 1024 * 1024 * 2, // 2MB
		maxFileSize = 1024 * 1024 * 10, // 10MB
		maxRequestSize = 1024 * 1024 * 50) // 50MB
public class PersonalDetails extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Long c_id = 0L;

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		try {
			c_id = new RegistrationNumber().getRegistrationNumber();
		} catch (Exception e1) {
			System.out.println("Unable to get registration number:" + e1.getMessage());
			out.println("An unexpected error has happened, please contect admininstrator.");
			e1.printStackTrace();
			return;
		}
		
		Enumeration<String> parameters = request.getParameterNames();
		while (parameters.hasMoreElements()) {
			String key = (String) parameters.nextElement();
			System.out.println("keys:" +key+ ", values:" +request.getParameter(key));
		}
		
		String t = null != request.getParameter("title") ? request.getParameter("title") : "";
		String cn = request.getParameter("name");
		String csn = request.getParameter("surname");

		String cg = request.getParameter("gender");
		String ms = request.getParameter("maritalStatus");
		System.out.println(ms);
		// String dob = request.getParameter("dob");
		// System.out.println(dob);
		String age = request.getParameter("age");
		System.out.println(age);
		String cp = "photo1";
		System.out.println(cp);
		// creates the save directory if it does not exists
		File fileSaveDir = new File(Constants.FILE_UPLOAD_PATH);
		if (!fileSaveDir.exists()) {
			fileSaveDir.mkdir();
		}

		Part part = request.getPart("photo1");
		String fileName = extractFileName(part);

		// refines the fileName in case it is an absolute path
		fileName = new File(fileName).getName();

		System.out.println("fileName: " + Constants.FILE_UPLOAD_PATH + File.separator + c_id + "_" + fileName);

		part.write(Constants.FILE_UPLOAD_PATH + File.separator + c_id + "_" + fileName);
		String pn = request.getParameter("passportNumber");
		System.out.println(pn);
		String pid = request.getParameter("passportIssueDate");
		System.out.println(pid);
		String pos = request.getParameter("passportIssuePlace");
		System.out.println(pos);
		String ped = request.getParameter("passportExpiryDate");
		System.out.println(ped);
		String oa = request.getParameter("officeAddress");
		System.out.println(oa);
		String ot = request.getParameter("officePhoneCCode");
		System.out.println("officePhoneCCode|" + ot + "|");
		String otn = request.getParameter("officePhone");
		System.out.println(otn);
		String ofcc = request.getParameter("officeFaxCCode");
		System.out.println(ofcc);
		String ofac = request.getParameter("officeFaxACode");
		System.out.println(ofac);
		String ofn = request.getParameter("officeFax");
		System.out.println(ofn);
		String oe = request.getParameter("officeEmail");
		System.out.println(oe);
		String ra = request.getParameter("residenceAddress");
		System.out.println(ra);
		String rtcc = request.getParameter("residencePhoneCCode");
		System.out.println("rtcc:" + rtcc);
		String rtn = request.getParameter("residencePhone");
		System.out.println(rtn);
		String mcc = request.getParameter("residenceMobileNumberCCode");
		System.out.println(mcc);
		String mn = request.getParameter("residenceMobileNumber");
		System.out.println(mn);
		String rfcc = request.getParameter("residenceFaxCCode");
		System.out.println(rfcc);
		String rfac = request.getParameter("residenceFaxACode");
		System.out.println(rfac);
		String rfn = request.getParameter("residenceFax");
		System.out.println(rfn);
		String re = request.getParameter("residenceEmail");
		System.out.println(re);
		String sdn = request.getParameter("splDietaryNeed");
		System.out.println(sdn);
		String ocne = request.getParameter("emergencyOfficePersonName");
		System.out.println(ocne);
		String oca = request.getParameter("emergencyPersonOfficialAddress");
		System.out.println(oca);
		String occc = request.getParameter("emergencyPersonOfficialPhoneCCode");
		System.out.println(occc);
		String ocac = request.getParameter("emergencyPersonOfficialPhoneACode");
		System.out.println(ocac);
		String ocnr = request.getParameter("emergencyPersonOfficialPhone");
		System.out.println(ocnr);
		String ocfcc = request.getParameter("emergencyPersonOfficialFaxCCode");
		System.out.println(ocfcc);
		String ocfac = request.getParameter("emergencyPersonOfficialFaxACode");
		System.out.println(ocfac);
		String ocfn = request.getParameter("emergencyPersonOfficialFax");
		System.out.println(ocfn);
		String ocmcc = request.getParameter("emergencyPersonPersonalMobileNumberCCode");
		System.out.println(ocmcc);
		String ocmn = request.getParameter("emergencyPersonPersonalMobileNumber");
		System.out.println(ocmn);
		String oce = request.getParameter("emergencyPersonOfficialEmail");
		System.out.println(oce);
		String pcne = request.getParameter("emergencyPersonName");
		System.out.println(pcne);
		String pca = request.getParameter("emergencyPersonPersonalAddress");
		System.out.println(pca);
		String pccc = request.getParameter("emergencyPersonPersonalPhoneCCode");
		System.out.println(pccc);
		String pcac = request.getParameter("emergencyPersonPersonalPhoneACode");
		System.out.println(pcac);
		String pcnr = request.getParameter("emergencyPersonPersonalPhone");
		System.out.println(pcnr);
		String pcmcc = request.getParameter("emergencyPersonPersonalMobileNumberCCode");
		System.out.println(pcmcc);
		String pcmn = request.getParameter("emergencyPersonPersonalMobileNumber");
		System.out.println(pcmn);
		String pcfcc = request.getParameter("emergencyPersonPersonalFaxCCode");
		System.out.println(pcfcc);
		String pcfac = request.getParameter("emergencyPersonPersonalFaxACode");
		System.out.println(pcfac);
		String pcfn = request.getParameter("emergencyPersonPersonalFax");
		System.out.println(pcfn);
		String pce = request.getParameter("emergencyPersonPersonalEmail");
		System.out.println(pce);
//		String edc = request.getParameter("eduCount");
	//	System.out.println(edc);
		String deg = request.getParameter("degree[0]");
		System.out.println(deg);
		String psy = request.getParameter("passingYear[0]");
		System.out.println(psy);
		String ein = request.getParameter("eduInstituteName[0]");
		System.out.println(ein);
//		String pqc = request.getParameter("profCount");
	//	System.out.println(pqc);
		String pq = request.getParameter("prof_qualification[0]");
		System.out.println(pq);
		String ppy = request.getParameter("prof_passingYear[0]");
		System.out.println(ppy);
		String pin = request.getParameter("prof_instituteName[0]");
		System.out.println(pin);

		SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
		Connection con = null;
		PreparedStatement ps1 = null, ps2 = null, ps3 = null, ps4 = null, ps5 = null, qs = null;

		try {
			Class.forName(Constants.DB_Drivers);
			con = DriverManager.getConnection(Constants.DB_URL, Constants.DB_UserId, Constants.DB_Password);
			con.setAutoCommit(true);
			System.out.println("Got the connection.");
			qs = con.prepareStatement(Constants.DB_SELECT_Query_Address_Details);
			qs.setString(1, re);
			ResultSet rset = qs.executeQuery();
			if (rset.next()) {
				out.print("This email id is already registered.");
				System.out.println(rset.getString(1)); 
				con.close();
				return;
				}
			
			System.out.println("Creating pepaid statement for DB_Insert_Query_Personal_Details");
			ps1 = con.prepareStatement(Constants.DB_Insert_Query_Personal_Details);
			ps1.setLong(1, c_id);
			ps1.setString(2, t);
			ps1.setString(3, cn);
			ps1.setString(4, csn);
			ps1.setString(5, cg);
			ps1.setString(6, ms);
			// java.util.Date dob1 = formatter.parse(dob);
			// ps1.setDate(7, new java.sql.Date(dob1.getTime()));
			ps1.setInt(7, null != ot && ot.trim().length() > 0 && "" != ot ? Integer.parseInt(age) : 0);
			ps1.setString(8, cp);
			ps1.setString(9, pn);
			if (null != pid && pid.length() > 0 && pid.trim().length() > 0) {
				java.util.Date pid1 = formatter.parse(pid);
				ps1.setDate(10, new java.sql.Date(pid1.getTime()));
			} else {
				ps1.setDate(10, null);
			}

			ps1.setString(11, pos);

			if (null != ped && ped.length() > 0 && ped.trim().length() > 0) {
				java.util.Date ped1 = formatter.parse(ped);
				ps1.setDate(12, new java.sql.Date(ped1.getTime()));
			} else {
				ps1.setDate(12, null);
			}

			System.out.println("Creating pepaid statement for DB_Insert_Query_Address_Details");

			ps2 = con.prepareStatement(Constants.DB_Insert_Query_Address_Details);
			ps2.setLong(1, c_id);
			ps2.setString(2, oa);
			ps2.setInt(3, null != ot && ot.trim().length() > 0 && "" != ot ? Integer.parseInt(ot) : 0);
			ps2.setLong(4, null != otn && otn.length() > 0 && "" != otn ? Long.parseLong(otn) : 0);
			ps2.setInt(5, null != ofcc && ofcc.length() > 0 && "" != ofcc ? Integer.parseInt(ofcc) : 0);
			ps2.setInt(6, null != ofac && ofac.length() > 0 && "" != ofac ? Integer.parseInt(ofac) : 0);
			ps2.setLong(7, null != ofn && ofn.length() > 0 && "" != ofn ? Long.parseLong(ofn) : 0);
			ps2.setString(8, oe);
			ps2.setString(9, ra);
			ps2.setInt(10, null != rtcc && rtcc.length() > 0 && "" != rtcc ? Integer.parseInt(rtcc) : 0);
			ps2.setLong(11, null != rtn && rtn.length() > 0 && "" != rtn ? Long.parseLong(rtn) : 0);
			ps2.setInt(12, null != mcc && mcc.length() > 0 && "" != mcc ? Integer.parseInt(mcc) : 0);
			ps2.setLong(13, null != mn && mn.length() > 0 && "" != mn ? Long.parseLong(mn) : 0);
			ps2.setInt(14, null != rfcc && rfcc.length() > 0 && "" != rfcc ? Integer.parseInt(rfcc) : 0);
			ps2.setInt(15, null != rfac && rfac.length() > 0 && "" != rfac ? Integer.parseInt(rfac) : 0);
			ps2.setLong(16, null != rfn && rfn.length() > 0 && "" != rfn ? Long.parseLong(rfn) : 0);
			ps2.setString(17, re);

			ps2.setString(18, sdn);

			System.out.println("Creating pepaid statement for DB_Insert_Query_Emergency_Contats");
			ps3 = con.prepareStatement(Constants.DB_Insert_Query_Emergency_Contats);

			ps3.setLong(1, c_id);
			ps3.setString(2, ocne);
			ps3.setString(3, oca);
			ps3.setInt(4, null != occc && occc.length() > 0 && "" != occc ? Integer.parseInt(occc) : 0);
			ps3.setInt(5, null != ocac && ocac.length() > 0 && "" != ocac ? Integer.parseInt(ocac) : 0);
			ps3.setLong(6, null != ocnr && ocnr.length() > 0 && "" != ocnr ? Long.parseLong(ocnr) : 0);
			ps3.setInt(7, null != ocfcc && ocfcc.length() > 0 && "" != ocfcc ? Integer.parseInt(ocfcc) : 0);
			ps3.setInt(8, null != ocfac && ocfac.length() > 0 && "" != ocfac ? Integer.parseInt(ocfac) : 0);
			ps3.setLong(9, null != ocfn && ocfn.length() > 0 && "" != ocfn ? Long.parseLong(ocfn) : 0);
			ps3.setInt(10, null != ocmcc && ocmcc.length() > 0 && "" != ocmcc ? Integer.parseInt(ocmcc) : 0);
			ps3.setLong(11, null != ocmn && ocmn.length() > 0 && "" != ocmn ? Long.parseLong(ocmn) : 0);
			ps3.setString(12, oce);
			ps3.setString(13, pcne);
			ps3.setString(14, pca);
			ps3.setInt(15, null != pccc && pccc.length() > 0 && "" != pccc ? Integer.parseInt(pccc) : 0);
			ps3.setInt(16, null != pcac && pcac.length() > 0 && "" != pcac ? Integer.parseInt(pcac) : 0);
			ps3.setLong(17, null != pcnr && pcnr.length() > 0 && "" != pcnr ? Long.parseLong(pcnr) : 0);
			ps3.setInt(18, null != pcmcc && pcmcc.length() > 0 && "" != pcmcc ? Integer.parseInt(pcmcc) : 0);
			ps3.setLong(19, null != pcmn && pcmn.length() > 0 && "" != pcmn ? Long.parseLong(pcmn) : 0);
			ps3.setInt(20, null != pcfcc && pcfcc.length() > 0 && "" != pcfcc ? Integer.parseInt(pcfcc) : 0);
			ps3.setInt(21, null != pcfac && pcfac.length() > 0 && "" != pcfac ? Integer.parseInt(pcfac) : 0);
			ps3.setLong(22, null != pcfn && pcfn.length() > 0 && "" != pcfn ? Long.parseLong(pcfn) : 0);
			ps3.setString(23, pce);

			ps4 = con.prepareStatement(Constants.DB_Insert_Query_Educational_Qualifications);
			
			ps4.setLong(1, c_id);
			ps4.setString(2, deg);
			ps4.setInt(3, null != psy && psy.length() > 0 && "" != psy ? Integer.parseInt(psy) : 0);
			ps4.setString(4, ein);
//			ps4.setInt(5, null != edc && edc.length() > 0 && "" != edc ? Integer.parseInt(edc) : 0);
			
			ps5 = con.prepareStatement(Constants.DB_Insert_Query_Professional_Qualifications);
			
			ps5.setLong(1, c_id);
			ps5.setString(2, pq);
			ps5.setInt(3, null != ppy && ppy.length() > 0 && "" != ppy ? Integer.parseInt(ppy) : 0);
			ps5.setString(4, pin);
//			ps5.setInt(5, null != pqc && pqc.length() > 0 && "" != pqc ? Integer.parseInt(pqc) : 0);

			
			System.out.println("About to run DB_Insert_Query_Personal_Details");
			int i = ps1.executeUpdate();
			System.out.println("Got response for DB_Insert_Query_Personal_Details no of rows inserted: " + i);

			System.out.println("About to run DB_Insert_Query_Address_Details");
			int j = ps2.executeUpdate();
			System.out.println("Got response for DB_Insert_Query_Address_Details no of rows inserted: " + j);

			System.out.println("About to run DB_Insert_Query_Emergency_Contats");
			int k = ps3.executeUpdate();
			System.out.println("Got response for DB_Insert_Query_Emergency_Contats no of rows inserted: " + k);

			System.out.println("About to run DB_Insert_Educational_Qualification_Details");
			int l = ps4.executeUpdate();
			System.out.println("Got response for DDB_Insert_Educational_Qualification_Details no of rows inserted: " + l);
			
			System.out.println("About to run DB_Insert_Professional_Qualification_Details");
			int m = ps5.executeUpdate();
			System.out.println("Got response for DDB_Insert_Professional_Qualification_Details no of rows inserted: " + m);

			
			if (i > 0 && j > 0 && k > 0 && l > 0 && m > 0) {

				out.print("You are successfully registered...");
				SendEmail mail = new SendEmail();
				String TokenId = ((System.currentTimeMillis()) + (48 * 60 * 60 * 1000)) + "," + c_id + "," + re;
				final byte[] authBytes = TokenId.getBytes(StandardCharsets.UTF_8);
				final String EncodedId = Base64.getEncoder().encodeToString(authBytes);
				String url = MiscUtils.getContextURL(request) + "/RegistrationConfirmation?jsession=" + EncodedId;
				System.out.println("URL: " + url);
				String mailBody = "Dear " + t + " " + cn + " " + csn + "," + "\n" + "\n"
						+ "Thanks for your interest and registation for the courses with us. "
						+ "Please use the url provided below to complete your registration with in 48 hour of receving this email." + "\n"
						+ "Post registration confirmation, you would be able to access the cources." + "\nRegistration Confirmation: " + url
						+ "\n\nThanks & Regards," + "\n CDAC Noida, India";

				System.out.println("mail body:" + mailBody);
				mail.sendEmail(re, Constants.EMAIL_REGISTRATION_SUBJECT, mailBody);
			}
		} catch (Exception e2) {
			System.out.println("Error while executiing the query :" + e2.getMessage());
			e2.printStackTrace();
		} finally {
			try {
				if (null != ps1) {
					ps1.close();
				}
				if (null != ps2) {
					ps2.close();
				}
				if (null != ps3) {
					ps3.close();
				}
				if (null != ps2) {
					ps4.close();
				}
				if (null != ps3) {
					ps5.close();
				}
				if (null != con) {
					con.close();
				}
			} catch (SQLException e) {
				System.out.println("Error while closing the connection:" + e.getMessage());
				e.printStackTrace();
			}

		}
		out.close();
	}

	private String extractFileName(Part part) {
		String contentDisp = part.getHeader("content-disposition");
		String[] items = contentDisp.split(";");
		for (String s : items) {
			if (s.trim().startsWith("filename")) {
				return s.substring(s.indexOf("=") + 2, s.length() - 1);
			}
		}
		return "";
	}
}
