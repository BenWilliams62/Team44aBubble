package com.example.Team.A.Bubble.service;

import com.example.Team.A.Bubble.dto.Streams;
import com.example.Team.A.Bubble.models.StreamsModel;

import java.util.List;

public interface StreamsService {

    List<Streams> getBubbleStreams(Integer bubbleId);

    Streams addStream(StreamsModel stream);
    Streams getStream(Integer id);

    Boolean deleteStream(String signal);
    
}
