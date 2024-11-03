<script>
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import { diaries } from '$lib/store.js';

	const { id } = $page.params;
	const diary = $diaries.find(d => d.id === Number(id));
	const { content, date } = diary;
</script>

<div class="diary">
	<p class="content">{content}</p>
	<div class="bottom-info">
		<span class="date">{date}</span>
		<div class="btns">
			<button class="btn">
				<Icon icon="la:pen" width="24" height="24" style="color: #444"/>
			</button>
			<button class="btn">
				<Icon icon="iconamoon:trash-light" width="24" height="24" style="color: #f80"/>
			</button>
		</div>
	</div>
</div>