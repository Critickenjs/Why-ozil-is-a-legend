import React from "react";
import Header from "../components/header/header";
import Footer from "../components/Footer/Footer";
import "../styles/styles.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Chat from "../components/Chat/Chat";
import { useEffect, useState } from "react";
import { auth } from "../Firebase";
import { onAuthStateChanged } from "firebase/auth";

const MesutMessager = () => {
    const [user, setUser] = useState(null);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
        window.location.replace("/");
    }
});
return (
    <>
    <Header />
    <div className="Mesutmessenger">
    <div className="Message-container">
        <Sidebar />
        <Chat />
         </div>
    </div>
    <Footer />

    </>
    );
};
export default MesutMessager;
