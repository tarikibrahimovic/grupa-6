const app = Vue.createApp({
  data() {
    return {
      members: [
        {
          id: "1",
          name: "Tarik Ibrahimovic",
          phone: "063/751-93-39",
          email: "tarik@gmail.com",
        },
        {
          id: "2",
          name: "Amir Ukic",
          phone: "063/124-48-72",
          email: "amir@gmail.com",
        },
        {
          id: "3",
          name: "Faris Mecinovic",
          phone: "061/148-55-67",
          email: "davis@gmail.com",
        },
        {
          id: "4",
          name: "Imran Midovic",
          phone: "065/177-99-25",
          email: "imran@yahoo.com",
        },
      ],
    };
  }
});

app.component("clan", {
  props: ["name", "phone", "email", "image"],
  template: `
  <li>
    <h2>{{ name }}</h2>
    <ul v-if="detailsAreVisible" class="inner">
      <li><i class="fas fa-phone-alt"></i> &nbsp;&nbsp; {{ phone }}</li>
      <li><i class="fas fa-envelope"></i> &nbsp;&nbsp; {{ email }}</li>
      
    </ul>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? (title == 'Our team' ? 'Hide' : 'Sakrij') : (title == 'Our team' ? 'Show' : 'Prikaži') }}  {{ title == 'Our team' ? 'details' : 'detalje' }}
    </button>
    
  </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      title: document.title,
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
