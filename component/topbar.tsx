import { ConfigData } from "@/data/config.data";
import { IntroduceData } from "@/data/introduce.data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function TopbarComponent() {
  const currentBaseRoute = useRouter().asPath.split("/")[1] ?? null;
  const basePath = "/";
  return (
    <>
      <div className="ts-content is-fitted">
        <div className="ts-container is-narrow">
          <div className="ts-row">
            <div className="column">
              <div className="ts-tab is-large is-start-aligned">
                <Link className="item" href={"/"}>
                  {ConfigData.logo.image && (
                    <div className=" ts-image is-end-spaced is-mini-height">
                      <img src={ConfigData.logo.image} alt="" />
                    </div>
                  )}
                  {ConfigData.logo.text && (
                    <div className="ts-title">{ConfigData.logo.text}</div>
                  )}
                </Link>
              </div>
            </div>
            <div className="column is-fluid">
              <div className="ts-tab is-large is-center-aligned is-accent mobile:u-hidden">
                {ConfigData.baseRoute.map((data, i) => (
                  <Link
                    key={i}
                    className={`item ${
                      currentBaseRoute === data.link && "is-active"
                    }`}
                    href={basePath + data.link}
                  >
                    {data.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="column">
              <div className="ts-tab is-large is-end-aligned">
                {IntroduceData.contact.facebook?.showOnTopbar && (
                  <a className="item" href={IntroduceData.contact.facebook.url}>
                    <i className="ts-icon bi-facebook" />
                  </a>
                )}
                {IntroduceData.contact.instagram?.showOnTopbar && (
                  <a
                    className="item"
                    href={IntroduceData.contact.instagram.url}
                  >
                    <i className="ts-icon bi-instagram" />
                  </a>
                )}
                {IntroduceData.contact.twitter?.showOnTopbar && (
                  <a className="item" href={IntroduceData.contact.twitter.url}>
                    <i className="ts-icon bi-twitter" />
                  </a>
                )}
                {IntroduceData.contact.youtube?.showOnTopbar && (
                  <a className="item" href={IntroduceData.contact.youtube.url}>
                    <i className="ts-icon bi-youtube" />
                  </a>
                )}
                {IntroduceData.contact.twitch?.showOnTopbar && (
                  <a className="item" href={IntroduceData.contact.twitch.url}>
                    <i className="ts-icon bi-twitch" />
                  </a>
                )}
                {IntroduceData.contact.mail?.showOnTopbar && (
                  <a
                    className="item"
                    href={"mailto:${IntroduceData.contact.mail.url}"}
                  >
                    <i className="ts-icon bi-envelope" />
                  </a>
                )}
                <a className="item" href="https://www.twitch.tv/nanakyuu301">
                  <i className="ts-icon bi-facebook" />
                </a>
                <a className="item" href="https://twitter.com/hellojoyin">
                  <i className="ts-icon bi-instagram" />
                </a>
                <button className="item tablet+:u-hidden" data-dropdown="links">
                  <i className="ts-icon bi-list" />
                </button>
                <div
                  className="ts-dropdown is-bottom tablet+:u-hidden"
                  data-name="links"
                  data-position="bottom-end"
                  style={{ maxWidth: "500px" }}
                >
                  {ConfigData.baseRoute.map((data, i) => (
                    <Link className="item" href={data.link} key={i}>
                      <span className="ts-text is-big">{data.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ts-divider"></div>
      </div>
    </>
  );
}
