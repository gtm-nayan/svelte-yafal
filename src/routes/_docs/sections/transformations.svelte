<script lang="ts">
	import { faFlag, faRedo } from '@fortawesome/free-solid-svg-icons';
	import { FaSvg, Icon } from 'svelte-yafal';
</script>

<span>
	<!-- __START_VISIBLE__ -->
	<FaSvg size={3}>
		<Icon icon={faFlag} flipX scale={0.8} />
	</FaSvg>

	<FaSvg size={3}>
		<Icon icon={faRedo} flipY rotate={30} scale={0.6} />
	</FaSvg>
	<!-- __END_VISIBLE__ -->
</span>

<style>
	span > :global(svg) {
		background-color: var(--blue-3);
		border-radius: var(--radius-1);
	}
</style>
