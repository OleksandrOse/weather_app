import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { MySvgProps } from '../../types/SvgProps';

export default function LocationSvg(props: MySvgProps) {
  return (
    <Svg width={27} height={27} fill="#fff" viewBox="0 0 27 27" {...props}>
      <Path
        fill="#fff"
        d="m13.5 26.694-7.16-7.16a10.125 10.125 0 1 1 14.32 0l-7.16 7.16Zm5.569-8.75a7.875 7.875 0 1 0-11.138 0l5.569 5.568 5.569-5.568Zm-5.569-3.32a2.25 2.25 0 1 1 0-4.499 2.25 2.25 0 0 1 0 4.5Z"
      />
      <Path fill="none" d="M0 0h24v24H0z" />
    </Svg>
  );
}
