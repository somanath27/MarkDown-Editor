import "./App.css";
import { MarkdownProvider } from "./provider/EditorContext";
import MarkdownEditor from "./pages/MarkDownEditor/MarkDownEditor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <MarkdownProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MarkdownEditor />} />
          <Route path="/contactus" />
        </Routes>
      </Router>
    </MarkdownProvider>
  );
}

export default App;
