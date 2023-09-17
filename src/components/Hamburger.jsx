function Hamburger({ onClick }) {
  return (
    <div className="hamburger" onClick={onClick}>
      <img src="/assets/icon-hamburger.svg" alt="hamburger menu toggler" />
    </div>
  );
}

export default Hamburger;
