
// eslint-disable-next-line react/prop-types
const Button = ({ btnValue,colorCode}) => {
  return (
    <>
      <button
        onClick={() =>
          (document.querySelector("body").style.backgroundColor = btnValue)
        }
        className="px-4 py-2 rounded text-white"
        style={{backgroundColor:btnValue, color:colorCode}}
      >
        {btnValue}
      </button>
    </>
  );
};

export default Button;
