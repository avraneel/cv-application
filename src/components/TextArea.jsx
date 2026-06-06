import "../styles/textarea.css";

export default function TextArea() {
  return (
    <div className="textArea inputGroup">
      <label htmlFor="responsibilities">Responsibilities</label>
      <textarea
        id="responsibilities"
        name="responsibilities"
        rows={10}
      ></textarea>
    </div>
  );
}
