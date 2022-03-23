import React from "react";
import "../pages/Content.css";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container, CardMedia } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { DeleteOutline } from "@material-ui/icons";
import ButtonBase from "@material-ui/core/ButtonBase";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rounded: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
    boxShadow: "none",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function Content() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h1"></Typography>
      <main>
        <Container maxWidth="lg">
          <div className="root">
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Paper></Paper>
              </Grid>
              <Grid item xs={6}>
                <Card className="card">
                  <CardMedia
                    className="cardMedia"
                    image="https://source.unsplash.com/random"
                    title="Image"
                  />
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Paper></Paper>
              </Grid>
              <Grid item xs={6} md={6}>
                <Paper
                  className={classes.paper}
                  style={{ maxHeight: 300, overflow: "auto" }}
                >
                  <List className={classes.root}>
                    <ListItem>
                      <Grid container spacing={2}>
                        <Grid item>
                          <ButtonBase className={classes.image}>
                            <img
                              className={classes.img}
                              alt="complex"
                              src="https://source.unsplash.com/random"
                            />
                          </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                          <Grid
                            item
                            xs
                            container
                            direction="column"
                            spacing={2}
                          >
                            <Grid item xs>
                              <Typography gutterBottom variant="subtitle1">
                                Party Combo - 4 Veg Pizza varieties + Sides &
                                Pepsi
                              </Typography>
                              <Typography variant="body2" gutterBottom>
                                Med Farmhouse + Med Extravaganza + Med Peppy
                                Paneer + Med Indi Tandoori Paneer + 2 Garlic
                                Bread + 2 Stuffed Garlic Bread + 4 Pepsi
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography
                                variant="body2"
                                style={{ cursor: "pointer" }}
                              >
                                <Paper className={classes.paper}>
                                  <ButtonGroup
                                    size="medium"
                                    aria-label="outlined secondary button group"
                                  >
                                    <Button>
                                      <DeleteOutline />
                                    </Button>
                                    <Button>1</Button>
                                    <Button>
                                      <AddIcon></AddIcon>
                                    </Button>
                                  </ButtonGroup>
                                </Paper>
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="subtitle1"
                              style={{ fontWeight: "bolder" }}
                            >
                              $5
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <Grid container spacing={2}>
                        <Grid item>
                          <ButtonBase className={classes.image}>
                            <img
                              className={classes.img}
                              alt="complex"
                              src="https://source.unsplash.com/random"
                            />
                          </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                          <Grid
                            item
                            xs
                            container
                            direction="column"
                            spacing={2}
                          >
                            <Grid item xs>
                              <Typography gutterBottom variant="subtitle1">
                                Party Combo - 4 Veg Pizza varieties + Sides &
                                Pepsi
                              </Typography>
                              <Typography variant="body2" gutterBottom>
                                Med Farmhouse + Med Extravaganza + Med Peppy
                                Paneer + Med Indi Tandoori Paneer + 2 Garlic
                                Bread + 2 Stuffed Garlic Bread + 4 Pepsi
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography
                                variant="body2"
                                style={{ cursor: "pointer" }}
                              >
                                <Paper className={classes.paper}>
                                  <ButtonGroup
                                    size="medium"
                                    aria-label="outlined secondary button group"
                                  >
                                    <Button>
                                      <DeleteOutline />
                                    </Button>
                                    <Button>1</Button>
                                    <Button>
                                      <AddIcon></AddIcon>
                                    </Button>
                                  </ButtonGroup>
                                </Paper>
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="subtitle1"
                              style={{ fontWeight: "bolder" }}
                            >
                              $5
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <Grid container spacing={2}>
                        <Grid item>
                          <ButtonBase className={classes.image}>
                            <img
                              className={classes.img}
                              alt="complex"
                              src="https://source.unsplash.com/random"
                            />
                          </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                          <Grid
                            item
                            xs
                            container
                            direction="column"
                            spacing={2}
                          >
                            <Grid item xs>
                              <Typography gutterBottom variant="subtitle1">
                                Party Combo - 4 Veg Pizza varieties + Sides &
                                Pepsi
                              </Typography>
                              <Typography variant="body2" gutterBottom>
                                Med Farmhouse + Med Extravaganza + Med Peppy
                                Paneer + Med Indi Tandoori Paneer + 2 Garlic
                                Bread + 2 Stuffed Garlic Bread + 4 Pepsi
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography
                                variant="body2"
                                style={{ cursor: "pointer" }}
                              >
                                <Paper className={classes.paper}>
                                  <ButtonGroup
                                    size="medium"
                                    aria-label="outlined secondary button group"
                                  >
                                    <Button>
                                      <DeleteOutline />
                                    </Button>
                                    <Button>1</Button>
                                    <Button>
                                      <AddIcon></AddIcon>
                                    </Button>
                                  </ButtonGroup>
                                </Paper>
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="subtitle1"
                              style={{ fontWeight: "bolder" }}
                            >
                              $5
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </List>
                </Paper>

                <Button
                  variant="contained"
                  color="success"
                  style={{ width: 500 }}
                >
                  Checkout
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </main>
    </div>
  );
}
