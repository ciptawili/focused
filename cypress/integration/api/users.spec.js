import ENDPOINTS from '../../helper/pathEndPoints';
import {
  USER,
} from '../../helper';

describe('Users Test', () => {
  context('GET Users', () => {
    it('verify get list users', () => {
      cy.request(
        ENDPOINTS.users
        ).then((response) => {
          expect(response.status).to.eq(200);
        }).its('body')
        .its('data')
        .should('be.an', 'array')
        .and('have.length', 6);
    });

    it('verify get user', () => {
      cy.request(`/users/2`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data.id).to.eq(2);
        expect(response.body.data.email).to.eq('janet.weaver@reqres.in');
        expect(response.body.data.first_name).to.eq('Janet');
        expect(response.body.data.last_name).to.eq('Weaver');
      });
    });

    it('verify get user not found', () => {
      cy.request({
        method: 'GET',
        url: '/users/23',
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
    
  });

  context('Create Users', () => {
    it('verify create new user', () => {
      cy.request('POST', ENDPOINTS.users, USER.CREATE_USER).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.name).to.eq(USER.CREATE_USER.name);
        expect(response.body.job).to.eq(USER.CREATE_USER.job);
        expect(response.body.id).to.be.a('string')
      });
    });
  });

  context('Update Users', () => {
    it('verify update user', () => {
      cy.request('PUT','/users/87', USER.UPDATE_USER).then((response) => {
          console.log(response.body);
          expect(response.status).to.eq(200);
          expect(response.body.name).to.eq(USER.UPDATE_USER.name2);
          expect(response.body.job).to.eq(USER.UPDATE_USER.job2);
        })
    })

    it('verify delete user', () => {
      cy.request('DELETE', '/users/87').then((response) => {
        expect(response.status).to.eq(204);
      })
    })
  })
});
