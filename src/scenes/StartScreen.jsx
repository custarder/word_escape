function StartScreen({onStart})  {
	
	return (
	  <>
	    <h1 className="text-4xl font-bold text-red-500">文字密室逃脫</h1>
		<button onClick={onStart}>開始遊戲</button>
	  </>
	)
}

export default StartScreen