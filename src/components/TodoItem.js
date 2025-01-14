function TodoItem(props) {
  return (
    // ELEMENTOS
    <>
      <div class="card-inicio">
        <div class="checkboxes__item">
          <label class="checkbox style-f">
            <input type="checkbox" />{props.completed}
            <div class="checkbox__checkmark"></div>
            <div class="checkbox__body">{props.text}</div>
          </label>
        </div>
      </div>
    </>
  );
}

export { TodoItem };
