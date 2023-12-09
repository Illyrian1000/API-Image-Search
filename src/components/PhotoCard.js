import "./PhotoCard.css";
import zoomPng from "../assets/zoom.png";
export default function PhotoCard({ img, orgImg }) {
  function openImage() {
    window.open(orgImg, "_blank");
  }
  return (
    <div id="photoContainer">
      <img src={img} alt="" />
      <button onClick={openImage}>
        <img src={zoomPng} alt="" />
      </button>
    </div>
  );
}
