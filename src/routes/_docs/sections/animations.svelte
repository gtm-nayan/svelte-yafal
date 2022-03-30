<script lang="ts">
	import { faCog, faHeart, faSpinner } from '@fortawesome/free-solid-svg-icons';
	import { FaSvg, Icon } from 'svelte-yafal';
</script>

<span>
	<!-- __START_VISIBLE__ -->
	<FaSvg size={3} beat><Icon icon={faHeart} /></FaSvg>
	<FaSvg size={3} spin><Icon icon={faCog} /></FaSvg>
	<FaSvg size={3} pulse><Icon icon={faSpinner} /></FaSvg>
	<!-- __END_VISIBLE__ -->
</span>
