import { browser } from "$app/environment";
import { LOCAL_STORAGE_KEY } from "$lib/shared/constant/Interface";

export const load = async ({ fetch }) => {
	let chatMsg = [];
	let components = { components: [] };

	// Fetch chat messages from local storage if in the browser
	if (browser) {
		const chat = localStorage.getItem(LOCAL_STORAGE_KEY.STORAGE_CHAT_KEY);
		chatMsg = JSON.parse(chat || "[]");
	}

	// Fetch components from the JSON file
	try {
		const response = await fetch('/dummy_components.json');
		// console.log(response.json());
		if (response.ok) {
			components = await response.json();
			console.log(components);
		} else {
			console.error(`Failed to fetch components: ${response.statusText}`);
		}
	} catch (error) {
		console.error(`Error fetching components: ${error}`);
	}

	// Return both chat messages and components
	return {
		chatMsg,
		components,
	};
};
