import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CircuitBuilder from "./components/CircuitBuilder";
import { Container, Typography } from "@mui/material";

function App() {
  return (
    <Container style={{ textAlign: "center", padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Logic Gate Simulator
      </Typography>
      <DndProvider backend={HTML5Backend}>
        <CircuitBuilder />
      </DndProvider>
    </Container>
  );
}

export default App;
