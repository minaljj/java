package com.tek.log.analizer;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

public class LogAnalyzer {

    private static final Logger logger = Logger.getLogger(LogAnalyzer.class.getName());
    
   
    private File logFile;

    
    public LogAnalyzer(String filePath) {
        this.logFile = new File(filePath);
    }

  
    public Map<String, Integer> analyze() {

        Map<String, Integer> result = new HashMap<>();
        result.put("INFO", 0);
        result.put("WARNING", 0);
        result.put("ERROR", 0);

        if (!logFile.exists()) {
            logger.severe("Log file does not exist: " + logFile.getAbsolutePath());
            throw new RuntimeException("FILE_NOT_FOUND");
        }

       
        try (BufferedReader br = new BufferedReader(new FileReader(logFile))) {

            String line;
            while ((line = br.readLine()) != null) {

                String upper = line.trim().toUpperCase();

                if (upper.startsWith("INFO")) {
                    result.put("INFO", result.get("INFO") + 1);
                } else if (upper.startsWith("WARNING")) {
                    result.put("WARNING", result.get("WARNING") + 1);
                } else if (upper.startsWith("ERROR")) {
                    result.put("ERROR", result.get("ERROR") + 1);
                } else {
                    logger.info("Unknown log type ignored: " + line);
                }
            }

        } catch (IOException e) {
            logger.log(Level.SEVERE, "Error reading log file", e);
            throw new RuntimeException("FILE_READ_ERROR");
        }

        return result;
    }
}