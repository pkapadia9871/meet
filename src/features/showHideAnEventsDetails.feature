Feature: Show/Hide Event Details

Scenario: An event element is collapsed by default.

Given the user hasn’t searched for an event
When the user opens the app
Then the event element is shown as collapsed by default

Scenario: User can expand an event to see details.

Given the user has opened the app
When they search for an event or generate one
Then they can expand an event to see details

Scenario: User can collapse an event to hide details

Given the user has searched for an event
When they find an event and expand its details
Then they can collapse it