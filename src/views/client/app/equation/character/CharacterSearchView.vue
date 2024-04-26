<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { mdiAlphabetCyrillic, mdiPlusThick } from "@mdi/js";
import { optionsButtonsDelete } from "@/components/menu/OptionsButtonsDelete.js";
import { optionsButtonsEdit } from "@/components/menu/OptionsButtonsEdit.js";
import { optionsButton } from "@/components/menu/OptionsButton.js";
import { optionsButtons } from "@/components/menu/OptionsButtons.js";
import SectionMain from "@/components/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import CardBoxWidget from "@/components/CardBoxWidget.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseButton from "@/components/BaseButton.vue";
import LayoutAuthenticatedHome from "@/layouts/LayoutAuthenticatedHome.vue";
import getAllData from "@/services/ServiceGenericGetAll.js";

const listCharacter = ref([]);
const numPages = ref(0);
const currentPage = ref(0);
const router = useRouter();

onMounted(() => {
  getCharacter(1);
});

const getCharacter = (page) => {
  getAllData("/character/all", page).then((result) => {
    listCharacter.value = result.data;
    currentPage.value = page;
    numPages.value = result.pagination.pages;
  });
};

const redirectReload = async () => {
  await router.push({ name: "CharacterAdd" });
  router.go();
};

const getMenuOptions = (id) => {
  return optionsButtons(
    optionsButton(
      optionsButtonsEdit("/equation/character/update/" + id)[0],
      optionsButtonsDelete("/character/" + id)[0]
    )
  );
};
</script>

<template>
  <LayoutAuthenticatedHome>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiAlphabetCyrillic" title="Character" main>
        <div>
          <BaseButton
            class="md:mr-3"
            label="Add"
            :icon="mdiPlusThick"
            color="success"
            rounded-full
            small
            @click="redirectReload"
          />
        </div>
      </SectionTitleLineWithButton>
      <div class="grid grid-cols-12 gap-6 mb-6">
        <div
          v-for="data in listCharacter"
          class="col-span-12 sm:col-span-6 xl:col-span-3"
        >
          <CardBoxWidget
            :number="data.id"
            :iconMath="data.latex_math"
            :label="data.description"
            color="text-yellow-500"
            :trend="data.view"
            :trend-type="data.active ? 'up' : 'down'"
            :options="getMenuOptions(data.id)"
          />
        </div>
      </div>
      <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
        <BaseLevel>
          <BaseButtons>
            <BaseButton
              v-for="page in numPages"
              :key="page"
              :active="page === currentPage"
              :label="page"
              :color="page === currentPage ? 'lightDark' : 'whiteDark'"
              small
              @click="getCharacter(page)"
            />
          </BaseButtons>
          <small>Page {{ currentPage }} of {{ numPages }}</small>
        </BaseLevel>
      </div>
    </SectionMain>
  </LayoutAuthenticatedHome>
</template>
