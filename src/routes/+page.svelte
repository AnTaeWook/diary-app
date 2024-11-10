<script>
	import addIcon from '$lib/assets/icon_add.svg';
	import Btns from "$lib/components/Btns.svelte";
	import {formatDate} from "$lib/utils/formatDate.js";

	export let data;
</script>

<main class="container">
	{#each data.diaries as diary}
		<div class="diary">
			<a href={`/read/` + diary.id}>
				<p class="content">{
					diary.content.length > 50
						? diary.content.slice(0, 50) + '...'
						: diary.content
				}</p>
			</a>
			<div class="bottom-info">
				<span class="date">{formatDate(diary.created_at)}</span>
				<Btns diary={diary} />
			</div>
		</div>
	{/each}
</main>

<a href="/write" class="btn-write">
	<img src={addIcon} alt="add"/>
</a>

<style lang="scss">
  .btn-write {
    position: fixed;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    img {
      width: 64px;
      height: 64px;
    }
  }
</style>
