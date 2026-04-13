package com.example.demo.entity;

import jakarta.validation.constraints.NotBlank;

public class Note {
	
	private long id;
	@NotBlank
	private String content;
	@NotBlank
	private String title;
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
//	public String toString() {
//		return '''ID: %s
//				Title:%s
//				
//	}
}

enum STATUS{
	CLOSED,CREATED;
}
