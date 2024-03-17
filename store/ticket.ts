import { defineStore } from 'pinia'

export const useTicketStore = defineStore('ticket', {
	state: () => {
		return {
			currentSessionId: '',
		}
	},
	actions: {

	},
})