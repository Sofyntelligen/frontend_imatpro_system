<script setup>
import { buttonMenuOptions } from "@/components/equation/ButtonMenuOptionsEquationMathJax.js";
import { mdiDotsVertical, mdiHandOkay } from "@mdi/js";
import CardBox from "@/components/CardBox.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import PillTag from "@/components/PillTag.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import ButtonMenu from "@/components/ButtonMenu.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import VueMathjax from "vue-mathjax-next";

defineProps({
  equation: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <CardBox class="mb-6 last:mb-0" is-hoverable>
    <BaseLevel>
      <BaseLevel type="justify-start">
        <vue-mathjax class="text-center md:mr-6" :formula="equation.latex_math" />
        <div class="text-center md:text-left">
          <h4 class="text-xl">
            {{ equation.description }}
          </h4>
          <p class="text-gray-500">
            {{ equation.date }}
          </p>
        </div>
      </BaseLevel>

      <BaseLevel type="justify-end">
        <BaseButtons class="md:mr-3" class-addon="mr-1.5 last:mr-0 mb-3 ">
          <PillTag
            color="success"
            label=""
            :icon="mdiHandOkay"
            v-if="equation.solution_id"
            small
          />
          <PillTag color="info" :label="equation.grade_school" small />
          <PillTag color="warning" :label="equation.type_equations" small />
        </BaseButtons>
        <ButtonMenu
          :options="buttonMenuOptions(equation.id)"
          :icon="mdiDotsVertical"
          small
        />
      </BaseLevel>
    </BaseLevel>
  </CardBox>
</template>
