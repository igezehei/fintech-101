package com.example.demo.service;

import com.example.demo.model.Chapter;
import com.example.demo.model.ChapterSummary;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class ChapterService {

    private static final List<ChapterSummary> SUMMARIES = List.of(
        new ChapterSummary(1, "Chapter 1: Introduction to Financial Markets",
            "The financial system, key players, instruments, global market size, and how trading works."),
        new ChapterSummary(2, "Chapter 2: Fundamental Analysis",
            "Financial statements, valuation metrics, macroeconomics, stock selection, and compounding."),
        new ChapterSummary(3, "Chapter 3: Charts, Patterns & Technical Indicators",
            "Candlesticks, trendlines, chart patterns, Fibonacci, EMA, RSI, MACD, and Bollinger Bands."),
        new ChapterSummary(4, "Chapter 4: Trading Identity",
            "Trading styles, timeframe selection, capital expectations, and building your edge."),
        new ChapterSummary(5, "Chapter 5: Managing Risk & Diversification",
            "Risk management, diversification, sector rotation, and volatility strategies."),
        new ChapterSummary(6, "Chapter 6: AI in Financial Markets",
            "Algorithmic trading, predictive analytics, robo-advisors, and NLP in finance."),
        new ChapterSummary(7, "Chapter 7: The Future of Investing",
            "Blockchain, DeFi, ESG investing, fractional shares, and nearshoring trends.")
    );

    private final Map<Integer, String> htmlCache = new ConcurrentHashMap<>();

    public List<ChapterSummary> listChapters() {
        return SUMMARIES;
    }

    public Optional<Chapter> getChapter(int id) {
        return SUMMARIES.stream()
            .filter(s -> s.id() == id)
            .findFirst()
            .map(summary -> new Chapter(summary.id(), summary.title(), summary.description(), loadHtml(id)));
    }

    private String loadHtml(int id) {
        return htmlCache.computeIfAbsent(id, k -> {
            String path = "chapters/chapter-" + k + ".html";
            try {
                ClassPathResource resource = new ClassPathResource(path);
                return new String(resource.getInputStream().readAllBytes(), StandardCharsets.UTF_8);
            } catch (IOException e) {
                return "<p>Chapter content is coming soon.</p>";
            }
        });
    }
}
