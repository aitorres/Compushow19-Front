import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import styles from './styles'

import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";

const SignIn = (props: any) => {
  const { classes } = props;

  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#fe000a',
      },
    },
  })(TextField);

  return (
    <Container component="main" maxWidth="sm" style={{ height: 'calc(80vh - 60px)', display: 'flex', alignItems: 'center', position: 'relative' }} >
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <CssTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            style={{ background: 'white' }}
          />
          <CssTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            style={{ background: 'white' }}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Iniciar Sesión
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

const mapStateToProps = (reducers: any) => {
  return reducers.usuariosReducer;
};

export default connect(
  mapStateToProps,
  usuariosActions
)(withStyles(styles)(SignIn));
