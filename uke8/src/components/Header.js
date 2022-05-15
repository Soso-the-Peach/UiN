function Header({ hide1, hide2, hide3, Hiding1, Hiding2, Hiding3 }) {
  return (
    <header>
      {hide1 ? (
        <button id="btn_1" onClick={Hiding1} type="button">
          One Piece
        </button>
      ) : (
        <button
          id="btn_1"
          onClick={Hiding1}
          type="button"
          style={{ backgroundColor: '#edcdff' }}
        >
          One Piece
        </button>
      )}

      {hide2 ? (
        <button id="btn_2" onClick={Hiding2} type="button">
          Grumpy Cat
        </button>
      ) : (
        <button
          id="btn_2"
          onClick={Hiding2}
          type="button"
          style={{ backgroundColor: '#edcdff' }}
        >
          Grumpy Cat
        </button>
      )}
      {hide3 ? (
        <button id="btn_3" onClick={Hiding3} type="button">
          Coding
        </button>
      ) : (
        <button
          id="btn_3"
          onClick={Hiding3}
          type="button"
          style={{ backgroundColor: '#edcdff' }}
        >
          Coding
        </button>
      )}
    </header>
  )
}

export default Header
