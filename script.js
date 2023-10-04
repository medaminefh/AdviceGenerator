
	const h3 = document.querySelector("h3")
	const btn = document.querySelector(".click")
	const share = document.querySelector(".show")
	const s = document.querySelector(".social")
	const twitter = document.querySelector('.twitter')
	const fb = document.querySelector(".fb")

		fetch("https://api.adviceslip.com/advice")
			.then(res => res.json())
			.then(data => {
			const link = encodeURIComponent(data.slip.advice)
				twitter.setAttribute("href",`https://twitter.com/intent/tweet?text=${link}`)
				h3.innerHTML =data.slip.advice
				})
				//h3.innerHTML = "Today, do not use the words â€˜Kind of,' â€˜Sort of' or â€˜Maybe.' It either is or it isn't."

const r = () => {
	return Math.floor(Math.random()*217)+1
}
	const color = () => {
		const r = Math.floor(Math.random()*16777215).toString(16)
		document.body.style.backgroundColor = "#" + r;
	}
	
	color()
	// color()

	const clickHandler =() => {
		fetch(`https://api.adviceslip.com/advice/${r()}`)
			.then(res => res.text())
			.then(data => {
					const {slip:{advice}} =JSON.parse(data)
					const link = encodeURIComponent(advice)
					h3.innerHTML = advice
					twitter.setAttribute("href",`https://twitter.com/intent/tweet?text=${link}`)
			})
			.catch(err => console.error(err))
			color()
	}

	btn.addEventListener("click",clickHandler)
	share.addEventListener("click",() => {
			s.classList.toggle("s")
	})


