import Basics from './basics.svelte';
import BasicsSrc from './basics.svelte?raw';
import Animations from './animations.svelte';
import AnimationsSrc from './animations.svelte?raw';
import Transformations from './transformations.svelte';
import TransformationsSrc from './transformations.svelte?raw';
import Layering from './layering.svelte';
import LayeringSrc from './layering.svelte?raw';

export const sections = [
	{
		name: 'Basics',
		component: Basics,
		source: BasicsSrc,
	},
	{
		name: 'Animations',
		component: Animations,
		source: AnimationsSrc,
	},
	{
		name: 'Transformations',
		component: Transformations,
		source: TransformationsSrc,
	},
	{
		name: 'Layering',
		component: Layering,
		source: LayeringSrc,
	},
] as const;
