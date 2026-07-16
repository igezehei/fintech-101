package com.example.demo.controller;

import com.example.demo.model.Chapter;
import com.example.demo.model.ChapterSummary;
import com.example.demo.service.ChapterService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chapters")
public class ChapterController {

    private final ChapterService chapterService;

    public ChapterController(ChapterService chapterService) {
        this.chapterService = chapterService;
    }

    @GetMapping
    public List<ChapterSummary> listChapters() {
        return chapterService.listChapters();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Chapter> getChapter(@PathVariable int id) {
        return chapterService.getChapter(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
}
