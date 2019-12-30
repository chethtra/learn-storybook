import React from 'react';
import { storiesOf } from '@storybook/react';
import { Node } from '../src/components/node/index';
import { withKnobs, text, select } from '@storybook/addon-knobs';

const stories = storiesOf('Node', module);
const milestoneOptions = {
    Insight: 'Insight',
    Pivot: 'Pivot',
    Decision: 'Decision',
    Roadblock: 'Roadblock'
}

stories.addDecorator(withKnobs);

stories.add('Node', ()=>{
    const nodeText = text('Node Title', 'User are more likely to do X');
    const milestone = select('milestone', milestoneOptions, milestoneOptions.Insight)
    return (<Node milestone={milestone} title={nodeText}></Node>);
});