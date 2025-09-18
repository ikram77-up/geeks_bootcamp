
function makejuice(size) {
    let ingredients = [];
   function addIngredients(ingredient1, ingredient2, ingredient3) {
    // let txt = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, and ${ingredient3}`;
    // let sentence = document.createElement("p");
    // sentence.textContent = txt;
    // document.body.appendChild(sentence);

    ingredients.push(ingredient1, ingredient2, ingredient3);
  };

  function displayIngredients() {
    let text = `The client wants a ${size} juice, containing ${ingredients.join(", ")}`;
    let phrase = document.createElement("p");
    phrase.textContent = text;
    document.body.appendChild(phrase);
  };
  return { addIngredients, displayIngredients };
}

let juice = makejuice("large");
juice.addIngredients("apple", "banana", "kiwi");
juice.addIngredients("fraise", "mango", "avocado");
juice.displayIngredients();

