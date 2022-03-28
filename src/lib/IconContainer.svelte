<script lang="ts">
	import type { Nullish } from './types';

	//#region animation
	export let spin = false;
	export let pulse = false;
	export let beat = false;
	//#endregion animation

	let _class_ = '';
	export { _class_ as class };
	export let style = '';

	export let pull: 'right' | 'left' | Nullish = null;
	export let size = 1;
</script>

<svg
	class={_class_}
	class:spin
	class:pulse
	class:beat
	style:float={/** @todo: Get these types fixed */ pull}
	viewBox="0 0 512 512"
	style:font-size="{size}em"
	{style}
>
	<slot />
</svg>

<style>
	svg {
		height: 1em;
		width: 1em;
		vertical-align: middle;
		text-align: center;
		overflow: visible;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.spin {
		animation: spin 2s infinite linear;
	}

	.pulse {
		animation: spin 1s infinite steps(8);
	}

	.beat {
		animation: beat 833ms infinite;
	}

	@keyframes beat {
		50% {
			transform: scale(1.1);
		}
	}
</style>
