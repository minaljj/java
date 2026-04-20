package com.example.demo.service;

import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entity.Order1;
import com.example.demo.repository.Order1Repository;

@Service
public class NoteService {
	@Autowired
	Order1Repository order1Repository;
	@Autowired
	PaymentService paymentService;
	@Autowired
	EmailService emailService;

	public Iterable<Order1> getorder() {
		try {
			Thread.sleep(2345);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return order1Repository.findAll();

	}
	@Transactional(rollbackFor = Exception.class, noRollbackFor = { IOException.class })

	public Integer addOrder(Order1 order1) throws IOException {
//		paymentService.processPayment();
//		order1Repository.save(order1);
//		emailService.send(order1.getId());
		Order1 saved = order1Repository.save(order1);
		return order1.getId();
	}

	public Optional<Order1> getOrderById(Integer id) {
		return order1Repository.findById(id);
	}

	public void deleteOrderById(Integer id) {
		order1Repository.deleteById(id);
	}

}