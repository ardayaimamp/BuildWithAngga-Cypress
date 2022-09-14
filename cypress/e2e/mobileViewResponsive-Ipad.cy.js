describe('Test Website Build With Angga view mobile responsive ipad', () => {
  beforeEach(() => {
    cy.visit('https://buildwithangga.com/bootcamp')
    cy.viewport("ipad-mini")
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

    context("Tampilan Navbar Header Buger Flash Sale", () => {

      it('Cek Header Burger Menu : Flash Sale', () => {
        cy.get('button[class="navbar-toggler"]').click()

        cy.get(':nth-child(2) > .nav-link').should("be.visible")
        cy.get('a[href="https://buildwithangga.com/sale"]').contains("Flash Sale")

      })
    })

    context("Tampilan Navbar Header Buger For Students", () => {

      it('Dropdown Menu : For Student', () => {
        cy.get('button[class="navbar-toggler"]').click()

        cy.get('#navbarDropdown').contains("For Students").should("be.visible").click()
        
        //Kelas Online
        cy.get('img[src="https://buildwithangga.com/themes/front/images/ic_all_course.svg"]').should("be.visible")
        cy.get('.title').contains('Kelas Online').should('be.visible')
        cy.get('.subtitle').contains('Belajar tanpa batasan waktu').should('be.visible')

        cy.get('.stretched-link').should('have.class', 'stretched-link').and('have.attr', 'href').and('include', 'https://buildwithangga.com/kelas')     
        //cy.get('a[href="https://buildwithangga.com/kelas"]')

        //Mentor Kami
        cy.get('img[src="https://buildwithangga.com/themes/front/images/ic_mentor.svg"]').should("be.visible")
        cy.get('.title').contains('Mentor Kami').should('be.visible')
        cy.get('.subtitle').contains('Terpercaya berpengalaman').should('be.visible')
        
        // cy.get('.stretched-link').should('have.class', 'stretched-link').and('have.attr', 'href').and('include', 'https://buildwithangga.com/mentor')
        cy.get('a[href="https://buildwithangga.com/mentor"]')

        //Bootcamp
        cy.get('img[src="https://buildwithangga.com/themes/front/images/ic_video.svg"]').should("be.visible")
        cy.get('.title').contains('Bootcamp').should('be.visible')
        cy.get('.subtitle').contains('Belajar secara live-streaming').should('be.visible')
        
        // cy.get('.stretched-link').should('have.class', 'stretched-link').and('have.attr', 'href').and('include', 'https://buildwithangga.com/bootcamp')
        cy.get('a[href="https://buildwithangga.com/bootcamp"]')

        //HandBook
        cy.get('img[src="https://buildwithangga.com/themes/front/images/ic_modules.svg"]').should("be.visible")
        cy.get('.title').contains('HandBook').should('be.visible')
        cy.get('.subtitle').contains('Panduan karir bidang IT').should('be.visible')
        
        // cy.get('.stretched-link').should('have.class', 'stretched-link').and('have.attr', 'href').and('include', 'https://buildwithangga.com/handbook')
        cy.get('a[href="https://buildwithangga.com/handbook"]')
      
        //Alur Belajar
        cy.get('img[src="https://buildwithangga.com/themes/front/images/ic_flag.svg"]').should("be.visible")
        cy.get('.title').contains('Alur Belajar').should('be.visible')
        cy.get('.subtitle').contains('Arahan belajar oleh mentor').should('be.visible')
        
        // cy.get('.stretched-link').should('have.class', 'stretched-link').and('have.attr', 'href').and('include', 'https://buildwithangga.com/journey')
        cy.get('a[href="https://buildwithangga.com/journey"]')

        //Big Big Reward
        cy.get('img[src="https://buildwithangga.com/themes/front/images/ic_showcase.svg"]').should("be.visible")
        cy.get('.title').contains('Big Big Rewards').should('be.visible')
        cy.get('.subtitle').contains('Terima kasih dari kami').should('be.visible')
        
        // cy.get('.stretched-link').should('have.class', 'stretched-link').and('have.attr', 'href').and('include', 'https://buildwithangga.com/rewards')
        cy.get('a[href="https://buildwithangga.com/rewards"]')
      })
    })

    context("Tampilan Navbar Header Buger Flash Sale", () => {

      it('Cek Header Burger Menu : For Corporate', () => {
        cy.get('button[class="navbar-toggler"]').click()

        cy.get('#dropdownMenuLink').contains("For Corporate").should("be.visible").click()

        //Corporate Training
        cy.get('img[src="https://buildwithangga.com/themes/front/images/ic_video.svg"]').should("be.visible")
        cy.get('.title').contains('Corporate Training').should('be.visible')
        cy.get('.subtitle').contains('Perkuat tim design & IT dengan kami').should('be.visible')
        cy.get('a[href="https://joinbwa.com/corptraining"]')

        //Hiring Alumni
        cy.get('img[src="https://buildwithangga.com/themes/front/images/ic_showcase.svg"]').should("be.visible")
        cy.get('.title').contains('Hiring Alumni').should('be.visible')
        cy.get('.subtitle').contains('Dapatkan talent terbaik dari kami').should('be.visible')
        cy.get('a[href="https://buildwithangga.com/showcase"]')

        //Open Job
        cy.get('img[src="https://buildwithangga.com/themes/front/images/ic_project.svg"]').should("be.visible")
        cy.get('.title').contains('Open Job').should('be.visible')
        cy.get('.subtitle').contains('Posting loker pada website kami').should('be.visible')
        cy.get('a[href="https://joinbwa.com/openjob"]')

         //Build Your Project
         cy.get('img[src="https://buildwithangga.com/themes/front/images/ic_appcode.svg"]').should("be.visible")
         cy.get('.title').contains('Build Your Project').should('be.visible')
         cy.get('.subtitle').contains('Hire studio kami untuk projek Anda').should('be.visible')
         cy.get('a[href="https://joinbwa.com/hirebwa"]')

      })
    })

    context("Tampilan Navbar Header Daftar", () => {
      it('Button Menu Daftar & Masuk BWA', () => {
      cy.get('button[class="navbar-toggler"]').click()
            
      //Daftar
      const daftar = cy.get('a[class="btn btn-primary btn-masuk "]')
      daftar.should("have.attr", "href", "https://buildwithangga.com/start")
      daftar.contains('Daftar')
      daftar.should("have.css", "color", "rgb(255, 255, 255)")
      daftar.should("have.css", "background-color", "rgb(36, 71, 249)");
      
      const masuk = cy.get('a[class="btn btn-secondary btn-daftar d-xl-none"]')
      masuk.should("have.attr", "href", "https://class.buildwithangga.com")
      masuk.contains('Masuk')
      masuk.should("have.css", "color", "rgb(52, 54, 74)")

      const logoSearch = cy.get('.expanding-search-icon > .search')
      logoSearch.should('have.attr', 'src', 'https://buildwithangga.com/themes/front/images/ic_search.svg')
      logoSearch.click()
      
      const search = cy.get('#searchBarModule')
      search.should('have.attr', 'type', 'text')
      search.type('Bootcamp')
      

      });
    })
   
    context("Tampilan mobile Section Main : Ipad Mini", () => {
      
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

    context("Tampilan Mobile Section Footer : Ipad Mini", () => {
      it('Cek Section Footer', () => {
          cy.get(".item-footer").should("be.visible")
      })

      it('Cek Item Footer Logo', () => {
        cy.get('img[src="https://buildwithangga.com/themes/front/images/logo_bwa_new.svg"]').should("be.visible")
        cy.contains("Website untuk belajar design dan code dari mentor yang sangat berpengalaman di bidangnya masing-masing.")

        
      });

      it('Cek Link Footer "Start Your Career" ', () => {
        cy.get(".header-category").contains("Start Your Career").should("be.visible")
        
        cy.get("a[href='https://buildwithangga.com/handbook/user-interface-designer']").contains("UI Designer").should("be.visible")
        cy.get("a[href='https://buildwithangga.com/handbook/user-experience-designer']").contains("UX Designer").should("be.visible")
        cy.get("a[href='https://buildwithangga.com/handbook/full-stack-website-developer']").contains("Website Developer").should("be.visible")
        cy.get("a[href='https://buildwithangga.com/handbook/react-js-developer']").contains("React JS Developer").should("be.visible")
        cy.get("a[href='https://buildwithangga.com/handbook/flutter-developer']").contains("Flutter Developer").should("be.visible")
      });

      it('Cek Link Footeer "Resources" ', () => {
        cy.get(".header-category").contains("Resources").should("be.visible")
        
        cy.get("a[href='https://buildwithangga.com/handbook']").contains("HandBook") //.should("be.visible") ==> error attribute display
        cy.get("a[href='https://buildwithangga.com/digibook']").contains("DigiBook") //.should("be.visible") ==> errot atrribute display
        cy.get("a[href='https://shaynakit.com']").contains("Pixel Assets").should("be.visible")
        // cy.get("a[href='https://elements.buildwithangga.com']").contains("Website Builder").should("be.visible") ==> //Error Program Page
      });

      it('Cek Link Footer "Mastering New Tools"', () => {
        cy.get(".header-category").contains("Mastering New Tools").should("be.visible")

        cy.get("a[href='https://buildwithangga.com/search?keyword=Figma']").contains("Figma").should("be.visible")
        cy.get("a[href='https://buildwithangga.com/search?keyword=Blender+3D']").contains("Blender 3D").should("be.visible")
        cy.get("a[href='https://buildwithangga.com/search?keyword=Vue+JS']").contains("Vue JS").should("be.visible")
        cy.get("a[href='https://buildwithangga.com/search?keyword=Adobe+XD']").contains("Adobe XD").should("be.visible")
        cy.get("a[href='https://buildwithangga.com/search?keyword=React+JS']").contains("React JS").should("be.visible")
      
      });

      it('Cek Link Footer "Learn Language" ', () => {
        cy.get(".header-category").contains("Learn Language").should("be.visible")

        cy.get("a[href='https://buildwithangga.com/search?keyword=PHP']").contains("PHP").should("be.visible")
        cy.get("a[href='https://buildwithangga.com/search?keyword=JavaScript']").contains("JavaScript").should("be.visible")
        cy.get("a[href='https://buildwithangga.com/search?keyword=Dart']").contains("Dart").should("be.visible")
        cy.get("a[href='https://buildwithangga.com/search?keyword=HTML']").contains("HTML & CSS").should("be.visible")
        cy.get("a[href='https://buildwithangga.com/search?keyword=Kotlin']").contains("Kotlin").should("be.visible")
        
      });

      it('Cek Link Footer "Products" ', () => {
        cy.get(".header-category").contains("Products").should("be.visible")

        cy.get("a[href='https://buildwithangga.com/tips']").contains("Tips") //.should("be.visible")
        cy.get("a[href='https://buildwithangga.com/kelas']").contains("Online Course").should("be.visible")
        cy.get("a[href='https://elements.buildwithangga.com/']").contains("Website Builder").should("be.visible")
        cy.get("a[href='https://shaynakit.com']").contains("Design Resources").should("be.visible")
        cy.get("a[href='https://buildwithangga.com/dashkit']").contains("Dashboard Kit HTML").should("be.visible")
          
      });

      it('Cek Link Footer "Community" ', () => {
        cy.get(".header-category").contains("Community").should("be.visible")

        cy.get("a[href='https://buildwithangga.com/showcase']").contains("Showcase") //.should("be.visible")
        cy.get("a[href='https://buildwithangga.com/reviews']").contains("Testimonials").should("be.visible")
        cy.get("a[href='https://buildwithangga.com/mentor']").contains("Mentor").should("be.visible")
        cy.get("a[href='https://buildwithangga.com/webinar']").contains("Webinar").should("be.visible")

      });

      it('Cek Link Footer "Company" ', () => {
        cy.get(".header-category").contains("Company").should("be.visible")
          
        cy.get("a[href='https://buildwithangga.com/about-us']").contains("About").should("be.visible")
        cy.get("a[href='https://buildwithangga.com/about-us/timeline']").contains("Our Timeline").should("be.visible")
        cy.get("a[href='https://buildwithangga.com/contact-us']").contains("Contact").should("be.visible")
        cy.get("a[href='https://buildwithangga.com/careers']").contains("Careers").should("be.visible")
        
      });
        
      it('Cek Link Footer "Explore" ', () => {
        cy.get(".header-category").contains("Explore").should("be.visible")
          
        cy.get("a[href='https://buildwithangga.com/search']").contains("Cari Kelas").should("be.visible")
        cy.get("a[href='https://buildwithangga.com/journey']").contains("Roadmap Belajar").should("be.visible")
        cy.get("a[href='https://buildwithangga.com/kelas']").contains("All Courses").should("be.visible")
        cy.get("a[href='https://buildwithangga.com/cek-sertifikat']").contains("Cek Sertifikat").should("be.visible")
        
      });

      it('Cek Link Footer "Useful Links" ', () => {
        cy.get(".header-category").contains("Useful Links").should("be.visible")
        
        cy.get("a[href='https://buildwithangga.com/privacy-and-policy']").contains("Privacy & Policy").should("be.visible")
        cy.get("a[href='https://buildwithangga.com/terms-and-conditions']").contains("Terms & Conditions").should("be.visible")
        cy.get("a[href='https://www.notion.so/galpratama/Jam-Operasional-b806c2c999274568960be51b0de5afda']").contains("Jam Operasional").should("be.visible")
        
      });
      
      it('Cek Link Footer "Languange" ', () => {
        cy.get(".header-category").contains("Languange").should("be.visible")

        cy.get("a[href='https://buildwithangga.com/languages/en/back']").contains("English (US)").should("be.visible")
        cy.get("a[href='https://buildwithangga.com/languages/id/back']").contains("Bahasa Indonesia").should("be.visible")
              
      });

      it('Cek Footer "Office" ', () => {
        cy.get(".header-category").contains("Office").should("be.visible")

        cy.get(".text").contains("PT Angga Membangun Indonesia").should("be.visible")
        cy.get(".text").contains("Jl. KH. Wahid Hasyim Kel No.10D").should("be.visible")
        cy.get(".text").contains("Jakarta, Indonesia").should("be.visible")
        cy.get(".text").contains("(021) 50858650").should("be.visible")
        cy.get("a[href='mailto:team@buildwithangga.com']").contains("team@buildwithangga.com").should("be.visible")

          
      });
    })

})