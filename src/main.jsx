
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import reduxStore from './redux/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
    <Provider store={reduxStore}>
      <App />
    </Provider>
)
