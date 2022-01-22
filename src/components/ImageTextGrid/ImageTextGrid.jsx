import classes from "./ImageTextGrid.module.css";

const ImageTextGrid = ({imgUrl,title,description,isRight}) => {
    let containerClass = null;
    let textWrapperClass = null;

    isRight ? containerClass = classes.Row : containerClass = classes.RowReverse;
    isRight ? textWrapperClass = classes.PdRt5Vw :  textWrapperClass = classes.PdLt5Vw;

  return (
    <div className={containerClass}>
        <div className={`${classes.Col} ${textWrapperClass}`}>
            <h2 className={classes.Title}>
                {title}
            </h2>
            <p className={classes.Description}>
                {description}
            </p>
        </div>
        <img src={imgUrl} className={classes.Image} alt="photo" />
    </div>
  );
};

export default ImageTextGrid;
