/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue/dist/vue.esm.js'
import axios from 'axios'


document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      expand_type: '-',
      title: '',
      amount: '',
      description: '',
      items: [
        {id: 1, expand_type: '-', title: '買手機', amount: 20000, description: "Hello"},
        {id: 2, expand_type: '-', title: '買書', amount: 1000, description: "World"}
      ]
    },
    // created: {
    //   this.fetchItems()
    // },

    methods: {

      // fetchItems(){
      //   const resource = this.$resource('app.json/{ id }')
      //   resource.get().then(responce => this.items = responce.data)
      // },

    clear() {
      this.expand_type = '-'
      this.title = ''
      this.amount = ''
      this.description = ''
      // axios.get('api/money', items)
    },

    addItem(evt) {
      evt.preventDefault()
      let item = { 
        expand_type: this.expand_type, 
        title: this.title, 
        amount: this.amount, 
        description: this.description
      }
      axios.post('/api/money', item)
        .then(response => console.log(response))
        .catch(error => console.log(error))
      
      this.items.unshift(item)

      this.clear()
    }
  },
  computed: {
    total(){
      return this.items.reduce(
          function(iccu,item){
            if(item.expand_type == '-')
              {
               return iccu - item.amount
               }
            else{
              return iccu + item.amount
            }
            
      },0)
    }
  }
  

  })
})


