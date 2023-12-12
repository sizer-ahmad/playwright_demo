import { Page, expect } from '@playwright/test'

export class CommonActions {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  //Validate the text in any provided element.
  async validateTextInElement(element: string, text: string) {
    const validationText = await this.page.locator(element).textContent()
    expect(validationText).toContain(text)
  }

  //Click on the provided element.
  async clickOnElement(element: string) {
    await this.page.locator(element).click()
  }

  //Check the visibility of any provided element.
  async checkVisibility(element: string) {
    const visiblity = await this.page.locator(element).isVisible()
    expect(visiblity).toBeTruthy()
  }
}
