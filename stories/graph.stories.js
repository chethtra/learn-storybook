import React from 'react';
import { storiesOf } from '@storybook/react';
import { BarGraph } from '../src/components/graphs/bar/index';
import { withKnobs, array } from '@storybook/addon-knobs';


const stories = storiesOf('Graphs', module);

stories.addDecorator(withKnobs);

stories.add('Bar', ()=>{
    const barPercentages = array('Percentage', [20,30,50, 21, 100]);
    return (<BarGraph percentages={barPercentages}></BarGraph>);
});

