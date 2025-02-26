"use strict";

module.exports = {
  customSyntax: "postcss-less",
  extends: ["stylelint-config-recommended"],
  plugins: ["stylelint-order"],
  rules: {
    "property-no-unknown": [
      true,
      {
        ignoreProperties: [
          // CSS Modules composition
          // https://github.com/css-modules/css-modules#composition
          "composes",
        ],
      },
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: [
          // CSS Modules :global and :local scopes
          // https://github.com/css-modules/css-modules#exceptions
          "global",
          "local",
        ],
      },
    ],
    "no-invalid-position-at-import-rule": null,
    "order/order": [
      [
        "at-variables",
        "custom-properties",
        "at-rules",
        "declarations",
        {
          type: "at-rule",
          name: "supports",
        },
        {
          type: "at-rule",
          name: "media",
        },
        "rules",
      ],
      { severity: "warning" },
    ],
    "order/properties-order": [
      [
        "composes",
        "all",
        "content",
        "display",
        "position",
        "inset",
        "inset-block",
        "inset-inline",
        "top",
        "right",
        "bottom",
        "left",
        "z-index",
        "flex",
        "flex-direction",
        "flex-grow",
        "flex-shrink",
        "flex-basis",
        "flex-flow",
        "flex-wrap",
        "grid",
        "grid-area",
        "grid-template",
        "grid-template-areas",
        "grid-template-rows",
        "grid-template-columns",
        "grid-row",
        "grid-row-start",
        "grid-row-end",
        "grid-column",
        "grid-column-start",
        "grid-column-end",
        "grid-auto-rows",
        "grid-auto-columns",
        "grid-auto-flow",
        "grid-gap",
        "grid-row-gap",
        "grid-column-gap",
        "gap",
        "row-gap",
        "column-gap",
        "align-content",
        "align-items",
        "align-self",
        "justify-content",
        "justify-items",
        "justify-self",
        "place-content",
        "place-items",
        "place-self",
        "vertical-align",
        "order",
        "float",
        "clear",
        "object-fit",
        "object-position",
        "overflow",
        "overflow-x",
        "overflow-y",
        "overflow-scrolling",
        "clip",
        "table-layout",
        "caption-side",
        "empty-cells",
        "list-style",
        "list-style-position",
        "list-style-type",
        "list-style-image",

        //
        "box-sizing",
        "width",
        "min-width",
        "max-width",
        "height",
        "min-height",
        "max-height",
        "margin",
        "margin-inline",
        "margin-block",
        "margin-top",
        "margin-right",
        "margin-bottom",
        "margin-left",
        "padding",
        "padding-inline",
        "padding-block",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "border",
        "border-spacing",
        "border-collapse",
        "border-width",
        "border-style",
        "border-color",
        "border-top",
        "border-top-width",
        "border-top-style",
        "border-top-color",
        "border-right",
        "border-right-width",
        "border-right-style",
        "border-right-color",
        "border-bottom",
        "border-bottom-width",
        "border-bottom-style",
        "border-bottom-color",
        "border-left",
        "border-left-width",
        "border-left-style",
        "border-left-color",
        "border-radius",
        "border-top-left-radius",
        "border-top-right-radius",
        "border-bottom-right-radius",
        "border-bottom-left-radius",
        "border-image",
        "border-image-source",
        "border-image-slice",
        "border-image-width",
        "border-image-outset",
        "border-image-repeat",
        "border-top-image",
        "border-right-image",
        "border-bottom-image",
        "border-left-image",
        "border-corner-image",
        "border-top-left-image",
        "border-top-right-image",
        "border-bottom-right-image",
        "border-bottom-left-image",

        //
        "color",
        "background",
        "background-color",
        "background-image",
        "background-attachment",
        "background-position",
        "background-position-x",
        "background-position-y",
        "background-clip",
        "background-origin",
        "background-size",
        "background-repeat",
        "box-decoration-break",
        "box-shadow",
        "outline",
        "outline-width",
        "outline-style",
        "outline-color",
        "outline-offset",

        //
        "fill",
        "fill-opacity",
        "stroke",
        "stroke-opacity",
        "opacity",
        "visibility",
        "filter",
        "will-change",

        //
        "font",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-weight",
        "font-style",
        "font-stretch",
        "font-kerning",
        "font-variant",
        "font-display",
        "src",
        "line-height",
        "letter-spacing",
        "quotes",
        "counter-increment",
        "counter-reset",
        "text-align",
        "text-align-last",
        "text-decoration",
        "text-emphasis",
        "text-emphasis-position",
        "text-emphasis-style",
        "text-emphasis-color",
        "text-indent",
        "text-justify",
        "text-outline",
        "text-transform",
        "text-wrap",
        "text-overflow",
        "text-overflow-ellipsis",
        "text-overflow-mode",
        "text-shadow",
        "white-space",
        "word-spacing",
        "word-wrap",
        "word-break",
        "overflow-wrap",
        "tab-size",
        "hyphens",
        "interpolation-mode",

        //
        "resize",
        "cursor",
        "pointer-events",
        "user-select",

        //
        "unicode-bidi",
        "direction",
        "columns",
        "column-span",
        "column-width",
        "column-count",
        "column-fill",
        "column-gap",
        "column-rule",
        "column-rule-width",
        "column-rule-style",
        "column-rule-color",
        "break-before",
        "break-inside",
        "break-after",
        "page-break-before",
        "page-break-inside",
        "page-break-after",
        "orphans",
        "widows",
        "zoom",
        "max-zoom",
        "min-zoom",
        "user-zoom",
        "orientation",

        //
        "transition",
        "transition-delay",
        "transition-timing-function",
        "transition-duration",
        "transition-property",
        "transform",
        "transform-origin",
        "animation",
        "animation-name",
        "animation-duration",
        "animation-play-state",
        "animation-timing-function",
        "animation-delay",
        "animation-iteration-count",
        "animation-direction",
        "animation-fill-mode",
      ],
      {
        unspecified: "bottom",
        severity: "warning",
      },
    ],
  },
};
