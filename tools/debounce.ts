
export default function debounce(func: Function, time = 2000) {
	let timer: any = null
	return function () {
		if (!timer) {
			func.apply(this, arguments)
		} else {
			clearTimeout(timer)
		}

		timer = setTimeout(() => {
			func.apply(this, arguments)
			clearTimeout(timer)
		}, time);
	}


}