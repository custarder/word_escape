import { useState } from 'react'
import StartScreen from './scenes/StartScreen'
import LevelSelect from './scenes/LevelSelect'
import Part1 from './scenes/Stage1/Part1'

function App() {
  const [scene, setScene] = useState("start")
  
  function handleScene(scene) {
	setScene(scene)
  }

  switch (scene) {
	case "start":
		return <StartScreen onStart={() => handleScene("select")}/>
	case "select":
		return <LevelSelect onClick={() =>handleScene("stage1")}/>
	case "stage1":
		return <Part1 />
  }
}

export default App
