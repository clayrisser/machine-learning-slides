import React from 'react';
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';

const Home = () => (
  <Slide transition={['zoom']} bgColor="primary">
    <Heading size={1} fit lineHeight={1} textColor="secondary">
      Machine Learning
      <br />
      Introduction
    </Heading>
    <br />
    <Heading size={2} fit lineHeight={1} textColor="secondary">
      Detecting Handwritten Digits using the MNIST Data Set
    </Heading>
    <br />
    <Text margin="10px 0 0" textColor="tertiary" fit bold>
      github.com/codejamninja/mnist
    </Text>
  </Slide>
);

export default Home;
