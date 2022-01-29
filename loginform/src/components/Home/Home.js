import React from "react";
import { Avatar } from "@material-ui/core";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import apple from "../Login/apple-logo.png";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import BedroomBabyOutlinedIcon from "@mui/icons-material/BedroomBabyOutlined";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import book1 from "./1.jpeg";
import book2 from "./2.jpeg";
import book3 from "./3.jpeg";
import book4 from "./4.jpeg";
import book5 from "./5.jpeg";
import book6 from "./6.jpeg";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@material-ui/core";
import "./Home.css";
import girl from "./girldp.jpeg";
// import VisibleItemList from "../containers/VisibleItemList";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
}));
function Home() {
  const dummyCategories = [
    { tag: <HomeIcon />, name: "Home", path: `/Home` },
    {
      tag: <LibraryBooksOutlinedIcon />,
      name: "Classic Books",
    },
    { tag: <FavoriteOutlinedIcon />, name: "Romance" },
    { tag: <BedroomBabyOutlinedIcon />, name: "Kids" },
    { tag: <AllInclusiveOutlinedIcon />, name: "Thrillers" },
    { tag: <AutoStoriesRoundedIcon />, name: "Textbooks" },
  ];
  const bookDetails = [
    {
      image: book1,
      category: "Romance",
      name: "Clueless in Clever Land",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      image: book2,
      category: "Kids",
      name: "The Lazy child",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      image: book3,
      category: "Thrillers",
      name: "A story like a wind",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      image: book4,
      category: "Romance",
      name: "Lets play Hopscotch",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      image: book5,
      category: "Kids",
      name: "The Magic Land",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      image: book6,
      category: "Kids",
      name: "Lets play Hopscotch",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ];
  const [book, setBook] = React.useState(bookDetails);
  const [noData, setNodata] = React.useState(undefined);
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  function handleFilter(bookType) {
    console.log("books are ", bookType);
    console.log("books det are ", bookDetails);
    if (bookType === "Home") {
      setNodata(undefined);
      setBook(bookDetails);
    } else {
      let books = bookDetails.filter((boo) => boo.category === bookType);
      if (books.length === 0) {
        setNodata("No Books available in this category!");
        setBook(books);
      } else {
        setNodata(undefined);
        setBook(books);
      }
    }
  }
  const drawer = (
    <div>
      <List>
        {dummyCategories.map((text, index) => (
          <ListItem button key={text} onClick={() => handleFilter(text.name)}>
            <li className="text-tag">{text.tag}</li>
            <li className="text-name">{text.name}</li>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="error"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className="apple-heading">
            <Avatar
              className="apple-logo"
              alt="Apple"
              src={apple}
              sx={{ m: 1, width: 50, height: 50 }}
            />
            Apple Library
          </Typography>
          <span className="user">
            <Avatar alt="girl" src={girl} />
            <Typography className="user-name"> Hi Christina! </Typography>
          </span>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={2}>
          {book.map((book, index) => (
            <Grid item xs={4}>
              <Card>
                <CardMedia
                  component="img"
                  width="50%"
                  height="350"
                  image={book.image}
                  alt="book"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {book.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
          {/* <Grid item xs={4}>
            <Card sx={{ maxWidth: 200 }}>
              <CardMedia
                component="img"
                height="100%"
                image={book2}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 200 }}>
              <CardMedia
                component="img"
                height="100%"
                image={book3}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid> */}
        </Grid>
        {{ noData } && <h1>{noData}</h1>}
        <div />
      </div>
    </div>
  );
}
Home.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
};
export default Home;
