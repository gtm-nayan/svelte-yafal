<script lang="ts">
	import { faCalendar, faSun } from '@fortawesome/free-solid-svg-icons';
	import { FaSvg, Icon } from 'svelte-yafal';
</script>

<span>
	<!-- __START_VISIBLE__ -->
	<FaSvg size={3}>
		<Icon icon={faCalendar} />
		<Icon icon={faSun} color="white" scale={0.25} translateX={-150} translateY={10} />
		<text x="150" y="450">27</text>
	</FaSvg>
	<!-- __END_VISIBLE__ -->
</span>

<style>
	text {
		font-size: 250px;
		color: white;
	}
</style>
