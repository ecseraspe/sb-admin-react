import React from 'react';

import ActivityWidget from './ActivityWidget';

const FeedCard3 = ({ }) => {
  return (
    <div class="card mb-3">
      <a href="#">
        <img class="card-img-top img-fluid w-100" src="https://unsplash.it/700/450?image=281" alt="" />
      </a>
      <div class="card-body">
        <h6 class="card-title mb-1"><a href="#">Jeffery Wellings</a></h6>
        <p class="card-text small">Nice shot from the skate park!
        <a href="#">#kickflip</a>
          <a href="#">#holdmybeer</a>
          <a href="#">#igotthis</a>
        </p>
      </div>
      <hr class="my-0" />
      <ActivityWidget />
      <div class="card-footer small text-muted">Posted 1 hr ago</div>
    </div>
  );
}

export default FeedCard3;