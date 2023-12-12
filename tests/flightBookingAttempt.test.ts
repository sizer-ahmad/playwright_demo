import { test } from '@playwright/test'
import { CommonActions } from '../actions/common.action'
import { LoginActions } from '../actions/login.action'
import { FlightBookingActions } from '../actions/flightBooking.action'
import loginPage from '../pages/login.page'
import loginData from '../data/login.data.json'
import flightBookingPage from '../pages/flightBooking.page'
import flightBookingData from '../data/flightBooking.data.json'

test.describe('Booking a flight.', () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginActions(page)
    
    //Login to the page before each test.
    await login.goToLoginPage()
    await login.loginWithCredentials(loginData.userName, loginData.password)
  })

  test('Validate the login.', async ({ page }) => {
    const commonAction = new CommonActions(page)

    //Validate the successfully login message.
    await commonAction.validateTextInElement(
      loginPage.loginValidationTextSelector,
      loginData.validationText
    )
  })

  test('Varify the flight checking functionality.', async ({ page }) => {
    const commonAction = new CommonActions(page)
    const flightBookingAction = new FlightBookingActions(page)

    const formData = {
      flightTypeSelector: flightBookingPage.oneWayFlightTypeRadioButtonSelector,
      serviceClassSelector: flightBookingPage.firstClassServiceRadioButtonSelector,
      ...flightBookingData.formData
    }

    //Click the flights button.
    await commonAction.clickOnElement(flightBookingPage.flightsButtonSelector)

    //Validate the flight finder header.
    await commonAction.checkVisibility(
      flightBookingPage.flightFinderPageValidationLocator
    )

    //Fill the flight booking form.
    await flightBookingAction.fillFlightBookingForm(formData)

    //Click the continue button.
    await commonAction.clickOnElement(flightBookingPage.continueButtonSelector)

    //Validate the result.
    await commonAction.validateTextInElement(
      flightBookingPage.flightFindStatusTextSelector,
      flightBookingData.flightFindStatusText
    )

    //Click the back to home button.
    await commonAction.clickOnElement(
      flightBookingPage.backToHomeButtonSelector
    )

    //Validate the home page.
    await commonAction.checkVisibility(loginPage.loginButtonSelector)
  })
})
