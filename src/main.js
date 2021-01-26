import AppWrapper from './components/appWrapper.js'
import data from '../data.js'
console.log(data)
const appEl = document.getElementById('app')
const wrapper = <AppWrapper data={data}/>

ReactDOM.render(wrapper, appEl)