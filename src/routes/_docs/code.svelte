<script lang="ts">
	import { visible_code_regex } from './regex';

	export let source: string;

	function dedent(str: string) {
		const match = str.match(/^[ \t]*(?=\S)/gm);
		if (!match) return str;

		const min_indent = match.reduce((prev, curr) => Math.min(prev, curr.length), Infinity);
		const re = new RegExp(`^[ \\t]{${min_indent}}`, 'gm');
		return str.replace(re, '');
	}

	function extract_visible(src: string) {
		let output = '';
		for (const match of src.matchAll(visible_code_regex)) {
			output += dedent(match[1].trimEnd().replace(/^[\n\r]*/, ''));
		}
		return output || src;
	}
</script>

<pre><code>{extract_visible(source)}</code></pre>

<style>
	pre {
		max-inline-size: none;
		overflow-x: auto;
	}
</style>
