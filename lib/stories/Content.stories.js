"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const Content_1 = __importDefault(require("../Content"));
const Content_types_1 = require("../Content.types");
const meta = {
    title: "Content Block",
    component: Content_1.default,
    tags: ["autodocs"],
    argTypes: {
        fields: {
            imagePosition: {
                options: Object.values(Content_types_1.ContentImagePosition).filter((x) => typeof x === "string"),
                mapping: Content_types_1.ContentImagePosition,
                control: {
                    type: "select",
                },
            },
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        fields: {
            content: {
                value: "<h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>",
            },
            image: {
                value: {
                    src: "https://dev103.sc/-/media/Project/Devs/DevsWeb/pexels-willian-justen-de-vasconcellos-15857470.jpg?h=1062&iar=0&w=800&hash=8803F31E85B872113F52C84709943758",
                },
            },
            imagePosition: Content_types_1.ContentImagePosition.Left,
        },
    },
};
