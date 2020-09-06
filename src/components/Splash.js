import React from 'react';
import styled from 'styled-components';

const Loading = ({ item }) => {
  return (
    <LoadingContainer>

    </LoadingContainer>
  )
};

export default Loading;

const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: url(${require('../assets/splash.jpg')});
  animation: fadein 7s;
  opacity: 0;
  pointer-events: none;

  @keyframes fadein {
    from {
      opacity: 1;
      pointer-events: all;
    }
    50% {
      opacity: 1;
      pointer-events: all;
    }
    80% {
      pointer-events: none;
    }
    to {
      opacity: 0;
      pointer-events: none;
    }
  }
`;