Feature: Access
  Scenario: accessing the index page
    When I access the index page
    Then I see my lists
    And I see my pomodoros
    And no running tomato
