import { useState } from "react";
import plus from "../../images/plus.svg";
import minus from "../../images/minus.svg";
import "./faq.css";
const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="wrapper">
      <div className="accordian">
      <div className="heading">
                <p>Some</p>
                <h1>FAQs</h1>
            </div>
        {data.map((item, i) => (
          <div className="item" key={i}>
            <div className="question" onClick={() => toggle(i)}>
              <p className="hthree">{item.question}</p>
              <img className="faq-img" src={(selected === i) ? minus : plus} alt="" />
            </div>
            <div className={selected === i ? "content show" : "content"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, assumenda reprehenderit yihpius adipisci hic consequatur quibusdam. Ratione molestiae est, rerum labore ipsum consequuntur, maiores eaque laborum autem atque itaque distinctio? Saepe iure deleniti expedita quis aperiam, nisi debitis vitae aut provident maxime error voluptate natus animi, dolorum asperiores exercitationem sed? Iure sequi fugit reprehenderit delectus!",
  },
  {
    question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, assumenda reprehenderit eius adipisci hic consequatur quibusdam. Ratione molestiae est, rerum labore ipsum consequuntur, maiores eaque laborum autem atque itaque distinctio? Saepe iure deleniti expedita quis aperiam, nisi debitis vitae aut provident maxime error voluptate natus animi, dolorum asperiores exercitationem sed? Iure sequi fugit reprehenderit delectus!",
  },
  {
    question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, assumenda reprehenderit eius adipisci hic consequatur quibusdam. Ratione molestiae est, rerum labore ipsum consequuntur, maiores eaque laborum autem atque itaque distinctio? Saepe iure deleniti expedita quis aperiam, nisi debitis vitae aut provident maxime error voluptate natus animi, dolorum asperiores exercitationem sed? Iure sequi fugit reprehenderit delectus!",
  },
  {
    question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, assumenda reprehenderit eius adipisci hic consequatur quibusdam. Ratione molestiae est, rerum labore ipsum consequuntur, maiores eaque laborum autem atque itaque distinctio? Saepe iure deleniti expedita quis aperiam, nisi debitis vitae aut provident maxime error voluptate natus animi, dolorum asperiores exercitationem sed? Iure sequi fugit reprehenderit delectus!",
  },
  {
    question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, assumenda reprehenderit eius adipisci hic consequatur quibusdam. Ratione molestiae est, rerum labore ipsum consequuntur, maiores eaque laborum autem atque itaque distinctio? Saepe iure deleniti expedita quis aperiam, nisi debitis vitae aut provident maxime error voluptate natus animi, dolorum asperiores exercitationem sed? Iure sequi fugit reprehenderit delectus!",
  },
];

export default Faq;
