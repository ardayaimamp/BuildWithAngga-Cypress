describe('Test Website Build With Angga view mobile responsive ipad', () => {
  beforeEach(() => {
    cy.visit('https://buildwithangga.com/bootcamp')
    })

    it('tampilan website WBA : ipad ', () => {
      cy.viewport(768,1024)
    })
    it('tampilan website WBA : ipad 2', () => {
      cy.viewport('ipad-2')
    })
    it('tampilan website WBA  : Ipad mini', () => {
      cy.viewport('ipad-mini')
    })
    it('tampilan website WBA : ipad air', () => {
      cy.viewport(820, 1180)
    })
    it('tampilan website WBA : ipad pro', () => {
      cy.viewport(1024, 1366)
    })
   
   



})