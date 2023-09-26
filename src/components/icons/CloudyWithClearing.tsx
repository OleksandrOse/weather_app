import React from 'react';
import Svg, {
  Circle,
  Path,
  G,
  Mask,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
export default function CloudyWithClearing(
  props: React.JSX.IntrinsicAttributes &
    React.JSX.IntrinsicClassAttributes<Svg> &
    Pick<
      Readonly<SvgProps>,
      | 'width'
      | 'height'
      | 'viewBox'
      | 'color'
      | 'title'
      | 'children'
      | 'opacity'
      | 'fill'
      | 'fillOpacity'
      | 'fillRule'
      | 'stroke'
      | 'strokeWidth'
      | 'strokeOpacity'
      | 'strokeDasharray'
      | 'strokeDashoffset'
      | 'strokeLinecap'
      | 'strokeLinejoin'
      | 'strokeMiterlimit'
      | 'vectorEffect'
      | 'clipRule'
      | 'clipPath'
      | 'translate'
      | 'translateX'
      | 'translateY'
      | 'origin'
      | 'originX'
      | 'originY'
      | 'scale'
      | 'scaleX'
      | 'scaleY'
      | 'skew'
      | 'skewX'
      | 'skewY'
      | 'rotation'
      | 'x'
      | 'y'
      | 'transform'
      | 'pointerEvents'
      | 'onStartShouldSetResponder'
      | 'onMoveShouldSetResponder'
      | 'onResponderEnd'
      | 'onResponderGrant'
      | 'onResponderReject'
      | 'onResponderMove'
      | 'onResponderRelease'
      | 'onResponderStart'
      | 'onResponderTerminationRequest'
      | 'onResponderTerminate'
      | 'onStartShouldSetResponderCapture'
      | 'onMoveShouldSetResponderCapture'
      | 'disabled'
      | 'onPress'
      | 'onPressIn'
      | 'onPressOut'
      | 'onLongPress'
      | 'delayPressIn'
      | 'delayPressOut'
      | 'delayLongPress'
      | 'id'
      | 'marker'
      | 'markerStart'
      | 'markerMid'
      | 'markerEnd'
      | 'mask'
      | 'onLayout'
      | 'accessibilityLabel'
      | 'accessible'
      | 'testID'
      | 'font'
      | 'fontStyle'
      | 'fontVariant'
      | 'fontWeight'
      | 'fontStretch'
      | 'fontSize'
      | 'fontFamily'
      | 'textAnchor'
      | 'textDecoration'
      | 'letterSpacing'
      | 'wordSpacing'
      | 'kerning'
      | 'fontFeatureSettings'
      | 'fontVariantLigatures'
      | 'fontVariationSettings'
      | 'hitSlop'
      | 'removeClippedSubviews'
      | 'style'
      | 'nativeID'
      | 'collapsable'
      | 'needsOffscreenAlphaCompositing'
      | 'renderToHardwareTextureAndroid'
      | 'focusable'
      | 'shouldRasterizeIOS'
      | 'isTVSelectable'
      | 'hasTVPreferredFocus'
      | 'tvParallaxProperties'
      | 'tvParallaxShiftDistanceX'
      | 'tvParallaxShiftDistanceY'
      | 'tvParallaxTiltAngle'
      | 'tvParallaxMagnification'
      | 'onTouchStart'
      | 'onTouchMove'
      | 'onTouchEnd'
      | 'onTouchCancel'
      | 'onTouchEndCapture'
      | 'onPointerEnter'
      | 'onPointerEnterCapture'
      | 'onPointerLeave'
      | 'onPointerLeaveCapture'
      | 'onPointerMove'
      | 'onPointerMoveCapture'
      | 'onPointerCancel'
      | 'onPointerCancelCapture'
      | 'onPointerDown'
      | 'onPointerDownCapture'
      | 'onPointerUp'
      | 'onPointerUpCapture'
      | 'accessibilityActions'
      | 'aria-label'
      | 'accessibilityRole'
      | 'accessibilityState'
      | 'aria-busy'
      | 'aria-checked'
      | 'aria-disabled'
      | 'aria-expanded'
      | 'aria-selected'
      | 'aria-labelledby'
      | 'accessibilityHint'
      | 'accessibilityValue'
      | 'aria-valuemax'
      | 'aria-valuemin'
      | 'aria-valuenow'
      | 'aria-valuetext'
      | 'onAccessibilityAction'
      | 'importantForAccessibility'
      | 'aria-hidden'
      | 'aria-live'
      | 'aria-modal'
      | 'role'
      | 'accessibilityLiveRegion'
      | 'accessibilityLabelledBy'
      | 'accessibilityElementsHidden'
      | 'accessibilityViewIsModal'
      | 'onAccessibilityEscape'
      | 'onAccessibilityTap'
      | 'onMagicTap'
      | 'accessibilityIgnoresInvertColors'
      | 'accessibilityLanguage'
    > & { readonly preserveAspectRatio?: string | undefined }
) {
  return (
    <Svg fill="none" width={310} height={180} {...props}>
      <Circle
        cx={220}
        cy={90}
        r={55.783}
        fill="url(#a)"
        stroke="url(#b)"
        strokeWidth={2}
      />
      <Path
        fill="url(#c)"
        fillRule="evenodd"
        d="M220 0a4.891 4.891 0 0 0-4.891 4.891v15.652a4.891 4.891 0 1 0 9.782 0V4.892A4.891 4.891 0 0 0 220 0Zm0 154.565a4.892 4.892 0 0 0-4.891 4.892v15.652a4.891 4.891 0 0 0 9.782 0v-15.652a4.892 4.892 0 0 0-4.891-4.892Zm38.318-140.717a4.892 4.892 0 0 1 8.472 4.891l-7.826 13.555a4.89 4.89 0 1 1-8.472-4.89l7.826-13.556Zm-70.601 132.067a4.89 4.89 0 0 0-6.681 1.79l-7.826 13.556a4.892 4.892 0 0 0 8.472 4.891l7.826-13.555a4.892 4.892 0 0 0-1.791-6.682ZM291.261 43.21a4.89 4.89 0 1 1 4.891 8.472l-13.555 7.826a4.892 4.892 0 0 1-4.892-8.472l13.556-7.826Zm-127.176 79.073a4.892 4.892 0 0 0-6.682-1.791l-13.555 7.826a4.892 4.892 0 0 0 4.891 8.472l13.556-7.826a4.89 4.89 0 0 0 1.79-6.681Zm141.024-37.174a4.891 4.891 0 0 1 0 9.782h-15.652a4.892 4.892 0 1 1 0-9.782h15.652ZM155.435 90a4.892 4.892 0 0 0-4.892-4.891h-15.652a4.891 4.891 0 0 0 0 9.782h15.652A4.892 4.892 0 0 0 155.435 90Zm140.717 38.318a4.892 4.892 0 0 1-4.891 8.472l-13.556-7.826a4.89 4.89 0 1 1 4.892-8.472l13.555 7.826Zm-132.067-70.6a4.891 4.891 0 0 0-1.79-6.682l-13.556-7.826a4.89 4.89 0 1 0-4.891 8.472l13.555 7.826a4.892 4.892 0 0 0 6.682-1.79ZM266.79 161.26a4.89 4.89 0 1 1-8.472 4.891l-7.826-13.555a4.892 4.892 0 0 1 8.472-4.892l7.826 13.556ZM187.717 34.085a4.892 4.892 0 0 0 1.791-6.682l-7.826-13.555a4.892 4.892 0 0 0-8.472 4.891l7.826 13.555a4.89 4.89 0 0 0 6.681 1.79Z"
        clipRule="evenodd"
      />
      <G filter="url(#d)">
        <Mask
          id="g"
          width={10}
          height={50}
          x={15}
          y={58}
          fill="#000"
          maskUnits="userSpaceOnUse"
        >
          <Path fill="#fff" d="M15 58h255v155H15z" />
          <Path
            fillRule="evenodd"
            d="M197.882 129.014c0 2.409-.124 4.79-.365 7.135a42.195 42.195 0 0 1 27.771-10.374c23.392 0 42.355 18.963 42.355 42.355 0 23.393-18.963 42.356-42.355 42.356H60.352v-.001C36.386 210.351 17 190.882 17 166.885c0-23.909 19.244-43.323 43.088-43.598C62.999 87.851 92.68 60 128.868 60c38.115 0 69.014 30.899 69.014 69.014Z"
            clipRule="evenodd"
          />
        </Mask>
        <Path
          fill="url(#e)"
          fillRule="evenodd"
          d="M197.882 129.014c0 2.409-.124 4.79-.365 7.135a42.195 42.195 0 0 1 27.771-10.374c23.392 0 42.355 18.963 42.355 42.355 0 23.393-18.963 42.356-42.355 42.356H60.352v-.001C36.386 210.351 17 190.882 17 166.885c0-23.909 19.244-43.323 43.088-43.598C62.999 87.851 92.68 60 128.868 60c38.115 0 69.014 30.899 69.014 69.014Z"
          clipRule="evenodd"
        />
        <Path
          fill="url(#f)"
          d="m197.517 136.149-1.989-.204-.517 5.032 3.818-3.318-1.312-1.51ZM60.352 210.486h-2v2h2v-2Zm0-.001h2v-1.989l-1.989-.011-.011 2Zm-.264-87.198.023 2 1.821-.021.15-1.816-1.994-.163Zm139.419 13.066c.248-2.413.375-4.861.375-7.339h-4c0 2.341-.12 4.653-.354 6.931l3.979.408Zm25.781-12.578a44.19 44.19 0 0 0-29.082 10.864l2.623 3.02a40.193 40.193 0 0 1 26.459-9.884v-4Zm44.355 44.355c0-24.496-19.858-44.355-44.355-44.355v4c22.288 0 40.355 18.068 40.355 40.355h4Zm-44.355 44.356c24.497 0 44.355-19.859 44.355-44.356h-4c0 22.288-18.067 40.356-40.355 40.356v4Zm0-4H60.638v4h164.65v-4Zm-164.687 4H60.638v-4H60.6v4Zm-.037 0H60.601v-4H60.564v4Zm0-4h-.212v4h.212v-4Zm1.788 2v-.001h-4v.001h4ZM15 166.885c0 25.098 20.276 45.46 45.34 45.6l.023-4C37.497 208.357 19 189.781 19 166.885h-4Zm45.065-45.598C35.127 121.574 15 141.879 15 166.885h4c0-22.812 18.361-41.336 41.11-41.598l-.045-4ZM128.868 58c-37.237 0-67.778 28.658-70.773 65.123l3.986.327C64.908 89.044 93.731 62 128.868 62v-4Zm71.014 71.014c0-39.22-31.794-71.014-71.014-71.014v4c37.011 0 67.014 30.003 67.014 67.014h4Z"
          mask="url(#g)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="a"
          x1={250.815}
          x2={201.093}
          y1={43.044}
          y2={145.21}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.183} stopColor="#FFE600" />
          <Stop offset={0.981} stopColor="#F09000" />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1={192.017}
          x2={269.16}
          y1={22.689}
          y2={207.983}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFE600" />
          <Stop offset={1} stopColor="#9C8D00" />
        </LinearGradient>
        <LinearGradient
          id="c"
          x1={286.032}
          x2={152.5}
          y1={23.478}
          y2={180}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFE600" />
          <Stop offset={1} stopColor="#A90" />
        </LinearGradient>
        <LinearGradient
          id="e"
          x1={94.903}
          x2={155.193}
          y1={59.372}
          y2={211.113}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={0.708} stopColor="#9DDCFF" stopOpacity={0.69} />
        </LinearGradient>
        <LinearGradient
          id="f"
          x1={134.193}
          x2={217.515}
          y1={7.889}
          y2={272.081}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={0.714} stopColor="#85C6EC" stopOpacity={0.71} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
