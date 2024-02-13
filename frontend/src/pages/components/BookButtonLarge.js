import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BookButtonLarge.css";

const BookButtonLarge = () => {
  const navigate = useNavigate();

  const onBookButtonLargeContainerClick = useCallback(() => {
    navigate("/equipmentbookingpage");
  }, [navigate]);

  return (
    <div className="bookbuttonlarge" onClick={onBookButtonLargeContainerClick}>
      <img className="bookimg-icon" alt="" src="/bookimg@2x.png" />
    </div>
  );
};

export default BookButtonLarge;
