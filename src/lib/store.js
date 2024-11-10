import { writable, get } from 'svelte/store';
import { posts } from '$lib/data/posts';

export const diaries = writable(posts);
export const writing = writable('');
export const editId = writable(0);

export const addDiary = async () => {
	const content = get(writing);

	if (content) {
		await fetch('/api', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ content }),
		});
	}
}

export const editDiary = async (id) => {
	const content = get(writing);

	if (content) {
		await fetch(`/api`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ id, content }),
		});
	}
}

export const deleteDiary = async (id) => {
	await fetch(`/api`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ id }),
	});
}
