import { PropTypes } from "prop-types";

export default function Box({ children, bordeStyle }) {
  return (
    <div style={{ border: bordeStyle, marginBottom: "10px", width: "600px" }}>
      {children}
    </div>
  );
}

Box.propTypes = {
  children: PropTypes.string,
  bordeStyle: PropTypes.string.isRequired,
};
