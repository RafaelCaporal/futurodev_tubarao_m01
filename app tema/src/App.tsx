import { Page } from "./components/Page";
import { ThemeProvider } from "./contexts/ThemeContext";
function App() {
  return (
    <div>
      <ThemeProvider>
        <Page />
      </ThemeProvider>
      <h1></h1>
    </div>
  );
}

export default App;
