package com.tek.log.analizer;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.*;

import java.nio.file.*;
import java.util.*;

public class LogAnalyzerTest {

    @Test
    void testEmptyFile() throws Exception {

        Files.write(Paths.get("System.log"), new ArrayList<>());

        LogAnalyzer analyzer = new LogAnalyzer("System.log");
        Map<String, Integer> result = analyzer.analyze();

        assertEquals(0, result.get("INFO"));
        assertEquals(0, result.get("WARNING"));
        assertEquals(0, result.get("ERROR"));
    }

    @Test
    void testCountLogs() throws Exception {

        Files.write(Paths.get("System.log"), Arrays.asList(
                "INFO: Start",
                "WARNING: Memory low",
                "ERROR: Crash",
                "error: fail",
                "info: done"
        ));

        LogAnalyzer analyzer = new LogAnalyzer("System.log");
        Map<String, Integer> result = analyzer.analyze();

        assertEquals(2, result.get("INFO"));     
        assertEquals(1, result.get("WARNING"));
        assertEquals(2, result.get("ERROR"));     
    }

    @Test
    void testUnknownLinesIgnored() throws Exception {

        Files.write(Paths.get("System.log"), Arrays.asList(
                "HELLO WORLD",
                "DEBUG: something",
                "INFO: ok",
                "random text",
                "WARNING: check"
        ));

        LogAnalyzer analyzer = new LogAnalyzer("System.log");
        Map<String, Integer> result = analyzer.analyze();
       
        assertEquals(1, result.get("INFO"));
        assertEquals(1, result.get("WARNING"));
        assertEquals(0, result.get("ERROR"));
    }

    @Test
    void testMissingFileThrowsException() {
        LogAnalyzer analyzer = new LogAnalyzer("missingFile.log");
        assertThrows(RuntimeException.class, () -> analyzer.analyze());
    }
}