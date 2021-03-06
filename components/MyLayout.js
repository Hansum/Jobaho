import Navbar from "../pages/header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
};

const Layout = (Page) => {
  return () => (
    <div>
      <title>Jobaho</title>
      <Navbar />
      <Page />
    </div>
  );
};

export default Layout;
