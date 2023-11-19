import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { MySvgProps } from '../../types/SvgProps';

export default function Check(props: MySvgProps) {
  return (
    <Svg
      width={20}
      height={20}
      fill="#fff"
      stroke="#fff"
      viewBox="0 0 12 12"
      {...props}
    >
      <Path
        fill="#1D1D1B"
        d="m5 9.854-5-5 .707-.708L5 8.44l6.293-6.293.707.708z"
      />
    </Svg>
  );
}
