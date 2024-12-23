import React from "react";
import { StoriesContainer, StoryBox } from "./styles";

const Stories = () => (
  <StoriesContainer>
    {Array(5)
      .fill(0)
      .map((_, index) => (
        <StoryBox key={index}>STORY</StoryBox>
      ))}
  </StoriesContainer>
);

export default Stories;
