<script setup>
import { reactive } from "vue";
import { useMainStore } from "@/stores/main.js";
import { mdiBallot, mdiAccount } from "@mdi/js";
import CardBox from "@/components/CardBox.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import BaseButton from "@/components/BaseButton.vue";

const mainStore = useMainStore();

const submit = () => {
  mainStore.pushMessage("Done! Demo only...", "contrast");
};
</script>

<template>
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
</template>
