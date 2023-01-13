import "./about.css";
import tedx from "../../images/tedx.png";
const About = () => {
  return (
    <div className="wrap">
      <div className="wrap2">
        <h2 className="about">About</h2>
        <h1 className="whatIs">
          {/* What is <img src={tedx} className="logo" alt="tedx logo" /> ? */}
          What is Ted<sup>x</sup>?
        </h1>

        <p className="contents">
          Lorem ipsum dolor sit amet consectetur. Pharetra urna quis porttitor
          venenatis pulvinar. Gravida egestas pellentesque adipiscing nisi
          massa. Cursus aliquam eu mauris habitant nisl in. Elementum
          ullamcorper risus ultrices porttitor condimentum non justo lobortis
          leo. Lectus maecenas elit in sem lorem. Accumsan at at sagittis netus
          fermentum libero morbi non in. Sit hendrerit accumsan tincidunt
          pulvinar dolor posuere sed cras aliquet. Risus commodo nisl nulla id.
          <br />
          <br />
          Blandit quis turpis diam nulla nec egestas malesuada nam leo.
          Tincidunt gravida vulputate sodales ac ultricies hendrerit in enim.
          Adipiscing lectus donec nisl ac. Viverra et semper semper suspendisse
          porta nibh. Ac amet aliquet dolor nibh vitae lorem fermentum
          porttitor. Iaculis a egestas adipiscing massa ut at nibh odio.
        </p>
      </div>
    </div>
  );
};

export default About;
