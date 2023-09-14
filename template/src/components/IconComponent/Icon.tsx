import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {PIconProps} from './Icon.type';

const MIcon = ({size, name, color}: PIconProps) => (
  <Icon name={name} size={size} color={color} />
);

export default MIcon;
