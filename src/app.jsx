import React from 'react';
import ReactDOM from 'react-dom';
//service
import HelloWorld from './js/_cwd_events';
//View
import MyComponent from './js/_cwd_service';

//styles
import './css/_cwd_events.scss';

ReactDOM.render(
      <HelloWorld name="Phil" />,
    document.getElementById('events-listing')
);




