import "./PhotoCard.css";
import zoomPng from "../assets/zoom.png";
export default function PhotoCard({ img, orgImg }) {
  function openImage() {
    window.open(orgImg, "_blank");
  }

  // const handleDownload = () => {
  //   console.log("test");
  //   const link = document.createElement("a");
  //   link.href = orgImg;
  //   link.download = "DownloadedImage.jpg";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <div id="photoContainer">
      <img src={img} alt="" />
      <button onClick={openImage}>
        <img src={zoomPng} alt="" />
      </button>
    </div>
  );
}
