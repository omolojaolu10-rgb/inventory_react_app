
import { useState } from "react";

function Form() {
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!fullName.trim() || !message.trim()) {
      setFeedback("Please complete both fields.");
      return;
    }

    setFeedback(`Thank you, ${fullName}! Your form was submitted.`);
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4 p-5">
      <div>{feedback}</div>

      <label className="block">
        Full name
        <input
          className="block w-full rounded border p-2"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
      </label>

      <label className="block">
        Message
        <textarea
          className="block w-full rounded border p-2"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>

      <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">
        Submit
      </button>
    </form>
  );
}

export default Form;
