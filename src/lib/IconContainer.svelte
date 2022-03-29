<script lang="ts">
	//#region animation
	export let spin = false;
	export let pulse = false;
	export let beat = false;
	//#endregion animation

	let _class_ = '';
	export { _class_ as class };
	export let style = '';

	export let pull: 'right' | 'left' | null = null;
	/**
	 * Defines the box size of the svg and the initial size of all icons within.
	 * @default
	 * {1} Same size as the font of the parent.
	 */
	export let size = 1;
</script>

<svg
	class:spin
	class:pulse
	class:beat
	class={_class_}
	style:float={/** @todo: Get these types fixed */ pull}
	style:font-size="{size}em"
	{style}
	viewBox="0 0 512 512"
>
	<slot />
</svg>

<style>
	svg {
		height: 1em;
		width: 1em;
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
