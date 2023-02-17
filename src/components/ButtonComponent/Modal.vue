<script>
export default {
  props: {
    show: Boolean,
  },
};
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="onclick-mask">
      <div class="onclick-container">
        <div class="onclick-header">
          <slot name="header">Header</slot>
        </div>

        <div class="onclick-body">
          <button class="onclick-default-btn" @click="$emit('close')">
            Close
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.onclick-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.onclick-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.onclick-header {
  font-weight: bold;
}

.onclick-body {
  text-align: right;
}

.onclick-default-btn {
  float: center;
  text-align: center;
  display: flex;
  justify-content: center;
  color: #000;
  margin: 10px auto;
  background-color: #f5ab2b;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
}
</style>