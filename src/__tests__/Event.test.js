import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import { extractLocations, getEvents } from '../api';

describe('<Event /> component', () => {
    let allEvents, EventComponent;
    beforeEach(async () => {
        allEvents = await getEvents();
        EventComponent = render(<Event event={allEvents[0]}/>);
    });

    test('renders event title', () => {
        expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
    });

    test('renders event start time', () => {
        expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();
    });

    test('renders event location', () => {
        expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    });

    test('renders event details button with the title (show details)', () => {
        expect(EventComponent.queryByText('show details')).toBeInTheDocument();
    });

    test('by default, event details section should be hidden', () => {
        expect(EventComponent.container.firstChild.querySelector('.details')).not.toBeInTheDocument();
    });

    test('shows the details section when the user clicks on the show details button', async () => {
        const user = userEvent.setup();
        const eventButton = EventComponent.queryByText('show details');
        await user.click(eventButton);
        const details = EventComponent.container.firstChild.querySelector('.details');
        expect(details).toBeInTheDocument();
    });

    test('hides the details section when the user clicks on the hide details button', async () => {
        const user = userEvent.setup();
        const eventButton = EventComponent.queryByText('hide details');
        await user.click(eventButton);
        const details = EventComponent.container.firstChild.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    });

});