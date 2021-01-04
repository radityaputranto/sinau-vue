Vue.component('header-component', {
    props : ['nama'],
    template: `<header>
            <img src="/img/vue.png" width="300" />
            <p>{{ 'Hello, ' +nama }}</p>
            <hr>
        </header>`
});
Vue.component('footer-component', {
    template: `<footer>
                <slot></slot>
            </footer>`
});

//define local component
const Home = {
    template : '<div>Home</div>'
}
const About = {
    template : '<div>About</div>'
} 
const NotFound = {
    template : '<div> 404 Npt Found</div>'
} 
const Kelas = {
    props:['items'],
    //template harus dibungkus satu element saja
    template: `
    <div>
        <h3>Tambah Kelas.</h3>
        <form v-on:submit.prevent="submitkelas">
            <div class="input-group">
                <label for="">Judul : </label> <br>
                <input type="text" v-model="kelas.judul" placeholder="Judul kelas">
                <div class="error" v-if="error.judul"> {{ error.judul }}</div>
            </div>

            <div class="input-group">
                <label for="">Deskripsi : </label> <br>
                <textarea type="text" v-model="kelas.deskripsi" placeholder="Deskripsi kelas"></textarea>
                <div class="error" v-if="error.deskripsi"> {{ error.deskripsi }}</div>
            </div>

            <div class="input-group">
                <label for="">Upload Gambar : </label>
                <img :src="previewimg" ref="gambar" v-if="previewimg" width="200">
                <input type="file" v-on:change="upload_picture">
            </div>

            <button type="submit">submit</button>
        </form>

        <h3>Daftar Kelas ({{ items.length }})</h3>

        <template v-if="items.length >= 1">
            <ul>
                <li v-for="(item, index) of items"> 
                    <img :src="'img/'+item.gambar" width="200" v-if="item.gambar"></img>
                    {{ index+1 }} - {{ item.judul }}
                    <router-link :to="'/kelas/'+item.id">Detail</router-link> |
                    <a href="" v-on:click.prevent="$emit('hapuskelas', item.id)">hapus</a>
                </li> 
            </ul>
        </template>
        <li v-else>Kelas Belum tersedia</li>
    </div>`
    /* $emit untuk component anak mengakses ke component induk */
    ,
    data: function(){
        return{
            kelas: {
                judul:'',
                deskripsi: '',
                gambar : '',
            },
            previewimg:'',
            error: {
                judul :'',
                deskripsi : ''
            }
        }
    },
    methods: {
        submitkelas: function(){
            this.error.judul = '';
            this.error.deskripsi = '';

            if(this.kelas.judul == ''){
                this.error.judul = 'judul is required'
            }
            if(this.kelas.deskripsi == ''){
                this.error.deskripsi = 'deskripsi is required'
            }
            //console.log(this.kelas);
            if(this.kelas.judul && this.kelas.deskripsi){
                const data={
                    id : uuidv4(),
                    judul: this.kelas.judul,
                    deskripsi: this.kelas.deskripsi,
                    gambar: this.kelas.gambar
                }
                this.$emit('submitkelas', data);

                this.kelas.judul = '';
                this.kelas.deskripsi = '';
                this.kelas.gambar = '';
                this.previewimg = '';
                //mengosongkan input type file
                if(this.$refs.gambar != undefined){
                    this.$refs.gambar.value = '';
                }
            }
        },
        upload_picture: function(event){
            const img= event.target.files[0].name;
            this.kelas.gambar = img;
            this.previewimg = URL.createObjectURL(event.target.files[0]);
        }
    }
}
const detailKelas = {
    template : `<div>
        <template v-if="detailkelas">
            <img :src="url_gambar(detailkelas.gambar)" v-if="detailkelas.gambar" width="200">
            <h3>{{ $route.params.idkelas }} - {{ detailkelas.judul }}</h3>
            <p>{{ detailkelas.deskripsi }}</p>
            <router-link to="/kelas">Kembali</router-link>
        </template>
        <p v-else>Kelas tidak ada</p>
    </div>`,
    data(){
        return{
            detailkelas :{}
        }
    },
    created(){
        this.filterkelas()
    },
    methods:{
        filterkelas(){
            //let kelas = JSON.parse(localStorage.getItem('kelas'));
            let id = this.$route.params.idkelas;
            /* let item = kelas.filter(k => k.id == id);
            this.detailkelas = item[0]; */

            //get from firebase
            let kelasDetailRef = db.ref('kelas/'+id);
            kelasDetailRef.on('value',(item)=>{
                this.detailkelas = item.val()
            })
        },
        url_gambar: function(gambar){
            return gambar ? '../img/'+gambar : '';
        }
    }
} 
