const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      //this.message = this.currentUserInput;
      this.message =  this.$refs.userText.value;
      console.dir(this.$refs.userText);
    },
    beforeCreate(){
      console.log('beforeCreate()');
    },
    created(){
      console.log('created()');
    },
    beforeMount(){
      console.log('beforeMount()');
    },
    mounted(){
      console.log('mounted()');
    },
    beforeUpdate(){
      console.log('beforeUpdate()');
    },
    updated(){
      console.log('updated()');
    },
    beforeUnmount(){
      console.log('beforeUnmount()');
    },
    unmounted(){
      console.log('unmounted()');
    },
  },
});

app.mount('#app');

setTimeout(function(){
  app.unmount('#app');
}, 3000);

let message = 'Hello!';
let longMessage = message + ' World!';
console.log(longMessage);
message = 'hello-edit!!!';
console.log(longMessage);
//javascript tidak reactive jadi conosole log akan sama dengna var seblumnya

//Javascript Proxies
const data = {
  message: 'Hello!',
  longMessage: 'Helloooooooo!'
};
const handler = {
  set(target, key, value){
    console.log(target);
    console.log(key);
    console.log(value);
    if (key === 'message'){
      target.longMessage = value + ' world123!';
    }
    target.message = 'hellow!!';
  }
};
const proxy = new Proxy(data, handler);
  proxy.message = "hellow!!";
  console.log(proxy.longMessage);



const app2 = Vue.createApp({
  data(){
    return{
      favoriteMeal: 'Pizza!'
    };
  }
});

app2.mount('#app2');