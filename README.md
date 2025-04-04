#Project ToolShop

User can buy tools for repairing

#How install a project?

1.Install VS Code
2.npm init playwright@latest  --> install playwright latest version
   Choose TypeScript
3.npx playwright test  --> run a test
4.Add extension "Playwright Test for VS Code"
5.Add a script to package.json 
"test": "npx playwright test"
6.npm run test  --> run a test


#What do you need to add to the .gitignore?
 1.node_modules/
 2./test-results/
 3./playwright-report
 4./tests-examples/ (or you can remove this file)
 