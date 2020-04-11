import Navbar from "../pages/header";
const JobCardsLayout = ({ children }) => (
  <div className="centered">
    <Navbar />
    {children}
  </div>
);

export default JobCardsLayout;
