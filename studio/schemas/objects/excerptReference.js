export default {
    name: "excerptReference",
    type: "object",
    title: "Excerpt reference",
    fields: [
      {
        name: "excerpt",
        type: "reference",
        to: [
          {
            type: "excerpt",
          },
        ],
      },
    ],
    preview: {
      select: {
        title: "excerpt.name",
        body: "excerpt.body"
      },
    },
  };
  