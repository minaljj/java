	package com.example.demo.entity;
	
	import java.util.ArrayList;
	import java.util.List;
	
	import com.fasterxml.jackson.annotation.JsonManagedReference;
	
	import jakarta.persistence.CascadeType;
	import jakarta.persistence.Entity;
	import jakarta.persistence.GeneratedValue;
	import jakarta.persistence.GenerationType;
	import jakarta.persistence.Id;
	import jakarta.persistence.OneToMany;
	import jakarta.validation.Valid;
	
	@Entity
	public class Order1 {
	
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Integer id;
	
		@Valid
		@OneToMany(mappedBy = "order1", cascade = CascadeType.ALL, orphanRemoval = true)
		@JsonManagedReference
		private List<OrderLine> orderLines = new ArrayList<>();
	
		public Integer getId() {
			return id;
		}
	
		public void setId(Integer id) {
			this.id = id;
		}
	
		public List<OrderLine> getOrderLines() {
			return orderLines;
		}
	
		public void setOrderLines(List<OrderLine> orderLines) {
			this.orderLines = orderLines;
		}
	}