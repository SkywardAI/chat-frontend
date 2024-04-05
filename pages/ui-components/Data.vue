<script setup lang='ts'>
import type { UploadUserFile, ElForm, UploadProps } from 'element-plus'
import request from '~/tools/request';

const fileList = ref<UploadUserFile[]>([])

const formRef = ref<InstanceType<typeof ElForm>>()

const form = reactive({
    file: ''
})
const onSubmit = () => {
    formRef.value?.validate().then(() => {
        const fd = new FormData()
        fd.append('file', form.file)
        request('/file', {
            method: 'POST',
            body: fd,
        }, false).then(res => {
            if (res) {
                ElMessage.success('done')
            }
            console.log('res :>> ', res);
        })
    })

}


const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
    console.log(file, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
    console.log(uploadFile)
}

const handleChange: UploadProps['onChange'] = (uploadFile) => {
    console.log('change --> ', uploadFile)
    form.file = uploadFile.raw as any
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
    ElMessage.warning(
        `The limit is 3, you selected ${files.length} files this time, add up to ${files.length + uploadFiles.length
        } totally`
    )
}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile) => {
    return ElMessageBox.confirm(
        `Cancel the transfer of ${uploadFile.name} ?`
    ).then(
        () => true,
        () => false
    )
}
</script>

<template>
  <div class="train-container p-2">
    <el-form
      ref="formRef"
      v-model="form"
      :model="form"
      label-position="top"
      label-width="auto"
    >
      <el-form-item
        label="upload data"
        prop="file"
        :rules="[{ required: true }]"
      >
        <el-upload
          v-model:file-list="fileList"
          class="upload-demo"
          action="#"
          :on-preview="handlePreview"
          :auto-upload="false"
          :on-change="handleChange"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :on-exceed="handleExceed"
          accept=".csv"
        >
          <el-button type="primary">
            Click to upload
          </el-button>
          <template #tip>
            <div class="el-upload__tip">
              csv files with a size less than 4GB.
            </div>
          </template>
        </el-upload>
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