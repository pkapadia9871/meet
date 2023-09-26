Feature: Specify Number of Events

Scenario: When user hasn’t specified a number, 32 events are shown by default.

Given the user hasn’t specified a number of events to show
When the user opens the app
Then 32 events are shown by default

Scenario: User can change the number of events displayed.

Given the user is searching for events by number
When the user changes the number of events
Then a different number of events is displayed