<script setup>
import { onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { mdiKeyboardReturn, mdiAlphabetCyrillic, mdiBallot, mdiAccount } from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import BaseButton from "@/components/BaseButton.vue";
import CardBox from "@/components/CardBox.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import LayoutAuthenticatedHome from "@/layouts/LayoutAuthenticatedHome.vue";
import BaseDivider from "@/components/BaseDivider.vue";
import FormCheckRadioGroup from "@/components/FormCheckRadioGroup.vue";
import getData from "@/services/ServiceGenericGet.js";
import putData from "@/services/ServiceGenericPut.js";

const route = useRoute();
const router = useRouter();

const formUpdate = reactive({});

onMounted(() => {
  getData("/character/" + route.params.id).then((result) => {
    formUpdate.id = result.id;
    formUpdate.view = result.view;
    formUpdate.text = result.text;
    formUpdate.math_ml = result.math_ml;
    formUpdate.latex_math = result.latex_math;
    formUpdate.description = result.description;
    formUpdate.activeView = result.active == true ? ["active"] : [];
    formUpdate.active = result.active;
  });
});

const submit = () => {
  formUpdate.active = formUpdate.activeView.length != 0 ? true : false;
  putData("/character/" + formUpdate.id, formUpdate).then((result) => {
    result != null ? redirectReload() : "";
  });
};

const redirectReload = async () => {
  await router.push({ name: "Dashboard" });
  router.go();
};
</script>

<template>
  <LayoutAuthenticatedHome>
    <SectionMain>
      <SectionTitleLineWithButton
        :icon="mdiAlphabetCyrillic"
        title="Update Equation"
        main
      >
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
            v-model="formUpdate.view"
            :icon-left="mdiAccount"
            help="Your full name"
            placeholder="Character"
          />
        </FormField>
        <FormField label="Text" horizontal>
          <FormControl
            v-model="formUpdate.text"
            :icon-left="mdiAccount"
            help="Your full name"
            placeholder="Text"
          />
        </FormField>
        <FormField label="MathML" horizontal>
          <FormControl
            v-model="formUpdate.math_ml"
            :icon-left="mdiAccount"
            help="Your full name"
            placeholder="MathML"
          />
        </FormField>
        <FormField label="Latex" horizontal>
          <FormControl
            v-model="formUpdate.latex_math"
            :icon-left="mdiAccount"
            help="Your full name"
            placeholder="Latex"
          />
        </FormField>
        <FormField
          label="Description"
          help="Your question. Max 255 characters"
          horizontal
        >
          <FormControl
            v-model="formUpdate.description"
            type="textarea"
            placeholder="Explain how we can help you"
          />
        </FormField>

        <BaseDivider />

        <FormField help="Horizontal layout with color" horizontal>
          <FormCheckRadioGroup
            v-model="formUpdate.activeView"
            name="sample-checkbox-two"
            :options="{ active: 'Active' }"
            component-class="check-radio-success"
          />
        </FormField>

        <template #footer>
          <FormField horizontal grouped>
            <BaseButton label="Save" type="submit" color="info" />
          </FormField>
        </template>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticatedHome>
</template>
