export default {
    type: 'document',
    name: 'actor',
    title: 'Actor',
    fields: [
      {
        type: 'string',
        name: 'full_name',
        title: 'Name',
        description: 'Felt for å legge inn navnet på skuespilleren',
      },
      {
        title: "Slug",
        name: "slug",
        type: "slug",
        description: "Den unike URL-en for navnet",
        validation: (Rule) => Rule.required(),
        options: {
          source: "full_name",
          maxLength: 96,
        },
      }
    ],
  };
