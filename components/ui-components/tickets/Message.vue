<script setup lang='ts'>
import { UserIcon, RobotIcon } from 'vue-tabler-icons'
import { IMessage } from './type';
type Props = {
	data: IMessage
}
const props = defineProps<Props>()
const isMaster = props.data.type === 'in'
</script>

<template>
  <div
    v-if="props.data.id && props.data.message"
    class="flex gap-2"
    :class="isMaster ? '' : 'flex-row-reverse'"
  >
    <div class="w-8 h-8 rounded-full bg-gray-300 pt-1">
      <UserIcon
        v-if="isMaster"
        class="m-auto"
      />
      <RobotIcon
        v-else
        class="m-auto"
      />
    </div>
    <div
      class="message p-2 "
      :class="isMaster ? 'bg-blue-500 text-white' : 'bg-white'"
    >
      {{ props.data.message }}
    </div>
    <!-- <div class="bg-white rounded p-2" v-else>
		{{ props.data.message }}
	</div> -->
  </div>
</template>

<style scoped lang="scss">
.message {
	border-radius: 4px;
	border-top-left-radius: 0px;
	max-width: 80%;
}

.flex-row-reverse {
	.message {
		border-top-right-radius: 0px;
	}

}
</style>