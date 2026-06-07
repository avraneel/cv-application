import Education from "./Education";
import General from "./General";
import Experience from "./Experience";

import "../styles/content.css";

export default function App() {
  return (
    <>
      <div className="content">
        <header className="header">
          <h1>CV Application</h1>
        </header>
        <main className="main">
          <General />
          {/* <Education />
          <Experience /> */}
        </main>
      </div>
    </>
  );
}
