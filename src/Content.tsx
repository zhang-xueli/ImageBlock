import { Image, RichText } from "@sitecore-jss/sitecore-jss-react";
import { ContentImagePosition, ContentProps } from "./Content.types";
import { ComponentProps } from "react";

const Content = (props: ContentProps): JSX.Element => {
  const hasImage = !!props.fields?.image;
  let imagePosition = ContentImagePosition.Left;
  //@ts-ignore
  const imagePositionParam = props?.params?.imagePosition;
  if (!!imagePositionParam) {
    imagePosition =
      ContentImagePosition[
        imagePositionParam as keyof typeof ContentImagePosition
      ];
  }
  const imageContainerClass =
    hasImage &&
    (imagePosition == ContentImagePosition.Top ||
      imagePosition == ContentImagePosition.Bottom)
      ? "col-12"
      : "col-6";
  const contentContainerClass = imageContainerClass;
  return (
    <div className="content row">
      {hasImage &&
      (imagePosition == ContentImagePosition.Top ||
        imagePosition == ContentImagePosition.Left) ? (
        <div className={imageContainerClass}>
          <Image field={props.fields?.image} />
        </div>
      ) : null}
      <div className={contentContainerClass}>
        <RichText field={props.fields?.content} />
      </div>
      {hasImage &&
      (imagePosition == ContentImagePosition.Bottom ||
        imagePosition == ContentImagePosition.Right) ? (
        <div className={imageContainerClass}>
          <Image field={props.fields?.image} />
        </div>
      ) : null}
    </div>
  );
};
export default Content;

export const NoImage = (props: ContentProps): JSX.Element => {
  return (
    <div>
      <h1>No Image</h1>
      <RichText field={props.fields?.content} />
    </div>
  );
};
