const movies = [
    {name: "Your Name", durationInMinutes: 130},
    {name: "Pesadilla antes de navidad", durationInMinutes: 225},
    {name: "Origen", durationInMinutes: 165},
    {name: "El señor de los anillos", durationInMinutes: 967},
    {name: "Solo en casa", durationInMinutes: 214},
    {name: "El jardin de las palabras", durationInMinutes: 40}
  ];
  
  const peliculasPequenas = [];
  const peliculasMedianas = [];
  const peliculasGrandes = [];
  
  for (let i = 0; i < movies.length; i++) {
    const pelicula = movies[i];
  
    if (pelicula.durationInMinutes < 100) {
      peliculasPequenas.push(pelicula);
    } else if (pelicula.durationInMinutes >= 100 && pelicula.durationInMinutes < 200) {
      peliculasMedianas.push(pelicula);
    } else {
      peliculasGrandes.push(pelicula);
    }
  }
  
  console.log(peliculasPequenas);
  console.log(peliculasMedianas);
  console.log(peliculasGrandes);
  