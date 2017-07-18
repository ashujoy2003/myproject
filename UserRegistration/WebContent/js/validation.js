function validateData(e,index)
{
	var key,keychar,str;

	if (window.event)
		{
		key = window.event.keyCode;

		}
	else
	{
		if (e)
			{
			key = e.which;
	
			}
		else
		   return true;
	}
		
	keychar = String.fromCharCode(key);


	// control keys
	// 0 = null, 8 = backspace,  9 = tab, 13 = carriage return, 27 = escape
	if ((key==null) || (key==0) || (key==8) || (key==9) || (key==13) || (key==27) )
		{
		
		return true;
		}
	
	else 
	{
	
		str = getValidateStr(index);
		if (((str).indexOf(keychar) > -1))
		   return true;
		else
		   return false;
	}

}//end of validateStr function


function validate(e,index)
{

	if (e)
	{
key = e.which;

	}
else
   return true;
	
	keychar = String.fromCharCode(key);


		// control keys
		// 0 = null, 8 = backspace,  9 = tab, 13 = carriage return, 27 = escape
		if ((key==null) || (key==0) || (key==8) || (key==9) || (key==13) || (key==27) )
			{
		
			return true;
			}
		
		else 
		{
			alert(index);
			str = getValidateStr(index);
			if (((str).indexOf(keychar) > -1))
			   return true;
			else
			   return false;
		}
}

 
function getValidateStr(index)
{
	var str = "";
	
	switch(index)
	{
		case 1:		//for validating country name, Passport Issue Place, institution name and station name
			str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ. &-()/'";
			break;
		case 2:		//for validating username
			str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ._1234567890";
			break;
		case 3:		//for validating telephone no, fax no and no of slots
			str = "1234567890";
			break;
			
		case 4:		//for validating ambassador name
			str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.' ";
			break;
			
		case 5:		//for validating address, description
			str = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-/,.#$()';\: &";
			break;
			
		case 6:		//for validating country short name, Name
			str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
			break;
			
		case 7:		//for validating country short name, Name
			str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ,";
			break;
			
		case 8:		//for validating stream name
			str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ,/&";
			break;
			
		case 9:		//for validating passport number
			str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
			break;
			
		case 10:		//for validating blood group
			str = "ABO+-abo";
			break;
		case 11:		//for validating blood pressure
			str = "1234567890/";
			break;
		case 12:		//for validating website address
			str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.@1234567890_";
			break;
		case 13:		//for validating amount
			str = "1234567890.";
			break;
		case 14:		//for validating telephone no and fax on update institute profile page
			str = "1234567890-";
			break;
		case 15:		//for validating arrival and departure time
			str = "1234567890:";
			break;
		case 16:		//for validating flight  number
			str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-";
			break;
		case 17:		//for validating search value on mission home page
			str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.@ ";
			break;
		case 18:		//for validating Bill Nos on final bill reports
			str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.,/- ; ";
			break;
		case 19:		//for validating Bill Nos on final bill reports
			str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890._1234567890-@";
			break;
		case 20:		//for validating Bill Nos on final bill reports
			str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890._1234567890-@ /,'&";
			break;
	}	//end of Switch statement
	return str;
}