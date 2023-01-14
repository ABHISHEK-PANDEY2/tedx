import { useState } from "react";
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
        <h1 className="faqs">FAQs</h1>
        {data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h3 className="hthree">{item.question}</h3>
              <span className="plus">{selected === i ? "-" : "+"}</span>
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
    question: "question 1",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, assumenda reprehenderit yihpius adipisci hic consequatur quibusdam. Ratione molestiae est, rerum labore ipsum consequuntur, maiores eaque laborum autem atque itaque distinctio? Saepe iure deleniti expedita quis aperiam, nisi debitis vitae aut provident maxime error voluptate natus animi, dolorum asperiores exercitationem sed? Iure sequi fugit reprehenderit delectus!",
  },
  {
    question: "question 2",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, assumenda reprehenderit eius adipisci hic consequatur quibusdam. Ratione molestiae est, rerum labore ipsum consequuntur, maiores eaque laborum autem atque itaque distinctio? Saepe iure deleniti expedita quis aperiam, nisi debitis vitae aut provident maxime error voluptate natus animi, dolorum asperiores exercitationem sed? Iure sequi fugit reprehenderit delectus!",
  },
  {
    question: "question 3",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, assumenda reprehenderit eius adipisci hic consequatur quibusdam. Ratione molestiae est, rerum labore ipsum consequuntur, maiores eaque laborum autem atque itaque distinctio? Saepe iure deleniti expedita quis aperiam, nisi debitis vitae aut provident maxime error voluptate natus animi, dolorum asperiores exercitationem sed? Iure sequi fugit reprehenderit delectus!",
  },
  {
    question: "question 4",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, assumenda reprehenderit eius adipisci hic consequatur quibusdam. Ratione molestiae est, rerum labore ipsum consequuntur, maiores eaque laborum autem atque itaque distinctio? Saepe iure deleniti expedita quis aperiam, nisi debitis vitae aut provident maxime error voluptate natus animi, dolorum asperiores exercitationem sed? Iure sequi fugit reprehenderit delectus!",
  },
  {
    question: "question 5",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, assumenda reprehenderit eius adipisci hic consequatur quibusdam. Ratione molestiae est, rerum labore ipsum consequuntur, maiores eaque laborum autem atque itaque distinctio? Saepe iure deleniti expedita quis aperiam, nisi debitis vitae aut provident maxime error voluptate natus animi, dolorum asperiores exercitationem sed? Iure sequi fugit reprehenderit delectus!",
  },
];

export default Faq;
