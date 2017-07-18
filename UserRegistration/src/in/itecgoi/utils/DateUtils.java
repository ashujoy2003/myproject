package in.itecgoi.utils;

import java.util.Calendar;
import java.util.GregorianCalendar;

public class DateUtils {

	public static boolean isFirstDayOfTheMonth(){
	    Calendar c = new GregorianCalendar();
	    c.setTimeInMillis(System.currentTimeMillis());

	    if (c.get(Calendar.DAY_OF_MONTH) == 1) {
	      return true;
	    }
	    return false;
	}
	
	public static long getCurrentMonthAndYearumber(){
		Calendar c = new GregorianCalendar();
	    c.setTimeInMillis(System.currentTimeMillis());

	    String number = ""+c.get(Calendar.YEAR)+ (c.get(Calendar.MONTH) > 9 ? c.get(Calendar.MONTH):"0"+c.get(Calendar.MONTH)) +"0000";
	    return Long.parseLong(number);
	}
	
	public static void main(String[] args) {
		System.out.println(DateUtils.isFirstDayOfTheMonth());
	}
}
