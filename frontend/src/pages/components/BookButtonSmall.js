import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BookButtonSmall.css";

const BookButtonSmall = () => {
  const navigate = useNavigate();

  const onBookButtonSmallContainerClick = useCallback(() => {
    navigate("/facilitybookingpage");
  }, [navigate]);

  return (
    <div className="bookbuttonsmall" onClick={onBookButtonSmallContainerClick}>
      <img className="bookimg-icon1" alt="" src="/bookimg@2x.png" />
    </div>
  );
};

export default BookButtonSmall;
