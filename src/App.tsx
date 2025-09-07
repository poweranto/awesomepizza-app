import './index.css'
import {Route, Routes} from "react-router";
import Home from "./routes/Home.tsx";
import Kitchen from "./routes/Kitchen.tsx";
import Layout from "./routes/Layout.tsx";
import Orders from "./routes/Orders.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="orders" element={<Orders />} />
        <Route path="kitchen" element={<Kitchen />} />
      </Route>
    </Routes>
  );
}

export default App;