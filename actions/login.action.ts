import { Page } from '@playwright/test'
import loginPage from '../pages/login.page'

export class LoginActions {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  //Navigate to the login page.
  async goToLoginPage() {
    await this.page.goto('/test/newtours/index.php')
  }

  //Login with the provided credentials.
  async loginWithCredentials(userName: string, password: string) {
    await this.page.locator(loginPage.userNameFieldSelector).fill(userName)
    await this.page.locator(loginPage.passwordFieldSelector).fill(password)
    await this.page.locator(loginPage.loginButtonSelector).click()
  }
}
