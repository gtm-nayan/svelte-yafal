import * as knobby from 'svelte-knobby';

export const knobs = knobby.panel({
	animations: {
		beat: true,
		pulse: false,
		spin: false,
	},
	size: {
		$label: 'size',
		min: 0,
		max: 10,
		step: 0.5,
		value: 3,
	},
	flip: {
		$label: 'flip',
		x: false,
		y: false,
	},
	transforms: {
		$label: 'transforms',
		rotate: {
			min: 0,
			max: 360,
			step: 1,
			value: 0,
		},
		scale: {
			min: 0,
			max: 2,
			step: 0.1,
			value: 1,
		},
		tx: {
			min: -512,
			max: 512,
			step: 1,
			value: 0,
		},
		ty: {
			min: -512,
			max: 512,
			step: 1,
			value: 0,
		},
	},
});
