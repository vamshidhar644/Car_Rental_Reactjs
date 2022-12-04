import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export default sanityClient({
  projectId: 's7o6jn0b',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-12-03',
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);
