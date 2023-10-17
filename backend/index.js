import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import UserRoute from "./routes/userRoute.js";
import ProductRoute from "./routes/productRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import SequelizeStore from "connect-session-sequelize"
import db from "./config/Database.js"
import path from "path"
dotenv.config();

const app = express();

const __dirname = path.resolve();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
})


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist','index.html'));
})

// store.sync();

app.listen(process.env.APP_PORT, () => {
    console.log('server berjalan..')
});