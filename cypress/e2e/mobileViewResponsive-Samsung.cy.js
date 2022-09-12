describe('Test Website Build With Angga view mobile responsive Samsung', () => {
  beforeEach(() => {
    cy.visit('https://buildwithangga.com/bootcamp')
    })

    it('tampilan website WBA responsive mobile : samsung note 9', () => {
      cy.viewport('samsung-note9')
    })
    it('tampilan website WBA mobile : samsung-s10', () => {
      cy.viewport('samsung-s10')
    })
    it('tampilan website WBA mobile : Galaxy fold', () => {
      cy.viewport(280, 653)
    })
    it('tampilan website WBA mobile : Galaxy A51/71', () => {
      cy.viewport(412, 914)
    })
   
   



})