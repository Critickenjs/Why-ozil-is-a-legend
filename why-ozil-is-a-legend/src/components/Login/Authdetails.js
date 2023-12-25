import { useEffect , useState} from "react";
import { auth } from "../../Firebase";
import { onAuthStateChanged } from "firebase/auth";

const Authdetails = () => {
    const [authUser, setUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return () => {
            listen();
        };
    }, []);
    return (
        <div>
            {authUser ? (
                <div>
                    <h1>{authUser.email}</h1>
                    <button onClick={() => auth.signOut()}>Sign out</button>
                </div>
            ) : (
                <div>
                    <h1>You are not signed in</h1>
                </div>
            )}
        </div>
    );
}

export default Authdetails;