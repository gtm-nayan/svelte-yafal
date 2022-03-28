<script lang="ts">
	import { FaSvg, Icon } from '$lib';
	import { faHeart } from '@fortawesome/free-solid-svg-icons';
	import * as knobby from 'svelte-knobby';

	const knobs = knobby.panel({
		animations: {
			beat: true,
			pulse: false,
			spin: false
		},
		size: {
			$label: 'size',
			min: 0,
			max: 10,
			step: 0.5,
			value: 3
		},
		flip: {
			$label: 'flip',
			x: false,
			y: false
		},
		transforms: {
			$label: 'transforms',
			rotate: {
				min: 0,
				max: 360,
				step: 1,
				value: 0
			},
			scale: {
				min: 0,
				max: 2,
				step: 0.1,
				value: 1
			},
			tx: {
				min: -512,
				max: 512,
				step: 1,
				value: 0
			},
			ty: {
				min: -512,
				max: 512,
				step: 1,
				value: 0
			}
		}
	});
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
