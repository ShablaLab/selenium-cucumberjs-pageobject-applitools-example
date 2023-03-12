@login
Feature: User should be able login

  Scenario: Veirfy is a user is able to login successfully a failure scenario for demo
    Given I am on the login home page
    When I login with username as "standard_user" and password as "wrong_secret_sauce"
    Then I should be able to login successfully

  Scenario Outline: An Example scenario to demonstrate scenario outline
    Given I am on the login home page
    When I login with username as "<username>" and password as "<password>"
    Then I should be able to login successfully

    Examples: 
      | username      | password     |
      | standard_user | secret_sauce |
