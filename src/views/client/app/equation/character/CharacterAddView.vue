<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { mdiKeyboardReturn, mdiAlphabetCyrillic, mdiBallot, mdiAccount } from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import BaseButton from "@/components/BaseButton.vue";
import CardBox from "@/components/CardBox.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import LayoutAuthenticatedHome from "@/layouts/LayoutAuthenticatedHome.vue";
import postData from "@/services/ServiceGenericPost.js";
const router = useRouter();

const submit = () => {
  postData("/character/0", fromAdd).then((result) => {
    result != null ? redirectReload() : "";
  });
};

const redirectReload = async () => {
  await router.push({ name: "CharacterSearch" });
  router.go();
};

const fromAdd = reactive({});
</script>

<template>
  <LayoutAuthenticatedHome>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiAlphabetCyrillic" title="Add Character" main>
        <BaseButton
          label="Return"
          :icon="mdiKeyboardReturn"
          color="contrast"
          rounded-full
          small
          @click="redirectReload"
        />
      </SectionTitleLineWithButton>
      <CardBox :icon="mdiBallot" is-form @submit.prevent="submit">
        <FormField label="Character" horizontal>
          <FormControl
            v-model="fromAdd.view"
            :icon-left="mdiAccount"
            help="view latex"
            placeholder="View Latex"
          />
        </FormField>
        <FormField label="Text" horizontal>
          <FormControl
            v-model="fromAdd.text"
            :icon-left="mdiAccount"
            help="view text"
            placeholder="View Text"
          />
        </FormField>
        <FormField
          label="Description"
          help="Your question. Max 255 characters"
          horizontal
        >
          <FormControl
            v-model="fromAdd.description"
            type="textarea"
            placeholder="Explain how we can help you"
          />
        </FormField>
        <template #footer>
          <FormField horizontal grouped>
            <BaseButton label="Update" type="submit" color="info" />
          </FormField>
        </template>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticatedHome>
</template>
