package in.itecgoi.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import in.itecgoi.common.Constants;

public class RegistrationNumber {

	private static boolean isResetSequenceDone = false;
	
	private Connection con;
	
	public long getRegistrationNumber() throws Exception{
		
		
		initConnection(); 
		long registrationNo = 0;
		
		if(DateUtils.isFirstDayOfTheMonth() && !(isResetSequenceDone)){
			if(! resetDBSequence()){
				throw new Exception("Error in sequence reset.");
			}
		}else{
			isResetSequenceDone = false;
		}
		
		registrationNo= DateUtils.getCurrentMonthAndYearumber()+getDBSequence();
		System.out.println("This is the registration:"+registrationNo);
		closeConnection();
		
		return  registrationNo;
	}

	private synchronized boolean resetDBSequence(){
		boolean result = true;
		if (! isResetSequenceDone) {
			try {
				Statement stmt = con.createStatement();
				System.out.println("About to reset the sequence.");
				stmt.execute(Constants.DB_Sequence_Reset_Query);
				System.out.println("sequence reset result:"+result);
				
				isResetSequenceDone = true;
			} catch (Exception e) {
				result = false;
				System.out.println("Error during reset the sequence.");
				System.out.println("Error Message:"+e.getMessage());
				e.printStackTrace();
			}	
		}
		
		return result;
	}

	
	private int getDBSequence(){
		int dbSequence = 0;
		try {
			Statement stmt = con.createStatement();
			System.out.println("Gettng sequence");
			ResultSet rs = stmt.executeQuery(Constants.DB_Sequece_Query);

			while (rs.next()) {
				System.out.println("Inside RS for sequcne..");
				dbSequence = rs.getInt(1);
				System.out.println("Sequence no is: " + dbSequence);
			}

			System.out.println("Creating prepared statement for DB_Insert_Query_Personal_Details");
		} catch (Exception e) {
			System.out.println("Error during the closing of connnection.");
			System.out.println("Error Message:"+e.getMessage());
			e.printStackTrace();
		}
		return dbSequence;
	}
	
	private void initConnection(){
		try {
			Class.forName(Constants.DB_Drivers);
			con = DriverManager.getConnection(Constants.DB_URL, Constants.DB_UserId, Constants.DB_Password);
			con.setAutoCommit(true);
		} catch (Exception e) {
			System.out.println("Error during the initiliation of connnection.");
			System.out.println("Error Message:"+e.getMessage());
			e.printStackTrace();
		}
	} 
	
	private void closeConnection(){
		try {
			if (null != con) {
				con.close();
			}
		} catch (Exception e) {
			System.out.println("Error during the closing of connnection.");
			System.out.println("Error Message:"+e.getMessage());
			e.printStackTrace();
		}
	}
}
