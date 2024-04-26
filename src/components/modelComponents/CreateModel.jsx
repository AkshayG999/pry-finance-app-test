import React, { useState } from "react";

function CreateModel() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [secondPopupVisible, setSecondPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  const toggleSecondPopup = () => {
    setSecondPopupVisible(!secondPopupVisible);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="model-header-main">
              <div className="model-header-inner">
                <div
                  className="model-header-title-container"
                  onClick={togglePopup}
                >
                  <h4 className="new-model-header">New Model</h4>
                  <span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {popupVisible && (
        <div className="popup-add-model-main-container shadow">
          <div className="popup-inner-add-model">
            <div className="popup-header-model-title-container">
              <p>Models</p>
              <span onClick={toggleSecondPopup}>
                <i className="fa-solid fa-plus"></i>
              </span>
            </div>
            <hr style={{ margin: "0px" }} />
            <div className="radio-popup-container">
              <div style={{ display: "flex" }}>
                <div>
                  <input
                    type="radio"
                    id="css"
                    name="fav_language"
                    value="CSS"
                  />
                  <label for="html"> New Model</label>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div>
                  <input
                    type="radio"
                    id="css"
                    name="fav_language"
                    value="CSS"
                  />
                  <label for="html"> New Model</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {secondPopupVisible && (
        <div className="second-popup-container-model-add shadow">
          <div className="second-popup-inner-add-model">
            <div style={{ display: "flex", marginBottom: "5px" }}>
              <i
                style={{
                  color: "gray",
                  fontSize: "12px",
                  marginRight: "10px",
                  cursor: "pointer",
                  marginTop: "2px",
                }}
                className="fa-solid fa-plus"
              ></i>
              <p
                style={{
                  color: "black",
                  fontSize: "12px",
                  marginBottom: "5px",
                  cursor: "pointer",
                }}
              >
                New Blank Model
              </p>
            </div>
            <div style={{ display: "flex", marginBottom: "5px" }}>
              <i
                style={{
                  color: "gray",
                  fontSize: "12px",
                  marginRight: "10px",
                  cursor: "pointer",
                  marginTop: "2px",
                }}
                className="fa-solid fa-border-all"
              ></i>
              <p
                style={{
                  color: "black",
                  fontSize: "12px",
                  marginBottom: "5px",
                  cursor: "pointer",
                }}
              >
                New From Template
              </p>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}

export default CreateModel;
