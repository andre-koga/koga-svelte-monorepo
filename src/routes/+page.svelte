<script>
	// @ts-nocheck

	import '@fontsource/bricolage-grotesque/300.css';
	import { onMount } from 'svelte';
	import Inner from '$lib/assets/inner.svg';
	// import Rose from '$lib/assets/rose.svg';
	// import Boomerang from '$lib/assets/boomerang.svg';
	// import { ScrollTrigger } from 'gsap/ScrollTrigger';

	/**
	 * @type {gsap.TweenTarget}
	 */
	let h1;
	/**
	 * @type {gsap.TweenTarget}
	 */
	let asciiPre = Array(25).fill(null);
	let asciiSection;
	let disableAscii = false;
	let ascii = [
		'@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*,,,,#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',
		'@@@@@@@@@@@@@@@@@@@@@@@@@@@@,............,*@@@@@@@@@@@@@@@@@,,...........,,@@@@@',
		'@@@@@@@@@@@@@@@@@@@@@@@@@%..................(@@@@@@@@@@@@,...................*@@',
		'@@@@@@@@@@@@@@@@@@@@@@@@,....................(@@@@@@@@@&.......................@',
		'@@@@@@@@@@@@@@@@@@@@@@%.......................@@@@@@@@@.........................',
		'@@@@@@@@@@@@@@@@@@@@@,........................@@@@@@@@..........................',
		'@@@@@@@@@@@@@@@@@@@#..........................@@@@@@@@..........................',
		'@@@@@@@@@@@@@@@@@@............................@@@@@@@@@.........................',
		'@@@@@@@@@@@@@@@@(.............................@@@@@@@@@@......................#@',
		'@@@@@@@@@@@@@@@...............................@@@@@@@@@@@@/................./@@@',
		'@@@@@@@@@@@@@(................................@@@@@@@@@@@@@@@@*.........,@@@@@@@',
		'@@@@@@@@@@@@..................................@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',
		'@@@@@@@@@@,...................................@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',
		'@@@@@@@@@.....................................@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',
		'@@@@@@@,......................................@@@@@@@@@@@@@@@@@/,,,,,,,/@@@@@@@@',
		'@@@@@&........................................@@@@@@@@@@@@@,...............,@@@@',
		'@@@@,.........................................@@@@@@@@@@&.....................@@',
		'@@@...........................................@@@@@@@@@........................(',
		'@,............................................@@@@@@@@@.........................',
		'..............................................@@@@@@@@..........................',
		'..............................................@@@@@@@@@.........................',
		'@............................................(@@@@@@@@@(.......................%',
		'@@..........................................@@@@@@@@@@@@@.....................@@',
		'@@@@......................................@@@@@@@@@@@@@@@@@(...............@@@@@'
	];
	let gradient = ['black'];

	// onMount(() => {
	// 	gsap.from(h1, { duration: 1, y: -100, autoAlpha: 0 });
	// 	gsap.to(h1, { duration: 1, y: 0, autoAlpha: 1 });
	// });
	onMount(() => {
		for (let i = 0; i < ascii.length; i++) {
			gsap.from(asciiPre[i], {
				delay: 1 + (2 * i) / ascii.length,
				duration: 0.5 + i / ascii.length,
				color: gradient[i % gradient.length]
			});
			gsap.to(asciiPre[i], {
				delay: 1 + (2 * i) / ascii.length,
				duration: 0.5 + i / ascii.length,
				text: ascii[i],
				color: 'white'
			});
		}
		gsap.to(h1, {
			opacity: 1,
			zIndex: 5,
			duration: 1
		});
		gsap
			.to(asciiSection, {
				delay: 5,
				opacity: 0,
				duration: 0.5
			})
			.onComplete(() => {
				disableAscii = true;
			});
	});

	// Draggable.create('.boomerang', {
	// 	type: 'rotation',
	// 	inertia: true
	// });
</script>

<section
	bind:this={asciiSection}
	class="fixed -m min-h-screen w-screen l-0 t-0 bg-black text-white z-20 flex flex-col place-content-center items-center"
	style:pointer-events={disableAscii ? 'auto' : 'none'}
>
	<div class="m-2 text-center text-gray-500">
		<p class="text-sm sm:text-base">for every question there are many answers,</p>
		<br />
		{#each ascii as line, i}
			<pre bind:this={asciiPre[i]} class="text-white text-[1.7vmin]"></pre>
		{/each}
		<br />
		<p class="text-sm sm:text-base">for every answer there are even more questions</p>
		<br />
	</div>
</section>

<section class="relative flex min-h-screen flex-col place-content-center items-center">
	<img
		class="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 h-[50vh] aspect-square"
		src={Inner}
		alt="Inner icon"
	/>
	<!-- <img
		class="z-[6] absolute right-[20%] bottom-[25%] translate-x-1/2 translate-y-1/2"
		bind:this={rose}
		src={Rose}
		alt="Rose decor"
	/>
	<img
		class="boomerang z-[6] absolute right-[75%] bottom-[55%] translate-x-1/2 translate-y-1/2"
		bind:this={boomerang}
		src={Boomerang}
		alt="Boomerang decor"
	/> -->
	<h1
		bind:this={h1}
		class="display-font md:font-light text-[16vw] mx-[4vw] text-center leading-[0.9] md:leading-normal md:text-[16vw] md:text-nowrap opacity-0"
	>
		Andre Koga
	</h1>
</section>
<section class="min-h-screen"></section>

<!-- <style>
	.hidden-text {
		visibility: hidden;
		opacity: 0;
		transition:
			opacity 0.5s,
			visibility 0.5s;
	}
	.visible-text {
		visibility: visible;
		opacity: 1;
		transition:
			opacity 0.5s,
			visibility 0.5s;
	}
</style> -->
