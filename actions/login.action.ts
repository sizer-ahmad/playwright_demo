import { Page } from '@playwright/test'
import loginData from '../data/login.data.json'

export class loginActions {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  //Navigate to the login page.
  async goToLoginPage() {
    await this.page.goto('/test/newtours/index.php')
  }

  //Login with the provided credentials.
  async loginWithCredentials(
    userNameField: string,
    passwordField: string,
    loginButton: string
  ) {
    await this.page.locator(userNameField).fill(loginData.userName)
    await this.page.locator(passwordField).fill(loginData.password)
    await this.page.locator(loginButton).click()
  }
}
