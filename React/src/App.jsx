import './App.css'
import UseContext from './components/useContext/UseContext'
import UseRef from './components/useRef/UseRef'
import ForwardRef from './components/useRef/ForwardRef'
import UseReducer from './components/useReducer/UseReducer'
import Parent from './components/childToParent/Parent'
import ClickCount from './components/HOC/ClickCount'
import HoverCount from './components/HOC/HoverCount'
import Counter from './components/CustomHooks/Counter'

function App() {
 

  return (
    <>
      <UseContext/>
      <UseRef/>
      <ForwardRef/>
      <UseReducer/>
      <Parent/>
      <br /><br />
      <HoverCount/>
      <ClickCount/>
      <br />
      <Counter/>
    </>
  )
}

export default App
