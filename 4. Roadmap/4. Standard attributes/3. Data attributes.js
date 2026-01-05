/*JS acces
Leer los valores de estos atributos en JS también es muy sencillo. Puedes usar getAttribute()
con su nombre HTML completo para leerlos, pero el estándar define una forma más simple: un
DOMStringMap que puede leer a través de una propiedad del conjunto de datos 

Para obtener un atributo de datos a través del conjunto de datos, obtenga la propiedad 
por la parte del nombre del atributo después de data - (tenga en cuenta que los guiones
se convierten a camel case)*/
const article = document.querySelector("#electric-cars");
// The following would also work
// const article = document.getElementById("electric-cars");

article.dataset.columns;
article.dataset.indexNumber;
article.dataset.parent;

// Find all elements with a data-columns attribute
const articles = document.querySelectorAll("[data-columns]");

// Find all elements with data-columns="3"
const threeColumnArticles = document.querySelectorAll('[data-columns="3"]');
// You can then iterate over the results
threeColumnArticles.forEach((article) => {
  console.log(article.dataset.indexNumber);
});