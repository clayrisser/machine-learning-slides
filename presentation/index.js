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
import Challenges from './slides/Challenges';
import Definition from './slides/Definition';
import Diagram from './slides/Diagram';
import Home from './slides/Home';
import Introduction from './slides/Introduction';
import JamsDefinition from './slides/JamsDefinition';
import Models from './slides/Models';
import Phase from './slides/Phase';
import Spoiler from './slides/Spoiler';
import SupervisedDefinition from './slides/SupervisedDefinition';
import Tips from './slides/Tips';
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif'),
  bangingHeadOnWall: require('../assets/baning-head-on-wall.gif')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#000',
    secondary: '#FFF',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Hurmit Nerd Font Mono',
    secondary: 'Hurmit Nerd Font Mono'
  }
);
const textColor = '#BBB';
theme.print.colors.primary = textColor;
theme.print.colors.secondary = textColor;
theme.print.colors.tertiary = textColor;
theme.print.colors.quaternary = textColor;
theme.screen.components.text.color = textColor;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Home />
        <Introduction />
        <Definition title="Machine Learning">
          the field of study that gives computers the ability to learn without
          explicitly bieng programmed
        </Definition>
        <JamsDefinition />
        <Definition title="Use Cases"> </Definition>
        <Definition title="Supervised Learning">
          the training set includes the solutions
        </Definition>
        <Definition title="Unsupervised Learning">
          the training set does not include the solutions
        </Definition>
        <SupervisedDefinition />
        <Definition title="Semisupervised Learning">
          the training set includes some of the solutions
        </Definition>
        <Challenges />
        <Phase title="Step 1">look at the big picture</Phase>
        <Phase title="Step 2">get the data</Phase>
        <Phase title="Step 3">
          discover and visualize the data to gain insights
        </Phase>
        <Phase title="Step 4">
          prepare the data for machine learning algorithms
        </Phase>
        <Phase title="Step 5">select a model and train it</Phase>
        <Phase title="Step 6">fine tune your model</Phase>
        <Phase title="Step 7">present your solutions</Phase>
        <Phase title="Step 8">monitor and maintain your system</Phase>
        <Models />
        <Introduction />
      </Deck>
    );
  }
}
