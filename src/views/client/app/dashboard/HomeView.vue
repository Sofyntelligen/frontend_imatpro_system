<script setup>
import { ref, computed, onMounted } from "vue";
import { useMainStore } from "@/stores/main.js";
import { useSnackBarStore } from "@/stores/snackBar.js";
import { mdiChartPie, mdiGithub, mdiOpenInNew } from "@mdi/js";
import { optionsButtonsDelete } from "@/components/menu/OptionsButtonsDelete.js";
import { optionsButtonsEdit } from "@/components/menu/OptionsButtonsEdit.js";
import { optionsButtonsGet } from "@/components/menu/OptionsButtonsGet.js";
import { optionsButtonsSolutionEquation } from "@/components/menu/OptionsButtonSolutionEquation.js";
import { optionsButton } from "@/components/menu/OptionsButton.js";
import { optionsButtons } from "@/components/menu/OptionsButtons.js";
import SectionMain from "@/components/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import CardBoxEquation from "@/components/equation/CardBoxEquation.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseButton from "@/components/BaseButton.vue";
import LayoutAuthenticatedHome from "@/layouts/LayoutAuthenticatedHome.vue";
import getAllData from "@/services/ServiceGenericGetAll";

const snackBarStore = useSnackBarStore();

snackBarStore.pushMessage("Welcome to Sofyntelligen.", "contrast");

const listEquation = ref([]);
const numPages = ref(0);
const currentPage = ref(0);

onMounted(() => {
  getEquationPagination(1);
});

const redirectReload = async () => {
  await router.push({ name: "CharacterAdd" });
  router.go();
};

const getEquationPagination = (page) => {
  getAllData("/equation/all", page, { type_representation: "PRINCIPAL" }).then(
    (result) => {
      listEquation.value = result.data;
      currentPage.value = page;
      numPages.value = result.pagination.pages;
    }
  );
};

const getMenuOptions = (id) => {
  return optionsButtons(
    optionsButton(
      optionsButtonsGet("/equation/character/update/" + id)[0],
      optionsButtonsEdit("/equation/character/update/" + id)[0],
      optionsButtonsDelete("/character/" + id)[0]
    ),
    optionsButtonsSolutionEquation("/equation/character/update/" + id)[0]
  );
};
</script>

<template>
  <LayoutAuthenticatedHome>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiChartPie" title="Equations" main>
        <div>
          <BaseButton
            class="md:mr-3"
            label="New"
            :icon="mdiOpenInNew"
            color="success"
            rounded-full
            small
            @click="redirectReload"
          />
          <BaseButton
            href="https://github.com/josedanielhernandezosorio"
            label="Github"
            :icon="mdiGithub"
            color="contrast"
            rounded-full
            small
          />
        </div>
      </SectionTitleLineWithButton>

      <CardBoxEquation
        v-for="equation in listEquation"
        :key="equation.id"
        :equation="equation"
        :options="getMenuOptions(equation.id)"
      />
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
              @click="getEquationPagination(page)"
            />
          </BaseButtons>
          <small>Page {{ currentPage }} of {{ numPages }}</small>
        </BaseLevel>
      </div>
    </SectionMain>
  </LayoutAuthenticatedHome>
</template>
