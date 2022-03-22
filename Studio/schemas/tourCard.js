export default {
  name: "tour-card",
  title: "Tour",
  type: "document",
  fields: [
    {
      name: "group",
      title: "Group",
      type: "string",
    },
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
          name: "galleryTitle",
          title: "Gallery Title",
          type: "string",
        },
        {
          name: "galleryMsg",
          title: "Gallery Message",
          type: "text",
        },
        {
          name: "infoSection",
          title: "Info Cards",
          type: "array",
          of: [
            {
              name: "infoCard",
              title: "Info Card",
              type: "document",
              fields: [
                {
                  name: "selectCardType",
                  title:
                    "Select Card Type = {location || time || price || booking}",
                  type: "string",
                },
                {
                  name: "Title",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "Textbox",
                  title: "Textbox",
                  type: "text",
                },
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                },
              ],
            },
          ],
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
