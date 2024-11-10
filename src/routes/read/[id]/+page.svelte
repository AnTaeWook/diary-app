<script>
	import Btns from "$lib/components/Btns.svelte";
	import {formatDate} from "$lib/utils/formatDate.js";

	export let data;
</script>

<div class="diary">
	<p class="content">{data.diary[0].content}</p>
	<div class="bottom-info">
		<span class="date">{formatDate(data.diary[0].created_at)}</span>
		<Btns diary={data.diary[0]} />
	</div>
</div>
