function Stat({ statHeading, figure }) {
  return (
    <div className="statistic">
      <p className="stat-heading">{statHeading}</p>
      <p className="figure">{figure}</p>
    </div>
  );
}

export default Stat;
