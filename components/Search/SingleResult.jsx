import React from "react";
import Link from "next/link";
import SearchStyles from "../../styles/components/Search.module.scss";

const SingleResult = ({ name, id, setInput, handleMobSearchClose }) => {
  return (
    <Link href={`/products/${id}`}>
      <div
        onClick={() => {
          setInput("");
          handleMobSearchClose();
        }}
        className={SearchStyles.singleResult}
      >
        {name}
      </div>
    </Link>
  );
};

export default SingleResult;
