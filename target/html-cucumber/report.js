$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/AddToCart.feature");
formatter.feature({
  "name": "This feature will be used to test the Add to cart functionality of Saucedemo website",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AddToCartTest"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.Phase2Project_LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.Phase2Project_LoginStepDef.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Phase2Project_LoginStepDef.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Phase2Project_LoginStepDef.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get through the login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.Phase2Project_LoginStepDef.i_should_land_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add product to cart and validate it to be present in the cart page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AddToCartTest"
    }
  ]
});
formatter.step({
  "name": "I select the Product with the name as \"Sauce Labs Bike Light\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.AddToCartStepDefs.select_product(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add the product to the cart",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.AddToCartStepDefs.select_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I go to the cart page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.AddToCartStepDefs.click_on_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can see the item added to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.AddToCartStepDefs.i_can_see_the_item_added_to_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/Phase2Project_Login.feature");
formatter.feature({
  "name": "This feature will be used to test the login functionality of Saucedemo website",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginTest"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.Phase2Project_LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Login success scenario using parameters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.Phase2Project_LoginStepDef.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Phase2Project_LoginStepDef.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Phase2Project_LoginStepDef.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get through the login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.Phase2Project_LoginStepDef.i_should_land_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the Login failure scenario using examples",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username as \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should get the error message as \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "standard_user",
        "12345",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce",
        "Epic sadface: Sorry, this user has been locked out."
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.Phase2Project_LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Login failure scenario using examples",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.Phase2Project_LoginStepDef.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Phase2Project_LoginStepDef.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Phase2Project_LoginStepDef.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.Phase2Project_LoginStepDef.i_should_get_the_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.Phase2Project_LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Login failure scenario using examples",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"locked_out_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.Phase2Project_LoginStepDef.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Phase2Project_LoginStepDef.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Phase2Project_LoginStepDef.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"Epic sadface: Sorry, this user has been locked out.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.Phase2Project_LoginStepDef.i_should_get_the_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});