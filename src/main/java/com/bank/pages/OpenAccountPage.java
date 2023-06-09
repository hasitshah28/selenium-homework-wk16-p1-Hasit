package com.bank.pages;


import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class OpenAccountPage extends Utility {

    private static final Logger log = LogManager.getLogger(OpenAccountPage.class.getName());

    public OpenAccountPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(css = "#userSelect")
    WebElement searchCustomer;



    By currency = By.xpath("//select[@id='currency']");

    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Process')]")
    WebElement clickOnProcess;

    //Search customer that created in first test
    public void searchCustomerCreatedFirstTest(String name)
    {
        selectByVisibleTextFromDropDown(searchCustomer, name);
        log.info("Search customer that created in first Test :" + searchCustomer.toString());
    }

    public void setCurrency()
    {
        selectByContainsTextFromDropDown(currency,"Pound");
        log.info("Select Currency : " + currency.toString());
    }

    public void setClickOnProcess()
    {
        clickOnElement(clickOnProcess);
        log.info("Click on Process");
    }
}
