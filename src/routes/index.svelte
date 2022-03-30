<script lang="ts">
	import Docs from './_docs/index.svelte';
	import { FaSvg, Icon } from 'svelte-yafal';
	import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
</script>

<main>
	<section>
		<div class="hero">
			<h1>svelte-yafal</h1>
			<p>Minimal yet meaningful abstractions for fontawesome icons in Svelte.</p>
			<pre><code>npm i svelte-yafal -D</code></pre>
			<a href="https://svelte.dev/repl/cc3a670ad52d4633ab682f3dd433143d?version=3">REPL</a>
		</div>
		<div class="waffle">
			<FaSvg><Icon icon={faStroopwafel} /></FaSvg>
		</div>
	</section>

	<Docs />
</main>

<style>
	main {
		padding: var(--size-fluid-2);
	}

	section {
		display: flex;
	}

	.hero {
		flex: 1;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.waffle {
		font-size: var(--size-fluid-8);
		margin-right: var(--size-fluid-4);
	}

	h1,
	.waffle,
	a {
		color: var(--brand-color);
	}

	pre {
		padding: var(--size-1);
	}
</style>
