export default {
  name: "tourCard",
  title: "GroupedTour",
  type: "document",

  fields: [
    {
      name: "featured",
      title: "marked===featured",
      type: "boolean",
    },
    {
      name: "type",
      title: "marked===free",
      type: "boolean",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "page",
      title: "Page",
      type: "document",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "hTag",
          title: "H Tag",
          type: "string",
        },
        {
          name: "highLights",
          title: "High lights",
          type: "array",
          of: [
            {
              type: "string",
            },
          ],
        },
        {
          name: "description",
          title: "Description",
          type: "text",
        },
        {
          name: "gallery",
          title: "Gallery",
          type: "array",
          of: [
            {
              type: "image",
            },
          ],
        },
        {
          name: "galleryMsg",
          title: "GalleryMsg",
          type: "text",
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
};
