import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

    const handleFormSubmit = () => {
        if(!name.trim() || !email.trim() || !desc.trim()) return;
        
    }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Enter your name" />
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
