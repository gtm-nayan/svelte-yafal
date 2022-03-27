<script lang="ts">
	import type { IconDefinition } from './types';

	//#region transforms
	export let flipX = false;
	export let flipY = false;
	export let rotate = 0;
	export let _scale_ = 1;
	export { _scale_ as scale };
	export let translateX = 0;
	export let translateY = 0;
	//#endregion transforms

	//#region colors
	export let color: string = '';
	export let primaryColor: string = '';
	export let secondaryColor: string = '';

	export let swapOpacity = false;
	export let primaryOpacity: number = 0.75;
	export let secondaryOpacity: number = 0.25;
	//#endregion colors

	let icon_def: IconDefinition;
	export { icon_def as icon };

	let icon: IconDefinition['icon'];
	$: icon = icon_def.icon;

	$: scale = `scale(${_scale_ * (flipX ? -1 : 1)} ${_scale_ * (flipY ? -1 : 1)})`;
</script>

<g
	transform="translate({translateX} {translateY}) {scale} rotate({rotate})"
	style:--ox={icon[0] / 2}
	style:--oy={icon[1] / 2}
>
	{#if typeof icon[4] == 'string'}
		<path d={icon[4]} fill={color || primaryColor || 'currentColor'} />
	{:else}
		<!-- Duotone icons -->
		<path
			d={icon[4][0]}
			fill={secondaryColor || color || 'currentColor'}
			fill-opacity={swapOpacity ? primaryOpacity : secondaryOpacity}
		/>
		<path
			d={icon[4][1]}
			fill={primaryColor || color || 'currentColor'}
			fill-opacity={swapOpacity ? secondaryOpacity : primaryOpacity}
		/>
	{/if}
</g>

<style>
	g {
		transform-origin: var(--ox) var(--oy);
		transform: translate(var(--x) var(--y)) rotate(var(--r)) scale(var(--sx) var(--sy));
	}
</style>
