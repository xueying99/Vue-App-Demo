<script lang="ts">
import { defineComponent } from "vue";
import Modal from "./Modal.vue";

export default defineComponent({
  name: "PrimaryButton",
  components: {
    Modal,
  },
  data() {
    return {
      showPrimaryLeftIcon: false,
      showPrimaryRightIcon: false,
      showPrimaryNoIcon: false,
      showPrimaryIconOnly: false,
      isActive: false
    };
  },
});
</script>

<template>
  <div class="row">
    <button @click="showPrimaryLeftIcon = true" class="primary-btn">
      <p class="icon-text">
        <font-awesome-icon icon="fa-solid fa-arrow-right" size="lg" />
        Action
      </p>
    </button>
    <Teleport to="body">
      <modal :show="showPrimaryLeftIcon" @close="showPrimaryLeftIcon = false">
        <template #header>
          <h3>Primary button with left icon Clicked!</h3>
        </template>
      </modal>
    </Teleport>

    <button @click="showPrimaryRightIcon = true" class="primary-btn">
      <p class="icon-text">
        Action
        <font-awesome-icon
          icon="fa-solid fa-arrow-right"
          size="lg"
          class="arrow-right"
        />
      </p>
    </button>
    <Teleport to="body">
      <modal :show="showPrimaryRightIcon" @close="showPrimaryRightIcon = false">
        <template #header>
          <h3>Primary button with right icon Clicked!</h3>
        </template>
      </modal>
    </Teleport>

    <button @click="showPrimaryNoIcon = true" class="primary-btn">
      <p class="icon-text">Action</p>
    </button>
    <Teleport to="body">
      <modal :show="showPrimaryNoIcon" @close="showPrimaryNoIcon = false">
        <template #header>
          <h3>Primary button with no icon Clicked!</h3>
        </template>
      </modal>
    </Teleport>

    <button @click="showPrimaryIconOnly = true" class="primary-btn">
      <p class="icon-text">
        <font-awesome-icon
          icon="fa-solid fa-arrow-right"
          size="lg"
          class="arrow-only"
        />
      </p>
    </button>
    <Teleport to="body">
      <modal :show="showPrimaryIconOnly" @close="showPrimaryIconOnly = false">
        <template #header>
          <h3>Primary button with icon onlyClicked!</h3>
        </template>
      </modal>
    </Teleport>

    <button @click="showPrimaryDisabled = true" class="primary-btn" :disabled="!isActive">
      <p class="icon-text">
        <font-awesome-icon
          icon="fa-solid fa-arrow-right"
          size="lg"
          class="arrow-only"
        />
      </p>
    </button>
    <Teleport to="body">
      <modal :show="showPrimaryDisabled" @close="showPrimaryDisabled = false">
        <template #header>
          <h3>Primary button with icon onlyClicked!</h3>
        </template>
      </modal>
    </Teleport>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 35px 10px;
}
.primary-btn {
  padding: 6px 12px;
  font-weight: 600;
  color: #000;
  background-color: #f7ba50;
  border-radius: 10px;
  border: transparent;
  display: block;
  width: fit-content;
  font-family: sans-serif;
  cursor: pointer;
}
.primary-btn:hover {
  background-color: #f5ab2b;
  box-shadow: 0 1rem 1rem -0.4rem rgba(0, 0, 0, 0.24);
}
.primary-btn:disabled {
  opacity: 0.5;
}
.icon-text {
  margin-left: 4px;
  margin-right: 4px;
  font-size: 16px;
}
.arrow-right {
  padding-right: 0;
  padding-left: 5px;
}
.arrow-only {
  padding-right: 0;
  padding-left: 0;
}
</style>
