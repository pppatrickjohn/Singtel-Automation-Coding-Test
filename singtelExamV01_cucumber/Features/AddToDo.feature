Feature: Add To Do

 Background: Below are the common steps for each scenario
 		Given User Launch Chrome browser
    When User opens URL "https://todomvc.com/examples/vue/"
 
 @ToDoTC   
 Scenario Outline: Successful adding of To Do Tasks
    And User adds a new To Do as "<ToDoVal>"
    Then "<ToDoVal>" was added in All List
    And "<ToDoVal>" was added in Active List
    And close browser
    
    Examples:
    		| ToDoVal |
    		| New To Do Task1 |
    		| New To Do Task2 |
    		| New To Do Task3 |
    		
 Scenario: Successful Completion of To Do Tasks
    And User adds a new To Do as "New To Do Task4"
    Then "New To Do Task4" was added in All List
    And "New To Do Task4" was added in Active List
    Then User completed the task
    And "New To Do Task4" was added in Completed List
    And close browser
    
 Scenario: Successful Deletion of To Do Tasks
    And User adds a new To Do as "New To Do Task5"
    Then "New To Do Task5" was added in All List
    And "New To Do Task5" was added in Active List
    Then User deleted the task
    And "New To Do Task5" was successfully deleted
    And close browser
    
 Scenario: Successful clearing of Completed To Do Tasks
    And User adds a new To Do as "New To Do Task6"
    Then "New To Do Task6" was added in All List
    And "New To Do Task6" was added in Active List
    Then User completed the task
    And "New To Do Task6" was added in Completed List
    Then User clear completed tasks
    And close browser