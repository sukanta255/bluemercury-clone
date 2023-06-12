import { Box } from '@chakra-ui/react'
import logo from "./logo.svg";
import "./App.css";
import { AllRoutes } from './Pages/AllRoutes'

function App() {
  return (
    <div className="App">
      <Box>
        <AllRoutes />
      </Box>
    </div>
  );
}

export default App;
