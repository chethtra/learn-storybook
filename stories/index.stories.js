import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../src/components/index';
import { withKnobs, color, text } from '@storybook/addon-knobs';


const stories = storiesOf('Buttons', module);

stories.addDecorator(withKnobs);

stories.add('Error button', ()=>{
    const buttonColor = color('Error color', '#e74c3c');
    const textColor = color('Text Color', '#ecf0f1');
    const buttonText = text('Button text', 'This is a error');

    return (<Button text={buttonText} click={()=>console.log('hello')} bgColor={buttonColor} textColor={textColor}></Button>);
});

stories.add('Warning button', ()=>{
    const buttonColor = color('Warning color', '#f1c40f');
    const textColor = color('Text Color', '#34495e');
    const buttonText  = text('Button text', 'This is a warning');

    return (<Button text={buttonText} click={()=>console.log('hello')} bgColor={buttonColor} textColor={textColor}></Button>);
});

