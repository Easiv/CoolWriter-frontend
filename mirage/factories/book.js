import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  cover() {
    return faker.image.imageUrl();
  },

  title() {
    return faker.lorem.sentence();
  },

  author() {
    return faker.name.firstName();
  },

  userEmail: 'mirage@fake.do',

  description() {
    return faker.lorem.sentences(5);
  }

});
