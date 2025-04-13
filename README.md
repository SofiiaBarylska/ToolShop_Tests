#Project ToolShop
This is an automation testing project.  
User can buy tools for repairing — and we test that it works as expected.

## 🛠️ How install a project?
1.Install nodeJS
2.Install VS Code
3.npm install --> run a command to install all the dependencies needed
4.npm init playwright@latest  --> install Playwright latest version, need to be laucnhed only once, during first setup
   Choose TypeScript when prompted
5.npx playwright test  --> run a test
6.Add extension "Playwright Test for VS Code"
7.Add a custom script to package.json 
"scripts": {
  "test": "npx playwright test"
}
8.npm run test  --> run a test


#What do you need to add to the .gitignore?
 1./tests-examples/ (or you can remove this file)
 