import { TopbarData } from "@/data/topbar.data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function TopbarComponent() {
  const currentBaseRoute = useRouter().asPath.split("/")[1] ?? null;
  return (
    <>
      <div className="ts-content is-fitted">
        <div className="ts-container is-narrow">
          <div className="ts-row">
            <div className="column">
              <div className="ts-tab is-large is-start-aligned">
                <Link className="item" href={"/"}>
                  <div className="ts-image is-end-spaced">
                    <Image src="/image.png" alt={""} width={35} height={35} />
                  </div>
                  奶加
                </Link>
              </div>
            </div>
            <div className="column is-fluid">
              <div className="ts-tab is-large is-center-aligned is-accent mobile:u-hidden">
                {TopbarData.map((data, i) => (
                  <Link
                    key={i}
                    className={`item ${
                      currentBaseRoute === data.link.split("/")[1]
                        ? "is-active"
                        : ""
                    }`}
                    href={data.link}
                  >
                    {data.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="column">
              <div className="ts-tab is-large is-end-aligned">
                <a className="item" href="https://www.twitch.tv/nanakyuu301">
                  <i className="ts-icon bi-twitch" />
                </a>
                <a className="item" href="https://twitter.com/hellojoyin">
                  <i className="ts-icon bi-twitter" />
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
                  {TopbarData.map((data, i) => (
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
