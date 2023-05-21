@AddToCartTest
Feature: This feature will be used to test the Add to cart functionality of Saucedemo website

  Background: 
    Given I have launched the application
    When I enter username as "standard_user"
    And I enter password as "secret_sauce"
    And I click on Login button
    Then I should get through the login page successfully

  Scenario: Add product to cart and validate it to be present in the cart page
    When I select the Product with the name as "Sauce Labs Bike Light"
    And I add the product to the cart
    And I go to the cart page
    Then I can see the item added to the cart