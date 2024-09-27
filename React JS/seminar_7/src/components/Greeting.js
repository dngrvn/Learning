import { PropTypes } from "prop-types";

export default function Greeting({ name }) {
  return (
    <>
      <p>Hello {name}</p>
    </>
  );
}

Greeting.propTypes = {
  name: PropTypes.string,
};
