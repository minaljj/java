package com.example.demo.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.demo.entity.Order1;
import com.example.demo.entity.OrderLine;
import com.example.demo.repository.Order1Repository;

@ExtendWith(MockitoExtension.class)
class NoteServiceTest {

    @InjectMocks
    private NoteService noteService;

    @Mock
    private Order1Repository order1Repository;

    @Mock
    private PaymentService paymentService;

    @Mock
    private EmailService emailService;

   
    

   
    // ==============================
    @Test
    void testAddOrder_MissingItemName() {

        Order1 order = new Order1();
        

        OrderLine line = new OrderLine();//create order line
        line.setItem(""); 
        line.setPrice(100);
        line.setQuantity(2);

        order.setOrderLines(List.of(line));

        assertThrows(IllegalArgumentException.class, () -> {
            noteService.addOrder(order);
        });
    }

    // ==============================
    
    @Test
    void testAddOrder_InvalidPrice() {

        Order1 order = new Order1();
        OrderLine line = new OrderLine();
        line.setItem("Pen");
        line.setPrice(-10);
        line.setQuantity(2);

        order.setOrderLines(List.of(line));

        assertThrows(IllegalArgumentException.class, () -> {
            noteService.addOrder(order);
        });
    }

    // ==============================
    @Test
    void testAddOrder_InvalidQuantity() {

        Order1 order = new Order1();

        OrderLine line = new OrderLine();
        line.setItem("Pen");
        line.setPrice(10);
        line.setQuantity(0); // invalid

        order.setOrderLines(List.of(line));
        assertThrows(IllegalArgumentException.class, () -> {
            noteService.addOrder(order);
        });
    }
//=======================================
 
    @Test
    void testAddOrder_EmptyOrderLines() {

        Order1 order = new Order1();
        order.setOrderLines(List.of());
        assertThrows(IllegalArgumentException.class, () -> {
            noteService.addOrder(order);
        });
    }
   
    
    // ==============================
    @Test
    void testGetOrderById_NotExists() {

        when(order1Repository.findById(1)).thenReturn(Optional.empty());
        Optional<Order1> result = noteService.getOrderById(1);
        assertFalse(result.isPresent());
    }

    // ==============================
    @Test
    void testGetAllOrders() {

        Order1 order = new Order1();
        order.setId(1);
        when(order1Repository.findAll()).thenReturn(List.of(order));
        Iterable<Order1> result = noteService.getOrder();
        assertNotNull(result);
        assertTrue(result.iterator().hasNext());
    }
    
    //===========================
    @Test
    void testAddOrder_ValidOrder() {

        Order1 order = new Order1();
        OrderLine line = new OrderLine();
        line.setItem("Book");
        line.setPrice(100);
        line.setQuantity(2);

        order.setOrderLines(List.of(line));
        order.setId(1);
        when(order1Repository.save(any(Order1.class))).thenReturn(order);
        Integer result = noteService.addOrder(order);
        assertNotNull(result);
        assertEquals(1, result);
    }
    @Test 
    void testGetOrderById_Exists() {

        Order1 order = new Order1();
        order.setId(1);
        when(order1Repository.findById(1)).thenReturn(Optional.of(order));
        Optional<Order1> result = noteService.getOrderById(1);
        assertTrue(result.isPresent());
        assertEquals(1, result.get().getId());
    }
    
    @Test
    void testDeleteOrderById() {

        Integer id = 1;
        noteService.deleteOrderById(id);
        verify(order1Repository, times(1)).deleteById(id);
    }
    
    @Test
    void testAddOrder_NullOrderLines() {

        Order1 order = new Order1();
        order.setOrderLines(null);
        assertThrows(IllegalArgumentException.class, () -> {
            noteService.addOrder(order);
        });
    }
    
    @Test
    void testAddOrder_VerifySaveCalled() {

        Order1 order = new Order1();

        OrderLine line = new OrderLine();
        line.setItem("Pen");
        line.setPrice(50);
        line.setQuantity(2);

        order.setOrderLines(List.of(line));

        when(order1Repository.save(any(Order1.class)))
                .thenReturn(order);
        noteService.addOrder(order);
        verify(order1Repository, times(1)).save(any(Order1.class));
    }
}