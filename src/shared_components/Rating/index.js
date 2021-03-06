// NPM
import React from 'react';
import styled, { css } from 'styled-components';

// COMPONENTS
import Stars from './Stars';

// ACTIONS/CONFIG

// STYLES
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  ${props =>
    props.marginBottom &&
    css`
      margin-bottom: ${props.marginBottom};
    `};
`;

const Count = styled.span`
  font-size: 14px;
  color: #3c434b;
  position: relative;
  top: 0.2em;
`;

// MODULE
export default function Rating({ rating, count, marginBottom }) {
  return (
    <Wrapper marginBottom={marginBottom}>
      <Stars rating={rating} />
      <Count>{count > 0 ? count : ''}</Count>
    </Wrapper>
  );
}

// Props Validation
Rating.propTypes = {};
