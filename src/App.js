import { useState } from "react";
import "./styles.css";

export default function App() {
  let title = "my content";
  let content = "hello my name is roshan naik im afrom bangalore akm m djjf";
  const [open, setOpen] = useState(false);
  const toggleButton = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="container">
        <div className="title-container">
          <h1>{title}</h1>
          <div
            className={`accordion ${open ? "active" : ""}`}
            onClick={toggleButton}
          >
            +
          </div>
        </div>
      </div>
      <div className={`accordionContent${open ? "active" : ""}`}>{content}</div>

      <div
        className="accordion__text"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div>{content}</div>
    </>
  );
}
