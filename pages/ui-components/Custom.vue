<script setup lang='ts'>
import type { ElForm } from 'element-plus';
import request from '~/tools/request';

const form = reactive({
	email: ''
})
const formRef = ref<InstanceType<typeof ElForm>>()

const onSubmit = () => {
	formRef.value?.validate().then((data) => {
		request('/accounts/', {
			method: 'PATCH',
			body: {
				update_email: form.email
			}
		}).then(res => {
			if (res) {
				ElMessage.success('done')
			}
		})
	})

}

</script>
<template>
  <div class="custom-container p-2">
    <el-form
      ref="formRef"
      :model="form"
      label-position="top"
      label-width="auto"
    >
      <el-form-item
        label="email"
        prop="email"
        :rules="[{ required: true, }]"
      >
        <el-input v-model="form.email" />
      </el-form-item>
    </el-form>
    <el-button
      type="primary"
      @click="onSubmit"
    >
      submit
    </el-button>
  </div>
</template>
<style lang="scss" scoped>
.custom-container {
	height: calc(100vh - 48px - 64px);
	background-color: #fff;
}
</style>