import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        listAgenda: [
            { hari: 'senin', kegiatan: 'Belajar Vuejs' },
            { hari: 'selasa', kegiatan: 'Belajar Laravel' },
            { hari: 'rabu', kegiatan: 'Belajar Mysql' }
        ]
    },
    mutations: {

    },
    actions: {

    }
})

/* state berfungsi untuk menghimpun data sebagaimana yang dapat dilakukan oleh property data() 
pada tiap component, hanya saja state dari vuex dapat memusatkan data tersebut sehingga dapat 
digunakan oleh berbagai component yang ada. mutations digunakan untuk melakukan perubahan state, 
sedangkan actions hampir serupa dengan property methods() untuk melakukan tindakan sesuai yang 
diiginkan, termasuk diantaranya melakukan commit mutations. */