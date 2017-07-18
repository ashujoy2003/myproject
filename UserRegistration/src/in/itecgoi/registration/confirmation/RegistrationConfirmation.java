package in.itecgoi.registration.confirmation;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Base64;

import javax.servlet.Servlet;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import in.itecgoi.common.Constants;
import in.itecgoi.utils.MiscUtils;
import in.itecgoi.utils.SendEmail;

/**
 * Servlet implementation class RegistrationConfirmation
 */
@WebServlet("/RegistrationConfirmation")
public class RegistrationConfirmation extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private Connection con;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public RegistrationConfirmation() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see Servlet#init(ServletConfig)
	 */
	public void init(ServletConfig config) throws ServletException {

		try {
			Class.forName(Constants.DB_Drivers);
			con = DriverManager.getConnection(Constants.DB_URL, Constants.DB_UserId, Constants.DB_Password);
			con.setAutoCommit(true);
			System.out.println("Got the connection.");
		} catch (Exception e) {
			e.printStackTrace();
			throw new ServletException("Error getting connection in init.");
		}
		
	}

	/**
	 * @see Servlet#destroy()
	 */
	public void destroy() {
		try {
			if (null != con) {
				con.close();
			}
		} catch (SQLException e) {
			System.out.println("Error while closing the connection:" + e.getMessage());
			e.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		byte[] base64decodedBytes;
		String DecodedTid = "";
		try{
			base64decodedBytes = Base64.getDecoder().decode(request.getParameter("jsession"));
			DecodedTid = new String(base64decodedBytes, StandardCharsets.UTF_8);
		}catch (Exception e) {
			System.out.println("Base 64 decode error."+e.getMessage());
			e.printStackTrace(); 
			response.getWriter().append("Invalid session, please try again.");
		}
		
		java.util.StringTokenizer st = new java.util.StringTokenizer(DecodedTid,",");
		long time = java.lang.Long.parseLong(st.nextToken());
		long c_id = java.lang.Long.parseLong(st.nextToken());
		String emailid  = st.nextToken();
		System.out.println("Decoded values time:"+time+", c_id:"+c_id+", emailid:"+emailid);

		if(System.currentTimeMillis() > time){
			System.out.println("You session has expired");
			try {
				PreparedStatement pStmt = con.prepareStatement(Constants.RegConfirmationSelectQuery);
				pStmt.setString(1, emailid);
				pStmt.setLong(2, c_id);
				
				ResultSet  rs = pStmt.executeQuery();
				String title = "", c_namevar = "", c_surname = "";
				while (rs.next()) {
					title = (String) rs.getString("title"); 
					c_namevar = (String) rs.getString("c_namevar");
					c_surname = (String) rs.getString("c_surname");
				}
				if (!("".equals(title)) && !("".equals(c_namevar)) && !("".equals(c_surname))) {
					SendEmail mail = new SendEmail();
					String TokenId = ((System.currentTimeMillis())+(48*60*60*1000))+","+c_id+","+emailid;
					
					final byte[] authBytes = TokenId.getBytes(StandardCharsets.UTF_8);
					final String EncodedId = Base64.getEncoder().encodeToString(authBytes);
					String url = MiscUtils.getContextURL(request)+"/RegistrationConfirmation?jsession="+EncodedId;
					System.out.println("URL: "+url);
					String mailBody = "Dear "+title+" "+c_namevar+" "+c_surname+","
							+ "\n"
							+ "\n"
							+ "Thanks for your interest and registation for the ITEC Programmme with us. "
							+ "Please use the url provided below to complete your registration within 48 hour of receving this email."
							+ "\n"
							+ "Post registration confirmation, you would be able to access the courses."
							+ "\nPlease open this URL: "+url
							+ "\n\nThanks & Regards,"
							+ "\n CDAC Noida, India";
			
					System.out.println("mail body:"+mailBody);
					mail.sendEmail(emailid,Constants.EMAIL_REGISTRATION_SUBJECT, mailBody);
					
					response.getWriter().append("Dear "+title+" "+c_namevar+" "+c_surname+","+Constants.RegConfirmationAppologyLinkExpired);
				}else{
					response.getWriter().append(Constants.RegConfirmationAppologyMsgForNoDetails);
				}
			} catch (SQLException e) {
				String errorMsg = e.getLocalizedMessage();
				if (errorMsg.contains("unique constraint")){
					response.getWriter().append("Dear USer, Your registration has already been confirmed");
				}else{
					response.getWriter().append("An unknown Error has occured. Error Message is:"+e.getLocalizedMessage());
					System.out.println("Some errror has occured during the confirmation."+e.getMessage());
					e.printStackTrace();
				}
			}
		}else{
			System.out.println("User Sesssion NOT Expired case");
			try{
				PreparedStatement pStmt = con.prepareStatement(Constants.RegConfirmationSelectQuery);
				pStmt.setString(1, emailid);
				pStmt.setLong(2, c_id);
				
				ResultSet  rs = pStmt.executeQuery();
				String title = "", c_namevar = "", c_surname = "";
				while (rs.next()) {
					title = (String) rs.getString("title"); 
					c_namevar = (String) rs.getString("c_namevar");
					c_surname = (String) rs.getString("c_surname");
				}
				if (!("".equals(title)) && !("".equals(c_namevar)) && !("".equals(c_surname))) {
					PreparedStatement pStmt1 = con.prepareStatement(Constants.RegConfirmationUpdateQuery);
					pStmt1.setLong(1, c_id);
					pStmt1.setBoolean(2, true);
					pStmt1.setDate(3, new Date(System.currentTimeMillis())); 
					
					int i = pStmt1.executeUpdate();
					
					if (i > 0) {
						response.getWriter().append("Dear User,\n\nYour registration is confirmed successfully.");
					}				
				}else{
					response.getWriter().append(Constants.RegConfirmationAppologyMsgForNoDetails);
				}
			}catch(Exception e){
				String errorMsg = e.getLocalizedMessage();
				if (errorMsg.contains("unique constraint")){
					response.getWriter().append("Dear User, Your reqgistration has already been confirmed");
				}else{
					response.getWriter().append("An unknown Error has occured. Error Message is:"+e.getLocalizedMessage());	
					System.out.println("Some errror has occured during confirmation."+e.getMessage());
					e.printStackTrace();
				}
				
			}
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
