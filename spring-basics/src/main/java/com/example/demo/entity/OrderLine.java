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

	private Integer id;

	@NotBlank

	private String item;

	@Min(1)

	private float price;

	@ManyToOne

	@JoinColumn(name = "order_fk")

	@JsonBackReference

	private Order1 order1;

	public Integer getId() {

		return id;

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

	public Order1 getOrder1() {

		return order1;

	}

	public void setOrder1(Order1 order1) {

		this.order1 = order1;

	}

}
