export function toScreenPosition(pos, baseWidth = 1920, baseHeight = 1080) {
	const width = window.innerWidth
	const height = window.innerHeight

	return {
		left: `${(pos.x / baseWidth) * width}px`,
		top: `${(pos.y / baseHeight) * height}px`
	}
}