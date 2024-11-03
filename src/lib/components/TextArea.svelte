<script>
	export let value = '';
	export let minRows = 1;
	export let maxRows;

	$: minHeight = `${1 + minRows * 1.2}em`;
	$: maxHeight = maxRows ? `${1 + maxRows * 1.2}em` : `auto`;
</script>

<div class="text-container">
	<pre
		aria-hidden="true"
		style="min-height: {minHeight}; max-height: {maxHeight}"
	>{value + '\n'}</pre>

	<textarea bind:value placeholder="글쓰기를 시작하세요..."></textarea>
</div>

<style>
    .text-container {
        position: relative;
    }

    pre, textarea {
        font-family: inherit;
        padding: 0.5em;
        box-sizing: border-box;
        border: 1px solid #eee;
        line-height: 1.2;
        overflow: hidden;
				font-size: inherit;
    }

    textarea {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        resize: none;
				background: transparent;
				outline: none;
    }
</style>