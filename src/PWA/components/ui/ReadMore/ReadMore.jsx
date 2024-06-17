import { useState } from "react";

const ReadMore = ({ text, maxLength = 145 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <p>
        {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      </p>
      {text.length > maxLength && (
        <button
          onClick={toggleReadMore}
          style={{
            marginTop: "4px",
            fontWeight: 500,
            color: "#333863"
          }}
        >
          {isExpanded ? 'Hide' : 'Read more'}
        </button>
      )}
    </>
  );
};

export default ReadMore;