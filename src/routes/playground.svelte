<script lang="ts">
	import { FaSvg, Icon } from 'svelte-yafal';
	import { faHeart } from '@fortawesome/free-solid-svg-icons';
	import { knobs } from './_knobs';
</script>

<button>
	<FaSvg
		size={$knobs.size}
		beat={$knobs.animations.beat}
		pulse={$knobs.animations.pulse}
		spin={$knobs.animations.spin}
	>
		<Icon
			icon={faHeart}
			flipX={$knobs.flip.x}
			flipY={$knobs.flip.y}
			translateX={$knobs.transforms.tx}
			translateY={$knobs.transforms.ty}
			rotate={$knobs.transforms.rotate}
			scale={$knobs.transforms.scale}
		/>
	</FaSvg>
</button>

<style>
	button {
		padding: 0;
		color: rgb(255, 71, 132);
	}
</style>
