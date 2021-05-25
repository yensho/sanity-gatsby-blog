import React from "react";
import { Figure } from "./Figure";
import PortableText from "./portableText";

const serializers = {
  types: {
    /* eslint-disable-next-line react/display-name */
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    excerptReference: ({ node }) => <span><PortableText blocks={node.excerpt.body} /></span>,
  },
};

export default serializers;
