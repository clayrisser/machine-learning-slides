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

const Tips = props => (
  <Slide transition={['zoom']} bgColor="primary" align="flex-start">
    <br />
    <Heading
      size={4}
      lineHeight={1}
      textColor="secondary"
      style={{ textAlign: 'left' }}
    >
      Models
    </Heading>
    <br />
    <br />
    linear regression
    <br />
    <br />
    polynomial regression
    <br />
    <br />
    support vector machines
    <br />
    <br />
    decision trees
    <br />
    <br />
    random forests
    <br />
    <br />
    neural networks
  </Slide>
);

export default Tips;
