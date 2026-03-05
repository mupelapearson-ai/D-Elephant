import { useState } from "react";

export default function App() {
  const [songs, setSongs] = useState([]);
  const [title, setTitle] = useState("");

  const upload = () => {
    if (!title) return;
    setSongs([title, ...songs]);
    setTitle("");
  };

  return (
    <div style={{background:"#0f172a",color:"white",minHeight:"100vh",padding:"20px"}}>
      <h1>🐘 D-Elephant</h1>

      <h2>Upload Song</h2>
      <input
        placeholder="Song name"
        value={title}
        onChange={e=>setTitle(e.target.value)}
      />
      <button onClick={upload}>Upload</button>

      <h2>My Songs</h2>
      {songs.map((s,i)=><p key={i}>🎵 {s}</p>)}
    </div>
  );
}
