import * as React from 'react';
import {
  Svg,
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';
export default function SunSvg(
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
    <Svg fill="none" {...props}>
      <Path
        fill="url(#a)"
        stroke="url(#b)"
        strokeWidth={2}
        d="M90 145.783c30.808 0 55.783-24.975 55.783-55.783S120.808 34.217 90 34.217 34.217 59.192 34.217 90 59.192 145.783 90 145.783Z"
      />
      <Path
        fill="url(#c)"
        fillRule="evenodd"
        d="M90 0a4.891 4.891 0 0 0-4.891 4.891v15.652a4.891 4.891 0 1 0 9.782 0V4.892A4.891 4.891 0 0 0 90 0Zm0 154.565a4.892 4.892 0 0 0-4.891 4.892v15.652a4.891 4.891 0 0 0 9.782 0v-15.652A4.892 4.892 0 0 0 90 154.565Zm38.318-140.717a4.892 4.892 0 0 1 8.472 4.891l-7.826 13.555a4.89 4.89 0 1 1-8.472-4.89l7.826-13.556Zm-70.6 132.067a4.891 4.891 0 0 0-6.682 1.79l-7.826 13.556a4.89 4.89 0 1 0 8.472 4.891l7.826-13.555a4.892 4.892 0 0 0-1.79-6.682ZM161.26 43.21a4.89 4.89 0 1 1 4.891 8.472l-13.555 7.826a4.892 4.892 0 0 1-4.892-8.472l13.556-7.826ZM34.085 122.283a4.892 4.892 0 0 0-6.682-1.791l-13.555 7.826a4.892 4.892 0 0 0 4.891 8.472l13.555-7.826a4.89 4.89 0 0 0 1.79-6.681Zm141.024-37.174a4.891 4.891 0 0 1 0 9.782h-15.652a4.892 4.892 0 1 1 0-9.782h15.652ZM25.435 90a4.891 4.891 0 0 0-4.891-4.891H4.89a4.891 4.891 0 1 0 0 9.782h15.652A4.891 4.891 0 0 0 25.436 90Zm140.717 38.318a4.892 4.892 0 0 1-4.891 8.472l-13.556-7.826a4.89 4.89 0 1 1 4.892-8.472l13.555 7.826Zm-132.067-70.6a4.891 4.891 0 0 0-1.79-6.682L18.739 43.21a4.891 4.891 0 0 0-4.891 8.472l13.555 7.826a4.891 4.891 0 0 0 6.682-1.79ZM136.79 161.26a4.89 4.89 0 1 1-8.472 4.891l-7.826-13.555a4.892 4.892 0 0 1 8.472-4.892l7.826 13.556ZM57.717 34.085a4.891 4.891 0 0 0 1.79-6.682l-7.825-13.555a4.891 4.891 0 1 0-8.472 4.891l7.826 13.555a4.891 4.891 0 0 0 6.681 1.79Z"
        clipRule="evenodd"
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={120.815}
          x2={71.093}
          y1={43.044}
          y2={145.21}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.183} stopColor="#FFE600" />
          <Stop offset={0.981} stopColor="#F09000" />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1={62.017}
          x2={139.16}
          y1={22.689}
          y2={207.983}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFE600" />
          <Stop offset={1} stopColor="#9C8D00" />
        </LinearGradient>
        <LinearGradient
          id="c"
          x1={156.032}
          x2={22.5}
          y1={23.478}
          y2={180}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFE600" />
          <Stop offset={1} stopColor="#A90" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
