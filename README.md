## Project ToolShop
This is an automation testing project.  
User can buy tools for repairing — and we test that it works as expected.
AQA of this project is Barylska Sofiia

## Before start need:
1.Install nodeJS
2.Install VS Code

## How to setup 🛠️ the project?
1.Clone the repository
git clone https://github.com/SofiiaBarylska/ToolShop_Tests.git

2.npm install --> run a command to install all the dependencies needed

3.npm init playwright@latest  --> install Playwright latest version, need to be laucnhed only once, during first setup
   Choose TypeScript when prompted

## Create .env file to hide a credentials 
# .env
WEB_URL='https://practicesoftwaretesting.com'
WEB_API='https://api.practicesoftwaretesting.com'
USER_EMAIL='your_email_value'
USER_PASSWORD='your_password_value'
USER_NAME='your_username_value'

## Add credentials to GitHub Actions Secrets 
Go to Settings > Secrets and variables > Actions > New repository secret

Add next credential:
Name*     Secret*
WEB_URL: ${{secrets.WEB_URL}}
WEB_API: ${{secrets.WEB_API}}
USER_EMAIL: ${{secrets.USER_EMAIL}}
USER_PASSWORD: ${{secrets.USER_PASSWORD}}
USER_NAME: ${{secrets.USER_NAME}}


## What do you need to add to the .gitignore?
 1. /tests-examples/ (or you can remove this file)
 2. .env

 ## Run all tests
 npx playwright test  --> run a test
 