require('./styles/styles.scss');
import React from 'react/addons';
import Root from './components/Root';

var attachElement = document.getElementById('main');
var initialName = "John Doe";
var initialItems = [
        {text : "Build First React App"}, 
        {text : "Build One Yourself"},
        {text : "Build A Better One"}
];

React.render(<Root name={initialName} items={initialItems} />, attachElement);

// var appElement = React.createElement(Root, {name : initialName, items : initialItems});
// React.render(appElement, attachElement);