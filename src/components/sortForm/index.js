import React from "react";
import "./style.css"

function SortForm(props) {

return (
<div class="mb-3">
          <label>Sort by...</label>
          <select id="sort" class="custom-select" required onChange={(event) => props.onChange(event)}>
            <option value="">None</option>
            <option value="a-z">Name: A - Z</option>
            <option value="z-a">Name: Z - A</option>
          </select>
        </div>
);

}

export default SortForm;