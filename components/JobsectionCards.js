const JobCardsLayout = ({ title, children }) => (
  <div>
    <div className="centered">
      <h1>{title}</h1>
      <section className="card">{children}</section>
    </div>
  </div>
);

export default JobCardsLayout;
