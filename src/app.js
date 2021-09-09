function printYellowPokemon(items) {
  const source = document.querySelector("#pokemon-list").innerHTML;
  const template = Handlebars.compile(source);
  const context = { items: items };
  const html = template(context);

  const app = document.querySelector("#app");
  app.innerHTML = html;
}

module.exports = { printYellowPokemon };