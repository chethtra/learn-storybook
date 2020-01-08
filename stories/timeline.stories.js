import React from 'react';
import { storiesOf } from '@storybook/react';
import { Timeline } from '../src/components/index';
import { withKnobs, text, select } from '@storybook/addon-knobs';

const stories = storiesOf('Timeline', module);

stories.addDecorator(withKnobs);

stories.add('Timeline', ()=>{
    return (<Timeline></Timeline>);
});