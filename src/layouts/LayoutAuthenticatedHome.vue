<script setup>
import { computed } from "vue";
import { mdiForwardburger, mdiBackburger, mdiMenu } from "@mdi/js";
import { useRouter } from "vue-router";
import menuHome from "@/menuHome.js";
import menuNavBar from "@/menuNavBar.js";
import { useLayoutStore } from "@/stores/layout.js";
import BaseIcon from "@/components/BaseIcon.vue";
import FormControl from "@/components/FormControl.vue";
import NavBar from "@/components/NavBar.vue";
import AsideMenu from "@/components/AsideMenu.vue";
import NavBarItemPlain from "@/components/NavBarItemPlain.vue";
import FooterBar from "@/components/FooterBar.vue";
import SnackBar from "@/components/SnackBar.vue";
import { useDarkModeStore } from "@/stores/darkMode";

const layoutAsidePadding = computed(() =>
  layoutStore.isAsideLgActive ? "lg:pl-22" : "xl:pl-22"
);

const layoutStore = useLayoutStore();

const router = useRouter();

router.beforeEach(() => {
  layoutStore.isAsideMobileExpanded = false;
});

const menuClick = (event, item) => {
  if (item.isToggleLightDark) {
    useDarkModeStore().set();
  }

  if (item.isLogout) {
    //
  }
};
</script>

<template>
  <div
    :class="{
      'overflow-hidden lg:overflow-visible': layoutStore.isAsideMobileExpanded,
    }"
  >
    <div
      :class="[
        layoutAsidePadding,
        { 'ml-60 lg:ml-0': layoutStore.isAsideMobileExpanded },
      ]"
      class="pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100"
    >
      <NavBar
        :menu="menuNavBar"
        :class="[
          layoutAsidePadding,
          { 'ml-60 lg:ml-0': layoutStore.isAsideMobileExpanded },
        ]"
        @menu-click="menuClick"
      >
        <NavBarItemPlain
          display="flex lg:hidden"
          @click.prevent="layoutStore.asideMobileToggle()"
        >
          <BaseIcon
            :path="layoutStore.isAsideMobileExpanded ? mdiBackburger : mdiForwardburger"
            size="24"
          />
        </NavBarItemPlain>
        <NavBarItemPlain
          display="hidden lg:flex xl:hidden"
          @click.prevent="layoutStore.asideLgToggle()"
        >
          <BaseIcon
            :path="layoutStore.isAsideLgActive ? mdiBackburger : mdiMenu"
            size="24"
          />
        </NavBarItemPlain>
        <NavBarItemPlain use-margin>
          <FormControl
            placeholder="Search (ctrl+k)"
            ctrl-k-focus
            transparent
            borderless
          />
        </NavBarItemPlain>
      </NavBar>
      <AsideMenu :menu="menuHome" @menu-click="menuClick" />
      <slot />
      <FooterBar>
        <a
          href="https://github.com/josedanielhernandezosorio"
          target="_blank"
          class="text-blue-600 ml-1"
          >Contact</a
        >
        Info
      </FooterBar>
      <SnackBar />
    </div>
  </div>
</template>
