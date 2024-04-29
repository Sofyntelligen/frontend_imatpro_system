<script setup>
import { ref, onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { mdiKeyboardReturn, mdiChairSchool, mdiBallot, mdiAccount } from "@mdi/js";
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

const character = ref({});
const route = useRoute();
const router = useRouter();

const form = reactive({
  checkboxTwo: ["active"],
});

onMounted(() => {
  getData("/character/", route.params.id).then((result) => {
    character.value = result;
    console.log(result);
  });
});

const submit = () => {
  console.log("add");
};

const redirectReload = async () => {
  await router.push({ name: "GradeSchoolSearch" });
  router.go();
};
</script>

<template>
  <LayoutAuthenticatedHome>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiChairSchool" title="Update Grade School" main>
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
            :icon-left="mdiAccount"
            help="Your full name"
            placeholder="Character"
          />
        </FormField>
        <FormField label="Text" horizontal>
          <FormControl :icon-left="mdiAccount" help="Your full name" placeholder="Text" />
        </FormField>
        <FormField label="MathML" horizontal>
          <FormControl
            :icon-left="mdiAccount"
            help="Your full name"
            placeholder="MathML"
          />
        </FormField>
        <FormField label="Latex" horizontal>
          <FormControl
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
          <FormControl type="textarea" placeholder="Explain how we can help you" />
        </FormField>

        <BaseDivider />

        <FormField label="Success" help="Horizontal layout with color" horizontal>
          <FormCheckRadioGroup
            v-model="form.checkboxTwo"
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
