import React, { useEffect, useState } from "react";
import { BASE_URL, POST_PRODUCT_API } from "../../constant";
import axios from "axios";

const Form = () => {
   const [inputText, setInputText] = useState({});
  const [response, setResponse] = useState({});

  const handleInputChange = (e) => {
    setInputText({...inputText, [e.target.value]: e.target.name});
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    try {

      const res = await axios.post(BASE_URL+POST_PRODUCT_API,  inputText );

      // Save data in localStorage
      const existingData = JSON.parse(localStorage.getItem('comment')) || [];
      const updatedData = [...existingData, inputText];
      localStorage.setItem('comment', JSON.stringify(updatedData));

          setInputText("");

      // Set the res for live changes
      setResponse(`Res from server: ${res.data.text}`);

    } catch (error) {
      console.log('Error data:', error);
    }
  };

  useEffect(() => {
    console.log('Live response:', response);
  }, [response]);

  return (
    <>
       <div className="container">
        {/* <form> */}
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            //  value={inputText}
            placeholder="Type your message here..."
             onChange={handleInputChange}
          ></textarea>

          <input type="submit" value="Submit" onClick={handleSubmit} />
        {/* </form> */}
      </div>
    </>
  );
};

export default Form;
