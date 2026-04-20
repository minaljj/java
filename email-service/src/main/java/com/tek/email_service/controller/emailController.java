package com.tek.email_service.controller;

import com.tek.email_service.request.Email;

public class emailController {
	boolean sendEmail(Email email) {
		String subject=email.getSubject();
		String[] recipients=email.getRecipients();
		String body=email.getBody();
		return true;
		
	}
}
