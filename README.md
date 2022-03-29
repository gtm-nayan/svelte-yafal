# svelte-yafal (Yet another font awesome library)

Minimal yet meaningful abstractions for Fontawesome icons in Svelte.

[REPL](https://svelte.dev/repl/cc3a670ad52d4633ab682f3dd433143d?version=3)

### Features

- Normalized dimensions
- Animations
- Easy to combine icons
- Low overhead, based on the tree-shakeable @fortawesome/ packages

### Installation

```sh
npm i svelte-yafal -D
```

### Usage

#### Basics

```html
<script>
	import { FaSvg, Icon } from 'svelte-yafal';
	import { faFlag } from '@fortawesome/free-solid-svg-icons';
</script>

<FaSvg><Icon icon="{faFlag}" size="{3}" /></FaSvg>
```

#### Animations

```html
<FaSvg beat>
	<Icon icon="{faHeart}" />
</FaSvg>
```

#### Transformations

```html
<FaSvg>
	<Icon
		icon="{faFlag}"
		translateX="{256}"
		translateY="{128}"
		scale="{0.25}"
		rotate="{90}"
		flipX
		flipY
	/>
</FaSvg>
```

#### Layers

```html
<FaSvg>
	<Icon icon="{faCalendar}" />
	<Icon icon="{faSun}" scale="{0.2}" />
	<text x="100" y="450" font-size="250">23</text>
</FaSvg>
```

The units used for positioning will be in the frame of reference of the SVG.
x=0 would start the text from the left edge, whereas 512 would push it beyond the right edge.

### Contributions

Feature requests and PRs are welcome. New features will only be added upon request so as to not bloat things.
