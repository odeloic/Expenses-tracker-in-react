import AppWrapper from './components/appWrapper.js';
import data from '../data.js';
console.log(data);
var appEl = document.getElementById('app');
var wrapper = React.createElement(AppWrapper, { data: data });

ReactDOM.render(wrapper, appEl);