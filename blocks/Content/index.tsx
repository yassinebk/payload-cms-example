import React from "react";
import { Block } from "payload/types";
import RichText from "../../components/RichText";
import classes from "./index.module.css";

export type Type = {
  blockType: "content";
  blockName?: string;
  content: unknown;
};

export const Content: Block = {
  slug: "content",
  labels: {
    singular: "Content",
    plural: "Content Blocks",
  },
  fields: [
    {
      name: "backgroundColor",
      type: "radio",
      label: "Background Color",
      defaultValue: "none",
      admin: {
        layout: "horizontal",
      },
      options: [
        {
          label: "Red",
          value: "red",
        },
        {
          label: "Blue",
          value: "blue",
        },
        {
          label: "Orange",
          value: "orange",
        },
        {
          label: "None",
          value: "none",
        },
      ],
    },
    {
      name: "accentLine",
      label: "Enable Accent Line",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "accentLineAlignment",
      label: "Accent Line Alignement",
      type: "radio",
      defaultValue: "left",
      options: [
        {
          label: "Left",
          value: "left",
        },
        {
          label: "Right",
          value: "right",
        },
      ],
      admin: {
        condition: (_, siblingData) => siblingData.accentLine,
        layout: "horizontal",
      },
    },
    {
      name: "columns",
      type: "array",
      minRows: 1,
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "width",
              label: "Column Width",
              type: "select",
              defaultValue: "full",
              required: true,
              admin: {
                width: "50%",
              },
              options: [
                {
                  label: "One Third",
                  value: "third",
                },
                {
                  label: "Half",
                  value: "half",
                },
                {
                  label: "Two Third",
                  value: "twoThirds",
                },
                {
                  label: "Full",
                  value: "full",
                },
              ],
            },
            {
              name: "alignment",
              type: "select",
              label: "Alignment",
              defaultValue: "left",
              required: true,
              admin: {
                width: "50%",
              },
              options: [
                {
                  label: "Left",
                  value: "left",
                },
                {
                  label: "Right",
                  value: "right",
                },
                {
                  label: "Center",
                  value: "center",
                },
              ],
            },
          ],
        },
        {
          name: "content",
          type: "richText",
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "paddingTop",
          label: "Padding Top",
          type: "select",
          options: [
            {
              label: "Small",
              value: "small",
            },
            {
              label: "Medium",
              value: "medium",
            },
            {
              label: "Large",
              value: "large",
            },
          ],
          admin: {
            width: "50%",
          },
        },
        {
          name: "paddingBottom",
          label: "Padding Bottom",
          type: "select",
          options: [
            {
              label: "Small",
              value: "small",
            },
            {
              label: "Medium",
              value: "medium",
            },
            {
              label: "Large",
              value: "large",
            },
          ],
          admin: {
            width: "50%",
          },
        },
      ],
    },
  ],
};

export const Component: React.FC<Type> = (props) => {
  const { content } = props;

  return (
    <div className={classes.wrap}>
      <RichText content={content} className={classes.content} />
    </div>
  );
};

export default Content;
