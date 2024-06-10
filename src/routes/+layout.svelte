<script>
	import '@fontsource/bricolage-grotesque';
	import '@fontsource/bricolage-grotesque/500.css';
	import '@fontsource/jetbrains-mono';
	import '@fontsource/inter';
	import '../app.css';
	import { Menu } from 'lucide-svelte';

	// Scroller
	let scrollerText = 'Website still under construction ~ Please check back soon!';
</script>

<main class="m bg">
	<!-- <div class="bg-stone-200 relative z-10 text-nowrap -m p scroller">
		<span>{scrollerText}</span>
	</div> -->
	<nav class="-m p relative gap-4 flex w-screen items-center md:justify-between">
		<button class="z-10"><Menu /></button>
		<a class="z-10 link text-2xl font-bold rounded-sm font-display" href="/">AK .</a>
		<a
			class="z-10 hidden md:block link category bg-gradient-to-r from-yellow-300 to-rose-300"
			href="/thoughts"
			>Thoughts
		</a>
		<a
			class="z-10 hidden md:block link category bg-gradient-to-r from-blue-300 to-indigo-300"
			href="/blog"
		>
			Numerus
		</a>
		<div class="flex-grow bg-gradient-to-r from-stone-200 to-stone-100 z-10 rounded-lg">
			<span class="opacity-0">.</span>
		</div>
		<a class="z-10 link hidden md:block" href="/about">About</a>
		<a class="z-10 link hidden md:block" href="/contact">Contact</a>
		<div class="gradient-blur">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</nav>

	<slot />

	<nav class="hidden md:grid">footer</nav>

	<nav class="md:hidden">mobile footer</nav>
</main>
