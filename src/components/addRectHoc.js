const yellowRectStyles = {
  display: "block",
  position: "absolute",
  backgroundColor: "#FBCF0D",
  width: "100%",
  height: "50%",
  top: "50%",
  zIndex: -1,
};

function addRectHoc(WrapperFunction) {
  return function (props) {
    let elem = null;
    if (props.yellowRectWithoutAni) {
      elem = <span style={yellowRectStyles}> </span>;
    }
    return <WrapperFunction>{elem}</WrapperFunction>;
  };
}

export default addRectHoc;
