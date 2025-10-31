import { toScreenPosition } from '../utils/position'

export default function ClickableBox({
	children, 
	onClick, 
	isSelected  = false, 
	position
}) {
  return (
	<div
	  onClick={onClick}
	  className={`
		absolute -translate-x-1/2 -translate-y-1/2
	    inline-block
	    cursor-pointer  
		select-none
		border-2 px-2 py-1	
		transition-all duration-200
		font-bold text-white text-lg
		${isSelected? 'bg-red-600' : 'bg-gray-600'}
	  `}
	  style={toScreenPosition(position)}
	>
		{children}
	</div>
  )
}