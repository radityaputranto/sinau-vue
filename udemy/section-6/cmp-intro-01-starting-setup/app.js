const app = Vue.createApp({
    data(){
        return {
            friends:[
                {
                    id: 'manuel',
                    name: 'Manuel lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'julie',
                    name: 'julie jones',
                    phone: '09876 543 221',
                    email: 'manuel@localhost.com'
                },
            ],
        }
    },
    methods: {
    }
});

app.component('friend-contact',{
    template : `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails(friend.id)">{{ detailsAreAvailable ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreAvailable">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
    `,
    data(){
        return{
            detailsAreAvailable : false,
            friend: {
                id: 'manuel',
                    name: 'Manuel lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
            }
        };
    },
    methods: {
        toggleDetails(id){
            this.detailsAreAvailable = !this.detailsAreAvailable;
        }
    }
});
app.mount('#app');