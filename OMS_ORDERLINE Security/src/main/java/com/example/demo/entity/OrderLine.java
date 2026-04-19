package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

@Entity
public class OrderLine {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NotBlank(message = "Item name is required")
	private String item;

	@Min(value = 0, message = "Price must be >= 0")
	private float price;

	@Min(value = 1, message = "Quantity must be >= 1")
	private int quantity;
	
	@ManyToOne
	@JsonBackReference
	@JoinColumn(name = "order_fk")
	private Order1 order1;

	public Integer getId() {
		return Id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getItem() {
		return item;
	}

	public void setItem(String item) {
		this.item = item;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Order1 getOrder1() {
		return order1;
	}

	public void setOrder1(Order1 order1) {
		this.order1 = order1;
	}
}