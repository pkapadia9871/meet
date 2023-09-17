# meet-app

## Objective

This app allows a user to search for events and view the details of them as well as aggregate events with similar features.

To view this application, please visit: https://pkapadia9871.github.io/meet/

### How serverless functions will be used in the app:

- To quickly deploy the app and ensure that all the developers have to focus on is coding.
- To perform automatic scaling based on the number of requests received so that unlike when using a server, they don’t crash.
- To only pay when the code inside your app is executed, so you’re only charged for what you use.

### Key Features

1. Filter Events by City
2. Show/Hide Event Details.
3. Specify Number of Events.
4. Use the App When Offline.
5. Add an App Shortcut to the Home Screen.
6. Display Charts Visualizing Event Details.

### User Stories

- As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.
- As a user, I would like to be able to show/hide event details so that I can see more/less
  information about an event.
- As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
- As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.
- As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.
- As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city

### Scenarios

#### Feature 1: Filter Events By City

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.

> **Given** the page loads  
> **When** use hasn't searched for a city  
> **Then** the app shows upcoming events from all cities.

Scenario 2: User should see a list of suggestions when they search for a city.

> **Given** the page loads  
> **When** the user search for a city  
> **Then** the app should see a list of suggestions.

Scenario 3: User can select a city from the suggested list.

> **Given** the list of suggestions is open  
> **When** the user clicks on a city  
> **Then** the app shows upcoming events from the selected city.

#### Feature 2: Show/Hide Event Details

Scenario 1: An event element is collapsed by default.

> **Given the user hasn’t searched for an event**  
> **When the user opens the app**  
> **Then the event element is shown as collapsed by default**

Scenario 2: User can expand an event to see details.

> **Given the user has opened the app**  
> **When they search for an event or generate one**  
> **Then they can expand an event to see details**

Scenario 3: User can collapse an event to hide details

> **Given the user has searched for an event**  
> **When they find an event and expand its details**  
> **Then they can collapse it**

#### Feature 3: Specify Number of Events

Scenario 1: When user hasn’t specified a number, 32 events are shown by default.

> **Given the user hasn’t specified a number of events to show**  
> **When the user opens the app**  
> **Then 32 events are shown by default**

Scenario 2: User can change the number of events displayed.

> **Given the user is searching for events by number**  
> **When  the user changes the number of events**  
> **Then a different number of events is displayed**

#### Feature 4: Use the App When Offline

Scenario 1: Show cached data when there’s no internet connection.

> **Given the user is offline**  
> **When the user has opened the app**  
> **Then the data stored from back when the app was connected to the internet is displayed and accessible**

Scenario 2: Show error when user changes search settings (city, number of events).

> **Given the user is offline**  
> **When the user changes search settings**  
> **Then an error is shown**

#### Feature 5: Add an App Shortcut to the Home Screen

Scenario 1: User can install the meet app as a shortcut on their device home screen.

> **Given the user hasn’t installed the app as a shortcut on their device home screen**  
> **When the user clicks the install option on their app**  
> **Then their app is installed as a shortcut on their home screen**

#### Feature 6: Display Charts Visualizing Event Details

Scenario 1: Show a chart with the number of upcoming events in each city.

> **Given the user is searching for a list of events in each city**  
> **When the user clicks on generating a chart for the number of events**  
> **Then a chart is generated**
