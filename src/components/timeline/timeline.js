import './timeline.css'

import timelineElements from "./timelineElements";
import { ReactComponent as Vectorres1 } from "../../images/Vectorres1.svg";
import { ReactComponent as Vectorres2 } from "../../images/Vectorres2.svg";
import { ReactComponent as Vectorres3 } from "../../images/Vectorres3.svg";
import { ReactComponent as Vectorres5 } from "../../images/Vectorres5.svg";


import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  
  import "react-vertical-timeline-component/style.min.css";


  
  const Timeline = () => {
    let workIconStyles = { background: "#202020" };
    
    return (
      <div className='timeline_body'>
      <div className="heading">
                <p>The</p>
                <h1>Timeline</h1>
            </div>
        <VerticalTimeline>
          {timelineElements.map((element) => {
            let isRegister = element.icon === "register";
            let isNotes = element.icon === "notes";
            let isSpeaker = element.icon === "speaker";
            return (
              <VerticalTimelineElement
                key={element.id}
                date={element.date}
                dateClassName="date"
                iconStyle={workIconStyles}
                // icon={element.icon}
                icon={isRegister ? <Vectorres1 /> : isNotes ? <Vectorres2 /> : isSpeaker ? <Vectorres3 /> : <Vectorres5 />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description">{element.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    )
  }
  
  export default Timeline