import Option from "./Option";

function Options() {
  return (
    <div className="options">
      <Option num="01" screenTarget="overview">
        Overview
      </Option>
      <Option num="02" screenTarget="structure">
        Internal Structure
      </Option>
      <Option num="03" screenTarget="geology">
        Surface Geology
      </Option>
    </div>
  );
}

export default Options;
