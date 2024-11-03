<script>
	import { diaries } from '$lib/store.js';
	import addIcon from '$lib/assets/icon_add.svg';
	import Icon from '@iconify/svelte';
</script>

<main class="container">
	{#each $diaries as diary}
		<div class="diary">
			<a href={`/read/` + diary.id}>
				<p class="content">{
					diary.content.length > 50
						? diary.content.slice(0, 50) + '...'
						: diary.content
				}</p>
			</a>
			<div class="bottom-info">
				<span class="date">{diary.date}</span>
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