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
                    <Image src="/image.png" alt={""} width={53} height={35} />
                  </div>
                  奶加
                </Link>
              </div>
            </div>
            <div className="column is-fluid">
              <div className="ts-tab is-large is-center-aligned is-accent">
                {TopbarData.map((topbar) => (
                  <Link
                    key={topbar.link}
                    className={`item ${
                      currentBaseRoute === topbar.link.split("/")[1]
                        ? "is-active"
                        : ""
                    }`}
                    href={topbar.link}
                  >
                    {topbar.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="column">
              <div className="ts-tab is-large is-end-aligned">
                <a className="item" href="https://www.twitch.tv/nanakyuu301">
                  <span className="ts-icon is-twitch-icon"></span>
                </a>
                <a className="item" href="https://twitter.com/hellojoyin">
                  <span className="ts-icon is-twitter-icon"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ts-divider"></div>
      </div>
    </>
  );
}
