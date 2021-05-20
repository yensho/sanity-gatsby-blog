export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60a6d6dc947ab02e10b070c7",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ce1euazt",
                  apiId: "78b2da42-a5fc-48be-ae39-cf344a06504e",
                },
                {
                  buildHookId: "60a6d6dc6323372f003a21ec",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-2mxuyh78",
                  apiId: "7e6473e6-485d-434b-bd05-be22343f3199",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/yensho/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-2mxuyh78.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
