describe('Test Website Build With Angga view mobile responsive iphone', () => {
  beforeEach(() => {
    cy.visit('https://buildwithangga.com/bootcamp')

    })

    it('Memiliki tittle tag ', () => {
        cy.title().should('eq', 'Bootcamp Coding & Design by BuildWith Angga')
    });

    it('cek url harus : https://buildwithangga.com/bootcamp', () => {
        cy.url().should('eq', 'https://buildwithangga.com/bootcamp')
    });

    it('cek HTTPS', () => {
        cy.location('protocol').should('contains', 'https')
    });

    it('hostname harus www.buildwithangga.com/bootcamp', () => {
        cy.location('hostname').should('eq', 'buildwithangga.com')
    });
    
    context("Responsive mobile Iphone", () => {
      it('tampilan website WBA mobile : Iphone 6 / 7 / 8', () => {
        cy.viewport('iphone-6')
        cy.contains("New Bootcamp").should("be.visible")
        cy.contains("Build Your Career").should("be.visible")
        cy.get(".course-card").should("be.visible")
        cy.get("img[class='thumbnail-bootcamp']").should("be.visible")
        cy.get(".course-detail").should("be.visible")

        cy.contains("Why Us").should("be.visible")
        cy.contains("Benefit Unggulan").should("be.visible")
        cy.get(".item").should("be.visible")
        cy.get("h2[class='title mb-0']").should("be.visible")
        cy.get("p[class='mt-3 capt mb-0']").should("be.visible")
      })
      it('tampilan website WBA mobile : Iphone 6 / 7 / 8 plus', () => {
        cy.viewport('iphone-6+')
        cy.contains("Build Your Career").should("be.visible")
        cy.get(".course-card").should("be.visible")
        cy.get("img[class='thumbnail-bootcamp']").should("be.visible")
        cy.get(".course-detail").should("be.visible")
        cy.get(".container-fluid").should("be.visible")

        cy.contains("Why Us").should("be.visible")
        cy.contains("Benefit Unggulan").should("be.visible")
        cy.get(".item").should("be.visible")
        cy.get("h2[class='title mb-0']").should("be.visible")
        cy.get("p[class='mt-3 capt mb-0']").should("be.visible")
      })
      it('tampilan website WBA mobile : Iphone x', () => {
        cy.viewport('iphone-x')
        cy.contains("Build Your Career").should("be.visible")
        cy.get(".course-card").should("be.visible")
        cy.get("img[class='thumbnail-bootcamp']").should("be.visible")
        cy.get(".course-detail").should("be.visible")

        cy.contains("Why Us").should("be.visible")
        cy.contains("Benefit Unggulan").should("be.visible")
        cy.get(".item").should("be.visible")
        cy.get("h2[class='title mb-0']").should("be.visible")
        cy.get("p[class='mt-3 capt mb-0']").should("be.visible")
      })
      it('tampilan website WBA mobile : Iphone xr', () => {
        cy.viewport('iphone-xr')
        cy.contains("Build Your Career").should("be.visible")
        cy.get(".course-card").should("be.visible")
        cy.get("img[class='thumbnail-bootcamp']").should("be.visible")
        cy.get(".course-detail").should("be.visible")

        cy.contains("Why Us").should("be.visible")
        cy.contains("Benefit Unggulan").should("be.visible")
        cy.get(".item").should("be.visible")
        cy.get("h2[class='title mb-0']").should("be.visible")
        cy.get("p[class='mt-3 capt mb-0']").should("be.visible")
      })
      
      it('tampilan website WBA mobile : Iphone se2', () => {
        cy.viewport('iphone-se2')
        cy.contains("Build Your Career").should("be.visible")
        cy.get(".course-card").should("be.visible")
        cy.get("img[class='thumbnail-bootcamp']").should("be.visible")
        cy.get(".course-detail").should("be.visible")

        cy.contains("Why Us").should("be.visible")
        cy.contains("Benefit Unggulan").should("be.visible")
        cy.get(".item").should("be.visible")
        cy.get("h2[class='title mb-0']").should("be.visible")
        cy.get("p[class='mt-3 capt mb-0']").should("be.visible")
      })
      it('tampilan website WBA mobile : Iphone 12pro', () => {
        cy.viewport(390,844)
        cy.contains("Build Your Career").should("be.visible")
        cy.get(".course-card").should("be.visible")
        cy.get("img[class='thumbnail-bootcamp']").should("be.visible")
        cy.get(".course-detail").should("be.visible")

        cy.contains("Why Us").should("be.visible")
        cy.contains("Benefit Unggulan").should("be.visible")
        cy.get(".item").should("be.visible")
        cy.get("h2[class='title mb-0']").should("be.visible")
        cy.get("p[class='mt-3 capt mb-0']").should("be.visible")
      })

    })

    context("Tampilan Section BWA/Bootcamp", () => {
      it.only('cek tampilan Section : Build Your Career', () => {
        cy.contains("New Bootcamp").should("be.visible")
        cy.contains("Build Your Career").should("be.visible")

        cy.get(".course-card").should("be.visible")

        cy.get("img[class='thumbnail-bootcamp']").should("be.visible")

        cy.get(".course-detail").should("be.visible")
        cy.contains("Product Management: Mastering Product").should("be.visible") //.click()
        cy.get("a[href*='product-management']")
        // cy.url().should("eq", "https://buildwithangga.com/bootcamp/product-management-mastering-product");

        // cy.location("pathname").should("eq", "bootcamp/product-management-mastering-product") ==> error pathname
       


      })
      
      it('cek tampilan Section : Benefit Unggulan', () => {
        cy.contains("Why Us").should("be.visible")
        cy.contains("Benefit Unggulan").should("be.visible")

        cy.get(".item").should("be.visible")
        
        cy.get("h2[class='title mb-0']").should("be.visible")
        cy.contains("Studi Kasus").should("be.visible")
        cy.contains("Konsultasi").should("be.visible")
        cy.contains("Job & Career Advice").should("be.visible")
        // cy.contains("Portfolio").should("be.visible") === >>> // this not visible contents , 

        cy.get("p[class='mt-3 capt mb-0']").should("be.visible")
        cy.contains("Kita akan belajar membangun sebuah real-world project di bidang IT").should("be.visible")
        cy.contains("Gabung dengan private group untuk berkonsultasi dengan mentor kelas").should("be.visible")
        cy.contains("Perdalam soft skills kita untuk mendapatkan pekerjaan di perusahaan besar").should("be.visible")
        cy.contains("Pelajari dan miliki hasil karya untuk membangun karir impian").should("be.visible")
        
        
      })

      it('cek tampilan Section : Succes Stories', () => {
        cy.contains("Success Stories").should("be.visible")
        cy.contains("Membangun Hasil Karya").should("be.visible")
        cy.contains("Yang Bermanfaat").should("be.visible")
        cy.get(".card-review").should("be.visible")
      });
      
    })



})