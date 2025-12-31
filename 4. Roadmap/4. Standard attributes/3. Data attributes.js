/*JS acces
Reading the values of these attributes out in JS is also very simple. You could use 
getAttribute() with their full HTML name to read them, but the standard defines a simpler
way: a DOMStringMap you can read out via a dataset propert.

To get data attribute throught the dataset object, get the property by the part of the 
attribute name after data- (note that dashes are converted to camel case).*/
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