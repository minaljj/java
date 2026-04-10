package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SpringBasicsApplication {
//	private final NoteController notecontroller;
//	
//	public SpringBasicsApplication(NoteController notecontroller) {
//		super();
//		this.notecontroller = notecontroller;
//	}

	
	public static void main(String[] args) {
		ConfigurableApplicationContext context=SpringApplication.run(SpringBasicsApplication.class, args);
		//ConfigurableApplicationContext context1=SpringApplication.run(SpringBasicsApplication.class, args);
		
		NoteController notecontroller=context.getBean( NoteController.class);
		// NoteController notecontroller1=context1.getBean( NoteController.class);
		 System.out.println(notecontroller);
		// System.out.println(notecontroller1);
		 
		 NoteService noteService=context.getBean( NoteService.class);
		 System.out.println(noteService);

	}
	
	@Bean
	NoteController notecontroller() {
		return new NoteController();
	}
	

	
}
