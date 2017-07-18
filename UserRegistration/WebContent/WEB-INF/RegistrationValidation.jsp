<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<%@ page import="java.util.Date" %>
<%@ page import="in.itecgoi.registration.personal.PersonalDetails" %>
<%@ page import="in.itecgoi.common.Constants" %>

String CurrentServerTime = new java.time.LocalDateTime();

PersonalDetails pd = new PersonalDetails();
RegistrationNumber rno = new RegistrationNumber();
String TokenId="";
TokenId=java.time.LocalDateTime.now()+rno.getRegistrationNumber+pd.getRe();
final byte[] authBytes = TokenId.getBytes(StandardCharsets.UTF_8);
final String EncodedTid = Base64.getEncoder().encodeToString(authBytes);
%>

</body>
</html>