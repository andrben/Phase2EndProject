package stepdefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;



public class Phase2Project_LoginStepDef {

	WebDriver driver = Hooks2.driver;

	@Given("I have launched the application")
	public void i_have_launched_the_application() {
		// Write code here that turns the phrase above into concrete actions

		driver.get("https://www.saucedemo.com/");
	}
	

	@When("I enter username as {string}")
	public void i_enter_username_as(String UserName) {
		// Write code here that turns the phrase above into concrete actions
		WebElement userName = driver.findElement(By.id("user-name"));
		userName.sendKeys(UserName);

	}

	@When("I enter password as {string}")
	public void i_enter_password_as(String Password) {
		// Write code here that turns the phrase above into concrete actions
		WebElement password = driver.findElement(By.id("password"));
		password.sendKeys(Password);

	}
	
	
	@When("I click on Login button")
	public void i_click_on_Login_button() {
		// Write code here that turns the phrase above into concrete actions

		WebElement loginBtn = driver.findElement(By.id("login-button"));
		loginBtn.click();
	}
	
	
	@Then("I should get through the login page successfully")
	public void i_should_land_on_home_page() {
		// Write code here that turns the phrase above into concrete actions
		String ActTitle = driver.getTitle();
		String ExpTitle = "Swag Labs";
		Assert.assertEquals(ActTitle, ExpTitle);

	}
	
	@Then("I should get the error message as {string}")
	public void i_should_get_the_error_message(String Error) {
		// Write code here that turns the phrase above into concrete actions
		WebElement error = driver.findElement(By.xpath("//h3"));
		String ActError = error.getText();
		Assert.assertEquals(Error, ActError);
	}
	
}
