import React from 'react';

const FeedComment = ({ }) => {
  return (
    <div className="card-body small bg-faded">
      <div className="media">
        <img className="d-flex mr-3" src="http://placehold.it/45x45" alt="" />
        <div className="media-body">
          <h6 className="mt-0 mb-1"><a href="#">John Smith</a></h6>Very nice! I wish I was there! That looks amazing!
      <ul className="list-inline mb-0">
            <li className="list-inline-item">
              <a href="#">Like</a>
            </li>
            <li className="list-inline-item">·</li>
            <li className="list-inline-item">
              <a href="#">Reply</a>
            </li>
          </ul>
          <div className="media mt-3">
            <a className="d-flex pr-3" href="#">
              <img src="http://placehold.it/45x45" alt="" />
            </a>
            <div className="media-body">
              <h6 className="mt-0 mb-1"><a href="#">David Miller</a></h6>Next time for sure!
          <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a href="#">Like</a>
                </li>
                <li className="list-inline-item">·</li>
                <li className="list-inline-item">
                  <a href="#">Reply</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedComment;