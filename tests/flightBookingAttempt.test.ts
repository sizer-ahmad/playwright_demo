import { test, chromium, Browser, Page } from '@playwright/test'
import { commonActions } from '../actions/common.action'
import { loginActions } from '../actions/login.action'
import loginPage from '../pages/login.page'
import loginData from '../data/login.data.json'
import flightBookingPage from '../pages/flightBooking.page'
import flightBookingData from '../data/flightBooking.data.json'

test.describe('Booking a flight.', () => {
  test.beforeEach(async ({ page }) => {
    const login = new loginActions(page)
    //Login to the page before each test.
    await login.goToLoginPage()
    await login.loginWithCredentials(
      loginPage.userNameFieldSelector,
      loginPage.passwordFieldSelector,
      loginPage.loginButtonSelector
    )
  })

  test('Validate the login.', async ({ page }) => {
    const login = new loginActions(page)
    //Validate the login.
    await new commonActions(page).validateTextInElement(
      loginPage.loginValidationTextSelector,
      loginData.validationText
    )
  })

  test('Attempt to book a flight.', async ({ page }) => {
    const commonAction = new commonActions(page)
    //Click the flights button.
    await commonAction.clickOnElement(flightBookingPage.flightsButtonSelector)
    //Validate the flight finder header.
    await commonAction.checkVisibility(
      flightBookingPage.flightFinderPageValidationLocator
    )

    //Select the flight type.
    await commonAction.clickOnElement(
      flightBookingPage.oneWayFlightTypeRadioButtonSelector
    )
    //Select passenger count.
    await commonAction.selectOptionFromDropdown(
      flightBookingPage.passengersDropdownSelector,
      flightBookingData.passengerCount
    )
    //Select departing from location.
    await commonAction.selectOptionFromDropdown(
      flightBookingPage.departingFromDropdownSelector,
      flightBookingData.departingFrom
    )
    //Select departing month.
    await commonAction.selectOptionFromDropdown(
      flightBookingPage.departingMonthDropdownSelector,
      flightBookingData.departingMonth
    )
    //Select departing day.
    await commonAction.selectOptionFromDropdown(
      flightBookingPage.departingDayDropdownSelector,
      flightBookingData.departingDay
    )
    //Select arriving location.
    await commonAction.selectOptionFromDropdown(
      flightBookingPage.arrivingInDropdownSelector,
      flightBookingData.arrivingIn
    )
    //Select returning month.
    await commonAction.selectOptionFromDropdown(
      flightBookingPage.returningMonthDropdownSelector,
      flightBookingData.returningMonth
    )
    //Select returning day.
    await commonAction.selectOptionFromDropdown(
      flightBookingPage.returningDayDropdownSelector,
      flightBookingData.returningDay
    )
    //Select the service class.
    await commonAction.clickOnElement(
      flightBookingPage.firstClassServiceRadioButtonSelector
    )
    //Select airline.
    await commonAction.selectOptionFromDropdown(
      flightBookingPage.airlineDropdownSelector,
      flightBookingData.airlineOption
    )

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
