package com.tek.loggings;

import java.util.logging.Logger;

public class LoggingExample {

    private static final Logger logger = Logger.getLogger(LoggingExample.class.getName());

    public static void main(String[] args) {

        logger.info("Application started");
        logger.warning("Low memory");
        logger.severe("System Fails");

    }
}