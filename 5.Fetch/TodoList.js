async function getTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await response.json();
  document.getElementById("resultado").innerHTML = JSON.stringify(todos);
}
getTodos();

//Para una mejor visualizacion recomiendo ejecutar el archivo "TodoList.html" ya que el navegador, a diferencia de la consola, muestra todos los resultados.