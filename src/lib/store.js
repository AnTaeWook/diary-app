import { writable, get } from 'svelte/store';
import { posts } from '$lib/data/posts';
import formatDate from '$lib/utils/formatDate.js';

export const diaries = writable(posts);
export const writing = writable('');

export const addDiary = () => {
	const content = get(writing);

	if (content) {
		const newDiary = {
			id: Date.now(),
			date: formatDate(),
			content,
		}
		diaries.update(diaries => [...diaries, newDiary]);
	}
}