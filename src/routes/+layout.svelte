<script>
	import '@fontsource/bricolage-grotesque';
	import '@fontsource/jetbrains-mono';
	import '@fontsource/inter';
	import '../app.css';
</script>

<main class="m">
	<nav class="pc-only">
		<a href="/">home</a>
		<a href="/about">about</a>
		<a href="/contact">contact</a>
		<a href="/thoughts">thoughts</a>
	</nav>

	<nav class="mobile-only">
		<button class="button-outline">menu</button>
	</nav>

	<slot />

	<nav class="pc-only">footer</nav>

	<nav class="mobile-only">mobile footer</nav>
</main>
