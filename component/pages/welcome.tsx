import { ConfigData } from "@/data/config.data";
import { IntroduceData } from "@/data/introduce.data";
import Link from "next/link";

export default function WelcomeComponent() {
  return (
    <>
      <div className="ts-wrap is-vertical tablet+:u-hidden">
        <Introduce />
        <NoCommission />
      </div>
      <div className="ts-image">
        <img
          className="tablet+:u-hidden"
          src="/welcome/background_mobile.webp"
          alt=""
        />
        <img
          className="mobile:u-hidden"
          src="/welcome/background.webp"
          alt=""
        />

        <div className="ts-mask is-secondary is-top">
          <div className="ts-space is-big" />
          <div className="ts-wrap is-vertical">
            <div className="mobile-:u-hidden">
              <Introduce />
            </div>
            <Contact />
          </div>
        </div>
        <div className="ts-mask is-secondary is-bottom mobile:u-hidden">
          <NoCommission />
        </div>
      </div>
    </>
  );
}

function Introduce() {
  return (
    <>
      <div className="ts-wrap is-vertical">
        <div className="ts-image is-small">
          <img src={IntroduceData.logo} alt={""} />
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
      {IntroduceData.contact.twitch && (
        <div className="ts-header is-undecorated">
          <i className="ts-icon is-end-spaced bi-discord" />
          {IntroduceData.contact.discord}
        </div>
      )}
    </>
  );
}
function NoCommission() {
  return (
    <>
      {IntroduceData.stop_commission && (
        <div
          className="ts-box is-collapsed ts-content is-dense"
          style={{ color: "var(--ts-negative-800)" }}
        >
          <div className="ts-header">暫時不接受委託</div>
        </div>
      )}
    </>
  );
}
