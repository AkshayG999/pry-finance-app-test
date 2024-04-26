import React, { useState } from 'react';
import DynamicInput from './DynamicInput';
import Formulas from './Formulas';
import Output from './Output';


function ModelMainBody() {
  const [dataList, setDataList] = useState([]);
  const [formulaFields, setFormulaFields] = useState([]); //{ id: 0, label: 'Formula 1', selectedOption: [] }


  return (
    <>
      <section style={{ padding: "0px 40px" }}>
        <div
          className="container-fluid shadow"
          style={{ background: "white", height: "auto", minHeight: "100vh" }}
        >
          <div className="row" style={{ padding: "20px" }}>
            <div className="col-lg-3">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <h6>
                    <span>
                      <i className="fa-solid fa-upload"></i>
                    </span>
                    Inputs
                  </h6>
                  <DynamicInput dataList={dataList} setDataList={setDataList} />
                </div>
                <div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  <h6>
                    <span>
                      <i className="fa-solid fa-square-root-variable"></i>
                    </span>
                    Formulas
                  </h6>
                  <Formulas dataList={dataList} formulaFields={formulaFields} setFormulaFields={setFormulaFields} />
                </div>
                <div>
                </div>
              </div>
              <div>
              </div>
            </div>
            <div className="col-lg-3">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <h6>
                    <span>
                      <i className="fa-solid fa-download"></i>
                    </span>
                    Output
                  </h6>
                  <Output formulaFields={formulaFields} />
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ModelMainBody;
