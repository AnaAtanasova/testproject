import{ PasswordOutlined } from "@mui/icons-material";
import { useState } from "react";
import {
    Avatar,
    Button,
    CardContent,
    Grid,
    Link,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

const RegisterForm = () => {
    const papperStyle = { padding: 20, height: '70vh', width: 300, margin: "20px auto" }
    const avatarStyle = { backgroundColor: 'green' }

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const [isUsernameErrorShowing, setIsUsernameErrorShowing] = useState(false);
    const [isPasswordErrorShowing, setIsPasswordErrorShowing] = useState(false);

    const isFormValid = () => {
        if (username.length < 2 || username.length > 20) {
            setIsUsernameErrorShowing(true);
            return false;
          }
        if (password.length < 8 || password.length > 127 ) {
          setIsPasswordErrorShowing(true);
          return false;
        }
        return true;
      };

    const resetErrors = () => {
        setIsUsernameErrorShowing(false);
        setIsPasswordErrorShowing(false);
      };
    

    return (
        <Paper elevation={10} style={papperStyle}>
            <CardContent>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Avatar style={avatarStyle} sx={{ width: 50, height: 50 }}><LockOutlinedIcon /></Avatar>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h5">
                            Sign In
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Username"
                            placeholder="Enter Username"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Password"
                            placeholder="Enter Password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            fullWidth
                            color="secondary"
                            type="submit"
                        >
                            Sign In
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Paper >
    );
};
export default RegisterForm;

