import FooterComponent from "./main/footer";
import TopbarComponent from "./main/topbar";
import HeadComponent from "./main/head";
import NoticeBarComponent from "./main/notice-bar";

interface Prop {
  title: string;
  element: JSX.Element;
}

export default function ContainerComponent({ title, element }: Prop) {
  return (
    <>
      {title !== "" ?? <HeadComponent title={title} />}
      <TopbarComponent />
      <div className="ts-content is-vertically-padded">
        <div className="ts-container is-narrow">
          <div className="ts-app-layout is-full">
            <div className="cell is-fluid is-vertical">
              <div className="cell is-fluid">
                <NoticeBarComponent />
                {element}
                <div className="ts-space is-large" />
              </div>
              <FooterComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
