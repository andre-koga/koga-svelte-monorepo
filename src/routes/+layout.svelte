<script>
	import { blur } from 'svelte/transition';

	import '@fontsource/bricolage-grotesque';
	import '@fontsource/bricolage-grotesque/500.css';
	import '@fontsource/jetbrains-mono';
	import '@fontsource/inter';
	import '../app.css';
	import { Menu, X } from 'lucide-svelte';
	import Footer from '../components/Footer.svelte';

	let active = false;
	// Scroller
	let scrollerText = 'Website still under construction ~ Please check back soon!';
</script>

<main class="m bg">
	<!-- <div class="bg-stone-200 relative z-10 text-nowrap -m p scroller">
		<span>{scrollerText}</span>
	</div> -->
	<nav class="fixed -m p gap-4 flex w-screen items-center md:justify-between">
		<button
			on:click={() => (active = !active)}
			class="z-20 h-6 w-6 relative md:hidden sidebar-button"
		>
			{#if active}
				<div class="absolute top-0" transition:blur={{ delay: 0, duration: 200 }}>
					<X />
				</div>
			{:else}
				<div class="absolute top-0" transition:blur={{ delay: 0, duration: 200 }}>
					<Menu />
				</div>
			{/if}
		</button>
		<aside class="flex flex-col justify-between" class:active>
			<div class="flex flex-col gap-2 px-4">
				<a class="z-10 link text-2xl font-bold rounded-sm font-display" href="/">AK .</a>
				<p class="font-bold uppercase text-xs mt-4">Pages</p>
				<div class="flex gap-4">
					<a class="z-10 link" href="/about">About</a>
					<a class="z-10 link" href="/contact">Contact</a>
				</div>
				<p class="font-bold uppercase text-xs mt-4">Projects</p>
				<div class="flex flex-wrap items-center gap-4">
					<a
						class="z-10 link category bg-gradient-to-r from-yellow-300 to-rose-300"
						href="/thoughts"
						>Thoughts
					</a>
					<a class="z-10 link category bg-gradient-to-r from-blue-300 to-indigo-300" href="/blog">
						Numerus
					</a>
				</div>
				<p class="font-bold uppercase text-xs mt-4">Connect</p>
				<!-- <div class="flex flex-wrap items-center gap-4">
					<a class="z-10 link category bg-gradient-to-r from-orange-300 to-rose-400" href="/"
						>Instagram
					</a>
					<a class="z-10 link category bg-gradient-to-r from-sky-300 to-blue-400" href="/">
						Twitter
					</a>
					<a
						class="z-10 link category text-white bg-gradient-to-r from-sky-950 to-slate-700"
						href="/"
					>
						Github
					</a>
					<a
						class="z-10 link category text-white bg-gradient-to-r from-red-500 to-red-600"
						href="/"
					>
						Youtube
					</a>
				</div> -->
				<!-- <div class="text-sm text-gray-300">sidebar footer stuff!</div> -->
			</div>
		</aside>
		<a class="z-10 link text-2xl font-bold rounded-sm font-display" href="/">AK .</a>
		<a class="z-10 link hidden md:block" href="/about">About</a>
		<a class="z-10 link hidden md:block" href="/contact">Contact</a>
		<div class="flex-grow bg-gradient-to-r from-stone-100 to-stone-200 z-10 rounded-lg">
			<span class="opacity-0">.</span>
		</div>
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

	<Footer />
</main>

<style>
	aside {
		z-index: 15;
		position: fixed;
		top: 0;
		left: -100vw;
		transition: all 0.4s;
		height: 100vh;
		width: 100vw;
		border: 1px solid #ddd;
		background-color: #efefef;
		@apply pt-16;
	}
	.active {
		left: 0px;
	}
	.sidebar-button {
		transition: all 0.5s;
	}
	.sidebar-button:active {
		transition: all 0.1s;
	}
</style>
