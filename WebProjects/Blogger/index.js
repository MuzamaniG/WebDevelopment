//////////////////////////////////////////////////
// index.js
//////////////////////////////////////////////////

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const port = 3000;
const app = express();

// Needed for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set EJS as our templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Serve static files from the "public" directory (for CSS, etc.)
app.use(express.static("public"));

// Parse form data from POST requests
app.use(express.urlencoded({ extended: true }));

// -----------------------------------------------
// Existing "links" array (unchanged):
// -----------------------------------------------
const links = [
  { name: "Google", url: "https://www.google.com" },
  { name: "Youtube", url: "https://www.youtube.com" },
];

// -----------------------------------------------
// In-memory "posts" array for the bottom cards:
// (Matches the 6 cards in your HTML snippet.)
// -----------------------------------------------
let posts = [
  {
    id: 1,
    category: "World",
    title: "Featured Post",
    date: "Nov 12",
    excerpt:
      "This is a wider card with supporting text below as a natural lead-in to additional content. It highlights global events and ongoing discussions on current affairs around the world.",
  },
  {
    id: 2,
    category: "Design",
    title: "Post Title",
    date: "Nov 11",
    excerpt:
      "This is a brief overview of recent trends and innovations in the design world. Whether you’re exploring user interfaces or creative branding campaigns, design shapes our everyday experiences in subtle ways.",
  },
  {
    id: 3,
    category: "Technology",
    title: "Revolutionizing the Future",
    date: "Nov 10",
    excerpt:
      "From AI breakthroughs to quantum computing, the tech landscape evolves at lightning speed. This post dives into the next generation of technology poised to transform industries and everyday life.",
  },
  {
    id: 4,
    category: "Business",
    title: "Market Shifts and Strategies",
    date: "Nov 9",
    excerpt:
      "In a world of tight competition and shifting consumer preferences, businesses must adapt quickly. This article discusses emerging market trends, strategic pivots, and how leaders can stay one step ahead.",
  },
  {
    id: 5,
    category: "Culture",
    title: "Exploring Creative Roots",
    date: "Nov 8",
    excerpt:
      "Travel, art, music, and local heritage all shape the unique tapestry of our global culture. Discover how these elements blend to create trends and traditions that resonate across generations.",
  },
  {
    id: 6,
    category: "U.S.",
    title: "A Nation in Transition",
    date: "Nov 7",
    excerpt:
      "Spotlighting political change, societal shifts, and emerging voices across the United States. This post uncovers the factors driving conversations from the local to the national level.",
  },
];

// -----------------------------------------------
// HOME PAGE: Renders 'index.ejs' with links + posts
// -----------------------------------------------
app.get("/", (req, res) => {
  // Pass both links and posts to the template
  res.render("index.ejs", { links, posts });
});

// -----------------------------------------------
// EDIT ROUTE: Show the edit form for a single post
// -----------------------------------------------
app.get("/posts/:id/edit", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);
  if (!post) {
    return res.status(404).send("Post not found");
  }
  res.render("edit.ejs", { post });
});

// -----------------------------------------------
// UPDATE ROUTE: Handle the form submission to save edits
// -----------------------------------------------
app.post("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { category, title, date, excerpt } = req.body;

  const post = posts.find((p) => p.id === id);
  if (!post) {
    return res.status(404).send("Post not found");
  }

  // Update fields in memory
  post.category = category;
  post.title = title;
  post.date = date;
  post.excerpt = excerpt;

  // Redirect back to the home page
  res.redirect("/");
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
