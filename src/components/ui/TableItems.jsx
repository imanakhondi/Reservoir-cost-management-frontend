import React from "react";
import { useSelector } from "react-redux";

import { TableEmptyItems, Loading } from "../";

const TableItems = ({ items, renderHeader, renderItems, colSpan }) => {
  const layoutState = useSelector((state) => state.layoutReducer);

  return (
    <table className={`w-full ${layoutState?.loading ? "opacity-60" : ""}`}>
      <thead>{renderHeader()}</thead>
      <tbody>
        {layoutState?.loading && (
          <tr>
            <td colSpan={colSpan}>
              <Loading style={{ height: "84px" }} />
            </td>
          </tr>
        )}
        {!layoutState?.loading && items?.length === 0 && (
          <TableEmptyItems colSpan={colSpan} />
        )}
        {!layoutState?.loading && items?.length > 0 && renderItems()}
      </tbody>
    </table>
  );
};

export default TableItems;
