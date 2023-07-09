import Link from "next/link";

const SingleResult = ({ name, id, setInput, handleMobSearchClose }) => {
  return (
    <Link href={`/products/${id}`}>
      <div
        onClick={() => {
          setInput("");
          handleMobSearchClose();
        }}
        className="text-sm p-3 px-3 cursor-pointer hover:bg-neutral-100 w-full"
      >
        {name}
      </div>
    </Link>
  );
};

export default SingleResult;
