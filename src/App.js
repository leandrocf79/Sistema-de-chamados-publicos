import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./contexts/auth"; //Agora terá acesso aos dados do usuário em todos os lugares
import Routes from "./routes";



function App() {

  return (
    <AuthProvider>    
        <BrowserRouter>
            <ToastContainer autoClose={3000} />
            <Routes/>
        
        </BrowserRouter>
   </AuthProvider>
  
  );
}

export default App;



