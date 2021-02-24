import styled from "styled-components";
import { useState } from "react";

export default function Form() {
  const [inputs, setInputs] = useState({
    name: "",
    number: "",
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    info: {
      error: false,
      msg: null,
    },
  });

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitting: false,
        submitted: true,
        info: {
          error: false,
          msg: msg,
        },
      });
      setInputs({
        name: "",
        number: "",
      });
    } else {
      setStatus({
        info: {
          error: true,
          msg: msg,
        },
      });
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <FormWrapper onSubmit={handleOnSubmit}>
      <label htmlFor="name">Your Full Name</label>
      <Input
        id="name"
        type="text"
        required
        placeholder="Your Full Name"
        onChange={handleOnChange}
        onFocus={() => setStatus({ submitted: false })}
        value={inputs.name}
      />

      <label htmlFor="number">Number of People in Your Party</label>
      <Input
        id="number"
        type="number"
        required
        placeholder="Enter a number between 1 and 5"
        onChange={handleOnChange}
        onFocus={() => setStatus({ submitted: false })}
        value={inputs.number}
        min="1"
        max="5"
      />

      <Button
        type="submit"
        disabled={
          inputs.number <= 0 ||
          inputs.number >= 6 ||
          status.submitting ||
          !inputs.name
        }
        style={
          inputs.number <= 0 ||
          inputs.number >= 6 ||
          status.submitting ||
          !inputs.name
            ? {
                color: "#FFF1E6",
                borderColor: "#FFF1E6",
              }
            : null
        }
      >
        {!status.submitting
          ? !status.submitted
            ? "RSVP"
            : "RSVP SENT"
          : "SENDING..."}
      </Button>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: center;
`;

const Input = styled.input`
  margin-top: 5px;
`;

const Button = styled.button`
  position: absolute;
  bottom: 0px;
  color: black;
`;
