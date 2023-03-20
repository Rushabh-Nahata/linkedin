import React from "react";
import boy from "../../../images/boy.png";
// import follow from "../../../images/follow.png";
import like from "../../../images/thumb-up.png";
import comment from "../../../images/comment.png";
import repost from "../../../images/repeat.png";
import send from "../../../images/share.png";
import "./post.css";
import IconProps from "../IconProps";
// import
const Post = ({ array }) => {

  return (
    <div>
      <div className="post">
        {array.map((current) => {
          const { post, name, date } = current;
          return (
            <>
              <div className="post-comment-like">
                <div className="post-comment-image">
                  <img src={boy} alt={boy} />
                </div>

                <div className="post-comment-description">
                  <h4>{name}</h4>
                  <p> {post} {date}</p> 
                </div>
              </div>
            </>
          );
        })}
        <div className="post-box">
          <div className="post-comment-like">
            <div className="post-comment-image">
              <img src={boy} alt={boy} />
            </div>
            <div className="post-comment-description">
              <p>Rushabh Nahata Commented on this post</p>
            </div>
          </div>

          <div className="post-name">
            <div className="post-comment-image">
              <img src={boy} alt={boy} />
            </div>
            <div className="post-name-description">
              <h3>Rushabh Nahata</h3>
              <p>22k followers , Front-End Developer ,1M views</p>
            </div>
            <div className="post-name-follow">
              <button>
                <p style={{ color: "blue" }}>Follow +</p>
              </button>
            </div>
          </div>

          <div className="description">
            <p>The best Cartoon picture is here</p>
          </div>

          <div className="video-photo">
            <div className="photo-image">
              <img src={boy} alt={boy} />
            </div>
          </div>

          <div className="like-share-repost-comment">
            <IconProps alt="Like" image={like} text="Like" />

            <IconProps alt="Comment" image={comment} text="Comment" />

            <IconProps alt="Repost" image={repost} text="Repost" />

            <IconProps alt="Share" image={send} text="Share" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
