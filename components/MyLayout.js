import Navbar from "../pages/header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

// const Layout = Page => (
//   <div>
//     <Navbar />
//     <Page />
//   </div>
// );
const Layout = Page => {
  return () => (
    <div>
      <Navbar />
      <Page />
    </div>
  );
};

export default Layout;
