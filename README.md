# Description

This is a demo project build in Playwright using Typescript.

## Architecture

- **actions:** The _actions_ folder has the action classes to execute different functions. These can be common functions or page wise functions.

- **pages:** The _pages_ folder contains the object classes to holds the locators of the individual pages.

- **data:** The _data_ folder has the data files for individual pages that will be used in the tests.

- **tests:** The _tests_ folder contains the main test scripts.

## Prerequisites

- Visual Studio Code (1.84.x or up)
- Node (18.x.x or up)

## Initial Setup

- Clone this repository to the local machine.
- Open it in the Visual Studio Code.
- Open the terminal and run the following commands:

  ```
  npm i
  ```

  ```
  npx playwright install
  ```

## Start Execution:

- Run the following command in the terminal to start the execution:

  ```
  npm start
  ```
