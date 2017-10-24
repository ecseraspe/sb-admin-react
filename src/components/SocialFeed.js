import React from 'react';

import FeedCard from './feeds/FeedCard';
import FeedCard2 from './feeds/FeedCard2';
import FeedCard3 from './feeds/FeedCard3';

const SocialFeed = ({ }) => {
  const comments = [
    { comment: 1}
  ];

  return (
    <div className="card-columns">
      <FeedCard username="David Miller"
        imageSrc="https://unsplash.it/700/450?image=610"
        statusText="These waves are looking pretty good today!"
        comments={comments} />
      <FeedCard username="John Smith"
        imageSrc="https://unsplash.it/700/450?image=180"
        statusText="Another day at the office... #workinghardorhardlyworking"
        comments={comments} />
      <FeedCard username="Jeffery Wellings"
        imageSrc="https://unsplash.it/700/450?image=281"
        statusText="Nice shot from the skate park! #kickflip #holdmybeer #igotthis"
        />
    </div>
  );
};

export default SocialFeed;