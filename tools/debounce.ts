
export default function debounce(func: Function, time = 2000) {
	let timer: any = null
	return  (...args: any) => {
		if (!timer) {
			func.apply(this, args)
		} else {
			clearTimeout(timer)
		}

		timer = setTimeout(() => {
			func.apply(this, args)
			clearTimeout(timer)
		}, time);
	}


}