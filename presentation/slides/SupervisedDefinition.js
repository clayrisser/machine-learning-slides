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
      Jam's Definition
    </Heading>
    <br />
    <Markdown style={{ textAlign: 'left' }}>given X, solve for f</Markdown>
    <div style={{ textAlign: 'left' }}>
      <br />
      X = 1
      <br />
      y = ???
      <br />
      y = f(X)
      <br />
      <br />
      <strong>f = ???</strong>
    </div>
  </Slide>
);

export default Definition;
