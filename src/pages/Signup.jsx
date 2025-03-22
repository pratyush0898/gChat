import React, { useState } from "react";
import { auth, googleProvider, db } from "../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Store username in Firestore
      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email,
      });

      navigate("/chat"); // Redirect to chat
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Check if user already exists in Firestore, else add
      const userRef = doc(db, "users", user.uid);
      await setDoc(
        userRef,
        { username: user.displayName, email: user.email },
        { merge: true }
      );

      navigate("/chat");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={handleGoogleSignup} className="google-signin">
        Sign up with Google
      </button>
    </div>
  );
};

export default Signup;
