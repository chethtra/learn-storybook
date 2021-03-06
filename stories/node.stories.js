import React from 'react';
import { storiesOf } from '@storybook/react';
import { Node } from '../src/components/index';
import { withKnobs, text, select } from '@storybook/addon-knobs';

const stories = storiesOf('Node', module);

stories.addDecorator(withKnobs);

stories.add('Node', ()=>{
    return (<Node></Node>);
});