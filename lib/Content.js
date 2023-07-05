"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoImage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const sitecore_jss_react_1 = require("@sitecore-jss/sitecore-jss-react");
const Content_types_1 = require("./Content.types");
const Content = (props) => {
    var _a, _b, _c, _d, _e;
    const hasImage = !!((_a = props.fields) === null || _a === void 0 ? void 0 : _a.image);
    let imagePosition = Content_types_1.ContentImagePosition.Left;
    //@ts-ignore
    const imagePositionParam = (_b = props === null || props === void 0 ? void 0 : props.params) === null || _b === void 0 ? void 0 : _b.imagePosition;
    if (!!imagePositionParam) {
        imagePosition =
            Content_types_1.ContentImagePosition[imagePositionParam];
    }
    const imageContainerClass = hasImage &&
        (imagePosition == Content_types_1.ContentImagePosition.Top ||
            imagePosition == Content_types_1.ContentImagePosition.Bottom)
        ? "col-12"
        : "col-6";
    const contentContainerClass = imageContainerClass;
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "content row" }, { children: [hasImage &&
                (imagePosition == Content_types_1.ContentImagePosition.Top ||
                    imagePosition == Content_types_1.ContentImagePosition.Left) ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: imageContainerClass }, { children: (0, jsx_runtime_1.jsx)(sitecore_jss_react_1.Image, { field: (_c = props.fields) === null || _c === void 0 ? void 0 : _c.image }) }))) : null, (0, jsx_runtime_1.jsx)("div", Object.assign({ className: contentContainerClass }, { children: (0, jsx_runtime_1.jsx)(sitecore_jss_react_1.RichText, { field: (_d = props.fields) === null || _d === void 0 ? void 0 : _d.content }) })), hasImage &&
                (imagePosition == Content_types_1.ContentImagePosition.Bottom ||
                    imagePosition == Content_types_1.ContentImagePosition.Right) ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: imageContainerClass }, { children: (0, jsx_runtime_1.jsx)(sitecore_jss_react_1.Image, { field: (_e = props.fields) === null || _e === void 0 ? void 0 : _e.image }) }))) : null] })));
};
exports.default = Content;
const NoImage = (props) => {
    var _a;
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "No Image" }), (0, jsx_runtime_1.jsx)(sitecore_jss_react_1.RichText, { field: (_a = props.fields) === null || _a === void 0 ? void 0 : _a.content })] }));
};
exports.NoImage = NoImage;
