const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            lastName: "",
            /* fullname: "", */
        };
    },
    methods: {
        setName(event, lastName) {
            this.name = event.target.value + " " + lastName;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
            // this.counter--;
        },
        resetInput() {
            this.name = "";
        },
        outputFullName() {
            console.log("running again");
            if (this.name === "") {
                return "";
            } else {
                return this.name + " " + "Testing";
            }
        },
    },
    computed: {
        fullname() {
            console.log("running again");
            if (this.name === "" || this.lastName === "") {
                return "";
            } else {
                return this.name + " " + this.lastName;
            }
        },
    },
    /* alternative dari computed */
    watch: {
        counter(value) {
            if (value > 50) {
                this.counter = 0;
            }
        },
        /* name(value) {
            if (value === "") {
                this.fullaname = "";
            } else {
                this.fullaname = value + " " + this.lastName;
            }
        },
        lastName(value) {
            if (value === "") {
                this.fullaname = "";
            } else {
                this.fullaname = this.name + " " + value;
            }
        },*/
    },
});

app.mount("#events");
