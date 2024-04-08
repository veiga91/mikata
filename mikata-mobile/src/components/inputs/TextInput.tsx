import { TextInput as TextInputRN, View, TextInputProps as TextInputRNProps, NativeSyntheticEvent, TextInputFocusEventData, PixelRatio, Text, StyleProp } from "react-native";
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';
import { colors } from "../../../theme";
import { useEffect, useMemo, useState } from "react";
import { useTextInputAnimations } from './useTextInputAnimations';
import { styled } from "nativewind";

interface TextInputProps extends Omit<TextInputRNProps, 'accessibilityLabel' | 'accessible' | 'className'> {
  label: string;
  error?: boolean;
  errorMessage?: string;
  size?: TextInputSize;
  innerStyle?: StyleProp<TextInputRNProps>;
  style?: [{ height: number }, { fontSize, lineHeight}, StyleProp<TextInputRNProps>]
};

export const enum TextInputSize {
  LG = "w-11/12",
  MD = "w-2/3",
  SM = "w-36",
  XS = "w-20"
};

function TextInputBase(props: TextInputProps): React.JSX.Element {
  const { size = TextInputSize.LG, label, onFocus, onBlur, errorMessage, error, style, innerStyle, ...rest } = props;
  const [active, setActive] = useState(false);
  const [{ height }, { fontSize, lineHeight}, otherStyle] = style;

  const initialTopOffset = useMemo(
    () => (height / 2) - (lineHeight / 2),
    []
  );

  const labelOffset = useMemo(
    () => (lineHeight + initialTopOffset),
    []
  );

  const { animatedBorderColorStyle, animatedLabelStyle, top, borderColor, labelColor} = useTextInputAnimations({
    top: initialTopOffset,
    labelColor: colors.placeholder,
    borderColor: colors.neutral
  });
  
  useEffect(() => {
    if (error) {
      borderColor.value = colors.error;
      labelColor.value = colors.error;
    }
  }, [error]);

  const _onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onFocus && onFocus(e);

    if (label && !rest.value) {
      top.value = top.value - labelOffset;
      labelColor.value = colors.label;
    }

    borderColor.value = colors.primary;
    setActive(true);
  }

  const _onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onBlur && onBlur(e);

    if(label && !rest.value) {
      labelColor.value = colors.placeholder;
      top.value = top.value + labelOffset;
      borderColor.value = colors.neutral;
    }
    
    setActive(false);
  }

  const borderWidthStyle = active || rest.value ? "border-active" : "border-hairline";

  return (
    <View style={otherStyle} className={`h-auto ${size}`}>
      <Animated.View
        style={[animatedBorderColorStyle, { height }]} 
        className={`rounded mt-1 flex-row relative ${borderWidthStyle}`}
      >
        <Animated.Text
          style={[animatedLabelStyle, { fontSize, lineHeight }]}
          className="left-1 absolute font-[Rimouski]"
        >
          {label}
        </Animated.Text>
        <TextInputRN
          {...rest}
          style={[innerStyle, { fontSize }]}
          onFocus={_onFocus}
          onBlur={_onBlur}
          accessibilityLabel={`${label} input`}
          accessible
          className="pl-1 flex-1 h-full bg-transparent font-[Rimouski]"
        />
      </Animated.View>
      {error && (<Animated.View entering={FadeInUp} exiting={FadeOutUp}>
        <Text className="text-sm text-secundary font-[Rimouski]">
          {errorMessage}
        </Text>
        </Animated.View>)}
    </View>
  )
}

export const TextInput = styled(TextInputBase, 'h-5 text-sm', { props: {
  innerStyle: true
}})
