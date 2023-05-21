@LoginTest
Feature: This feature will be used to test the login functionality of Saucedemo website

  Background: 
    Given I have launched the application

  Scenario: Validate the Login success scenario using parameters
    When I enter username as "standard_user"
    And I enter password as "secret_sauce"
    And I click on Login button
    Then I should get through the login page successfully

  Scenario Outline: Validate the Login failure scenario using examples
    When I enter username as "<UserName>"
    And I enter password as "<Password>"
    And I click on Login button
    Then I should get the error message as "<Error>"

    Examples: 
      | UserName        | Password     | Error                                                                     |
      | standard_user   |        12345 | Epic sadface: Username and password do not match any user in this service |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |
