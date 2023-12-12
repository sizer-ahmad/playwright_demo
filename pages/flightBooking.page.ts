const flightBookingPage = {
  //CSS Selector
  flightsButtonSelector: '[href="reservation.php"]',
  flightFinderPageValidationLocator: '[src*="flightfinder"]',
  oneWayFlightTypeRadioButtonSelector: '[value="oneway"]',
  passengersDropdownSelector: '[name="passCount"]',
  departingFromDropdownSelector: '[name="fromPort"]',
  departingMonthDropdownSelector: '[name="fromMonth"]',
  departingDayDropdownSelector: '[name="fromDay"]',
  arrivingInDropdownSelector: '[name="toPort"]',
  returningMonthDropdownSelector: '[name="toMonth"]',
  returningDayDropdownSelector: '[name="toDay"]',
  firstClassServiceRadioButtonSelector: '[value="First"]',
  airlineDropdownSelector: '[name="airline"]',
  continueButtonSelector: '[name="findFlights"]',
  flightFindStatusTextSelector: 'font[style] > b > font[size="4"]',
  backToHomeButtonSelector: '[src="images/home.gif"]',
}
export default flightBookingPage
