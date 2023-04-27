import Footer from "./footer";
import Topbar from "./topbar";

interface Prop {
  element: JSX.Element;
}

export default function Container({ element }: Prop) {
  return (
    <>
      <Topbar />
      <div className="ts-content is-vertically-very-padded">
        <div className="ts-container is-narrow">
          <div className="ts-app-layout is-full">
            <div className="cell is-fluid is-vertical">
              <div className="cell is-fluid">
                {element}
                <div className="ts-space is-big" />
              </div>
              <div className="cell">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
