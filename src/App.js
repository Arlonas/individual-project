import { Box } from "@chakra-ui/react";
import Nav from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/Pages/Signin';
import Signup from "./components/Pages/Signup";
import HomePage from "./components/HomePage";
// bisa kasih ? setelah val kalo error di render listnya atau undefined null itu dibiarin jaa sama fitur ini ?
// untuk user profile pake dua function untuk render data 
//function pertama untuk render nama user profile pic smaa bio jumlah post
//function kedua untuk render post
// kalo mau navbarnya ikut kasih props children jaa di navbar
function App() {
    return (
      <Box>
         <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />}/>
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
         
      </Box>
    );
  }
  
  export default App;
            
        
         

        
  

