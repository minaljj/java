package com.tek.main;

import java.util.Map;

import com.tek.log.analizer.LogAnalyzer;

public class Main {

	 public static void main(String[] args) {

	        LogAnalyzer analyzer = new LogAnalyzer("system.log");
	        Map<String, Integer> result = analyzer.analyze();

	        System.out.println("INFO: " + result.get("INFO"));
	        System.out.println("WARNING: " + result.get("WARNING"));
	        System.out.println("ERROR: " + result.get("ERROR"));
	    }

}
