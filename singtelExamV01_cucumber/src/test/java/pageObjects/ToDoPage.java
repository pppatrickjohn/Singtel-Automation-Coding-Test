package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

//import utilities.WaitHelper;

public class ToDoPage {
	
	public WebDriver ldriver;
	
	//WaitHelper waithelper;
	
	public ToDoPage(WebDriver rdriver)
	{
		ldriver=rdriver;
		PageFactory.initElements(rdriver, this);
		//waithelper = new WaitHelper(ldriver);
	}
	
	//Web Elememnts on To Do Page
	//To Do Textbox
	By txtNewTodo = By.xpath("//input[@class='new-todo']");
	
	//Checkbox of To Do for completing it
	By chkbxCompleted = By.xpath("//input[@type='checkbox' and @class='toggle']");

	//Delete To Do Button
	By btnDelete = By.xpath("//button[@class='destroy']");
	
	//Anchor for accessing all To Do types
	By lblAll = By.xpath("//a[@href='#/all']");
	
	//Anchor for accessing Active To Do types
	By lblActive = By.xpath("//a[@href='#/active']");

	//Anchor for accessing Completed To Do types
	By lblCompleted = By.xpath("//a[@href='#/completed']");
	
	
	//Action Methods
	public void setNewToDo(String toDoVal) {
		ldriver.findElement(txtNewTodo).clear();
		ldriver.findElement(txtNewTodo).sendKeys(toDoVal);
		ldriver.findElement(txtNewTodo).sendKeys(Keys.ENTER);
	}
	
	public void completeToDo() {
		ldriver.findElement(chkbxCompleted).click();
	}
	
	public void deleteToDo() {
		Actions action = new Actions(ldriver);
		WebElement deleteBtn = ldriver.findElement(btnDelete);
		action.moveToElement(deleteBtn).perform();
		ldriver.findElement(btnDelete).click();
	}
	
	public void viewAllToDo() {
		ldriver.findElement(lblAll).click();
	}
	
	public void viewActiveToDo() {
		ldriver.findElement(lblActive).click();
	}
	
	public void viewCompletedToDo() {
		ldriver.findElement(lblCompleted).click();
	}
}

