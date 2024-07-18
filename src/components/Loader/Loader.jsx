import { Circles } from "react-loader-spinner";

export default function Loader() {
  return (
    <div сlassName="loader-wrapper">
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass="spinner"
        visible={true}
      />
    </div>
  );
}
