import React from 'react';

import ActivityWidget from './ActivityWidget';
import FeedComment from './FeedComment';

const FeedCard = ({
  username,
  statusText,
  imageSrc,
  comments
}) => {
  const CommentComponent = (comments ? <FeedComment /> : null);

  return (
    <div className="card mb-3">
      <a href="#">
        <img className="card-img-top img-fluid w-100" src={imageSrc} alt="" />
      </a>
      <div className="card-body">
        <h6 className="card-title mb-1"><a href="#">{username}</a></h6>
        <p className="card-text small">{statusText}
        </p>
      </div>
      <hr className="my-0" />
      <ActivityWidget />
      <hr className="my-0" />
      {CommentComponent}
      <div className="card-footer small text-muted">Posted 32 mins ago</div>
    </div>
  )
}

export default FeedCard;