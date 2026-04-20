package com.tek.email_service.request;

public class Email {

    private String subject;
    private String[] recipients;
    private String body;

    public Email() {
    }

    public Email(String subject, String[] recipients, String body) {
        this.subject = subject;
        this.recipients = recipients;
        this.body = body;
        this.body = body;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String[] getRecipients() {
        return recipients;
    }

    public void setRecipients(String[] recipients) {
        this.recipients = recipients;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }
}