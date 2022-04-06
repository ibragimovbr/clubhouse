import express from "express";
import dotenv from "dotenv";

dotenv.config({
   path: "server/.env",
});
import "./core/db";
import { passport } from "./core/passport";

const app = express();

app.use(passport.initialize());

app.get("/auth/github", passport.authenticate("github"));

app.get(
   "/auth/github/callback",
   passport.authenticate("github", { failureRedirect: "/login" }),
   (req, res) => {
      res.send(
         `<script>window.close();window.localStorage.setItem("user", "${JSON.stringify(
            req.user
         )}");</script>`
      );
   }
);
app.listen(3001, () => {
   console.log("SERVER STARTED");
});
