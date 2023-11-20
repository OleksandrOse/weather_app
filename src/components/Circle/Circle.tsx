import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { MySvgProps } from '../../types/SvgProps';

export default function Circle(props: MySvgProps) {
  return (
    <Svg width={35} height={35} fill="#fff" viewBox="0 0 24 24" {...props}>
      <Path d="M17.5 14a1.5 1.5 0 1 1 1.5-1.5 1.502 1.502 0 0 1-1.5 1.5zM14 12.5a1.5 1.5 0 1 0-1.5 1.5 1.502 1.502 0 0 0 1.5-1.5zm-5 0A1.5 1.5 0 1 0 7.5 14 1.502 1.502 0 0 0 9 12.5zm13.8 0A10.3 10.3 0 1 1 12.5 2.2a10.297 10.297 0 0 1 10.3 10.3zm-1 0a9.3 9.3 0 1 0-9.3 9.3 9.31 9.31 0 0 0 9.3-9.3z" />
      <Path fill="none" d="M0 0h24v24H0z" />
    </Svg>
  );
}