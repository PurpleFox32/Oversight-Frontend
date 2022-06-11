import React from "react";
import "./comment.css";

const Comment = () => {
  return (
    <div>
      <div class="container">
      <div class="d-flex justify-content-center">
      <div class="row">
        <div class="col-6">
          <img src="https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/kronos/common/social-share/social-share-image.jpg"
            width="100"
            class="rounded-circle mt-2"
          ></img>
        </div>

        <div class="col-12">
          <div class="comment-box ml-2">
            <h4>Add a comment</h4>

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

            <div class="comment-area">
              <textarea
                class="form-control"
                placeholder="what is your review?"
                rows="4"
              ></textarea>
            </div>

            <div class="comment-btns mt-2">
              <div class="row">
                <div class="col-6">
                  <div class="pull-left">
                    <button class="btn btn-success btn-sm">Cancel</button>
                  </div>
                </div>

                <div class="col-6">
                  <div class="pull-right">
                    <button class="btn btn-success send btn-sm">
                      Send 
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
       
    </div>
  );
};

export default Comment;
