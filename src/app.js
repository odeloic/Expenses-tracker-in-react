import SayHello  from '../sayHello.js'

const appContainer = document.querySelector('#app')
const el = <SayHello name="Loic"/>
ReactDOM.render(el, appContainer)