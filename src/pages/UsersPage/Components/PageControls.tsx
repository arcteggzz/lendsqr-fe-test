import React, { useState } from "react";
import styles from "./PageControls.module.scss";
import right_icon from "../../../assets/images/right_icon.png";
import left_icon from "../../../assets/images/left_icon.png";

const PageControls = () => {
  const [numItems, setNumItems] = useState(10);

  const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNumItems(+e.target.value);
  };

  const getList = (num: number) => {
    if (num === 10) return `12345678910`;
    else if (num === 20) return `12345`;
    else if (num === 50) return `12`;
    else return `1`;
  };

  return (
    <>
      <div className={styles.PageControls}>
        <div className={styles.left_side}>
          <p>Showing</p>
          <div>
            <div className="custom-select">
              <select onChange={handleSelection}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
          <p>out of 100</p>
        </div>
        <div className={styles.right_side}>
          <button>
            <img src={left_icon} alt="" />
          </button>
          <p>{getList(numItems)}</p>
          <button>
            <img src={right_icon} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default PageControls;
