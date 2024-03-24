<script setup lang='ts'>
import { genSentence } from '~/tools/genWord';
import Message from './Message.vue'
import request from '~/tools/request';
import { MessageRes } from './type';
import { useTicketStore } from '~/store/ticket';

const props = withDefaults(defineProps<{
	chat: boolean
}>(), {
	chat: true
})

const isResolved = ref(false)
const isCompleted = ref(true)
const genMessage = (text: string, role = 'in') => {
	return {
		id: Date.now() + '',
		type: role,
		message: text,
		createTime: Date.now() + ''
	}
}

// const messages = ref([genMessage(genSentence()), genMessage(genSentence()), genMessage(genSentence()), genMessage(genSentence()), genMessage(genSentence())])
const messages = ref<ReturnType<typeof genMessage>[]>([])

const inputContent = ref('')

const inputRef = ref()
const messageRef = ref()
const chatAreaRef = ref()

const sessionId = ref()
const scrollToLatestMessage = () => {
	const height = parseInt(getComputedStyle(messageRef.value).height)
	chatAreaRef.value.scrollTop = height
}
const answer = () => {
	request('/chat', {
		method: 'POST',
		body: JSON.stringify({
			message: 'message'
		}),
		headers: {
			"Content-Type": "application/json",
		}
	}).then(res => {
		return res.json()
	}).then((res: MessageRes) => {
		messages.value.push({
			message: res.message,
			type: 'out',
			id: res.sessionId,
			createTime: '2012'
		})

		sessionId.value = res.sessionId
	}).finally(() => {
		isCompleted.value = true
	})

}
const sendMessage = (message: string) => {
	isCompleted.value = false
	// clear input
	inputContent.value = ''
	// mock
	const m = genMessage(message)

	messages.value.push(m)

	nextTick(() => {
		scrollToLatestMessage()
		answer()
	})
}
const onClick = () => {
	sendMessage(inputContent.value)
}

const keyDownHandler = (e: KeyboardEvent) => {
	if (e.code !== 'Enter') return
	sendMessage(inputContent.value)
}
onMounted(() => {
	// 滚动至最后一条对话
	scrollToLatestMessage()

	//
	if (props.chat) {
		inputRef.value.addEventListener('keypress', keyDownHandler)
	}

})

onBeforeUnmount(() => {
	if (props.chat) {
		inputRef.value.removeEventListener('keypress', keyDownHandler)
	}
})

const getTicketChatList = (id: string) => {
	request(`/chat/history/${id}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(res => {
		return res.json()
	}).then(res => {
		console.log('res :>> ', res);
		messages.value = res
	})
}
const ticketsStore = useTicketStore()
const title = computed(() => {
	return ticketsStore.currentTicket.name
})

watch(() => ticketsStore.currentSessionId, (id) => {
	if (id) {
		getTicketChatList(id)
	}
})

</script>

<template>
	<div class="w-full h-full shadow-light-50 shadow-right relative">
		<div class="bg-white px-2 py-4 border-b-gray-300 border-b-1">{{ title || 'message' }}</div>
		<div class="relative chat-area  h-full overflow-auto" ref="chatAreaRef">
			<div class="w-full h-full p-2">
				<div class="pb-27" ref="messageRef">
					<div class="mb-2 w-full sticky top-0 left-0" v-if="isResolved">
						<v-btn class="w-full absolute !bg-green-500 !text-white" :rounded="0" :flat="true">mark as resolved</v-btn>
					</div>

					<template v-if="messages.length">
						<Message v-for="item in messages" :key="item.id" :data="item" class="mb-2"></Message>

					</template>
					<div v-else-if="!ticketsStore.currentSessionId && !props.chat" class="text-center p-2 leading-10">
						select ticket on left
					</div>
					<div v-else-if="props.chat">
						<!-- message tips -->
					</div>
					<div v-else class="text-center p-2 leading-10">no data</div>
				</div>
			</div>
		</div>
		<div class="absolute bottom-0 left-0 w-full p-2 bg-white" v-if="props.chat">
			<v-text-field v-model="inputContent" label="input" append-inner-icon="mdi-send" ref="inputRef"
				@click:append-inner="onClick" :disabled="!isCompleted"></v-text-field>
		</div>

	</div>

</template>

<style scoped lang="scss">
.chat-area {
	height: calc(100% - 40px);
}
</style>