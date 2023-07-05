import { ImageField, RichTextField } from "@sitecore-jss/sitecore-jss-react";
export type ContentProps = {
    fields: {
        content: RichTextField;
        image?: ImageField;
        imagePosition?: ContentImagePosition;
    };
};
export declare enum ContentImagePosition {
    Left = 0,
    Right = 1,
    Top = 2,
    Bottom = 3
}
