<script>
  import {goto} from "$app/navigation";
  import Icon from "@iconify/svelte";
  import {page} from '$app/stores';
  import {deleteDiary} from "$lib/store.js";

  export let diary = {};
</script>

<div class="btns">
  {#if !$page.url.pathname.startsWith("/edit")}
    <button class="btn" on:click={() => goto(`/edit/${diary.id}`)}>
      <Icon icon="la:pen" width="24" height="24" style="color: #444"/>
    </button>
  {/if}
  <button class="btn" on:click={async () => {
      await deleteDiary(diary.id);
      location.href = "/";
  }}>
    <Icon icon="iconamoon:trash-light" width="24" height="24" style="color: #f80"/>
  </button>
</div>
