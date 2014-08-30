Feature: Tomatoes
  Background:
    When I access the index page

  Scenario: Creating a pomodoro
    When I fill the pomodoro description and submit
    Then the new pomodoro is created

  Scenario: Deleting a pomodoro
    When I click in pomodoro "delete" button
    Then the pomodoro is deleted

  Scenario: Editing a pomodoro
    When I click in pomodoro description and edit the description
    Then the pomodoro list is edited
