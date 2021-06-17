<template>
  <div class="about">
    <transition
      appear
      name="fade"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <h1 v-if="showTitle">About</h1>
    </transition>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam
      officia possimus delectus inventore quod quisquam culpa voluptas iusto,
      quae maiores quo dolorum, corporis laboriosam a dolore consequatur
      assumenda nam!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam
      officia possimus delectus inventore quod quisquam culpa voluptas iusto,
      quae maiores quo dolorum, corporis laboriosam a dolore consequatur
      assumenda nam!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam
      officia possimus delectus inventore quod quisquam culpa voluptas iusto,
      quae maiores quo dolorum, corporis laboriosam a dolore consequatur
      assumenda nam!
    </p>
    <hr />

    <transition
      appear
      @before-enter="beforeEnterName"
      @enter="enterName"
      @after-enter="afterEnterName"
    >
      <h4>by raditya putranto</h4>
    </transition>
  </div>
</template>

<script>
import { ref } from "vue";
import gsap from "gsap";
export default {
  setup() {
    const showTitle = ref(true);
    const beforeEnter = (el) => {
      console.log("before enter", el);
    };
    const enter = (el) => {
      console.log("enter", el);
    };
    const afterEnter = (el) => {
      console.log("after enter", el);
      el.style.color = "green";
      setTimeout(() => (showTitle.value = false), 2000);
    };
    const beforeLeave = (el) => {
      el.style.color = "pink";
      console.log("before leave", el);
    };
    const leave = (el) => {
      console.log("leave", el);
    };
    const afterLeave = (el) => {
      console.log("after leave", el);
    };

    const beforeEnterName = (el) => {
      console.log("before enter - set initial state");
      el.style.transform = "translateY(60px)";
      el.style.opacity = 0;
    };
    const enterName = (el, done) => {
      console.log("starting enter - make transition");
      gsap.to(el, {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "bounce.out",
        onComplete: done,
      });
    };

    const afterEnterName = (el) => {
      console.log("after enter");
    };

    return {
      beforeEnter,
      enter,
      afterEnter,
      showTitle,
      beforeLeave,
      leave,
      afterLeave,
      beforeEnterName,
      enterName,
      afterEnterName,
    };
  },
};
</script>

<style>
.about {
  max-width: 600px;
  margin: 20px auto;
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 3s ease;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 3s ease;
}
</style>