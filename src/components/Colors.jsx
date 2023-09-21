// Icons
import Chevron from "../icons/chevron";

// Components
import Color from "./Color";

//Hooks
import { useState } from "react";

// Styles
const styles = {
  btn: "flex justify-between items-center py-4 w-full",
  icon: "duration-100 w-4 h-4",
  ul: "flex flex-wrap gap-2 pb-4",
};

const Colors = () => {
  const [showColor, setShowColor] = useState(false);

  const toggleColor = () => {
    setShowColor(!showColor);
  };

  return (
    <div className="border-b">
      <button onClick={toggleColor} className={styles.btn}>
        <span className="font-bold">Color</span>
        <div>
          <Chevron
            className={`${styles.icon} ${!showColor && "rotate-180"}`}
            color="black"
          />
        </div>
      </button>
      {showColor && (
        <ul className={styles.ul}>
          <Color color="bg-black" title="Black" />
          <Color color="bg-white" title="White" />
          <Color color="bg-red-500" title="Red" />
          <Color color="bg-orange-500" title="Orange" />
          <Color color="bg-green-500" title="Green" />
        </ul>
      )}
    </div>
  );
};

export default Colors;
