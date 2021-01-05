<template>
  <div id="app">
    <header-components v-on:ganti-hero="gantiHero"></header-components>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
    <main>
      <article v-if="!selectedHero">
          <hero-components v-for="(item,index) in hero" v-bind:hero="item" :key="item.id" :index="index"></hero-components>
      </article>
      <article v-else>
          <hero-components v-bind:hero="selectedHero" :index="0"></hero-components>
      </article>
    </main>
    <footer-components></footer-components>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Hero from './components/Hero.vue';

export default {
  name: 'App',
  data: function(){
    return{
      hero : [
      {
        id: 1,
        nama: 'Aurora',
        type : 'Mage',
        gambar : 'aurora.jpg'
      },
      {
        id: 2,
        nama: 'Zilong',
        type : 'fighter',
        gambar : 'zilong.jpg'
      },
      {
        id: 3,
        nama: 'Akai',
        type : 'tank',
        gambar : 'akai.jpg'
      },
      {
        id: 4,
        nama: 'Bruno',
        type : 'marksman',
        gambar : 'bruno.jpg'
      },
      {
        id: 5,
        nama: 'Layla',
        type : 'marksman',
        gambar : 'layla.jpg'
      },
      {
        id: 6,
        nama: 'Gatot Kaca',
        type : 'marksman',
        gambar : 'gatotkaca.png'
      },
      {
        id: 7,
        nama: 'Nana',
        type : 'support',
        gambar : 'nana.png'
      }
      ],
      selectedHero :''
    }
  },
  components: {
    'header-components' : Header,
    'footer-components' : Footer,
    'hero-components' : Hero,
  },
  methods:{
    gantiHero: function(){
      this.selectedHero = this.randomHero();
    },
    randomHero(){
      return this.hero[Math.floor(Math.random() * this.hero.length)];
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
main img{
  width: 80px;
  border : solid 1px #ccc;
}
article{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
li{
  list-style: none;
}
</style>
