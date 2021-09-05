import React, { useState, useEffect, Fragment } from "react";
import "./FeedAction.css";
import RedHeart from "./favorite_black_24dp.svg";
import ThinHeart from "./favorite_border_black_24dp.svg";
import CommentFiled from "./short_text_black_24dp.svg";
import CommentThin from "./short_text_black_24dp.svg";
import SaveThin from "./bookmark_border_black_24dp (1).svg";
import SaveFiled from "./bookmark_black_24dp.svg";
import ReFeed from "./save_alt_black_24dp.svg";

export default function FeedAction(props) {
  const [IsLike, setIsLike] = useState(false);
  const [IsSaved, setIsSaved] = useState(false);
  const [IsCommented, setIsCommented] = useState(false);
  const [UpdateLiveLike, setUpdateLiveLike] = useState(null);

  useEffect(() => {
    if (props.default) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  }, []);

  return (
    <Fragment>
      <div className="FeedActionContent">

  

      <div className="FeedAction">
        <div className="cunt">
          <button
            onClick={() => {
              if (IsLike === false) {
                setIsLike(true);
                setUpdateLiveLike(1);
                props.like(props.id, IsLike);
              } else if (IsLike) {
                setIsLike(false);
                setUpdateLiveLike(0);
                props.like(props.id, IsLike);
              }
            }}
          >
            <img style={{
              width:'1.7rem'
            }}
              src={IsLike ? RedHeart : IsLike ? RedHeart : ThinHeart}
              alt="icon"
            />
          </button>

          <p>{props.likes + UpdateLiveLike}</p>
        </div>

        <button
        style={{
          visibility:'hidden',
          pointerEvents:'none'
        }}
          onClick={() => {
            props.openComments(props.id, props.comment);
            if (IsCommented === false) {
              setIsCommented(!IsCommented);
            } else {
              setIsCommented(!IsCommented);
            }
          }}
        >
          <img style={{
            width:'2rem'
          }} src={IsCommented ? CommentFiled : CommentThin} alt="icon" />
        </button>
      </div>

      <div>
        <button
          className="savebtn"
          onClick={() => {
            if (IsSaved === false) {
              setIsSaved(!IsSaved);
            } else {
              setIsSaved(!IsSaved);
            }
          }}
        >
          <img style={{
            width:'2rem'
          }} src={IsSaved ? SaveFiled : SaveThin} alt="icon" />
        </button>
      </div>
      </div>

    </Fragment>
  );
}
