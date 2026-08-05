import { useNavigate } from "react-router";

function BackButton() {
  const navigate = useNavigate();

  function handleback() {
    navigate.back();
  }

  return <button onClick={handleback}>Go back</button>;
}

export default BackButton;
