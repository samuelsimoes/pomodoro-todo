Feature: Counter
  Background:
    When I access the index page

  Scenario: activating the first pomodoro
    When I click in the first pomodoro start button
    Then the first pomodoro is initialized

  Scenario: finishing a running pomodoro
    Given a running pomodoro in my current list
    When I access the index page
    And I click in the finish button
    Then the pomodoro is finished

  Scenario: canceling a running pomodoro
    Given a running pomodoro in my current list
    When I access the index page
    And I click in the cancel button
    Then the pomodoro returns to the list and the counting is canceled
