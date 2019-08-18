import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { Normalize } from 'styled-normalize'
import store from './store'
import './index.css'
import { YMaps } from 'react-yandex-maps'

const Root = () => (
	<Provider store={store}>
		<YMaps>
			<Normalize />
			<App />
		</YMaps>
	</Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
