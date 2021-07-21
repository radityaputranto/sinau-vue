const app = Vue.createApp({
    data() {
        return {
            counter: 10,
            name: "",
            confirmedName: "",
        };
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        },
        reduce() {
            this.counter = this.counter - 1;
        },
        setName(event, lastName) {
            this.name = event.target.value + " " + lastName;
        },
        submitForm(event) {
            //event.preventDefault();
            alert("Submitted");
        },
        confirmInput() {
            this.confirmedName = this.name;
        },
    },
});

app.mount("#events");
