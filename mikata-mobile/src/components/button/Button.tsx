import { Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  isLoading?: boolean
};

export const enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  NEUTRAL = "neutral",
};

const enum ButtonType {
  OUTLINED = "outlined",
  TEXT = "text",
  CONTAINED = "contained"
};

export const enum ButtonSize {
  LG = "w-11/12",
  MD = "w-2/3",
  SM = "w-36",
  XS = "w-20"
};

const mappedTextColors = {
  [ButtonVariant.PRIMARY]: "text-primary",
  [ButtonVariant.SECONDARY]: "text-secondary",
  [ButtonVariant.NEUTRAL]: "text-neutral",
  default: "text-white"
};

const mappedBgColors = {
  [ButtonVariant.PRIMARY]: "bg-primary",
  [ButtonVariant.SECONDARY]: "bg-secondary",
  [ButtonVariant.NEUTRAL]: "bg-neutral",
  default: "bg-transparent"
};

const mappedBorderColors = {
  [ButtonVariant.PRIMARY]: "border-primary",
  [ButtonVariant.SECONDARY]: "border-secondary",
  [ButtonVariant.NEUTRAL]: "border-neutral",
  default: "border-transparent"
}

const getButtonStyle = (variant: ButtonVariant) => ({
  [ButtonType.CONTAINED]: { container: `${mappedBorderColors[variant]} ${mappedBgColors[variant]} border`, label: mappedTextColors.default},
  [ButtonType.OUTLINED]: { container: `${mappedBorderColors[variant]} ${mappedBgColors.default} border`, label: mappedTextColors[variant]},
  [ButtonType.TEXT]: { container: `${mappedBorderColors.default} ${mappedBgColors.default} border-0`, label: mappedTextColors[variant]},
  disabled: { container: "bg-disabled border border-disabled", label: "text-white"}
})

const buttonFactory = (type: ButtonType) => (props: ButtonProps) => {
  const { label, className, size = ButtonSize.LG, disabled, isLoading, variant = ButtonVariant.PRIMARY, ...rest } = props;
  const style = getButtonStyle(variant)
  
  return (
    <TouchableOpacity
      {...rest}
      className={`p-2 justify-center items-center rounded-md ${style[disabled ? "disabled" : type].container} ${size} ${className}`}
      accessibilityLabel={`${label} button`}
      accessible
      disabled={disabled}
    >
      {isLoading ?<ActivityIndicator /> : <Text className={`${style[disabled ? "disabled" : type].label} text-base font-[Rimouski]`}>{label}</Text>}
    </TouchableOpacity>
  )
};

export const Button = {
  Contained: buttonFactory(ButtonType.CONTAINED),
  Outlined: buttonFactory(ButtonType.OUTLINED),
  Text: buttonFactory(ButtonType.TEXT),
};
