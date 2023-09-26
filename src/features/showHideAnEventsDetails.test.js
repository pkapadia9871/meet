import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');


defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        given('the user hasn’t searched for an event', () => {
    
        });
    
        let AppComponent;
        when('the user opens the app', () => {
          AppComponent = render(<App />);
        });
    
        then('the event element is shown as collapsed by default', async() => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
      
            await waitFor(() => {
              const EventListItems = within(EventListDOM).queryAllByRole('listitem');
              expect(AppDOM.querySelector('.details')).not.toBeInTheDocument();
            });
        });
      });
    
      test('User can expand an event to see details.', ({ given, when, then }) => {
        let AppComponent;
        given('the user has opened the app', () => {
            AppComponent = render(<App />);
        });
    
        let CitySearchDOM;
        when('they search for an event or generate one', async() => {
            const user = userEvent.setup();
            const AppDOM = AppComponent.container.firstChild;
            CitySearchDOM = AppDOM.querySelector('#city-search');
            const citySearchInput = within(CitySearchDOM).queryByRole('textbox');  
            await user.type(citySearchInput, "Berlin");
        });
    
        then('they can expand an event to see details', async() => {
          const user = userEvent.setup();
          const AppDOM = AppComponent.container.firstChild;
          const eventButton = AppComponent.queryAllByText('show details')[0];
          await user.click(eventButton);
          const details = AppDOM.querySelector('.details');
          expect(details).toBeInTheDocument();
        });
      });
    
    
      test('User can collapse an event to hide details', ({ given, and, when, then }) => {
        
        let AppComponent;
        let AppDOM; 
        let CitySearchDOM;
        let citySearchInput;
        given('the user has searched for an event', async() => {
            AppComponent = render(<App />);
            const user = userEvent.setup();
            AppDOM = AppComponent.container.firstChild;
            CitySearchDOM = AppDOM.querySelector('#city-search');
            citySearchInput = within(CitySearchDOM).queryByRole('textbox');  
            await user.type(citySearchInput, "Berlin");    
        });
    
        when('they find an event and expand its details', async() => {
          const user = userEvent.setup();
          const AppDOM = AppComponent.container.firstChild;
          const eventButton = AppComponent.queryAllByText('show details')[0];
          await user.click(eventButton);
          const details = AppDOM.querySelector('.details');
          expect(details).toBeInTheDocument();
        });
    
        then('they can collapse it', async() => {
          const user = userEvent.setup();
          const eventButton = AppComponent.queryAllByText('hide details')[0];
          await user.click(eventButton);
          const details = AppComponent.container.firstChild.querySelector('.details');
          expect(details).not.toBeInTheDocument();    
        });
      });
    });