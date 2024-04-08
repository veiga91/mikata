import { useSharedValue, withTiming, Easing, ReduceMotion, useAnimatedStyle } from 'react-native-reanimated';

const TIMING_CONFIG = {
  duration: 300,
  easing: Easing.in(Easing.bezierFn(0.25, 0.1, 0.25, 1)),
  reduceMotion: ReduceMotion.System,
};

export function useTextInputAnimations(defaultValues: { top: number, labelColor: string, borderColor: string }) {
  const top = useSharedValue(defaultValues.top);
  const labelColor = useSharedValue(defaultValues.labelColor);
  const borderColor = useSharedValue(defaultValues.borderColor);

  const animatedLabelStyle = useAnimatedStyle(() => ({
    top: withTiming(top.value, TIMING_CONFIG),
    color: withTiming(labelColor.value, TIMING_CONFIG),
  }));

  const animatedBorderColorStyle = useAnimatedStyle(() => ({
    borderColor: withTiming(borderColor.value, TIMING_CONFIG),
  }));
  
  return {
    animatedLabelStyle,
    animatedBorderColorStyle,
    top,
    labelColor,
    borderColor
  }
};
