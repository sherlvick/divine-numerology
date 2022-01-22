import classes from "./Services.module.css";

import destiny from "../../assets/services/destiny.png";
import compatibility from "../../assets/services/compatibility.png";
import combinations81 from "../../assets/services/81combinations.png";
import name from "../../assets/services/name.png";
import loshu from "../../assets/services/loshu.png";
import missingNum from "../../assets/services/missing-num.png";
import personalYear from "../../assets/services/personal-year.png";
import health from "../../assets/services/health.png";
import profession from "../../assets/services/profession.png";
import yearCycle from "../../assets/services/9year-cycle.png";
import financial from "../../assets/services/financial.png";
import mobile from "../../assets/services/mobile.png";
import signature from "../../assets/services/signature.png";
import foreign from "../../assets/services/foreign.png";
import disputes from "../../assets/services/disputes.png";

import addRectHoc from "../../components/addRectHoc";

import ImageTextGrid from "../../components/ImageTextGrid/ImageTextGrid";

const Services = () => {
  const Title = ({ children }) => (
    <p className={classes.Title}>We transform your future{children}</p>
  );
  const TitleComponent = addRectHoc(Title);
  return (
    <section>
      <div className={classes.Header}>
        <TitleComponent yellowRectWithoutAni />
        <h1 className={classes.Heading}>
          WITH OUR MAGICAL <br /> NUMBERS
        </h1>
      </div>
      <ImageTextGrid
        isRight
        imgUrl={destiny}
        title="Destiny number &
personality number"
        description="‘Destiny Number’ is your lucky number for life. It plays an important role in choosing a profession and attaining his ultimate destiny. Destiny Number marks the basis of your existence based on your birth date. Destiny number can help an individual understand what he aspires to become. Numerology numbers have provided many unforeseen advantages like promotion, success in career, love life..."
      />
      <ImageTextGrid
        imgUrl={compatibility}
        title="compatibility chart"
        description="Compatibility is one of the most trendy and demanding topics in the field of numerology. With your magic number, things click instantly. Connections work differently when tied with your number and create a wavelength with unique frequency. Numerology can also help in calculating compatibility in the relationship between two people having different numbers.
Every number has its own characteristics and significance. Numerology Compatibility can also provide insights on spiritual life, materialistic life and other human traits.
"
      />
      <ImageTextGrid
        isRight
        imgUrl={combinations81}
        title="81 combinations of numerology"
        description="The number 81 itself has a very antique speciality in numerology. The numerology number 81 is a number of humanitarianism, business, self-sufficiency, idealism and tolerance. Every number in numerology has its own specific nature and vibration. Among the various numbers in numerology, the combination of driver and conductor numbers is of paramount importance. There exists 81 such combinations denoting various strengths, weaknesses, personality and traits."
      />
      <ImageTextGrid
        imgUrl={name}
        title="name Numerology"
        description="In numerology, every name has a vibratory number. Every alphabet is tied alongside a specific number which can determine your personality, characteristics and other important features. Name number also adds in the field of personal development. Name numbers are a symbolisation of a person’s personality, ambitions and achievements. The translation of your name into numbers using the numerology calculator complies with his/her birth number significantly."
      />
      <ImageTextGrid
        isRight
        imgUrl={loshu}
        title="lo shu grid birth chart"
        description="Lo Shu Numerology best represents the missing numbers and suggests the remedies to fill in for them. It focuses on personality analysis extracted out from your birth date. The numerologist understands the potential a person carries with their personality from the 3*3 grid.
The magic square has digits from 1-9 representing a fixed element, direction & planet. Every digit has its special significance with pros and cons. The numbers in the chart show how strong or weak a person’s impact is."
      />
      <ImageTextGrid
        imgUrl={missingNum}
        title="missing Numbers"
        description="Missing numbers represent the missing traits or features from an individual’s personality. They spread the light on the crucial life lessons a person must learn, or grow. It emphasizes a Liberal’s thinking on living a very modest, happy and balanced life. Missing numbers in numerology can also help in overcoming your flaws and accept your partner’s flaws at times needed. This can cultivate a culture within you to facilitate growth of other individuals as well.
They also showcase an energy reflecting out of a person’s persona."
      />
      <ImageTextGrid
        isRight
        imgUrl={personalYear}
        title="personal year prediction"
        description="Everything changes with the passage for time. Numerologists consume this number and formulate it to calculate the yearly and monthly predictions. Personal year numbers play a very important role in such predictions. Every year has its own number and energy associated with it. It makes you open to changes and elevates your path of adaptation."
      />
      <ImageTextGrid
        isRight
        imgUrl={health}
        title="health numerology"
        description="Numerology is the science depicting the influence of the heavenly bodies on your ordinary life. It helps retain the best of human health. Every heavenly body is attached with a particular number. With your date of birth, numerology hugely impacts your destiny. It can help you foresee your tendencies and other kinds of health problems with the knowledge of certain eating habits. It centralizes an accord of certain plants, fruits  and influence of numbers in connection with your destiny."
      />
      <ImageTextGrid
        imgUrl={profession}
        title="profession/career numerology"
        description="When you choose a career path based on your date of birth, there are greater chances of achieving a successful career. Numerology can help you establish a compatible and beneficial career without much deviations and uncertainties. It picturizes a person’s characteristics, probable setbacks, accomplishments and vision for the future. Numbers are symbolic in choosing a career direction."
      />
      <ImageTextGrid
        isRight
        imgUrl={yearCycle}
        title="9 year cycle change"
        description="“What we call the beginning is often the end. And to make an end is to make a beginning. The end is where we start from.” ~T.S. Eliot
In numerology, a person’s life cycle is distributed into 9 year cycles. A 9 year cycle ends an era and embarks the beginning of another 9 year cycle. It helps you to face the brutal reality of your past, its impact on your present and how you can redefine your future. It helps you transform yourself into a better person without the burden of anything pulling you back."
      />
      <ImageTextGrid
        imgUrl={financial}
        title="financial numerology"
        description="Finance is the primary criterion of survival. It forms the basis of human existence in society. No one wants financial losses, debts or crisis in their everyday life. The science of numbers can provide a sensible insight into your monetary conditions. It can help you plan your finances better with policies and priorities, changes and investments.  It instigates your vision to prevent any harm or losses prehand."
      />
      <ImageTextGrid
        isRight
        imgUrl={mobile}
        title="mobile number analysis"
        description="The emphasis of numbers in human life is inevitable. One among all of them, is the mobile phone number. Many people fail to understand the importance of these numbers in ordinary life.
Lucky numbers do work on specific days for specific works. It is directly linked to us and leaves a lasting authority. Mobile numbers are a must in every instance of life process be it meeting, business deals, relationships, home, job or office. A careful consideration of the mobile phone number can sharpen your possibilities and opportunities."
      />
      <ImageTextGrid
        imgUrl={signature}
        title="signature analysis"
        description="Signature depicts an individual’s mindset and the course of life in this birth and the relentless fruits to his actions. It reflects an individual's personality, perception, his nature and his course of actions. Different styles of signatures implies different results."
      />
      <ImageTextGrid
        isRight
        imgUrl={foreign}
        title="FOREIGN SETTLEMENT"
        description="Many people aspire to settle abroad for studies or work. However, Many of them fail to pursue these dreams due to lack of proper planning comprehending their fate. They tend to fall back with anxiety. Numerology can help them plan and forecast their future plans with better settlement eliminating all their worries."
      />
      <ImageTextGrid
        imgUrl={disputes}
        title="property disputes & marriage disputes"
        description="Property disputes have been continuing since ages. War over wealth occurs over every sector and household. Incompetence within family numbers is another factor for such disputes and can be a cause of constant disharmony. Individuals with weak numbers generally have to settle with the smaller share in the distribution while those with stronger numbers get a better share..."
      />
    </section>
  );
};

export default Services;
