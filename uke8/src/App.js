import { useState } from 'react'
import Header from './components/Header'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'

function App() {
  const [hide1, setHide1] = useState(false)
  const [hide2, setHide2] = useState(true)
  const [hide3, setHide3] = useState(true)

  const Hiding1 = () => {
    setHide1(!hide1)
    setHide2(true)
    setHide3(true)
  }
  const Hiding2 = () => {
    setHide2(!hide2)
    setHide1(true)
    setHide3(true)
  }
  const Hiding3 = () => {
    setHide3(!hide3)
    setHide1(true)
    setHide2(true)
  }

  return (
    <>
      <Header
        hide1={hide1}
        hide2={hide2}
        hide3={hide3}
        Hiding1={Hiding1}
        Hiding2={Hiding2}
        Hiding3={Hiding3}
      />
      <Page1 hide1={hide1} />
      <Page2 hide2={hide2} />
      <Page3 hide3={hide3} />
    </>
  )
}

export default App
