import {configure} from '@storybook/react';
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const viewPortsView = {
    kindleFire2: {
        name: 'Kindle Fire 2',
        styles: {
            width: '600px',
            height: '963px',
        }
    }
}

addParameters({
    viewport: {
        viewports: {...INITIAL_VIEWPORTS, ...viewPortsView} ,
    }
});

configure(require.context('../stories', true, /\.stories\.js$/), module);
