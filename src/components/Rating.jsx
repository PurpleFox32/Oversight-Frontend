import React from "react";
import { useState } from "react";
import "../stylesheets/Rating.css";


const Rating = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <div className="create">
      <h2>Add a New Review</h2>
      <form>
        <label>Game title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Review :</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Gamer Name:</label>
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
        <div class="rating">
          <input type="radio" name="rating" value="5" id="5" />
          <label for="5">☆</label>
          <input type="radio" name="rating" value="4" id="4" />
          <label for="4">☆</label>
          <input type="radio" name="rating" value="3" id="3" />
          <label for="3">☆</label>
          <input type="radio" name="rating" value="2" id="2" />
          <label for="2">☆</label>
          <input type="radio" name="rating" value="1" id="1" />
          <label for="1">☆</label>
        </div>
        <button>Add Review</button>
        <div class="review">
          <div class="review-post">
            <h3>{title}</h3>
            <p>{body}</p>
            <h6>{author}</h6>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Rating;
