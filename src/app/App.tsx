import { Provider } from 'react-redux'
import { store } from './store'
import MainLayout from '../shared/layouts/MainLayout'

function App() {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  )
}

export default App