import { PropTypes } from "prop-types";

export default function List({ renderLi, itemList }) {
  return (
    <ul>
      {itemList.map((item, i) =>
        renderLi(item, i, { color: "red", textAlign: "left" })
      )}
    </ul>
  );
}

List.propTypes = {
  renderLi: PropTypes.func,
  itemList: PropTypes.array,
};
