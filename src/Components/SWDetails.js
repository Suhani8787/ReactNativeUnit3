import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Item from './Item.js';
import ItemSection from './ItemSection.js';

const SWDetails = props => {
  const {headContainer, headerText, imageStyle} = styles;
  const {sw} = props;

  return (
    <Item>
      <ItemSection>
        <View style={headContainer}>
          <Text style={headerText.text}>Brand: {sw.brand}</Text>
          <Text style={headerText.text}>Model: {sw.model}</Text>
          <Text style={headerText.text}>URL: {sw.url}</Text>
        </View>
      </ItemSection>
      <ItemSection>
        <Image style={imageStyle} source={{uri: sw.image}} />
      </ItemSection>
    </Item>
  );
};

styles = {
  headContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  headerText: {
    fontSize: 20,
    fontWeight: 500,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },

  imageStyle: {
    height: 300,
    flex: 1,
  },
};

export default SWDetails;
