import Education from "./Education";
import General from "./General";
import Experience from "./Experience";
import Submit from "./Submit";

export default function App() {
  return (
    <>
      <header>
        <h1>CV Application</h1>
      </header>
      <div className="content">
        <General />
        <Education />
        <Experience />
        <Submit />
      </div>
    </>
  );
}
