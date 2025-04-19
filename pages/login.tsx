import { Button, Container, Typography } from "@mui/material";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

export default function Login() {
  const login = async () => {
    await signInWithPopup(auth, provider);
  };

  return (
    <Container sx={{ mt: 10 }}>
      <Typography variant="h4">Log in with Google</Typography>
      <Button variant="contained" onClick={login}>
        Sign In
      </Button>
    </Container>
  );
}
