export default function setInputValue({ handleClick, inputChange }) {
    const Click = (event) => {
      handleClick(event);
    };

    const input = (e) => {
      inputChange(e);
    };

    return (
      <div>
        <form onSubmit={Click}>
          <input type="text" onChange={input}></input>
          <button type="submit"> Klikk meg </button>
        </form>
      </div>
    );
  }
