$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bankmanager.feature");
formatter.feature({
  "comments": [
    {
      "line": 3,
      "value": "#@regression"
    }
  ],
  "line": 4,
  "name": "Bank Manager",
  "description": "As User,\r\nI want to add and open customer account",
  "id": "bank-manager",
  "keyword": "Feature"
});
formatter.before({
  "duration": 41415292700,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "I should access customer account",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I should click on \u0027Bank Manager Login\u0027 Tab",
  "keyword": "Given "
});
formatter.match({
  "location": "BankManagerSteps.iShouldClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 7095523400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "I should add Customer Successfully",
  "description": "",
  "id": "bank-manager;i-should-add-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I should click on Add Customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I Should enter first name \"Hasit\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should enter last name\"Shah\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should  Enter post code \"L15 0HR\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \u0027Add Customer\u0027 Button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I should verify message \u0027Customer added successfully\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click \u0027ok\u0027 on popup",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerSteps.iShouldClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 613660300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hasit",
      "offset": 27
    }
  ],
  "location": "BankManagerSteps.iShouldEnterFirstName(String)"
});
formatter.result({
  "duration": 1708230800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shah",
      "offset": 25
    }
  ],
  "location": "BankManagerSteps.iShouldEnterLastName(String)"
});
formatter.result({
  "duration": 142548400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L15 0HR",
      "offset": 27
    }
  ],
  "location": "BankManagerSteps.iShouldEnterPostCode(String)"
});
formatter.result({
  "duration": 150412900,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 1841690700,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iShouldVerifyMessageCustomerAddedSuccessfully()"
});
formatter.result({
  "duration": 84935200,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOkOnPopup()"
});
formatter.result({
  "duration": 17534800,
  "status": "passed"
});
formatter.after({
  "duration": 2899467900,
  "status": "passed"
});
});