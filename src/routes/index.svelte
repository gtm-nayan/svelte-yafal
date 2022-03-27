<script lang="ts">
	import { Container } from '$lib';
	import Icon from '$lib/Icon.svelte';
	import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
</script>

<button>
	<Container size={6}>
		<Icon icon={faFlagCheckered} flipX flipY translateX={90} scale={0.5} />
	</Container>
</button>
