function uncompletedNotes(notes) {
    const uncompletedTodos = notes.flatMap((note) =>
      note.todos.filter((todo) => !todo.done)
    );
    return uncompletedTodos;
  }
  