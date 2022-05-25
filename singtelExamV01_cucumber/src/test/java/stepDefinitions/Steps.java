package stepDefinitions;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.Before;
import cucumber.api.java.en.*;

import pageObjects.ToDoPage;

public class Steps extends BaseClass {
	
	@Before
	public void setup() throws IOException {
		//Reading properties file
		configProperties = new Properties();
		FileInputStream configPropFile = new FileInputStream("config.properties");
		configProperties.load(configPropFile);
		
		
		logger = Logger.getLogger("singtelExam");
		PropertyConfigurator.configure("Log4j.properties");
		logger.info("************ Launching Browser ************");
		
		String br = configProperties.getProperty("browser");
		
		if (br.equals("chrome")) {
			System.setProperty("webdriver.chrome.driver",configProperties.getProperty("chromepath"));
			driver = new ChromeDriver();
		}else if (br.equals("IE")) {
			System.setProperty("webdriver.ie.driver",configProperties.getProperty("iepath"));
			driver = new InternetExplorerDriver();
		}
	}
	
	@Given("User Launch Chrome browser")
	public void user_Launch_Chrome_browser() {
		
		td = new ToDoPage(driver);
	}

	@When("User opens URL {string}")
	public void user_opens_URL(String url) {
		logger.info("************ Opening URL ************");
		driver.get(url);
		driver.manage().window().maximize();
	}

	@When("User adds a new To Do as {string}")
	public void user_adds_a_new_To_Do_as(String toDoVal) {
		logger.info("************ Creating a New To Do ************");
		td.setNewToDo(toDoVal);
	}

	@Then("{string} was added in All List")
	public void was_added_in_All_List(String addedToDoInAll) {
		logger.info("************ Verifying To Do is in All ************");
		td.viewAllToDo();
		
		if(driver.findElement(By.xpath("//*[text()='" + addedToDoInAll + "']")).isDisplayed()) {
			Assert.assertTrue(true);
		}else {
			Assert.assertTrue(false);
		}
	}

	@Then("{string} was added in Active List")
	public void was_added_in_Active_List(String addedToDoInActive) {
		logger.info("************ Verifying Newly added To Do is in Active ************");
		td.viewActiveToDo();
		
		if(driver.findElement(By.xpath("//*[text()='" + addedToDoInActive + "']")).isDisplayed()) {
			Assert.assertTrue(true);
		}else {
			Assert.assertTrue(false);
		}
	}
	
	@Then("User completed the task")
	public void user_completed_the_task() {
		logger.info("************ Completing To Do ************");
	    td.completeToDo();
	}

	@Then("{string} was added in Completed List")
	public void was_added_in_Completed_List(String completedToDo) {
		logger.info("************ Verifying To Do is in Completed ************");
		td.viewCompletedToDo();
		
	    if(driver.findElement(By.xpath("//li[@class='todo completed']//following::label[text()='" + completedToDo + "']")).isDisplayed()) {
	    	Assert.assertTrue(true);
	    }else {
	    	Assert.assertTrue(false);
	    }
	} 

	@Then("User deleted the task")
	public void user_deleted_the_task() {
		logger.info("************ Deleting To Do ************");
		td.deleteToDo();
	}

	@Then("{string} was successfully deleted")
	public void was_successfully_deleted(String deletedToDo) {
		logger.info("************ Veridying To Do was Deleted ************");
		
		td.deleteToDo();
	}

	@Then("User clear completed tasks")
	public void user_clear_completed_tasks() {
		logger.info("************ Clearing Completed To Do ************");
		td.completeToDo();
	}

	@Then("close browser")
	public void close_browser() {
		logger.info("************ Closing Browser ************");
		driver.quit();
	}

}
