const selector = require("../../helper/selector");

const getIframe = () => {
    return cy
    .get('iframe[id=snap-midtrans]')
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)
}

const getIframeIssuing = () => {
    return cy
    .get('[class=iframe-3ds]')
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)
}

describe('Checkout Test', () => {
    before('verify buy product', () => {
        cy.visit('https://demo.midtrans.com/')
        cy.get(selector.buttonBuy).click()
        cy.get(selector.buttonCheckout).click()
    });

    context('Failed Paymnent', () => {
        it('blank data car', () => {
            getIframe().find(selector.listPayment).eq(0).click()
            getIframe().find(selector.buttonPay).click()
            getIframe().contains('div', 'Please enter your card number.')
            getIframe().contains('div', "Expiry can't be empty.")
            getIframe().contains('div', "CVV can't be empty.")
        });
    
        it('invalid card data', () => {
            getIframe().find(selector.inputCardNumber).type('1293998239824928')
            getIframe().find(selector.inputCardExpired).type('0124')
            getIframe().find(selector.inputCvv).type('123')
            getIframe().find(selector.buttonPay).click()
            getIframe().contains('div', 'Make sure your card number are correct.')
        });
    
        it('invalid expired data', () => {
            getIframe().find(selector.inputCardNumber).clear()
            getIframe().find(selector.inputCardExpired).clear()
            getIframe().find(selector.inputCvv).clear()
            getIframe().find(selector.inputCardNumber).type('4811111111111114')
            getIframe().find(selector.inputCardExpired).type('0120')
            getIframe().find(selector.inputCvv).type('123')
            getIframe().find(selector.buttonPay).click()
            getIframe().contains('div', 'Invalid expiration detail.')
        });
    })

    context('Success Payment', () => {
        it('valid payment credit card', () => {
            getIframe().find(selector.inputCardNumber).clear()
            getIframe().find(selector.inputCardExpired).clear()
            getIframe().find(selector.inputCvv).clear()
            getIframe().find(selector.inputCardNumber).type('4811111111111114')
            getIframe().find(selector.inputCardExpired).type('0123')
            getIframe().find(selector.inputCvv).type('123')
            getIframe().find(selector.buttonPay).click()
        });

        it('should be input password issuing', () => {
            getIframeIssuing().find(selector.inputPasswordIssuing).type('112233')
            getIframeIssuing().find(selector.inputPasswordIssuing).type('112233')
            getIframeIssuing().find(selector.buttonOk).click()
        });
    })
    
})