package com.example.demo.controller;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.mockito.ArgumentMatchers.any;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.example.demo.entity.Order1;
import com.example.demo.service.NoteService;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebMvcTest(NoteController.class)
class NoteControllerTest {

	
	  @Autowired
	    private MockMvc mockMvc;
	  
	  @MockBean
	  private NoteService noteService;
	  
	  @Autowired
	  private ObjectMapper objectMapper;
	  
	  @Test
	  void testGetAllOrders() throws Exception{
		  Order1 order=new Order1();
		  order.setId(1);
		  when(noteService.getOrder()).thenReturn(List.of(order));
		  mockMvc.perform(get("/order")).andExpect(status().isOk()).
		  						andExpect(jsonPath("$[0].id").value(1));
	  }
	  
	  @Test
	  void testGetOrderById_Exists() throws Exception{
		  Order1 order = new Order1();
		  order.setId(1);
		  when(noteService.getOrderById(1)).thenReturn(Optional.of(order));
		  mockMvc.perform(get("/order/1")).andExpect(status().isOk())
		  				.andExpect(jsonPath("$.id").value(1));
	  }
	  
	  @Test
	  void testGetOrderNotFound()throws Exception{
		  when(noteService.getOrderById(1)).thenReturn(Optional.empty());
		  mockMvc.perform(get("/orde/1")).andExpect(status().isNotFound());
	  }
	  
	  @Test
	  void testCreateOrder() throws Exception {

	        Order1 order = new Order1();
	        order.setId(1);
	        when(noteService.addOrder(any(Order1.class))).thenReturn(1);
	        mockMvc.perform(post("/order")
	                .contentType(MediaType.APPLICATION_JSON)
	                .content(objectMapper.writeValueAsString(order)))
	                .andExpect(status().isCreated())
	                .andExpect(content().string("1"));
	    }
	  @Test
	  void testDeleteOrder()throws Exception{
		  mockMvc.perform(delete("/order/1"))
		  	.andExpect(status().isNoContent());
		  verify(noteService,times(1)).deleteOrderById(1);
	  }
	 @Test
	 void testDeleteOrderVerifyCall()throws Exception{
		 mockMvc.perform(delete("/order/1")).
		 	andExpect(status().isNoContent());
		 verify(noteService,times(1)).deleteOrderById(1);
	 }
	 
	
	  
}