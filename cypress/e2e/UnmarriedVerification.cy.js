import data from "../fixtures/testdata/data";
describe('Unmarried Verification', ()=>{
    it("Unmarried Verification", ()=>{

        cy.on('uncaught:exception', () => false)
        cy.login()
        /*cy.get('.chakra-heading.css-woev60').contains("Unmarried Verification").should("be.visible").click();
        cy.get('[placeholder="Search User"]').click()
        cy.contains('Rajiv Notification - (9843530325)').click();



        cy.get('#field-\\:r3f\\:').select('4')

        cy.get('[placeholder="Enter first name"]').clear().type(data.firstNamee)
        //cy.get('[placeholder="Enter middle name"]').clear().type(data.middleName)
        cy.get('[placeholder="Enter last name"]').clear().type(data.lastNamee)

        cy.get('[placeholder="Enter citizenship number"]').clear().type(data.citizenshipNumber)
        
        cy.get('#field-\\:r3j\\:').select('Male')

        cy.get('.form-control.nepali-date-picker').eq(0).click()
        cy.get('td.month-day.current')  // target only current month dates
        .contains('६')                // find the td with '३'
        .click();  
        
        cy.get('.form-control.nepali-date-picker').eq(1)
        .click()
        cy.get('td.month-day.current')  // target only current month dates
        .contains('१३')                // find the td with '३'
        .click();

        cy.get('#field-\\:r3n\\:').select('kathmandu')

        
        cy.get('#field-\\:r3p\\:').select('बागमती')
        cy.get('#field-\\:r3q\\:').select('काठमाडौँ')
        cy.get('#field-\\:r3r\\:').select('टोखा नगरपालिका')

        cy.get('#field-\\:r3s\\:').select('2867')
        cy.get('[placeholder="Write your Grand Father First Name"]').type(data.grandfatherfirstname)
        //cy.get('[placeholder="Enter middle name"]').clear().type(data.middleName)
        cy.get('[placeholder="Write your Grand Father Last Name"]').type(data.grandfatherlastname)

        cy.get('#field-\\:r41\\:').type(data.fatherfirstname)
        //cy.get('[placeholder="Enter middle name"]').clear().type(data.middleName)
        cy.get('#field-\\:r43\\:').type(data.fatherlastname)

        cy.get('#field-\\:r44\\:').type(data.motherfirstname)
        //cy.get('[placeholder="Enter middle name"]').clear().type(data.middleName)
        cy.get('#field-\\:r46\\:').type(data.motherlastname)
        

        cy.get('.form-control.nepali-date-picker').eq(2)
        .click()
        cy.get('td.month-day.current')  // target only current month dates
        .contains('१')                // find the td with '३'
        .click();

        cy.get('#field-\\:r48\\:').attachFile('hi.pdf');

        cy.get('[type= "submit"]').click()
        cy.get('.chakra-button.css-arfz4w').click()*/


        cy.get('a[href*="admin-dashboard/application"]')
        .contains('Sifarish')
        .click({ force: true });

        cy.contains('td', 'Unmarried Verification')
        .first()
        .closest('tr')
        .within(() => {
        // Click the View button in the row
        cy.get('button[aria-label="show"]')
        .scrollIntoView()
        .click({ force: true });

      });

        cy.get('#menu-button-\\:r2j\\:').click()

        //cy.get('button.chakra-menu__menuitem.css-y7jzs3').eq(1).click();

        cy.get('.chakra-select.css-ysxrja').select('7f59d5eb-52c3-493d-9482-6e82ef96869b')
        cy.get('#menu-button-\\:r2r\\:').click()
        cy.get('#menu-list-\\:r2r\\:-menuitem-\\:r2s\\:').click();

        // Force Sifarish link to open in the same tab
        cy.get('a[href*="admin-dashboard/application"]')
        .contains('Sifarish')
        .invoke('removeAttr', 'target')
        .click();


  })
});








 