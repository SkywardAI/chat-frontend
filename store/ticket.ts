import { defineStore } from 'pinia'
type ITicket = {
	id: number,
	name: string
}

export const useTicketStore = defineStore('ticket', {
	state: () => {
		return {
			currentTicket: {} as ITicket,
			currentSessionId: '',
		}
	},
	actions: {

		setCurrentTicket(data: ITicket) {
			this.$state.currentTicket = data
		},
		clearTicket() {
			this.$state.currentSessionId = ''
			this.$state.currentTicket = {} as ITicket
		}
	},
})