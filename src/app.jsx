import React from 'react';
import ReactDOM from 'react-dom';
//service
import HelloWorld from './js/hello_world';
//View
import MyComponent from './js/service';

//styles
import './css/_cwd_events.scss';

ReactDOM.render(
      <HelloWorld name="Phil" />,
    document.getElementById('hello_world')
);




