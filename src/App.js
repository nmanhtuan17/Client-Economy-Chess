import "./App.css";
import Layout from "./components/Layout/Layout";
import { AuthProvider } from "./components/provider/AuthProvider";


function App() {
  return (
    <>
      <AuthProvider />
      <Layout />
    </>
  )

}

export default App;
