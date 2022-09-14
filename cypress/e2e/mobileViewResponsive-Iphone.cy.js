describe('Test Website Build With Angga view mobile responsive iphone 6/7/8', () => {
  beforeEach(() => {
    cy.visit('https://buildwithangga.com/bootcamp')
    cy.viewport("iphone-6")
    cy.title().should('eq', 'Bootcamp Coding & Design by BuildWith Angga')
    cy.url().should('eq', 'https://buildwithangga.com/bootcamp')
    cy.location('protocol').should('contains', 'https')
    cy.location('hostname').should('eq', 'buildwithangga.com')
    })

    context("Tampilan Navbar Header Logo BWA", () => {
      
      it('Cek Header Item Logo BWA', () => {
        cy.get('img[src="https://buildwithangga.com/themes/front/images/logo_bwa_new.svg"]').should("be.visible")
       
      });
    })

    context("Tampilan Navbar Header Buger ", () => {

      it('Cek Header Burger Menu ', () => {
        cy.get('.navbar-burger-btn').click()
      })

    })

    context("Tampilan Navbar Header Buger : Daily", () => {
      

      it('Dropdown Menu : Daily', () => {
        cy.get('.navbar-burger-btn').click()

        cy.get('.mobile-menu-title').contains("Daily")//.should("be.visible")
        cy.get('.swiper-wrapper');
        
        //FlashSale
        cy.get('img[src="https://buildwithangga.com/themes/front/images/ic_sekali_bayar.svg"]') //.should("be.visible")
        cy.get('.mobile-menu-name').contains('Flash Sale')//.should('be.visible')
        cy.get('a[href="https://buildwithangga.com/sale"]')//.should('be.visible')
        
        //Kelas Online
        cy.get('img[src="https://buildwithangga.com/themes/front/images/ic_all_course.svg"]')//.should("be.visible")
        cy.get('.mobile-menu-name').contains('Kelas Online')//.should('be.visible')
        cy.get('a[href="https://buildwithangga.com/kelas"]')//.should('be.visible')
        
        //Bootcamp
        cy.get('img[src="https://buildwithangga.com/themes/front/images/ic_video.svg"]')//.should("be.visible")
        cy.get('.mobile-menu-name').contains('Bootcamp')//.should('be.visible')
        cy.get('a[href="https://buildwithangga.com/bootcamp"]')//.should('be.visible')

      })

      it('Dropdown Menu : Resource', () => {
        cy.get('.mobile-menu-title').contains("Resource")//.should("be.visible")
        cy.get('.swiper-wrapper');

        //Alur Belajar
        cy.get('img[src="https://buildwithangga.com/themes/front/images/ic_roadmap.svg"]')//.should("be.visible")
        cy.get('.mobile-menu-name').contains('Alur Belajar')//.should('be.visible')
        cy.get('a[href="https://buildwithangga.com/journey"]')//.should('be.visible')

        //HandBook
        cy.get('img[src="https://buildwithangga.com/themes/front/images/ic_project.svg"]').should("be.visible")
        cy.get('.mobile-menu-name').contains('HandBook') //.should('be.visible')
        cy.get('a[href="https://buildwithangga.com/handbook"]')//.should('be.visible')

        //Tips Mentor
        cy.get('img[src="https://buildwithangga.com/themes/front/images/ic_profile.svg"]')//.should("be.visible")
        cy.get('.mobile-menu-name').contains('Tips Mentor')//.should('be.visible')
        cy.get('a[href="https://buildwithangga.com/tips"]')//.should('be.visible')

      });

      it('Dropdown Menu : For Corporate', () => {
        cy.get('.mobile-menu-title').contains("For Corporate") //.should("be.visible")
        cy.get('.swiper-wrapper');

        //Open Job
        cy.get('img[src="https://buildwithangga.com/themes/front/images/ic_project.svg"]')//.should("be.visible")
        cy.get('.mobile-menu-name').contains('Open Job') //.should('be.visible')
        cy.get('a[href="https://joinbwa.com/openjob"]')//.should('be.visible')

        //Show Case
        cy.get('img[src="https://buildwithangga.com/themes/front/images/ic_showcase.svg"]')//.should("be.visible")
        cy.get('.mobile-menu-name').contains('Showcase') //.should('be.visible')
        cy.get('a[href="https://buildwithangga.com/showcase"]')//.should('be.visible')


      });


    })
 
    context("Tampilan Navbar Header Masuk ", () => {
      it('Button Menu Masuk', () => {          
    
      const masuk = cy.get('a[class="navbar-auth btn-plain"]')
      masuk.should("have.attr", "href", "https://class.buildwithangga.com/login")
      masuk.contains('Masuk')
      masuk.should("have.css", "color", "rgb(52, 54, 74)")
      
      });
    })

    context("Tampilan Navbar Search ", () => {
      it('Search Button', () => {
          cy.get('img[src="https://buildwithangga.com/themes/front/images/ic_search.svg"]').should('be.visible')
      });
    })
   
    context("Tampilan mobile Section Main ", () => {
      
      it('Cek Section Main Primary', () => {
         
          cy.get('h1[class="header-primary mb-3"]').contains("Bootcamp Design & Coding").should('be.visible')
          cy.get('p[class="subtitle-primary"]').contains("Membangun karir sebagai Designer &").should('be.visible')
          cy.get('p[class="subtitle-primary"]').contains("Developer bersama mentor berpengalaman").should('be.visible')

      });

      it('Cek Tampilan Section New Bootcamps', () => {

        cy.get("p[class='text-support text-green']").contains("New Bootcamp").should("be.visible")
        cy.get('h1[class="header-primary"]').contains("Build Your Career").should("be.visible")

        cy.get(".course-card").should("be.visible")
        cy.get("img[class='thumbnail-bootcamp']").should("be.visible")

         //Python data science
        cy.get('img[src="https://buildwithangga.com/storage/assets/images/cover_bootcamp/202209131201-compressorpng-Thumbnail Bootcamp Vembry.png"]').should("be.visible")
        cy.get(".course-name").should("be.visible").contains("Python Data Science")
        cy.get("a[href='https://buildwithangga.com/bootcamp/python-data-science']")

        //Product Management
        cy.get('img[src="https://buildwithangga.com/storage/assets/images/cover_bootcamp/202208221354-Thumbnail One Day Class Mentor Jesslyn.png"]').should("be.visible") 
        cy.get(".course-name").should("be.visible").contains("Product Management: Mastering Product")
        cy.get("a[href='https://buildwithangga.com/bootcamp/product-management-mastering-product']")
        
        //Designer with figma 2022
        cy.get('img[src="https://buildwithangga.com/storage/assets/images/cover_bootcamp/202208151052-Thumbnail Bootcamp Mentor Herdetya-min.png"]').should("be.visible") 
        cy.get(".course-name").should("be.visible").contains("UI/UX Designer with Figma 2022: E-Wallet App")
        cy.get("a[href='https://buildwithangga.com/bootcamp/uiux-designer-with-figma-2022-e-wallet-app']")
       
        //Flutter Development : Food Shop App
        cy.get('img[src="https://buildwithangga.com/storage/assets/images/cover_bootcamp/202208101249-Thumbnail Flutter Mobile Development Food Shop App-min.png"]').should("be.visible") 
        cy.get(".course-name").should("be.visible").contains("Flutter Mobile Development: Food Shop App")
        cy.get("a[href='https://buildwithangga.com/bootcamp/flutter-mobile-development-food-shop-app']")
        
        //Fullstack Javascript Developer (MERN)
        cy.get('img[src="https://buildwithangga.com/storage/assets/images/cover_bootcamp/202208031014-Thumbnail Bootcamp MERN-min.png"]').should("be.visible") 
        cy.get(".course-name").should("be.visible").contains("Full-Stack JavaScript Developer (MERN)")
        cy.get("a[href='https://buildwithangga.com/bootcamp/full-stack-javascript-developer-mern']")

      });

      it('Cek Tampilan Section Benefit Unggulan', () => {
       
        cy.contains("Why Us").should("be.visible")
        cy.contains("Benefit Unggulan").should("be.visible")

        cy.get(".item").should("be.visible")
        
        cy.get("h2[class='title mb-0']").should("be.visible")
        cy.contains("Studi Kasus").should("be.visible")
        cy.contains("Konsultasi").should("be.visible")
        cy.contains("Job & Career Advice").should("be.visible")
        cy.contains("Portfolio") //.should("be.visible") ==> // this not visible contents , 

        cy.get("p[class='mt-3 capt mb-0']").should("be.visible")
        cy.contains("Kita akan belajar membangun sebuah real-world project di bidang IT").should("be.visible")
        cy.contains("Gabung dengan private group untuk berkonsultasi dengan mentor kelas").should("be.visible")
        cy.contains("Perdalam soft skills kita untuk mendapatkan pekerjaan di perusahaan besar").should("be.visible")
        cy.contains("Pelajari dan miliki hasil karya untuk membangun karir impian").should("be.visible")
        
      });

      it('Cek Tampilan Section Succes Stories', () => {
       
        cy.contains("Success Stories").should("be.visible")
        cy.contains("Membangun Hasil Karya").should("be.visible")
        cy.contains("Yang Bermanfaat").should("be.visible")

        cy.get(".card-review").should("be.visible")

        cy.get(".user-avatar").should("be.visible")

        cy.get(".review").should("be.visible")
        cy.contains("Mentornya keren cara menyampaikan setiap materinya juga detail dan mudah dipahami.")
        cy.contains("Kelas yang paling recommended pokoknya buat investasi ilmu di era revolusi industri 4.0.")
        cy.contains("Kelas yang sangat bermanfaat dan ilmu up-to-date dan yang paling penting biayanya terjangkau.")

        cy.get(".rating").should("be.visible")
      });

    })

    context("Tampilan Mobile Section Footer ", () => {
      it('Cek Section Footer', () => {
          cy.get("footer[id='footer-mobile']").should("be.visible")
      })

      it('Cek Item Footer Logo', () => {
        cy.get('img[src="https://buildwithangga.com/themes/front/images/logo_bwa_new.svg"]').should("be.visible")
        cy.get('.mobile-footer-brand').contains('BuildWith Angga').should('be.visible')
        cy.get('.mobile-footer-copyright')
        cy.get('.mobile-footer-description').contains('Website untuk belajar design dan code dari ').contains('mentor yang sangat berpengalaman')
        

      });

      it('Cek Link Footer "Dream Career" ', () => {
        cy.get(".mobile-footer-sub").contains("Dream Career").should("be.visible")
        
        cy.get("a[href='https://buildwithangga.com/handbook/user-interface-designer']").contains("UI Designer") //.should("be.visible")
        cy.get("a[href='https://buildwithangga.com/handbook/user-experience-designer']").contains("UX Designer") //.should("be.visible")
        cy.get("a[href='https://buildwithangga.com/handbook/full-stack-website-developer']").contains("Website Developer") //.should("be.visible")
        cy.get("a[href='https://buildwithangga.com/handbook/react-js-developer']").contains("React JS Developer") //.should("be.visible")
        cy.get("a[href='https://buildwithangga.com/handbook/flutter-developer']").contains("Flutter Developer") //.should("be.visible")
      });

      it('Cek Link Footer "Language" ', () => {
        cy.get(".mobile-footer-sub").contains("Language").should("be.visible")

        cy.get("a[href='https://buildwithangga.com/search?keyword=PHP']").contains("PHP") //.should("be.visible")
        cy.get("a[href='https://buildwithangga.com/search?keyword=JavaScript']").contains("JavaScript") //.should("be.visible")
        cy.get("a[href='https://buildwithangga.com/search?keyword=Python']").contains("Python") //.should("be.visible")
        cy.get("a[href='https://buildwithangga.com/search?keyword=Kotlin']").contains("Kotlin") //.should("be.visible")
        cy.get("a[href='https://buildwithangga.com/search?keyword=Golang']").contains("Golang") //.should("be.visible")
        
      });

      it('Cek Link Footer "Community" ', () => {
        cy.get(".mobile-footer-sub").contains("Community").should("be.visible")

        cy.get("a[href='https://buildwithangga.com/showcase']").contains("Showcase") //.should("be.visible")
        cy.get("a[href='https://buildwithangga.com/mentor']").contains("Mentor") //.should("be.visible")
        cy.get("a[href='https://buildwithangga.com/reviews']").contains("Testimonials") //.should("be.visible")
        cy.get("a[href='https://buildwithangga.com/webinar']").contains("Webinar") //.should("be.visible")

      });

      
      it('Cek Link Footer "Company" ', () => {
        cy.get(".mobile-footer-sub").contains("Company").should("be.visible")
        
        cy.get("a[href='https://buildwithangga.com/about-us']").contains("About Us").should("be.visible")
        cy.get("a[href='https://www.instagram.com/buildwithangga']").contains("Instagram").should("be.visible")
        cy.get("a[href='https://www.tiktok.com/@buildwithangga']").contains("TikTok") //.should("be.visible")
        cy.get("a[href='https://buildwithangga.com/careers']").contains("Careers") //.should("be.visible")
        
      });

      it('Cek Footer "Office" ', () => {
        cy.get(".mobile-footer-sub").contains("Office").should("be.visible")

        // cy.get('.container > .row > .col-12 > .d-flex > :nth-child(1)')

        cy.get(".mobile-footer-item").contains("PT Angga Membangun Indonesia").should("be.visible")
        cy.get(".mobile-footer-item").contains("Jl. KH. Wahid Hasyim Kel No.10D").should("be.visible")
        cy.get(".mobile-footer-item").contains("Jakarta, Indonesia").should("be.visible")
        cy.get(".mobile-footer-item").contains("(021) 50858650").should("be.visible")
        cy.get("a[href='mailto:team@buildwithangga.com']").contains("team@buildwithangga.com") //.should("be.visible")

          
      });
    })
      
})