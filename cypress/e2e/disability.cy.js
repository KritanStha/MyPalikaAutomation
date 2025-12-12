import disabilityLocators from "../fixtures/Locators/disability";
import { personalInfo } from "../fixtures/data/SData_Version3";
import { udisability, reciverDetail } from "../fixtures/data/UData_Version3";
describe('Disability Module Test', () => {
    it('For disability', () => {
        cy.on('uncaught:exception', () => false)
        cy.login()

        cy.contains(disabilityLocators.socailService).click()
        cy.contains(disabilityLocators.disability).click()
        cy.get(disabilityLocators.create).click()
        cy.get(disabilityLocators.categorySelect).select('MODERATE').wait(2000)
        cy.get(disabilityLocators.submit).eq(1).click()
        cy.get(disabilityLocators.searchUser).click()
        cy.get('[placeholder="Search User" ]').click()
        cy.contains('button', '- (9843530325)').wait(2000).click();


        //Personal Information Section
        cy.get(disabilityLocators.firstNameEn).clear().type(personalInfo.firstNameEn).wait(2000)
        //cy.get(disabilityLocators.firstNameNepali).clear({ force: true }).wait(2000).type(personalInfo.firstNameNepali)
        cy.get(disabilityLocators.middleNameEn).clear().type(personalInfo.middleNameEn)
        //cy.get(disabilityLocators.middleNameNepali).clear({ force: true }).type(personalInfo.middleNameNepali)
        cy.get(disabilityLocators.lastNameEn).clear().type(personalInfo.lastNameEn)
        //cy.get(disabilityLocators.lastNameNepali).clear({ force: true }).type(personalInfo.lastNameNepali)
        cy.get(disabilityLocators.emailAddress).clear({ force: true }).type(personalInfo.email)
        cy.get(disabilityLocators.gender).select('FEMALE')
        cy.get(disabilityLocators.boodGroup).select('A+')
        cy.get(disabilityLocators.maritalStatus).select('SINGLE')
        cy.get(disabilityLocators.employmentStatus).select('UNEMPLOYED')
        cy.get(disabilityLocators.religion).select('Hinduism')

        cy.get(disabilityLocators.telephoneNumber).clear().type('9876543210')
        cy.get(disabilityLocators.citizenshipNumber).clear().type('9876543210')
        cy.get(disabilityLocators.citizenshipIssueDistrict).select('5')
        // Citizenship Issue Date for demo 
        cy.get(disabilityLocators.citizenshipIssueDate).eq(1).find('input').first().click()
        cy.get('td.month-day.current')
            .contains('१')
            .click();
        cy.get(disabilityLocators.qualification).wait(2000).select('BachelorsDegree')
        cy.get(disabilityLocators.occupation).select('Studying')
        cy.get(disabilityLocators.nameOfOraganization).clear().type('Test Organization')
        cy.get(disabilityLocators.monthlySalary).clear().type('50000')
        cy.get(disabilityLocators.phoneNumber).clear().type('9843530325')
        // Date of Birth
        cy.get(disabilityLocators.dateOfBirth).eq(0).find('input').first().click()
        cy.get('td.month-day.current')
            .contains('१')
            .click();
        // godaita birth certificate
        /*cy.get(disabilityLocators.birthCertificate).eq(1).find('input').first().click()
         cy.get('td.month-day.current')
             .contains('१')
             .click();*/

        //Address section
        cy.get(disabilityLocators.provinceSelect).eq(0).select('4')
        cy.get(disabilityLocators.districtSelect).eq(1).select('37')
        cy.get(disabilityLocators.localLevelSelect).eq(0).select('404')
        cy.get(disabilityLocators.wardNumberSelect).eq(0).select('3645')
        cy.get(disabilityLocators.checkBox).check({ force: true })

        //Patron Details
        cy.get(disabilityLocators.patronFirstNameEn).type(personalInfo.firstNameEn)
        cy.get(disabilityLocators.patronFirstNameNepali).eq(1).type(personalInfo.firstNameNepali, { force: true })
        cy.get(disabilityLocators.patronMiddleNameEn).type(personalInfo.middleNameEn)
        cy.get(disabilityLocators.patronMiddleNameNepali).eq(1).type(personalInfo.middleNameNepali, { force: true })
        cy.get(disabilityLocators.patronLastNameEn).type(personalInfo.lastNameEn)
        cy.get(disabilityLocators.patronLastNameNepali).eq(1).type(personalInfo.lastNameNepali, { force: true })
        cy.get(disabilityLocators.patronEmail).type(personalInfo.email)
        cy.get(disabilityLocators.patronRelation).select('Brother')
        cy.get(disabilityLocators.patronProvinceSelect).eq(1).select('3').wait(2000)
        cy.get(disabilityLocators.patronDistrictSelect).eq(2).select('26')
        cy.get(disabilityLocators.patronMunicipalitySelect).eq(3).select('301')
        cy.get(disabilityLocators.patronWardNumberSelect).eq(4).select('2640')
        cy.get(disabilityLocators.patronDOB).eq(2).find('input').first().click()
        cy.get('td.month-day.current')
            .contains('१')
            .click();
        cy.get(disabilityLocators.patronCitizenshipIssueDate).eq(3).find('input').first().click()
        cy.get('td.month-day.current')
            .contains('१')
            .click();
        cy.get(disabilityLocators.patronCitizenshipNumber).type(udisability.citizenshipNumber)
        cy.get(disabilityLocators.patronCitizenshipIssueDistrict).select('1')
        cy.get(disabilityLocators.patronContact).type(udisability.contact)
        cy.get(disabilityLocators.patronOccupation).type(udisability.occupation)
        cy.get(disabilityLocators.patronMonthlyIncome).type(udisability.mothlyIncome)


        //Disability Detail
        cy.get(disabilityLocators.registrationDate).type('2020-02-02')
        //cy.get('td.month-day.current')
        //    .contains('१')
        //    .click();
        cy.get(disabilityLocators.disabilityTypeSelect).select('VISUAL_DISABILITY')
        cy.get(disabilityLocators.subtype).select('BLINDNESS')
        cy.get(disabilityLocators.disabilitySeverity).select('MODERATE')
        cy.get(disabilityLocators.category).select('MODERATE')
        cy.get(disabilityLocators.cause).select('दुर्घटना')
        cy.get(disabilityLocators.nature).select('अस्थायी')
        cy.get(disabilityLocators.seriousness).select('मध्यम')
        cy.get(disabilityLocators.description).type(udisability.description)
        cy.get(disabilityLocators.activityLimitation).type(udisability.activityLimit)
        cy.get(disabilityLocators.usedAccessory).check({ force: true })

        cy.get(disabilityLocators.nameOfAccessory).type(udisability.nameOfAccessory)
        cy.get(disabilityLocators.dailyTask).type(udisability.dailyTask)
        cy.get(disabilityLocators.taskHelp).type(udisability.taskHelp)
        cy.get(disabilityLocators.trainigReceived).type(udisability.trainingRecord)
        cy.get(disabilityLocators.taskWithHelp).type(udisability.taskWithHelp)
        cy.get(disabilityLocators.otherServices).type(udisability.otherServices)


        //Additional Information
        cy.get(disabilityLocators.caste).type(reciverDetail.caste)
        cy.get(disabilityLocators.latestEducation).type(reciverDetail.latestEducation)
        cy.get(disabilityLocators.adOccupation).type(reciverDetail.adOccupation)
        cy.get(disabilityLocators.wardNumber).type(reciverDetail.wardNumber)
        cy.get(disabilityLocators.ownsHome).check({ force: true })
        cy.get(disabilityLocators.stillStudying).check({ force: true })


        //Receiver Detais
        cy.get(disabilityLocators.receiverNameEn).type(reciverDetail.firstNameEn)
        cy.get(disabilityLocators.receiverNameNepali).type(reciverDetail.firstNameNepali, { force: true })
        cy.get(disabilityLocators.receiverMobileNumber).type(reciverDetail.mobileNumber)
        cy.get(disabilityLocators.receiverRelation).select('Brother')
        cy.get(disabilityLocators.receiverDate).type('2020-02-02')

        //Authority Details
        cy.get(disabilityLocators.authorityNameEn).type(reciverDetail.authorityNameEn)
        cy.get(disabilityLocators.authorityNameNepali).type(reciverDetail.authorityNameNepali, { force: true })
        cy.get(disabilityLocators.authorityMobileNumber).type(reciverDetail.authorityMobileNumber)
        cy.get(disabilityLocators.approvedDate).type('2020-02-02')
        cy.get(disabilityLocators.authorityDesignation).type(reciverDetail.designation)
        cy.get(disabilityLocators.officeAddress).type(reciverDetail.officeAddress)

        cy.get(disabilityLocators.photo).wait(2000).eq(0).attachFile('/files/kiran.png')
        cy.get(disabilityLocators.sifaris).wait(2000).eq(1).attachFile('/files/compReg.pdf')
        cy.get(disabilityLocators.remarks).type(reciverDetail.remarks)
        cy.contains(disabilityLocators.finalSubmit).click()

    })
})