<script lang="ts">
import { defineComponent } from "vue";
import Modal from "./Modal.vue";

export default defineComponent({
  name: "SecondaryButton",
  components: {
    Modal,
  },
  data() {
    return {
      showSecondaryLeftIcon: false,
      showSecondaryRightIcon: false,
      showSecondaryNoIcon: false,
      showSecondaryIconOnly: false,
      isActive: false
    };
  },
});
</script>

<template>
  <div class="row">
    <button @click="showSecondaryLeftIcon = true" class="secondary-btn">
      <p class="icon-text">
        <font-awesome-icon icon="fa-solid fa-chevron-left" size="lg" />
        Action
      </p>
    </button>
    <Teleport to="body">
      <modal
        :show="showSecondaryLeftIcon"
        @close="showSecondaryLeftIcon = false"
      >
        <template #header>
          <h3>Secondary button with left icon Clicked!</h3>
        </template>
      </modal>
    </Teleport>

    <button @click="showSecondaryRightIcon = true" class="secondary-btn">
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
      <modal
        :show="showSecondaryRightIcon"
        @close="showSecondaryRightIcon = false"
      >
        <template #header>
          <h3>Secondary button with right icon Clicked!</h3>
        </template>
      </modal>
    </Teleport>

    <button @click="showSecondaryNoIcon = true" class="secondary-btn">
      <p class="icon-text">Action</p>
    </button>
    <Teleport to="body">
      <modal :show="showSecondaryNoIcon" @close="showSecondaryNoIcon = false">
        <template #header>
          <h3>Secondary button with no icon Clicked!</h3>
        </template>
      </modal>
    </Teleport>

    <button @click="showSecondaryIconOnly = true" class="secondary-btn">
      <p class="icon-text">
        <font-awesome-icon
          icon="fa-solid fa-arrow-right"
          size="lg"
          class="arrow-only"
        />
      </p>
    </button>
    <Teleport to="body">
      <modal
        :show="showSecondaryIconOnly"
        @close="showSecondaryIconOnly = false"
      >
        <template #header>
          <h3>Secondary button with icon only Clicked!</h3>
        </template>
      </modal>
    </Teleport>

    <button @click="showSecondaryDisabled = true" :disabled="!isActive" class="secondary-btn">
      <p class="icon-text">
        <font-awesome-icon
          icon="fa-solid fa-arrow-right"
          size="lg"
          class="arrow-only"
        />
      </p>
    </button>
    <Teleport to="body">
      <modal
        :show="showSecondaryDisabled"
        @close="showSecondaryDisabled = false"
      >
        <template #header>
          <h3>Secondary button with icon only Clicked!</h3>
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
.secondary-btn {
  padding: 6px 12px;
  font-weight: 600;
  color: #dc9260;
  border: 2px solid #dc9260 !important;
  background-color: transparent;
  border-radius: 10px;
  border: transparent;
  display: block;
  width: fit-content;
  font-family: sans-serif;
  cursor: pointer;
}
.secondary-btn:hover {
  box-shadow: 0 1rem 1rem -0.4rem rgba(0, 0, 0, 0.24);
}
.secondary-btn:disabled {
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
