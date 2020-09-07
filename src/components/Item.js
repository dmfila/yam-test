import React from 'react';
import styled from 'styled-components';

const Item = ({ item }) => {
  return (
    <ItemContainer href="https://pylon.finance">
      <ItemWrapper background={item.back}>
        <Row>
          <img src={require(`../assets/${item.icon}.png`)} alt="default" width="40%"/>
        </Row>
        <Title>{item.title}</Title>
        <DescText>{item.desc}</DescText>
      </ItemWrapper>
    </ItemContainer>
  )
}

export default Item;

const ItemContainer = styled.a`
  position: relative;
  /* flex: 1; */
  width: calc(20% - 10px);
  min-width: 234px;
  height: 600px;
  padding: 5px;
  text-decoration: none;

  @media (max-width: 1280px) {
    width: calc(33.33% - 10px);
    min-width: 254px;
    height: 500px;
  }
  @media (max-width: 960px) {
    width: calc(50% - 10px);
    min-width: 274px;
    height: 500px;
  }
  @media (max-width: 644px) {
    width: 450px;
    height: 500px;
  }
`;

const ItemWrapper = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  width: calc(100% - 30px);
  height: 100%;
  position: relative;
  transition: filter .2s,transform .2s;
  will-change: filter,transform;
  /* background-image: url(${props => require(`../assets/${props.background}.jpg`)}); */
  ::after {
    content: "";
    position: absolute;
    background-image: linear-gradient(180deg,rgba(0,26,51,0) 50%,rgba(0,26,51,.8));
    box-shadow: inset 0 0 0 2px rgba(153,204,255,.2), inset 0 0 40px rgba(0,102,204,.6), inset 0 0 160px rgba(0,102,204,.4);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  &:hover {
    filter: brightness(1.3);
  }
  &:active {
    opacity: .8;
    transform: perspective(500px) translateZ(-10px);
  }
`;

const Row = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 960px) {
    height: 40%;
  }
`;

const Title = styled.h2`
  color: #fff;
  text-shadow: 0 2px 4px rgba(0,0,0,.8), 0 8px 16px rgba(0,0,0,.6);
  text-align: center;
`;

const DescText = styled.p`
  color: #a3b8cc;
  text-shadow: 0 2px 4px rgba(0,0,0,.8), 0 8px 16px rgba(0,0,0,.6);
  text-align: center;
`;