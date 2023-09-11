# meet-app

This app allows a user to search for events and view the details of them as well as aggregate events with similar features.

User Stories (with Gherkin)

Feature 1:

As a user,
I should be able to filter events by city
So that I can see a list of events taking place in that city.

Given user hasn’t searched for any city;
When the user opens the app;
Then the user should see a list of upcoming events.

Feature 2:

As a user,
I should be able to show/hide event details
So that I can expand/collapse event to see/hide details

Given the event element is collapsed by default. 
When the user opens the app
Then the user should collapse or expand the event

Feature 3:

As a user,
I should be able to specify number of events
So that I can change the number of events displayed

Given a user hasn’t specified a number
When the user opens the app
Then 32 events are shown by default. 

Feature 4:

As a user,
I should be able to Use the App When Offline 
So that I can Show cached data when there’s no internet connection and Show error when user changes search settings (city, number of events).

Given the user is offline
When the user opens the app
Then cached data when there’s no internet connection 

Feature 5:

As a user, 
I should be able to Add an App Shortcut to the Home Screen 
So that I can install the meet app as a shortcut on my device home screen 

Given the meet app is not a  shortcut on the home screen
When the user opens the app
Then they can install the meet app as a shortcut on their device home screen. 

Feature 6:

As a user, 
I should be able to Display Charts Visualizing Event Details 
So that Show a chart with the number of upcoming events in each city.

Given there is no chart with the number of upcoming events in each city 
When the user opens the app
Then Show a chart with the number of upcoming events in each city 
