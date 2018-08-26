/* eslint-disable no-undef, react/prop-types */
import React from 'react';
// import Link from 'gatsby-link';
import { Box, Flex } from '../components/Layout';
import colors from '../utils/colors';
import ButtonPrimary from '../components/Buttons';
import logo from './shield.png';
import reeva1 from './reeva.png';
import reeva2 from './reeva2.jpg';
import crime from './rape1.jpg';
import strangle from './strangle.jpg';
import trunk from './trunk.jpg';
import spray from './spray.jpg';
import ut from './utensils.jpg';
import chair from './chair.jpg';
import logos from './cards.png';

const style = {
  normal: {
    fontWeight: 'normal'
  },
  bold: {
    fontWeight: 'bolder'
  },
  center: {
    textAlign: 'center'
  },
  mp0: {
    margin: '0',
    padding: '0'
  },
  divs: {
    maxHeight: '80%',
    maxWidth: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block'
  },
  imgbox: {
    maxWidth: '400px',
    display: 'block',
    alignContent: 'center',
    justifyContent: 'center'
  },
  divs2: {
    maxWidth: '50%',
    height: 'auto',
    margin: 'auto'
  },
  divs3: {
    marginTop: '1em',
    marginBottom: '1em'
  },
  test: {
    width: '50%',
    margin: 'auto',
    textAlign: 'center'
  }
};

export default () => (
  <div>
    <TitleCard />
    <TextWarning />
    <ReevaSection />
    <MainInfo />
    <PictureGrid />
    <FinalPitch />
  </div>
);

const TitleCard = () => (
  <Box bg={colors.primary}>
    <Box
      width={[1, 1, 1 / 2]}
      m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
      px={[3, 3, 0]}
      color={colors.secondary}
      align="center"
    >
      <span>
        <span>Women Have Spoken!</span>
        <span style={style.bold}> No More!</span>
      </span>
      <br />
      <br />
      <h1 style={(style.bold, style.center, style.mp0)}>
        Women&apos;s Protection
      </h1>
      <h1 style={(style.bold, style.center, style.mp0)}>and</h1>
      <h1 style={(style.bold, style.center, style.mp0)}>Self-Defense</h1>
      <h1
        style={{
          margin: '0',
          padding: '0',
          fontWeight: 'normal'
        }}
      >
        INTERNATIONAL
      </h1>
      <img src={logo} alt="logo" style={{ width: '25%', height: '25%' }} />
    </Box>
  </Box>
);

const TextWarning = () => (
  <Box bg={colors.primary}>
    <Box color={colors.secondary} m="0 1em 0 1em" align="center">
      <p style={{ textAlign: 'center', marginBottom: '0' }}>
        There is an epidemic that is injuring and killing more women than
        automobile accidents, cancer, etc.
      </p>
      <h2 style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '0' }}>
        VIOLENCE!
      </h2>
      <p style={{ textAlign: 'center', marginBottom: '0' }}>
        Robbery, murder, kidnapping, hijacking, domestic violence, rape,
        stalking, etc.
      </p>

      <ul style={{ textAlign: 'center', marginTop: '0' }}>
        <li>
          1 out of 3 (32.4%) women will face an attacker in their lifetime
        </li>
        <li>
          1 out of 5 college girls will face an attacker in their college years
        </li>
        <li>
          <span>How many registered sex offenders in the USA? 1000? 2000?</span>
          <span style={style.bold}> NO!! 740,408.</span>
          <span> Up 21% since 2012!</span>
        </li>
      </ul>

      <h1 style={(style.bold, style.center)}>
        Please don&apos;t let this happen to you.
      </h1>
    </Box>
  </Box>
);

const ReevaSection = () => (
  <Box bg={colors.primary}>
    <Box color={colors.secondary} m="0 1em 0 1em" align="center">
      <div style={style.center}>
        <u>These victims never thought this could happen to them.</u>
        <br />
        <br />
        <br />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            maxWidth: '100%'
          }}
        >
          <div>
            <img
              src={reeva1}
              alt="reeva pic normal"
              style={{
                display: 'block',
                maxWidth: '80%',
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: '50%',
                boxShadow:
                  '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
              }}
            />
            <p
              style={{
                textAlign: 'center',
                fontWeight: 'normal'
              }}
            >
              This is Reeva Steenkamp, model and college girl, before and after
              her murder by boyfriend, athlete Oscar Pistorious
            </p>
          </div>
          <div>
            <img
              src={reeva2}
              alt="reeva pics aftermath"
              style={{
                display: 'block',
                marginRight: 'auto',
                marginLeft: 'auto',
                boxShadow:
                  '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
              }}
            />
          </div>
        </div>
        <br />
        <h2 style={(style.bold, style.center, style.mp0)}>
          Don&apos;t ignore this reality!
        </h2>
        <h2 style={(style.bold, style.center, style.mp0)}>
          Don&apos;t gamble with your or your daughter&apos;s life!
        </h2>
      </div>
      <img
        src={crime}
        alt="woman crime"
        style={{
          maxWidth: '100%',
          height: 'auto',
          margin: '0em',
          boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }}
      />
    </Box>
  </Box>
);

const MainInfo = () => (
  <Box bg={colors.primary}>
    <Box color={colors.secondary} m="0 1em 0 1em" align="center">
      <h1 style={{ margin: '0', padding: '0', fontWeight: 'bold' }}>
        Let us help you now!
      </h1>
      <p style={{ margin: '0', padding: '0', fontWeight: 'normal' }}>
        Every 23 seconds another woman is attacked.
      </p>
      <br />
      <h2 style={{ margin: '0', padding: '0', fontWeight: '0' }}>
        Knowledge is Power! We give you the knowledge to have the power.
      </h2>
      <ul style={{ margin: '0', padding: '0' }}>
        <li>NO strength required.</li>
        <li>NO atheleticism required.</li>
        <li>NO fitness required.</li>
        <li>NO gym work outs required.</li>
        <li>NO Judo, Karate, or any other martial arts required.</li>
      </ul>
      <br />
      <br />
      <h2 style={{ margin: '0', padding: '0', fontWeight: 'bolder' }}>
        Just download our instructional demonstrational video to your
        mobile or laptop from the comfort of your home.
      </h2>
      <ol
        style={{
          textAlign: 'justify',
          margin: '0'
        }}
      >
        <li>We explain to you what your attacker&apos;s state of mind is.</li>
        <li>
          We explain what your mind is going through when confronting an
          attacker.
        </li>
        <li>
          We give you the confidence that enables you to keep calm and in
          control of your body and mind.
        </li>
        <li>
          We show you how to use everyday purse items as effective weapons. We
          even explain what type of purse will allow you easy access to these
          weapons.
        </li>
        <li>
          We give you advice on how to avoid hijackers and escape kidnappers.
        </li>
        <li>
          We show the most vulnerable body parts of your attacker and how to
          exploit them.
        </li>
        <li>
          80% of attacks take place inside a home. We will discuss all the
          potential weapons laying around and how to use them effectively. Our
          personal favorite - the frying pan - is an effective attack and
          defense weapon when used correctly
        </li>
        <li>
          We show and demonstrate the most up-to-date defense devices available
          and what would suit your needs.
        </li>
        <li>
          Poisons and drugs are being used more and more to murder and
          manipulate women. We help you see the signs, and a great deal more!
        </li>
        <li>How to free yourself when your hands are tied with duct tape.</li>
      </ol>
    </Box>
  </Box>
);

const PictureGrid = () => (
  <Box bg={colors.primary}>
    <Box color={colors.secondary} m="0 1em 0 1em" align="center">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <div style={style.divs3}>
          <img src={chair} alt="chairs" style={style.divs} />
          <p>
            Both these chairs could give you an opportunity to escape an
            attacker. See how it&apos;s done.
          </p>
        </div>
        <div style={style.divs3}>
          <img src={ut} alt="knives" style={style.divs} />
          <p>
            These everyday house implements can be effective self-defense
            weapons. See how it&apos;s done.
          </p>
        </div>
        <div style={style.divs3}>
          <img src={trunk} alt="trunk" style={style.divs} />
          <p>
            Many women have been kidnapped, locked in the car trunk and then
            assaulted or murdered. How did a 94 year old woman escape out of a
            locked trunk? It&apos;s easy when you know how. See how it&apos;s
            done.
          </p>
        </div>
        <div style={style.divs3}>
          <img src={strangle} alt="strangle" style={style.divs} />
          <p>
            How to escape from an attacker&apos;s grip on you. No extra strength
            or athleticism needed! See how it&apos;s done.
          </p>
        </div>
      </div>
    </Box>
  </Box>
);

const FinalPitch = () => (
  <Box bg={colors.primary}>
    <Box color={colors.secondary} m="0 1em 0 1em" align="center">
      <h1 style={style.bold}> Every woman needs this information! </h1>
      <p style={style.center}>
        <strong>CRIME AGAINST WOMEN IS ON THE RISE</strong>, so is the
        brutality. We want to give you the best possibilty to be a survivor.
        Remember 80% of crimes against women are committed by a person they
        know. We help you spot some of the signs.
      </p>
      <p>
        <span style={{ fontWeight: 'bolder', fontSize: '20' }}>WPSDI</span> is
        the first and only international program that is specifically and
        practically designed to help all women of all ages in any situation. Our
        aim is to reverse the statistics of crimes against women.
      </p>
      <h5>
        <strong>
          We spent 7 years in 2 of the top 10 countries of violence. Our
          research includes speaking to victims, attackers, investigators,
          medical doctors, criminal and private psychiatrists, neurologists,
          auto mechanics, escape artists, attorneys, and many more. We have
          inspected countless crime reenactments and actual crime scene
          photographs.
        </strong>
      </h5>
      <h3>WE HELP SAVE LIVES!!</h3>
      <div>
        <h3 style={style.normal}>
          <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
            PEPPER SPRAY{' '}
          </span>
          is a good self-defense weapon. Made to look like a lipstick or ladies
          spray, it is light, small, and very effective. In our demonstration
          video, we show you how to use it for maximum efficiency! Every woman
          should have atleast one.
        </h3>
        <img src={spray} alt="spray" style={style.divs2} />
      </div>
      <br />
      <br />
      <h1 style={style.bold}>DON&apos;T BE A VICTIM, BE A SURVIVOR!</h1>
    </Box>
    <Flex justify="center" wrap={['wrap', 'wrap', 'nowrap']}>
      <div style={{ margin: 'auto' }}>
        <p style={style.test}>
          Download our instructional demonstration video for
          <span style={style.bold}> ONLY $5.00</span>:
        </p>
        <SCButton1 />
      </div>
      <div style={{ margin: 'auto' }}>
        <p style={style.test}>
          Purchase our special Pepper Spray for
          <span style={style.bold}> ONLY $7.75 (Free delivery!)</span>:
        </p>
        <SCButton2 />
      </div>
    </Flex>
    <p style={style.center}>
      <em>
        Purchases can be made with Visa, MasterCard, Discovery, American
        Express, or PayPal.
      </em>
    <br />
      <em>
        You can find the link to the instructional video in the invoice
        email.
      </em>
    </p>
    <div style={{ display: 'block', textAlign: 'center' }}>
      <img
        src={logos}
        alt="logo"
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '40%'
        }}
      />
    </div>
    <br />
    <p style={style.center}>EMAIL: wprotectioninternational@gmail.com</p>
    <br />
    <br />
    <br />
  </Box>
);

const SCButton1 = () => (
  <a
    href="#"
    className="snipcart-add-item"
    data-item-id="1"
    data-item-name="WPSDI Instructional Videos"
    data-item-price="5.00"
    data-item-url="/"
    data-item-description="A set of instructional videos on self-defense for women"
  >
    <ButtonPrimary>Click Here</ButtonPrimary>
  </a>
);

const SCButton2 = () => (
  <a
    href="#"
    className="snipcart-add-item"
    data-item-id="2"
    data-item-name="Pepper Spray"
    data-item-price="7.75"
    data-item-url="/"
    data-item-description="A unique Pepper Spray to defend yourself"
  >
    <ButtonPrimary>Click Here</ButtonPrimary>
  </a>
);

export const pageQuery = graphql`
  query contentQuery {
    allContentJson {
      edges {
        node {
          index {
            title
            subtitle
          }
        }
      }
    }
  }
`;
