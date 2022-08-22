import ENDPOINTS from '../../helper/pathEndPoints';
import {
    LOGIN_USER
} from '../../helper';

describe('Login Test', () => {
  context('Valid Login', () => {
    it('verify success login', () => {
      cy.request('POST',ENDPOINTS.login,
      LOGIN_USER.EMAIL_AND_PASSWORD).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.token).to.eq('QpwL5tke4Pnpja7X4');
      });
    });
  });

  context('Invalid Login', () => {
    it('verify login failed', () => {
        cy.request({
            method: 'POST', 
            url: ENDPOINTS.login,
            body: LOGIN_USER.EMAIL,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.error).to.eq('Missing password')
        });
    });
  });
});
