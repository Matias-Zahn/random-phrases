import "./CitesCards.css";

function CitesCards({ phrase, handleChangePhrase }) {
  return (
    <section className="Card">
      <div className="Card__info">
        <h1 className="title">InfoGalax</h1>
        <p className="Card__info--text">{phrase.phrase}</p>
        <button onClick={handleChangePhrase} className="Card__btn">
          <i className="bx bx-transfer-alt"></i>
        </button>
      </div>

      <footer className="Author">
        <p>Author: {phrase.author}</p>
      </footer>
    </section>
  );
}
export default CitesCards;
