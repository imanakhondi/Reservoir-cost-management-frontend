import React from "react";

import Svg, { SvgPath } from "../svg";
import utils from "../../utils";

const TableEmptyItems = ({ colSpan }) => {
  const { general } = utils.getLSLocale();

  return (
    <tr>
      <td colSpan={colSpan}>
        <div className="flex flex-col justify-center items-center gap-2 my-16 w-full h-28">
          <Svg
            SvgPath={<SvgPath.SvgOpenBox />}
            width="84"
            height="84"
            className="icon-complex"
            viewBox={"0 0 84 84"}
          />
          <span className="text-xs text-subline">{general.noData}</span>
        </div>
      </td>
    </tr>
  );
};

export default TableEmptyItems;
