const app = Vue.createApp({
    data() {
        return {
            courseGoalA: "Finish course and learn Vue",
            courseGoalB: "Master vue and build amazing apps!",
            courseGoalC: "Vue is awesome",
            vueLink: "https://vuejs.org/",
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        },
    },
});

app.mount("#user-goal");
