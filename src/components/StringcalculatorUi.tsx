import { useState,useRef  } from "react";
import { StringCalculator } from "../utils/StringCalculator";
import {
  Container,
  TextField,
  Button,
  Typography,
  Alert,
  Box,
} from "@mui/material";

export const StringCalculatorUI = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | string>("");
  const [error, setError] = useState("");
  const [callCount, setCallCount] = useState(0);

  const calculatorRef = useRef(new StringCalculator());

  const handleCalculate = () => {
    try {
      const formattedInput = input.replace(/\\n/g, "\n");
      const sum = calculatorRef.current.add(formattedInput);
      setResult(sum);
      setCallCount(calculatorRef.current.getCalledCount());
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
      setResult("");
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: 3,
          bgcolor: "background.paper",
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          String Calculator
        </Typography>

        <TextField
          label="Enter Numbers"
          variant="outlined"
          fullWidth
          margin="normal"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          helperText='Use "," or "\n" as delimiters. Custom delimiter: "//[delimiter]\n"'
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleCalculate}
          sx={{ mt: 2 }}
        >
          Calculate
        </Button>

        {result !== "" && (
          <Typography variant="h6" sx={{ mt: 2 }}>
            Result: <strong>{result}</strong>
          </Typography>
        )}

        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}

        <Typography variant="body2" sx={{ mt: 2, color: "gray" }}>
          Add Method Called: {callCount} times
        </Typography>
      </Box>
    </Container>
  );
};
