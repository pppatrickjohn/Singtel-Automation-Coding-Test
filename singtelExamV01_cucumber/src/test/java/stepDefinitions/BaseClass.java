package stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.apache.log4j.Logger;

import java.util.Properties;

import pageObjects.ToDoPage;

public class BaseClass {
	
	public WebDriver driver;
	public ToDoPage td;
	public static Logger logger;
	public Properties configProperties;

}
