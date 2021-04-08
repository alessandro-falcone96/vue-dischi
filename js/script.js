// https://flynn.boolean.careers/exercises/api/array/music
// colore body #1E2D3B
// colore header/card #2E3A46
// font Lato

var app = new Vue (
  {
    el: "#app",
    data: {
      oggetti: [],
      generi: ["All"],
      selectedGenre: "All"
    },
    mounted: function() {
      {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((risposta) => {

          var oggetto = risposta.data.response;
          for (var item in oggetto) {

            this.oggetti.push(oggetto[item]);

            // Creo una lista di generi
            if (this.generi.includes(oggetto[item].genre) == false) {
              this.generi.push(oggetto[item].genre);
            }

          }

          // Ordino gli album per anno di uscita
          this.oggetti.sort((a,b) => (a.year > b.year) ? 1 : -1);

        })
      }
    }
  }
);
