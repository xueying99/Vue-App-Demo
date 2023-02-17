<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AlertWithAll",
  data() {
    return {
      id: 0,
      animation: {
        enter: {
          opacity: [1, 0],
          translateX: [0, -300],
          scale: [1, 0.2],
        },
        leave: {
          opacity: 0,
          height: 0,
        },
      },
    };
  },
  methods: {
    showAll(group, type = "") {
      const text = `This is a paragraph of information with additional supporting detail 
                            or links to help the user understand what they should do.`;

      this.$notify({
        group,
        title: `A short descriptive header`,
        text,
        type,
      });
    },
  },
});
</script>

<template>
  <div id="alert" class="alert-all">
    <notifications
      group="alert-title-content-info"
      position="top right"
      :width="500"
      :duration="5000"
      animation-name="v-fade-left"
    >
      <template #body="{ item }">
        <div class="alert-body info">
          <font-awesome-icon
            icon="fa-solid fa-circle-exclamation"
            class="info"
          />
          <div class="alert-content">
            <p class="alert-content-title">{{ item.title }}</p>
            <div class="alert-text">
              This is a paragraph of information with additional supporting
              detail or links to help the user understand what they should do.
            </div>
          </div>
          <div class="alert-close" @click="$emit('close')">
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </div>
        </div>
      </template>
    </notifications>

    <notifications
      group="alert-title-content-error"
      position="top right"
      :width="500"
      :duration="5000"
      animation-name="v-fade-left"
    >
      <template #body="{ item }">
        <div class="alert-body error">
          <font-awesome-icon
            icon="fa-solid fa-circle-exclamation"
            class="error"
          />
          <div class="alert-content">
            <p class="alert-content-title">{{ item.title }}</p>
            <div class="alert-text">
              This is a paragraph of information with additional supporting
              detail or links to help the user understand what they should do.
            </div>
          </div>
          <div class="alert-close" @click="$emit('close')">
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </div>
        </div>
      </template>
    </notifications>

    <notifications
      group="alert-title-content-warn"
      position="top right"
      :width="500"
      :duration="5000"
      animation-name="v-fade-left"
    >
      <template #body="{ item }">
        <div class="alert-body warn">
          <font-awesome-icon
            icon="fa-solid fa-triangle-exclamation"
            class="warn"
          />
          <div class="alert-content">
            <p class="alert-content-title">{{ item.title }}</p>
            <div class="alert-text">
              This is a paragraph of information with additional supporting
              detail or links to help the user understand what they should do.
            </div>
          </div>
          <div class="alert-close" @click="$emit('close')">
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </div>
        </div>
      </template>
    </notifications>

    <notifications
      group="alert-title-content-success"
      position="top right"
      :width="500"
      :duration="5000"
      animation-name="v-fade-left"
    >
      <template #body="{ item }">
        <div class="alert-body success">
          <font-awesome-icon icon="fa-solid fa-circle-check" class="success" />
          <div class="alert-content">
            <p class="alert-content-title">{{ item.title }}</p>
            <div class="alert-text">
              This is a paragraph of information with additional supporting
              detail or links to help the user understand what they should do.
            </div>
          </div>
          <div class="alert-close" @click="$emit('close')">
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </div>
        </div>
      </template>
    </notifications>

    <div class="content">
      <div class="block">
        <button
          class="info"
          @click="showAll('alert-title-content-info', 'info')"
        >
          Info
        </button>
        <button
          class="error"
          @click="showAll('alert-title-content-error', 'error')"
        >
          Error
        </button>
        <button
          class="warn"
          @click="showAll('alert-title-content-warn', 'warn')"
        >
          Warning
        </button>
        <button
          class="success"
          @click="showAll('alert-title-content-success', 'success')"
        >
          Success
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.alert-all {
  .vue-notification-wrapper {
    margin: 10px -10px !important;
    padding: 10px !important;
  }
  button {
    display: inline-block;
    box-sizing: border-box;
    border: 0;
    border-radius: 3px;
    color: white;
    vertical-align: top;
    text-decoration: none;
    font-size: 12px;
    font-family: inherit;
    cursor: pointer;
    outline: none;
    transition: all 500ms;
    padding: 12px;
    box-shadow: none;
    font-weight: 600;
    width: 100%;
    letter-spacing: 1px;
    margin: 15px 25px;
    box-shadow: 0 5px 15px 0px rgba(46, 61, 73, 0.1);
    &.info {
      background: #2c75dd;
    }
    &.success {
      background: #008700;
    }
    &.warn {
      background: #dc5a00;
    }
    &.error {
      background: #cc3123;
    }
    &:active {
      opacity: 0.8;
    }
  }

  .svg-inline--fa {
    font-size: 20px;
    padding-right: 10px;
    &.info {
      color: #2c75dd;
      padding-left: 10px;
      padding-right: 0;
    }
    &.success {
      color: #008700;
      padding-left: 10px;
      padding-right: 0;
    }
    &.warn {
      color: #dc5a00;
      padding-left: 10px;
      padding-right: 0;
    }
    &.error {
      color: #cc3123;
      padding-left: 10px;
      padding-right: 0;
    }
  }
  .alert-body {
    padding: 10px;
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    &.info {
      border: 1px solid #2c75dd;
      background-color: rgba(44, 117, 221, 0.2);
      .primary-action-btn {
        color: #000;
        background-color: #f7ba50;
      }
      .secondary-action-btn {
        color: #dc9260;
        border: 2px solid #dc9260 !important;
        background-color: #fff;
      }
    }
    &.success {
      border: 1px solid #008700;
      background-color: rgba(0, 135, 0, 0.2);
      .primary-action-btn {
        color: #fff;
        background-color: #008700;
      }
      .secondary-action-btn {
        color: #008700;
        border: 2px solid #008700 !important;
        background-color: #fff;
      }
    }
    &.warn {
      border: 1px solid #dc5a00;
      background-color: rgba(220, 90, 0, 0.2);
      .primary-action-btn {
        color: #fff;
        background-color: #dc5a00;
      }
      .secondary-action-btn {
        color: #dc5a00;
        border: 2px solid #dc5a00 !important;
        background-color: #fff;
      }
    }
    &.error {
      border: 1px solid #cc3123;
      background-color: rgba(204, 49, 35, 0.2);
      .primary-action-btn {
        color: #fff;
        background-color: #cc3123;
      }
      .secondary-action-btn {
        color: #cc3123;
        border: 2px solid #cc3123 !important;
        background-color: #fff;
      }
    }
  }
  .alert-content {
    font-size: 12px;
    padding: 0 10px;
    width: 90%;
    .alert-content-title {
      font-weight: bold;
    }
  }
  .alert-btn {
    display: flex !important;
    flex-direction: row;
    border: transparent;
  }
  .primary-action-btn,
  .secondary-action-btn {
    border-radius: 10px;
    border: transparent;
    width: auto;
    padding: 10px 15px;
    margin: 5px 10px;
  }
  .block {
    display: flex;
  }
  .v-fade-left-enter-active,
  .v-fade-left-leave-active,
  .v-fade-left-move {
    transition: all 0.5s;
  }
  .v-fade-left-enter,
  .v-fade-left-leave-to {
    opacity: 0;
    transform: translateX(500px) scale(0.2);
  }
}
</style>
