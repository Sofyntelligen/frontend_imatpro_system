<script setup>
import { useRouter } from "vue-router";
import { mdiKeyboardReturn, mdiAlphabetCyrillic, mdiBallot, mdiAccount } from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import BaseButton from "@/components/BaseButton.vue";
import CardBox from "@/components/CardBox.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import LayoutAuthenticatedHome from "@/layouts/LayoutAuthenticatedHome.vue";

const router = useRouter();

const submit = () => {
  console.log("add");
};

const redirectReload = async () => {
  await router.push({ name: "characterSearch" });
  router.go();
};
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
        <FormField label="Fields" horizontal>
          <FormControl :icon-left="mdiAccount" help="Your full name" placeholder="Name" />
        </FormField>
        <FormField label="Fields" horizontal>
          <FormControl :icon-left="mdiAccount" help="Your full name" placeholder="Name" />
        </FormField>
        <FormField label="Textarea" help="Your question. Max 255 characters" horizontal>
          <FormControl type="textarea" placeholder="Explain how we can help you" />
        </FormField>
        <template #footer>
          <FormField horizontal grouped>
            <BaseButton label="Submit" type="submit" color="info" />
          </FormField>
        </template>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticatedHome>
</template>
