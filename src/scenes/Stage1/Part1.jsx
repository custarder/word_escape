import { useState } from 'react'
import Narration from "../../components/Narration"
import ClickableBox from '../../components/ClickableBox'

function Part1()  {
	const [narration, setNarration] = useState(null)
	const [isSelected, setIsSelected] = useState()

	function handleClick() {
		setIsSelected(true)
	}

	function  handleNarration(contents){
		if (isSelected) {setNarration(contents)}
	}
	
	return (
	  <>
	  	<Narration contents={narration}/>
		<ClickableBox onClick={() => {handleClick();handleNarration("四周一片黑暗")}} isSelected={isSelected}>
			<p>黑暗</p>
		</ClickableBox>
	  </>
	)
}

export default Part1