import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');


defineFeature(feature, test => {
    test('When user hasn’t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
        given('the user hasn’t specified a number of events to show', () => {
    
        });
    
        let AppComponent;
        when('the user opens the app', () => {
          AppComponent = render(<App />);
        });
    
        then('32 events are shown by default', async() => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
      
            await waitFor(() => {
              const EventListItems = within(EventListDOM).queryAllByRole('listitem');
              expect(EventListItems.length).toBe(32);
            });
        });
      });
    
      test('User can change the number of events displayed.', ({ given, when, then }) => {
        let AppComponent;
        given('the user is searching for events by number', () => {
            AppComponent = render(<App />);
        });
    
        let CitySearchDOM;
        when('the user changes the number of events', async() => {
          const user = userEvent.setup();
          const AppDOM = AppComponent.container.firstChild;
          CitySearchDOM = AppDOM.querySelector('#city-search');
          const citySearchInput = within(CitySearchDOM).queryByRole('textbox');  
          await user.type(citySearchInput, '{backspace}{backspace}10');
        });
    
        then('a different number of events is displayed', async() => {
          const AppDOM = AppComponent.container.firstChild;
          CitySearchDOM = AppDOM.querySelector('#city-search');
          const citySearchInput = within(CitySearchDOM).queryByRole('textbox');  
          expect(citySearchInput).toHaveValue('10');
      });
    });
});