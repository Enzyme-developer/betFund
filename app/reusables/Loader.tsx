import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center my-3">
      <RotatingLines
        strokeColor="#FDC804"
        strokeWidth="5"
        animationDuration="0.5"
        width="50"
        visible={true}
      />
    </div>
  );
};

export default Loader;
