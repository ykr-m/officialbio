import React from 'react';

import { styled } from '../../stitches.config';

const StyledCard = styled('div', {
  minWidth: '5rem',
  minHeight: '2rem',
  backgroundColor: '$gray1',
  padding: '1rem',
  margin: '0 1rem',
  variants: {
    type: {
      wide: {},
      square: {
        width: '2rem',
      },
    },
  },
});

const Card = ({ type, children }) => {
  return <StyledCard type={type}>{children}</StyledCard>;
};

export default Card;
