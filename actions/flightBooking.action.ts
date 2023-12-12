import { Page } from '@playwright/test'
import flightBookingPage from '../pages/flightBooking.page'

interface FormData {
  flightTypeSelector: string
  serviceClassSelector: string
  passengerCount: string
  departingFrom: string
  departingMonth: string
  departingDay: string
  arrivingIn: string
  returningMonth: string
  returningDay: string
  airlineOption: string
}

export class FlightBookingActions {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  //Fill the flight booking form.
  async fillFlightBookingForm(formData: FormData) {
    const {
      flightTypeSelector,
      serviceClassSelector,
      passengerCount,
      departingFrom,
      departingMonth,
      departingDay,
      arrivingIn,
      returningMonth,
      returningDay,
      airlineOption,
    } = formData

    await this.page.locator(flightTypeSelector).click()
    await this.page.selectOption(
      flightBookingPage.passengersDropdownSelector,
      passengerCount
    )
    await this.page.selectOption(
      flightBookingPage.departingFromDropdownSelector,
      departingFrom
    )
    await this.page.selectOption(
      flightBookingPage.departingMonthDropdownSelector,
      departingMonth
    )
    await this.page.selectOption(
      flightBookingPage.departingDayDropdownSelector,
      departingDay
    )
    await this.page.selectOption(
      flightBookingPage.arrivingInDropdownSelector,
      arrivingIn
    )
    await this.page.selectOption(
      flightBookingPage.returningMonthDropdownSelector,
      returningMonth
    )
    await this.page.selectOption(
      flightBookingPage.returningDayDropdownSelector,
      returningDay
    )
    await this.page.locator(serviceClassSelector).click()
    await this.page.selectOption(
      flightBookingPage.airlineDropdownSelector,
      airlineOption
    )
  }
}
