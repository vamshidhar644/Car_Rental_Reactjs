export default {
    name: 'home',
    title: 'Home',
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
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'subtitle',
            title: 'Sub Title',
            type: 'string',
        },
    ],
  };