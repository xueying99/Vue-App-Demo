<script lang="ts">
import { defineComponent } from 'vue'
import Tab from './components/Tab.vue'
import Tabs from './components/Tabs.vue'

import PrimaryButton from './components/ButtonComponent/PrimaryButton.vue'
import SecondaryButton from './components/ButtonComponent/SecondaryButton.vue'
import AlertWithAction from './components/AlertComponent/AlertWithAction.vue'
import AlertWithAll from './components/AlertComponent/AlertWithAll.vue'
import AlertWithTitle from './components/AlertComponent/AlertWithTitle.vue'
import AlertWithContent from './components/AlertComponent/AlertWithContent.vue'
import AlertMobile from './components/AlertComponent/AlertMobile.vue'

export default defineComponent({
  name: "App",
  components: { 
    Tabs, 
    Tab,
    PrimaryButton,
    SecondaryButton,
    AlertWithAction,
    AlertWithAll,
    AlertWithTitle,
    AlertWithContent,
    AlertMobile
  },
  data() {
    return { dynamicTabs: [1,2,3] };
  },
})
</script>

<template>
<header>Welcome to Khoo Xue Ying's Vue App demo !</header>
  <div>
    <h2>Button Component</h2>
    <tabs class="button-component">
      <template name="primary">
          <div class="tab-title">
            Primary Button
          </div>
        </template>
        <tab title-slot="primary">
          <primary-button />
        </tab>
        <template name="secondary">
          <div class="tab-title">
            Secondary Button
          </div>
        </template>
        <tab title-slot="secondary">
          <secondary-button />
        </tab>
    </tabs>
  </div>

  <div>
    <h2>Alerts & Notifications Component</h2>
    <tabs class="alert-component">
      <template name="alert-with-action">
          <div class="tab-title">
            Alert with All & Action
          </div>
        </template>
        <tab title-slot="alert-with-action">
          <alert-with-action />
        </tab>
        <template name="alert-with-all">
          <div class="tab-title">
            Alert with All Content
          </div>
        </template>
        <tab title-slot="alert-with-all">
          <alert-with-all />
        </tab>
        <template name="alert-with-title">
          <div class="tab-title">
            Alert with Title Only
          </div>
        </template>
        <tab title-slot="alert-with-title">
          <alert-with-title />
        </tab>
        <template name="alert-with-content">
          <div class="tab-title">
            Alert with Content Only
          </div>
        </template>
        <tab title-slot="alert-with-content">
          <alert-with-content />
        </tab>
        <template name="alert-mobile">
          <div class="tab-title">
            Mobile Responsive Alert
          </div>
        </template>
        <tab title-slot="alert-mobile">
          <alert-mobile />
        </tab>
    </tabs>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  text-align: center;
  padding: 20px;
  height: 100px;
  border: 1px solid #000;
  font-weight: bold;
  margin-bottom: 40px;
}
h2 {
  font-weight: bold;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}
.button-component, .alert-component {
  margin: 20px 0 50px;
}
@media (min-width: 1024px) {
  header {
    display: grid;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: grid;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
