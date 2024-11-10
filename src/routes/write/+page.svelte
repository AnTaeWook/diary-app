<script>
	import { writing } from '$lib/store.js';
	import {currentDate} from '$lib/utils/formatDate.js';
	import autosize from 'svelte-autosize';

	let val = ""
	$: {
		$writing = val;
	}
</script>

<main>
	<div class="diary">
		<textarea
				use:autosize
				bind:value={val}
				placeholder="글쓰기를 시작하세요..."
		></textarea>
		<div class="bottom-info">
			<span class="date">{currentDate()}</span>
		</div>
	</div>
</main>

<style lang='scss'>
	main {
		padding: 35px 20px;
	}
</style>
