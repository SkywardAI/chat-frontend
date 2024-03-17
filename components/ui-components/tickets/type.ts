export interface IMessage {
	id: string,
	message: string,
	role: string, // 'master' | 'rob',
	createTime: string
}

export type MessageRes = {
	message: string,
	sessionId: string
}