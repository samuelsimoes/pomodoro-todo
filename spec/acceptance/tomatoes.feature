Feature: Tomatoes
  Background:
    When I access the index page

  Scenario: Creating a tomato
    When I fill the tomato description and submit
    Then the new tomato is created

  Scenario: Deleting a tomato
    When I click in tomato "delete" button
    Then the tomato is deleted

  Scenario: Editing a tomato
    When I click in tomato description and edit the description
    Then the pomodoro list is edited
