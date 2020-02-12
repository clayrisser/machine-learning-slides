import React from 'react';
import {
  BlockQuote,
  Markdown,
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

const Definition = props => (
  <Slide transition={['zoom']} bgColor="primary" align="flex-start">
    <br />
    <Heading
      size={4}
      lineHeight={1}
      textColor="secondary"
      style={{ textAlign: 'left' }}
    >
      Challenges of Machine Learning
    </Heading>
    <br />
    <div style={{ textAlign: 'left' }}>
      insufficient quantity of training data
      <br />
      <br />
      nonrepresentative training data
      <br />
      <br />
      poor quality data
      <br />
      <br />
      irrelevant features
      <br />
      <br />
      overfitting the training data
      <br />
      <br />
      underfitting the training data
    </div>
  </Slide>
);

export default Definition;
