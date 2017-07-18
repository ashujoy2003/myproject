package in.itecgoi.utils;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import in.itecgoi.common.Constants;
import in.itecgoi.registration.personal.PersonalDetails;

public class SendEmail extends PersonalDetails{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private static final String EMAIL_SERVER = Constants.EMAIL_SERVER;
	private static final String EMAIL_SERVER_USER_ID = Constants.EMAIL_SERVER_USER_ID;
	private static final String EMAIL_SERVER_PASSWORD = Constants.EMAIL_SERVER_PASSWORD;
	private static final String EMAIL_REGISTRATION_FROM = Constants.EMAIL_REGISTRATION_FROM;
	
	public boolean sendEmail(String to, String subject,String mailBody) {
		Session session = null;
		boolean status = false;
		try {
			Properties props = new Properties();
			props.put("mail.smtp.host", EMAIL_SERVER);
			props.put("mail.smtp.auth", "true");

			session = Session.getDefaultInstance(props, new javax.mail.Authenticator() {
				protected PasswordAuthentication getPasswordAuthentication() {
					return new PasswordAuthentication(EMAIL_SERVER_USER_ID, EMAIL_SERVER_PASSWORD);
				}
			});

		} catch (Exception e) {
			System.out.println("Error while getting session from mail server and below is error.");
			System.out.println("Error Message:" + e.getMessage());
			e.printStackTrace();
			return false;
		}
		System.out.println("Got the mail session successfually. Now will try to send the email.");
		try {
			MimeMessage message = new MimeMessage(session);
			message.setFrom(new InternetAddress(EMAIL_REGISTRATION_FROM));
			message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
			message.setSubject(subject);
			message.setText(mailBody);

			// send the message
			Transport.send(message);
			
			System.out.println("Sent message successfully....");
		} catch (MessagingException mex) {
			System.out.println("Error while sending mail and below is error.");
			System.out.println("Error Message:" + mex.getMessage());
			mex.printStackTrace();
		}

		return status;
	}

	public static void main(String[] args) {
		//SendEmail mail = new SendEmail();
		//PersonalDetails pd = new PersonalDetails();
		//mail.sendEmail(pd.getRe(), "THis is the sample subject", "Hi, You are successfully on itec.goi.in, You registration number is:");

	}
}