import SayHello from '../sayHello.js';

var appContainer = document.querySelector('#app');
var el = React.createElement(SayHello, { name: 'Loic' });
ReactDOM.render(el, appContainer);