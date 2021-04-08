// https://flynn.boolean.careers/exercises/api/array/music
// colore body #1E2D3B
// colore header/card #2E3A46
// font Lato

var app = new Vue (
  {
    el: "#app",
    data: {
      oggetti: []
    },
    mounted: function() {
      {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((risposta) => {

          var oggetto = risposta.data.response;
          for (var item in oggetto) {

            this.oggetti.push(oggetto[item]);

          }

          console.log(this.oggetti);

        })
      }
    }
  }
);
