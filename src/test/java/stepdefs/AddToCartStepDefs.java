package stepdefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AddToCartStepDefs {

	WebDriver driver = Hooks2.driver;
	String productName;

	@When("I select the Product with the name as {string}")
	public void select_product(String productName) {
		// Write code here that turns the phrase above into concrete actions
		this.productName = productName;
		WebElement dynamicProdName = driver.findElement(By.xpath("//div[text()='" + productName + "']"));
		dynamicProdName.click();
	}

	@When("I add the product to the cart")
	public void select_product() {
		// Write code here that turns the phrase above into concrete actions
		WebElement add2CartBtn = driver.findElement(By.id("add-to-cart-sauce-labs-bike-light"));
		;
		add2CartBtn.click();
	}

	@When("I go to the cart page")
	public void click_on_cart() {
		WebElement CartBtn = driver.findElement(By.className("shopping_cart_link"));
		CartBtn.click();

	}
	
	@Then("I can see the item added to the cart")
	public void i_can_see_the_item_added_to_the_cart() {
	    WebElement cartItem = driver.findElement(By.xpath("//div[@class='cart_item']//div[@class='inventory_item_name']"));
	    String itemName = cartItem.getText();
	    Assert.assertEquals(productName, itemName);
	}

}
