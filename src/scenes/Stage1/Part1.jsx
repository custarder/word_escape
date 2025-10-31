import { useState } from 'react'
import Narration from "../../components/Narration"
import ClickableBox from '../../components/ClickableBox'
import stage1Data from '../../data/stage1Data.json'

export default function Stage1()  {
	const [currentNode, setCurrentNode] = useState("start")
	const [boxes ,setBoxes] = useState(stage1Data["start"].boxes)
	const [narration, setNarration] = useState("")
	const [selectedBoxId, setSelectedBoxId] = useState(null)

	function handleClick(box) {
		if (selectedBoxId != box.id) {
			setSelectedBoxId(box.id)
			return
		}

		setNarration(box.narration)

		if (box.spawn) {return}
	}
	
	return (
	  <>
	  	<div className="relative w-full h-screen bg-black text-white overflow-hidden">
	      <Narration contents={narration}/>

	      {boxes.map(box => (
			  <ClickableBox 
			   	  key={box.id}
				  onClick={() => {handleClick(box)} }
				  isSelected={selectedBoxId === box.id}
				  position={box.position}
			  >
			    {box.text}
			  </ClickableBox>
		  ))}
		</div>
	  </>
	)
}
