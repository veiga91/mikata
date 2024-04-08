import { Image, ImageProps, StyleProp, View, ViewStyle } from "react-native";

interface ThumbnailProps extends ImageProps {
  containerClassName?: string;
  containerStyle?: StyleProp<ViewStyle>
};

const enum ThumbnailSize {
  LG = "w-44 h-44",
  MD = "w-32 h-32",
  SM = "w-16 h-16",
  XS = "w-4 h-4"
};

const thumbnailFactory = (size: ThumbnailSize, imageSize: ThumbnailSize) => (props: ThumbnailProps) => {
  const { containerClassName, containerStyle, className, ...rest } = props;

  return (
    <View
      style={containerStyle}
      className={`rounded-full border-2 border-neutral ${size} ${containerClassName} justify-center items-center`}
    >
      <Image
        {...rest}
        className={`${size} ${imageSize}`}
      />
    </View>
  )
};

export const Thumbnail = {
  LG: thumbnailFactory(ThumbnailSize.LG, ThumbnailSize.MD),
  MD: thumbnailFactory(ThumbnailSize.MD, ThumbnailSize.SM),
  SM: thumbnailFactory(ThumbnailSize.SM, ThumbnailSize.XS),
  XS: thumbnailFactory(ThumbnailSize.XS, ThumbnailSize.XS)
};
