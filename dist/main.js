import AppWrapper from './components/appWrapper.js';

var appEl = document.getElementById('app');
var wrapper = React.createElement(AppWrapper, null);

ReactDOM.render(wrapper, appEl);