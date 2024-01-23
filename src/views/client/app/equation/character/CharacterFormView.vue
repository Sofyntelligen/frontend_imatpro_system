<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { mdiKeyboardReturn, mdiAlphabetCyrillic } from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import CardBoxWidgetMathJax from "@/components/equation/character/CardBoxWidgetMathJax.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseButton from "@/components/BaseButton.vue";
import LayoutAuthenticatedHome from "@/layouts/LayoutAuthenticatedHome.vue";
import getData from "@/services/ServiceGenericGet.js";

const character = ref({});
const route = useRoute();
const router = useRouter();

onMounted(() => {
  getData("/character/", route.params.id).then((result) => {
    character.value = result;
    console.log(result);
  });
});

const redirectReload = async () => {
  await router.push({ name: "characterSearch" });
  router.go();
};
</script>

<template>
  <LayoutAuthenticatedHome>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiAlphabetCyrillic" title="Edit Character" main>
        <BaseButton
          label="Return"
          :icon="mdiKeyboardReturn"
          color="contrast"
          rounded-full
          small
          @click="redirectReload"
        />
      </SectionTitleLineWithButton>
    </SectionMain>
  </LayoutAuthenticatedHome>
</template>
