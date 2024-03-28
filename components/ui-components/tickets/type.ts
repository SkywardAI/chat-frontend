export interface IMessage {
	id: string,
	message: string,
	type: string, // 'in' | 'out',
	// createTime: string
}

export type MessageRes = {
	message: string,
	sessionId: string
}

export interface ITicket {
	id: string,
	name: string,
	createdAt: string
}