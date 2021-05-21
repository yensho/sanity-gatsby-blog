export default {
    name: "excerpt",
    type: "document",
    title: "Excerpt",
    fields: [
      {
        name: "name",
        type: "string",
        title: "Name",
      },
      {
        name: "body",
        type: "excerptPortableText",
        title: "Body",
      },
    ],
  };
  