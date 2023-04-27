import FooterComponent from "./footer";
import TopbarComponent from "./topbar";

interface Prop {
  element: JSX.Element;
}

export default function ContainerComponent({ element }: Prop) {
  return (
    <>
      <TopbarComponent />
      <div className="ts-content is-vertically-very-padded">
        <div className="ts-container is-narrow">
          <div className="ts-app-layout is-full">
            <div className="cell is-fluid is-vertical">
              <div className="cell is-fluid">
                {element}
                <div className="ts-space is-big" />
              </div>
              <div className="cell">
                <FooterComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
