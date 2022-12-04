export default {
    name: 'cars',
    title: 'Cars',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Background Image',
        type: 'image',
        options: {
            hotspot: true,
        },
      },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'Rent per Hour',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    {
      name: 'seating',
      title: 'Seating Capacity',
      type: 'number',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
    },
  ],
};
