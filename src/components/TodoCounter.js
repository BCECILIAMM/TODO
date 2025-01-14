import './TodoCounter.css';


function TodoCounter({total, completed}){

    return (
      // ELEMENTOS 
      <h1>
        Has completado {completed} de {total} TODOS
      </h1>
    );
  }

  export {
    TodoCounter
  }

  /*
  Para hacer la información dinamica se pueden ocupar las props y no se les dice parametros se les dice props 
({destructuracion}) aqui se definen las props que se van a usar

  */