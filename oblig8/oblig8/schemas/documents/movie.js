const movie = {
  title: "Movie",
  name: "movie",
  type: "document",
  fields: [
    {
      title: "MovieTitle",
      name: "title",
      type: "string",
      description: "Her legger du inn filmtittelen",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      description: "Unike URL-en for tittelen",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      title: "Skuespiller",
      name: "actor",
      type: "reference",
      to: [{ type: "actor" }],
    },
  ],
};

export default movie