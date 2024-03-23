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