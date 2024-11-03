<script>
	import TextArea from '$lib/components/TextArea.svelte';
	import { writing } from '$lib/store.js';
	import formatDate from '$lib/utils/formatDate.js';

	let val = ""
	$: {
		$writing = val;
		console.log($writing);
	}
</script>

<main>
	<div class="diary">
		<TextArea
			bind:value={val}
			minRows={4}
			maxRows={40}
		/>
		<div class="bottom-info">
			<span class="date">{formatDate()}</span>
		</div>
	</div>
</main>

<style lang='scss'>
</style>