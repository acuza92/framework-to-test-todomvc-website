<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
   <h3 align="center">Framework to test https://todomvc.com/</h3>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

Design a test automation framework in a language of your choice. Implement as much of the
following features as you can:
1. Design your framework to support two browsers – chrome and firefox. Make the browser
selection available from a configuration file.
2. Store the base URL (https://todomvc.com/ ) in the configuration file
3. Make it possible for the three tests below to be executed in parallel simultaneously
4. Provide some kind of report for the test runs
5. If you can think of other useful features – feel free to include them as well!

### Implement the following test cases:
Test Case #1
1. Visit https://todomvc.com/
2. Go to AngularJS section
3. Add the element “ToDo 1” to the list.
4. Add the element “ToDo 2” to the list.
5. Add the element “ToDo 3” to the list.
6. Verify that the element “ToDo 3 ” is in the 3rd position of the list
Test Case #2
1. Visit https://todomvc.com/
2. Go to AngularJS section
3. Modify the element “ToDo 2” with the value “ToDo 4”
4. Verify that the element “ToDo 4” is now in the 2 nd position of the list
5. Verify that the element “ToDo 2” does not appear in the list
Test Case #3
1. Visit https://todomvc.com/
2. Go to AngularJS section
3. Mark the element “TodoDo 3” as complete
4. Click on the Active button
5. Print in the console the elements listed with the format:


## Step to run the test

### Install dependencies
npm install

#### Test at Chrome 
npm run cypress

#### Test at Firefox
npm run cypress-firefox

### Test in parallel simultaneously
npm run cy:parallel



