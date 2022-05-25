$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/AddToDo.feature");
formatter.feature({
  "name": "Add To Do",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Successful adding of To Do Tasks",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ToDoTC"
    }
  ]
});
formatter.step({
  "name": "User adds a new To Do as \"\u003cToDoVal\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "\"\u003cToDoVal\u003e\" was added in All List",
  "keyword": "Then "
});
formatter.step({
  "name": "\"\u003cToDoVal\u003e\" was added in Active List",
  "keyword": "And "
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ToDoVal"
      ]
    },
    {
      "cells": [
        "New To Do Task1"
      ]
    },
    {
      "cells": [
        "New To Do Task2"
      ]
    },
    {
      "cells": [
        "New To Do Task3"
      ]
    }
  ]
});
formatter.background({
  "name": "Below are the common steps for each scenario",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://todomvc.com/examples/vue/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful adding of To Do Tasks",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ToDoTC"
    }
  ]
});
formatter.step({
  "name": "User adds a new To Do as \"New To Do Task1\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_adds_a_new_To_Do_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"New To Do Task1\" was added in All List",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.was_added_in_All_List(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"New To Do Task1\" was added in Active List",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.was_added_in_Active_List(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Below are the common steps for each scenario",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://todomvc.com/examples/vue/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful adding of To Do Tasks",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ToDoTC"
    }
  ]
});
formatter.step({
  "name": "User adds a new To Do as \"New To Do Task2\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_adds_a_new_To_Do_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"New To Do Task2\" was added in All List",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.was_added_in_All_List(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"New To Do Task2\" was added in Active List",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.was_added_in_Active_List(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Below are the common steps for each scenario",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://todomvc.com/examples/vue/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful adding of To Do Tasks",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ToDoTC"
    }
  ]
});
formatter.step({
  "name": "User adds a new To Do as \"New To Do Task3\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_adds_a_new_To_Do_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"New To Do Task3\" was added in All List",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.was_added_in_All_List(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"New To Do Task3\" was added in Active List",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.was_added_in_Active_List(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
});