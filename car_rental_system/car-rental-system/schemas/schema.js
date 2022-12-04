// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import cars from './cars'
import home from './banner'
import aboutus from './aboutus'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    cars, home, aboutus
  ]),
})
