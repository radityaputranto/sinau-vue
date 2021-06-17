<template>
  <div class="home">
    <transition name="toast">
      <Toast v-if="showToast" />
    </transition>

    <Todos @badValue="triggerToast" />

    <transition name="fade">
      <div v-if="showP">Hello, Radit</div>
    </transition>

    <button @click="showP = !showP">Toggle</button>
  </div>
</template>

<script>
import { ref } from "vue";
import Toast from "../components/Toast";
import Todos from "../components/Todos";

export default {
  components: { Toast, Todos },
  setup() {
    const showToast = ref(false);
    const showP = ref(false);

    const triggerToast = () => {
      showToast.value = true;
      setTimeout(() => (showToast.value = false), 3000);
    };

    return { showToast, triggerToast, showP };
  },
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}
/* default state */
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 2s ease;
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}

/* toast animation */
/* .toast-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.toast-enter-to {
  opacity: 1;
  transform: translateY(0);
} */
.toast-enter-active {
  /* transition: all 0.3s ease; */
  animation: wobble 0.5s ease;
}
.toast-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
.toast-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.toast-leave-active {
  transition: all 0.3s ease;
}

@keyframes wobble {
  0% {
    transform: translateY(-60px);
    opacity: 0;
  }
  50% {
    transform: translateY(0px);
    opacity: 1;
  }
  60% {
    transform: translateX(8px);
  }
  70% {
    transform: translateX(-8px);
  }
  80% {
    transform: translateX(4px);
  }
  90% {
    transform: translateX(-4px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>