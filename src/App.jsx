import './App.css'
import HookForm from './components/HookForm/HookForm'
import ProductManagement from './components/ProductManagement/ProductManagement'
import ControlledField from './components/SimpleForm/ControlledField/ControlledField'
import FormAction from './components/SimpleForm/FormAction'
import SimpleForm from './components/SimpleForm/SimpleForm'
import UncontrolledFields from './components/unControlledFiels/UncontrolledFields'

function App() {
 

  return (
    <>
     
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledField></ControlledField> */}
      {/* <UncontrolledFields></UncontrolledFields> */}
      {/* <HookForm></HookForm> */}
      <ProductManagement></ProductManagement>
      
    </>
  )
}

export default App
