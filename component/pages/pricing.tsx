import Image from "next/image";

export default function Pricing() {
  return (
    <>
      <div className="ts-box is-horizontal">
        <div className="ts-image is-large is-covered">
          <Image src="/image.png" alt={""} width={500} height={300} />
        </div>
        <div className="ts-content">
          <div className="ts-header is-big">插圖</div>
          <p className="ts-text is-medium">{`${"一些介紹......."}`}</p>
          <div className="ts-content position-absolute bottom-0 end-0">
            <div className="ts-text is-massive">$ 500</div>
          </div>
        </div>
      </div>
      <div className="ts-space" />
      <div className="ts-box is-horizontal">
        <div className="ts-image is-large is-covered">
          <Image src="/image.png" alt={""} width={500} height={300} />
        </div>
        <div className="ts-content">
          <div className="ts-header is-big">貼圖</div>
          <p className="ts-text is-medium">{`${"一些介紹......."}`}</p>
          <div className="ts-content position-absolute bottom-0 end-0">
            <div className="ts-text is-massive">$ 500</div>
          </div>
        </div>
      </div>
    </>
  );
}
