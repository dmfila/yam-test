import React from 'react';
import styled from 'styled-components';

const Loading = ({ item }) => {
  return (
    <LoadingContainer>
      <img src={require("../assets/logo.png")} alt=""/>
      <ProgressBar>
        <div className="progress-value"></div>
      </ProgressBar>
    </LoadingContainer>
  )
};

export default Loading;

const LoadingContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: url(${require('../assets/splash.jpg')});
  background-size: cover;
  animation: fadein 10s;
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
      opacity: 1;
      pointer-events: all;
    }
    to {
      opacity: 0;
      pointer-events: none;
    }
  }
`;

const ProgressBar = styled.div`
  background: rgba(255,255,255,0.1);
  justify-content: flex-start;
  border-radius: 100px;
  align-items: center;
  position: relative;
  padding: 0 5px;
  display: flex;
  height: 40px;
  width: 500px;

  .progress-value {
    animation: load 8s normal forwards;
    box-shadow: 0 10px 40px - 10px #fff;
    border-radius: 100px;
    background: #fff;
    height: 30px;
    width: 0;
  }

  @keyframes load {
    0% {
      width: 0;
    }
    70% {
      width: 73%;
    }
    100% {
      width: 100%;
    }
  }
`;



