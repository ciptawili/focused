const RANDOM_ID = Cypress._.random(0, 100);
const id = RANDOM_ID;
const name = 'Cipta Wili';
const password = 'cityslicka';
const job = 'QA'
const name2 = 'Cipta ganteng';
const job2 = 'Test Engineer';
// required for passing the registration POST request
const DEFINED_USER_EMAIL = 'eve.holt@reqres.in';

export const DATA_USER = {
  id: 2,
  email: 'janet.weaver@reqres.in',
  first_name: 'Janet',
  last_name: 'Weaver',
  avatar: 'https://reqres.in/img/faces/2-image.jpg',
};

export const LOGIN_USER = {
  EMAIL_AND_PASSWORD: {
    email:DEFINED_USER_EMAIL,
    password,
  },

  EMAIL: {
    email:DEFINED_USER_EMAIL,
  },

  PASSWORD:{
    password,
  }
};

export const USER = {
  CREATE_USER:{
    name,
    job,
  },

  UPDATE_USER: {
    name2,
    job2,
  }
};

export const REGISTER = {
  EMAIL_AND_PASSWORD: {
    email:DEFINED_USER_EMAIL,
    password,
  },

  EMAIL: {
    email:DEFINED_USER_EMAIL,
  },

  PASSWORD:{
    password,
  }
};
