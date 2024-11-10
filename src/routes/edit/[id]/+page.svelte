<script>
  import { writing, editId } from '$lib/store.js';
  import autosize from 'svelte-autosize';
  import Btns from "$lib/components/Btns.svelte";
  import {formatDate} from "$lib/utils/formatDate.js";

  export let data;
  $editId = data.diary[0].id;
  $: {
    $writing = data.diary[0].content;
  }
</script>

<main>
  <div class="diary">
		<textarea
        use:autosize
        bind:value={data.diary[0].content}
        placeholder="글쓰기를 시작하세요..."
    ></textarea>
    <div class="bottom-info">
      <span class="date">{formatDate(data.diary[0].created_at)}</span>
      <Btns diary={data.diary[0]}/>
    </div>
  </div>
</main>

<style lang='scss'>
  main {
    padding: 35px 20px;
  }
</style>
