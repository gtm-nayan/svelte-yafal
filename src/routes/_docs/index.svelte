<script lang="ts">
	import { sections } from './sections';
	import Code from './code.svelte';
</script>

{#each sections as { name, component, source }}
	<section>
		<h2>{name}</h2>
		<svelte:component this={component} />
		<Code {source} />
	</section>
{/each}

<style>
	section + section {
		margin-top: var(--size-fluid-3);
	}
</style>
