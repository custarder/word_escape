export default function ClickableBox({children, onClick, isSelected  = false}) {
  return (
	<div
	  onClick={onClick}
	  className={`
	    inline-block
	    cursor-pointer  select-none
		border-2 px-2	
		transition-all duration-200
		font-bold text-white text-lg
		${isSelected? 'bg-red-600' : 'bg-gray-600'}`}>
		{children}
	</div>
  )
}