function Gallery(props) {
  return (
    <div style={{ width: "100%", height: "50%" }}>
      <img src={props.objectImg} alt={props.title} />
      <p>{props.artist}</p>
    </div>
  );
}

export default Gallery;
