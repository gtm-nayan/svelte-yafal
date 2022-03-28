<script lang="ts">
	import { Container } from '$lib';
	import Icon from '$lib/Icon.svelte';
	import { faFlagCheckered, faWater } from '@fortawesome/free-solid-svg-icons';
	import * as knobby from 'svelte-knobby';

	const knobs = knobby.panel({
		animations: {
			beat: false,
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
				min: -250,
				max: 250,
				step: 0.1,
				value: 1
			},
			ty: {
				min: -250,
				max: 250,
				step: 0.1,
				value: 1
			}
		}
	});
</script>

<button>
	<Container
		size={$knobs.size}
		beat={$knobs.animations.beat}
		pulse={$knobs.animations.pulse}
		spin={$knobs.animations.spin}
	>
		<Icon
			icon={faWater}
			flipX={$knobs.flip.x}
			flipY={$knobs.flip.y}
			translateX={$knobs.transforms.tx}
			translateY={$knobs.transforms.ty}
			rotate={$knobs.transforms.rotate}
			scale={$knobs.transforms.scale}
		/>
	</Container>
</button>

<style>
	button {
		padding: 0;
	}
</style>
