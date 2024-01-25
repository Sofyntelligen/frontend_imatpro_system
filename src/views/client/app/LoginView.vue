<script setup>
import { reactive, ref, computed } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { mdiAccount, mdiHome } from "@mdi/js";
import SectionFormScreen from "@/components/SectionFormScreen.vue";
import CardBox from "@/components/CardBox.vue";
import CardBoxModal from "@/components/CardBoxModal.vue";
import FormCheckRadioPicker from "@/components/FormCheckRadioGroup.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import ButtonTextLink from "@/components/ButtonTextLink.vue";
import LayoutGuest from "@/layouts/LayoutGuest.vue";
import getAuthenticationUser from "@/services/ServiceLogin.js";

const form = reactive({
  remember: ["remember"],
});

const modalActive = ref(false);
const hasTip = ref(false);
const hasError = ref(false);
const passShowHideClicked = ref(true);

const router = useRouter();

const cardClassAddon = computed(() => (hasError.value ? "animate-shake" : ""));

setTimeout(() => {
  hasTip.value = true;
}, 750);

const submit = () => {
  getAuthenticationUser("/login", { username: form.login, password: form.pass }).then(
    (result) => {
      console.log(result);
      if (result.status != 200) {
        hasError.value = true;
        hasTip.value = false;

        form.login = form.pass = "";
        form.remember = ["remember"];

        setTimeout(() => {
          hasError.value = false;
          passShowHideClicked.value = false;
        }, 2000);

        modalActive.value = true;
      } else {
        redirectReload();
      }
    }
  );
};

const redirectReload = async () => {
  await router.push({ name: "Dashboard" });
  router.go();
};
</script>

<template>
  <LayoutGuest>
    <CardBoxModal v-model="modalActive" title="Unhandled exception" button="danger">
      <p>This is sample modal</p>
      <p>Lorem ipsum dolor</p>
    </CardBoxModal>
    <SectionFormScreen v-slot="{ cardClass }" bg="purplePink" has-promo>
      <CardBox :class="[cardClass, cardClassAddon]" is-form @submit.prevent="submit">
        <FormField label="Login" :error="hasError" help="Please enter your login">
          <FormControl
            v-model="form.login"
            :error="hasError"
            :icon-right="mdiAccount"
            name="login"
            placeholder="user@example.com"
            autocomplete="username"
            required
          />
        </FormField>
        <FormField label="Password" :error="hasError" help="Click icon to show/hide">
          <FormControl
            v-model="form.pass"
            :error="hasError"
            :tip-right="passShowHideClicked ? null : 'Click to show/hide'"
            type="password"
            name="password"
            placeholder="Password"
            autocomplete="current-password"
            @right-icon-click="passShowHideClicked = true"
            required
          />
        </FormField>
        <BaseLevel mobile>
          <FormCheckRadioPicker
            v-model="form.remember"
            name="remember"
            :options="{ remember: 'Remember' }"
            spaced
          />
          <RouterLink to="/remind" class="text-sm"> Forgot password? </RouterLink>
        </BaseLevel>
        <template #footer>
          <BaseLevel mobile>
            <BaseButtons>
              <BaseButton
                label="Login"
                type="submit"
                color="info"
                :tip="hasTip ? 'Click to see error state' : null"
              />
              <BaseButton label="Sign up" to="/signup" color="info" outline />
            </BaseButtons>
            <ButtonTextLink to="/" :icon="mdiHome" label="Home" small />
          </BaseLevel>
        </template>
      </CardBox>
    </SectionFormScreen>
  </LayoutGuest>
</template>
