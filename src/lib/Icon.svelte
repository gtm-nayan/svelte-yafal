<script lang="ts">
	import type { IconDefinition } from './types';

	//#region transforms
	/** Flip the icon horizontally. */
	export let flipX = false;
	/** Flip the icon vertically. */
	export let flipY = false;
	/** Rotation of the icon in degrees. */
	export let rotate = 0;
	/**
	 * Scale of the icon.
	 * @default {1}
	 */
	export let scale = 1;
	/**
	 * Move the icon horizontally
	 *
	 * positive: ➝
	 *
	 * negative 🠔
	 */
	export let translateX = 0;
	/**
	 * Move the icon vertically.
	 *
	 * positive: 🠕
	 *
	 * negative 🠗
	 */
	export let translateY = 0;
	//#endregion transforms

	//#region colors
	export let color = '';
	export let primaryColor = '';
	export let secondaryColor = '';

	export let swapOpacity = false;
	export let primaryOpacity = 0.75;
	export let secondaryOpacity = 0.25;
	//#endregion colors

	/**
	 * An icon definition of the form:
	 * ```ts
	 * interface IconDefinition {
	 *		icon: [
	 *			number, // width
	 *			number, // height
	 *			string[], // ligatures
	 *			string, // unicode
	 *			IconPathData // svgPathData
	 *		];
	 * }
	 * ```
	 *
	 * svgPathData can be either a single string or a [string, string] tuple in case of duotone icons.
	 */
	let icon_def: IconDefinition;
	export { icon_def as icon };

	let icon: IconDefinition['icon'];
	$: icon = icon_def.icon;
</script>

<g
	style:--w={icon[0]}
	style:--h={icon[1]}
	style:--x={translateX}
	style:--y={translateY}
	style:--sx={scale * (flipX ? -1 : 1)}
	style:--sy={scale * (flipY ? -1 : 1)}
	style:--r={rotate}
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
		--n: min(512 / var(--w), 512 / var(--h));
		transform-origin: calc(var(--w) * 1px / 2) calc(var(--h) * 1px / 2);
		/* prettier-ignore */
		transform: translate3d(
				calc((var(--x) + 256 - var(--w) / 2) * 1px),
				calc((var(--y) + 256 - var(--h) / 2) * -1px),
				0
			)
			scale(calc(var(--sx) * var(--n)), calc(var(--sy) * var(--n)))
			rotate(calc(var(--r) * 1deg));
	}
</style>
