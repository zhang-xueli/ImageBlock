import { Meta, StoryObj } from "@storybook/react";
import Content from "../Content";
import { ContentImagePosition } from "../Content.types";

const meta = {
  title: "Content Block",
  component: Content,
  tags: ["autodocs"],
  argTypes: {
    fields: {
      imagePosition: {
        options: Object.values(ContentImagePosition).filter(
          (x) => typeof x === "string"
        ),
        mapping: ContentImagePosition,
        control: {
          type: "select",
        },
      },
    },
  },
} satisfies Meta<typeof Content>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fields: {
      content: {
        value:
          "<h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>",
      },
      image: {
        value: {
          src: "https://dev103.sc/-/media/Project/Devs/DevsWeb/pexels-willian-justen-de-vasconcellos-15857470.jpg?h=1062&iar=0&w=800&hash=8803F31E85B872113F52C84709943758",
        },
      },
      imagePosition: ContentImagePosition.Left,
    },
  },
};
