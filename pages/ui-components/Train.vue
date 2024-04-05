<script setup lang='ts'>
import type { ElForm,  } from 'element-plus';
import request from '~/tools/request';

const form = reactive({
	model: '',
})
const modelList = [
	{
		label: 'general',
		value: 'general'
	}
]
const formRef = ref<InstanceType<typeof ElForm>>()

const onSubmit = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	formRef.value?.validate().then((_data: any) => {
		request('/loadModel/', {
			method: 'PATCH',
			body: {
				model: form.model
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
  <div class="train-container p-2">
    <el-form
      ref="formRef"
      :model="form"
      label-position="top"
      label-width="auto"
    >
      <el-form-item
        label="model"
        prop="model"
        :rules="[{ required: true, }]"
      >
        <el-select v-model="form.model">
          <el-option
            v-for="item in modelList"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          >
            {{
              item.label }}
          </el-option>
        </el-select>
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
.train-container {
	height: calc(100vh - 48px - 64px);
	background-color: #fff;
}
</style>