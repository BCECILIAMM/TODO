function TodoList({ children }) {
  return (
    // ELEMENTOS
    <>
      <div class="container">
        <div class="col">
          <h3 class="do">Por hacer:</h3>
          <ul>{children}</ul>
        </div>
        <div class="col">
          <h3 class="do">Finalizadas:</h3>
          {/* <ul>{children}</ul> */}
        </div>
      </div>
    </>
    // <ul>
    //   {children}
    // </ul>
  );
}

export { TodoList };

/* 
  ESTO SE LE LLAMA COMUNICACION ENTRE COMPONENTES POR MEDIO DE PROPS
  - NOTA: 
        Las Props, se están usando para poder renderisar el componete de TodoItem por dentro del elemento <ul>  que se encuentra en el archivo App.js 
        y se utiliza la propiedad CHILDREN o sea que queda props.children 
  */
