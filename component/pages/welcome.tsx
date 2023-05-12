import { IntroduceData } from "@/data/introduce.data";
import Link from "next/link";
import ScriptComponent from "../main/script";

export default function WelcomeComponent() {
  return (
    <>
      <ScriptComponent />
      <div className="ts-wrap is-vertical tablet+:u-hidden">
        <Introduce />

        <div className="ts-space" />
      </div>
      <div className="ts-image">
        <img
          className="tablet+:u-hidden"
          src="/welcome/background_mobile.png"
          alt=""
        />
        <img className="mobile:u-hidden" src="/welcome/background.png" alt="" />

        <div className="ts-mask is-secondary is-top">
          <div className="ts-space is-big" />
          <div className="ts-wrap is-vertical">
            <div className="mobile-:u-hidden">
              <Introduce />
            </div>
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

function Introduce() {
  return (
    <>
      <div className="ts-wrap is-vertical">
        <div className="ts-statistic">
          <div className="unit">ARTIST /</div>
          <div className="value">{IntroduceData.name}</div>
        </div>
        <div className="ts-quote is-secondary">
          {IntroduceData.description.map((data, i) => (
            <p key={i}>{data}</p>
          ))}
        </div>
      </div>
    </>
  );
}
function Contact() {
  return (
    <>
      {IntroduceData.contact.twitter && (
        <Link
          className="ts-header is-undecorated"
          href={IntroduceData.contact.twitter.url}
        >
          <i className="ts-icon is-end-spaced bi-twitter" /> Twitter
        </Link>
      )}
      {IntroduceData.contact.twitch && (
        <Link
          className="ts-header is-undecorated"
          href={IntroduceData.contact.twitch.url}
        >
          <i className="ts-icon is-end-spaced bi-twitch" /> Twitch
        </Link>
      )}
      <div className="ts-header is-undecorated">
        <i className="ts-icon is-end-spaced bi-discord" /> 奶加#7343
      </div>
    </>
  );
}
