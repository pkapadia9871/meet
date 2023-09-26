// src/__tests__/NumberOfEvents.test.js

import { render } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';

describe('<NumberOfEvents /> component', () => {
 let NumberOfEventsComponent;
 beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={()=>{}}/>);
 })

 test('ensure that NumberOfEvents component contains element with role of textbox', () => {
   expect(NumberOfEventsComponent.queryByRole("textbox")).toBeInTheDocument();
 });

  test('ensure that default value of input field is 32', () => {
    expect(NumberOfEventsComponent.queryByRole("textbox")).toHaveValue('32');
  });

  test('ensure that value of NumberOfEvents component textbox has a value that changes if user types in it', async() => {
    const user = userEvent.setup();
    const TextInput_Reference_Variable=NumberOfEventsComponent.queryByRole("textbox")
    await user.type(TextInput_Reference_Variable, '{backspace}{backspace}10');
    expect(TextInput_Reference_Variable).toHaveValue('10');
  });

});