import React from 'react';

import StarFull from '~/assets/img/star.svg';
import StarHalf from '~/assets/img/star_half.svg';
import StarEmpty from '~/assets/img/star_empty.svg';

import {StarArea, StarView, StarText} from './styles';

export default ({stars, showNumber, wd, hg}) => {
  let s = [0, 0, 0, 0, 0];
  let floor = Math.floor(stars);
  let left = stars - floor;

  for (var i = 0; i < floor; i++) {
    s[i] = 2;
  }
  if (left > 0) {
    s[i] = 1;
  }

  return (
    <StarArea>
      {s.map((i, k) => (
        <StarView key={k}>
          {i === 0 && <StarEmpty width={wd} height={hg} fill="#FF9200" />}
          {i === 1 && <StarHalf width={wd} height={hg} fill="#FF9200" />}
          {i === 2 && <StarFull width={wd} height={hg} fill="#FF9200" />}
        </StarView>
      ))}
      {showNumber && <StarText>{stars}</StarText>}
    </StarArea>
  );
};
