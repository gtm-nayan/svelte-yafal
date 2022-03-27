<script lang="ts">
	import type { IconDefinition, Nullish, Transform } from './types';

	let icon_def: IconDefinition;
	export { icon_def as icon };

	//#region animation
	export let spin = false;
	export let pulse = false;
	//#endregion animation

	//#region styling
	let _class_ = '';
	export { _class_ as class };
	export let style = '';
	export let border = '';
	export let inverse = false;
	//#endregion styling

	//#region duotone
	// export let swapOpacity = false;
	//#endregion duotone

	//#region transforms
	export let fullWidth = false;
	export let pull: 'right' | 'left' | Nullish = null;
	export let size = 1;
	export let transform: Transform = {};
	//#endregion transforms

	let icon: IconDefinition['icon'];
	$: icon = icon_def.icon;
</script>

<svg
	version="1.1"
	class={_class_}
	class:spin
	class:pulse
	class:inverse
	class:fh={transform.flipX}
	class:fv={transform.flipY}
	style:float={pull}
	viewBox="0 0 {icon[0]} {icon[1]}"
	{style}
/>

<style>
	svg {
		height: 1em;
		width: 1em;
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
		animation: pulse 1s infinite steps(8);
	}

	.fw {
	}
	.border {
	}
	.inverse {
	}
	.li {
	}
	.fh {
	}
	.fv {
	}
</style>
