export interface IMessage {
	id: string,
	message: string,
	role: 'master' | 'rob',
	createTime: string
}
