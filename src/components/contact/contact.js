import style from "./style.module.css";
import facebook from "../../images/facebook.svg.svg";
const Contact = () => {
  return (
    <>
      <div className="heading">
        <p>Contact Us</p>
        <h1>Still any Queries?</h1>
      </div>
      <div className={style.contact}>
        <div>
          <p>Write us at:</p>
          <p>gmail@jssate.com</p>
          <br />
          <br />
          <p>Get Connected with us on</p>
          <div className={style.socials}>
            <img src={facebook} alt="" />
            <img src={facebook} alt="" />
            <img src={facebook} alt="" />
          </div>
        </div>
        <div className={style.form}>
          <form action="">
            <input type="text" placeholder="Name*" />
            <input type="text" placeholder="Email*" />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Query*" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
