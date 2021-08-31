import {Fragment}from "react";
import "./MaBox.css";
import Bug from "./bug_report_black_24dp.svg";
import Close from "./close_black_24dp (2).svg";
import err from "./error_black_24dp.svg";
import warning from "./warning_black_24dp.svg";
import BackDrop from "./BackDrop/BackDrop";

export default function MaBox(props) {
  return (
      <Fragment>
    <BackDrop/>
      <div className="MaBox">
        <div className="MaBoxAction">
          <img className="MaBoxIcon" src={ props.err === 'wr' ?  warning : props.err=== 'err' ? err:warning} alt="icon" />
          <p className="MaBoxTitle">{props.Title}</p>
          <img onClick={()=>{
            props.closeMa()
          }} src={Close} alt="close" />
        </div>
        <div className="MaContext">
          <p>{props.MA}</p>
        </div>
      </div>

      </Fragment>
  );
}
