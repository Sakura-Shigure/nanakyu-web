export default function Error404Component() {
  return (
    <>
      <div className="ts-content is-tertiary is-vertically-very-padded is-rounded">
        <div className="ts-center">
          <div className="ts-space is-large"></div>
          <div className="ts-icon is-disabled is-heading is-circle-exclamation-icon"></div>
          <div className="ts-space"></div>
          <div className="ts-header is-secondary">404 NOT FOUND</div>
          <div className="ts-text is-secondary">此頁面不存在</div>
          <div className="ts-space is-large"></div>
        </div>
      </div>
    </>
  );
}
