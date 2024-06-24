<script>
	import '@fontsource/bricolage-grotesque/300.css';
	import { onMount } from 'svelte';
	import Inner from '$lib/assets/inner.svg';
	import Rose from '$lib/assets/rose.svg';
	import Boomerang from '$lib/assets/boomerang.svg';
	// import { ScrollTrigger } from 'gsap/ScrollTrigger';

	/**
	 * @type {gsap.TweenTarget}
	 */
	let h1;
	/**
	 * @type {gsap.TweenTarget}
	 */
	let rose;
	/**
	 * @type {gsap.TweenTarget}
	 */
	let boomerang;
	let isSpinning = false;

	// onMount(() => {
	// 	gsap.from(h1, { duration: 1, y: -100, autoAlpha: 0 });
	// 	gsap.to(h1, { duration: 1, y: 0, autoAlpha: 1 });
	// });
	onMount(() => {
		gsap.to(h1, {
			opacity: 1,
			zIndex: 5
		});
		window.addEventListener('mousemove', (e) => {
			gsap.to(h1, {
				duration: 0.5,
				x: (e.clientX - window.innerWidth / 2) * 0.05,
				y: (e.clientY - window.innerHeight / 2) * 0.05,
				rotate: (e.clientX - window.innerWidth / 2) * 0.005,
				opacity: 1
			});
			gsap.to(rose, {
				duration: 0.5,
				x: (e.clientX - window.innerWidth / 2) * 0.1,
				y: (e.clientY - window.innerHeight / 2) * 0.05,
				rotate: ((e.clientX + e.clientY) / 2) * 0.05,
				scale: 1 + (e.clientY - window.innerHeight / 2) / window.innerHeight,
				opacity: 1
			});
			gsap.to(boomerang, {
				duration: 0.5,
				x: (e.clientX - window.innerWidth / 2) * 0.15,
				y: (e.clientY - window.innerHeight / 2) * 0.05,
				rotate: ((e.clientX + e.clientY) / 2) * 0.2,
				opacity: 1
			});
		});
	});

	// Draggable.create('.boomerang', {
	// 	type: 'rotation',
	// 	inertia: true
	// });
</script>

<section class="relative flex min-h-screen flex-col items-center place-content-center">
	<img
		class="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 h-[50vh] aspect-square"
		src={Inner}
		alt="Inner icon"
	/>
	<img
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
	/>
	<h1
		bind:this={h1}
		class="display-font md:font-light text-[32vw] text-center leading-[0.9] md:leading-normal md:text-[16vw] md:text-nowrap m-16 opacity-0"
	>
		Andre Koga
	</h1>
</section>
<section class="min-h-screen"></section>

<style>
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
</style>
