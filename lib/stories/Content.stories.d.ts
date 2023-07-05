/// <reference types="react" />
import { StoryObj } from "@storybook/react";
import { ContentImagePosition } from "../Content.types";
declare const meta: {
    title: string;
    component: (props: import("../Content.types").ContentProps) => JSX.Element;
    tags: string[];
    argTypes: {
        fields: {
            imagePosition: {
                options: (string | ContentImagePosition)[];
                mapping: typeof ContentImagePosition;
                control: {
                    type: string;
                };
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
