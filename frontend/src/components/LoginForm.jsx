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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from "react";
import { useNavigate } from "react-router";
import URI from "../constrants/URI";

const LoginForm = ({ onLogin, showLoginError, appPassword }) => {
    const papperStyle = { padding: 20, height: '70vh', width: 300, margin: "20px auto" }
    const avatarStyle = { backgroundColor: 'green' }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(appPassword || "");
    const [showUsernameError, setShowUsernameError] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);

    const navigate = useNavigate();

    const onNavigate = (path) => {
        navigate(path);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        resetErrors();
        if (username.length < 8 || username.length > 20) {
            setShowUsernameError(true);
            return;
        }
        onLogin(username, password);
    };

    const resetErrors = () => {
        setShowUsernameError(false);
        setShowPasswordError(false);
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
                            Login
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Username"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            error={showUsernameError}
                            helperText={
                                showUsernameError &&
                                "Username is invalid. Please provide a correct username."
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={showPasswordError}
                            helperText={
                              showPasswordError &&
                              "Password is invalid. Insert correct password"
                            }

                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            fullWidth
                            color="secondary"
                            type="submit"
                        >
                            Login
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Don't have an account yet?
                            <Link
                                style={{ cursor: "pointer" }}
                                color="secondary"
                                onClick={() => onNavigate(URI.REGISTER)}
                            >
                                <strong> Sign up!</strong>
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Paper >
    );
};

export default LoginForm;
