package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entity.Order1;
import com.example.demo.entity.OrderLine;
import com.example.demo.repository.Order1Repository;

//@Component
@Service
public class NoteService {

	@Autowired
	Order1Repository order1Repository;

	@Autowired
	PaymentService paymentService;

	@Autowired
	EmailService emailService;

	public Iterable<Order1> getOrder() {
		try {
			Thread.sleep(1040);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return order1Repository.findAll();
	}

	// public Integer addOrder(Order1 order1) {
	// @Transactional(rollbackFor=Exception.class,noRollbackFor=
	// {IOException.class}//->for rollback to happen

//	@Transactional(rollbackFor = Exception.class, noRollbackFor = {}) // for no rollback to happen
//	public Integer addOrder(Order1 order1) {
//		Order1 saved = order1Repository.save(order1);
//		return saved.getId();
//	}
	
	@Transactional(rollbackFor = Exception.class)
//	public Integer addOrder(Order1 order1) {
//	    order1.getOrderLines().forEach(orderLine -> {
//	        orderLine.setOrder1(order1);
//	    });
//
//	    Order1 saved = order1Repository.save(order1);
//	    return saved.getId();
//	}
	public Integer addOrder(Order1 order1) {

	    if (order1.getOrderLines() == null || order1.getOrderLines().isEmpty()) {
	        throw new IllegalArgumentException("Order lines cannot be empty");
	    }

	    for (OrderLine line : order1.getOrderLines()) {

	        if (line.getItem() == null || line.getItem().isBlank()) {
	            throw new IllegalArgumentException("Item name is required");
	        }

	        if (line.getPrice() < 0) {
	            throw new IllegalArgumentException("Price must be >= 0");
	        }

	        if (line.getQuantity() < 1) {
	            throw new IllegalArgumentException("Quantity must be >= 1");
	        }

	        line.setOrder1(order1);
	    }

	    Order1 saved = order1Repository.save(order1);
	    return saved.getId();
	}

	public Optional<Order1> getOrderById(Integer id) {
		return order1Repository.findById(id);
	}

	public void deleteOrderById(Integer id) {
		order1Repository.deleteById(id);
	}
}