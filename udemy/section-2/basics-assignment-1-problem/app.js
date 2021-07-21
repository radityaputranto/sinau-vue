const app = Vue.createApp({
    data: function () {
        return {
            name: "raditya",
            age: 24,
            img_url: "https://s.udemycdn.com/partner-logos/v4/apple-light.svg",
        };
    },
    methods: {
        random_number() {
            return Math.round(Math.random());
        },
    },
});

app.mount("#assignment");
