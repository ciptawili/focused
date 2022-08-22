import ENDPOINTS from '../../helper/pathEndPoints';
import { REGISTER } from '../../helper';

describe('Register Test', () => {
  context('Valid Register', () => {
    it('verify register user', () => {
      cy.request(
        'POST', 
        ENDPOINTS.register, 
        REGISTER.EMAIL_AND_PASSWORD
        ).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(4);
        expect(response.body.token).to.eq('QpwL5tke4Pnpja7X4');
      });
    });
  });

  context('Invalid Register', () => {
    it('verify invalid register user', () => {
      cy.request({
        method: 'POST', 
        url: ENDPOINTS.register,
        body: REGISTER.EMAIL,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(400)
        expect(response.body.error).to.eq('Missing password')
      })
    })
  })
});
