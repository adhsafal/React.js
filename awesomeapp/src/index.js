import React from 'react'
import ReactDOM from 'react-dom'
import App from './Website/App'
import '../src/Website/index.scss'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    <>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </>,
    document.getElementById('root')
)