import Global from "./styles/global";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Global />
      <Routes />
      <Toaster 
        toastOptions={{
          style: {
            background: '#363636',
            color: '#fff',
          }}}
      />
    </>
  );
};

export default App;
