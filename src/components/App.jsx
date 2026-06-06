import Education from "./Education";
import General from "./General";
import Experience from "./Experience";
import Submit from "./Submit";

export default function App() {
  return (
    <>
      <div className="content">
        <h1>CV Application</h1>
        <General />
        <Education />
        <Experience />
        <Submit />
      </div>
    </>
  );
}
