Feature: Pomodoro Lists
  Background:
    When I access the index page

  Scenario: Creating a pomodoro list
    When I click in "add new list"
    Then I create a new pomodoro list

  Scenario: Deleting a pomodoro list
    When I click in "delete" button
    Then the pomodoro list is deleted

  Scenario: Editing a pomodoro list
    When I click in "edit" button
    Then the pomodoro list is edited
