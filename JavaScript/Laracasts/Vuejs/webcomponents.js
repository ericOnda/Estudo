Vue.component('mensagem', {

    props : ['title', 'body'],

    data(){

      return {
        isVisible : true
      }
    },

    template: `
      <article class="message" v-show="isVisible">
          <div class="message-header">
              <p>{{title}}</p>
              <button @click="hideModal" class="delete"></button>
          </div>
          <div class="message-body">
              {{body}}
          </div>
      </article>
    `,

    methods:{
      hideModal(){
        this.isVisible = false;
      }
    }
});

Vue.component('modal', {

  template : `
  <div class="modal is-active ">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <slot></slot>
        </div>
      </div>
      <button @click="$emit('close')" class="modal-close"></button>
  </div>
  `

});

new Vue({
  el: '#app',
  data : {
    showModal : false
  }
});
