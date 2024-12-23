import React from "react";
import { PostInputContainer } from "./styles";

const PostInput = () => (
  <PostInputContainer>
    <input type="text" placeholder="Postar alguma coisa..." />
    <button>Enviar</button>
  </PostInputContainer>
);

export default PostInput;
