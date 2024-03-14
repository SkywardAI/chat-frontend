<script setup lang='ts'>
import { genSentence } from '~/tools/genWord';
import Message from './Message.vue'
const isResolved = ref(!false)
const isCompleted = ref(true)
const genMessage = (text: string, role = 'master') => {
	return {
		id: Date.now() + '',
		role: role,
		message: text,
		createTime: Date.now() + ''
	}
}

const messages = ref([genMessage(genSentence()), genMessage(genSentence()), genMessage(genSentence()), genMessage(genSentence()), genMessage(genSentence())])


const inputContent = ref('')

const inputRef = ref()
const messageRef = ref()
const chatAreaRef = ref()
const scrollToLatestMessage = () => {
	const height = parseInt(getComputedStyle(messageRef.value).height)
	chatAreaRef.value.scrollTop = height
}
const answer = () => {
	const ans = genMessage(genSentence(), 'rob')
	setTimeout(() => {
		messages.value.push(ans)

		isCompleted.value = true
		nextTick(() => {
			scrollToLatestMessage()
		})
	}, 2000);

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
	inputRef.value.addEventListener('keypress', keyDownHandler)
})

onBeforeUnmount(() => {
	inputRef.value.removeEventListener('keypress', keyDownHandler)
})

</script>

<template>
	<div class="w-full h-full shadow-light-50 shadow-right relative">
		<div class="bg-white px-2 py-4 border-b-gray-300 border-b-1">message</div>
		<div class="relative chat-area  h-full overflow-auto" ref="chatAreaRef">
			<div class="w-full h-full p-2">
				<div class="pb-27" ref="messageRef">
					<div class="mb-2 w-full sticky top-0 left-0" v-if="isResolved">
						<v-btn class="w-full absolute !bg-green-500 !text-white" :rounded="0" :flat="true">mark as resolved</v-btn>
					</div>

					<Message v-for="item in messages" :key="item.id" :data="item" class="mb-2"></Message>
				</div>
			</div>
		</div>
		<div class="absolute bottom-0 left-0 w-full p-2 bg-white">
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