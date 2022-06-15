import { CollectionConfig } from "payload/types";
import meta from "../fields/meta";
import slug from "../fields/slug";

const Study: CollectionConfig = {
  slug: "studies",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    slug,
    meta,
    {
      name: "featuredImage",
      label: "Featured Image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "client",
      label: "Client",
      type: "text",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "categories",
      label: "Categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
      admin: {
        position: "sidebar",
      },
    },
  ],
};

export default Study;
