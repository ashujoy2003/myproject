package in.itecgoi.utils;

import javax.servlet.http.HttpServletRequest;

public class MiscUtils {

	public static String getContextURL(HttpServletRequest request){
		return request.getScheme() + "://" + request.getServerName() + 
             	( ("http".equals(request.getScheme()) && request.getServerPort() == 80) || 
            		 	("https".equals(request.getScheme()) && request.getServerPort() == 443 ) ? "" : ":" + request.getServerPort() ) 
             + request.getContextPath();
	}
}
