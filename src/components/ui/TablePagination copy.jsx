import React, { useCallback, useState } from "react";

import utils from "../../utils";
import InputSelectPagination from "../form/InputSelectPagination";
import Svg, { SvgPath } from "../svg";
import { pageItems } from "../../types/options";
import { PAGE_ITEMS } from "../../types";

const TablePagination = ({ pagination, setPagination, onChangePageItems }) => {
  const [parameters, setParameters] = useState({ pagesCount: 0, pages: [] });
  const { pagination: strings } = utils.getLSLocale();

  useCallback(() => {
    let pagesCount = Math.ceil(
      pagination?.count / pagination?.pageItems ?? PAGE_ITEMS.ITEMS_10
    );
    let pages = [pagination?.pageNo];

    for (
      let i = pagination?.pageNo - 1;
      i >= 1 && i >= pagination?.pageNo - 2;
      i--
    ) {
      pages.push(i);
    }

    for (
      let i = pagination?.pageNo + 1;
      i <= pagesCount && i <= pagination?.pageNo + 2;
      i++
    ) {
      pages.push(i);
    }

    pages.sort();
    setParameters({ pagesCount, pages });
  }, [pagination]);

  const getPage = (pageNo) => {
    if (pageNo >= 1 && pageNo < parameters.pagesCount) {
      setPagination({ ...pagination, pageNo });
    }
  };

  const prevPage = () => {
    if (pagination.pageNo > 1) {
      setPagination({ ...pagination, pageNo: pagination.pageNo - 1 });
    }
  };

  const nextPage = () => {
    if (
      parameters.pages?.length > 0 &&
      pagination.pageNo < parameters.pages[parameters.pages.length - 1]
    ) {
      setPagination({ ...pagination, pageNo: pagination.pageNo + 1 });
    }
  };

  return (
    <div className="flex flex-row justify-between items-center my-4 text-sm text-subline">
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-row gap-1">
          <span>{strings.pageText1}</span>
          <span>{utils.localeDigits(pagination.pageNo)}</span>
          <span>{strings.pageText2}</span>
          <span>
            {utils.localeDigits(
              parameters.pagesCount > 0 ? parameters.pagesCount : 1
            )}
          </span>
          <span>{strings.pageText1}</span>
        </div>
        <InputSelectPagination
          field="pageItems"
          options={pageItems}
          defaultValue={pagination?.pageItems ?? PAGE_ITEMS.ITEMS_10}
          onChange={onChangePageItems}
        />
      </div>
      <div className="flex flex-row-reverse gap-2">
        <button
          className="border border-border-line p-1 rounded flex flex-col justify-center items-center min-w-8 cursor-pointer hover:border-primary"
          onClick={prevPage}
        >
          <Svg
            SvgPath={<SvgPath.SvgChevronDown />}
            width="16"
            height="16"
            className="icon rotate-90"
            viewBox={`0 0 24 24`}
          />
        </button>
        <button className="border border-border-line p-1 rounded flex flex-col justify-center items-center min-w-8 cursor-pointer hover:border-primary">
          <Svg
            SvgPath={<SvgPath.SvgThreeDots />}
            width="14"
            height="3"
            className="icon-complex"
            viewBox={`0 0 14 3`}
          />
        </button>
        <button className="border border-border-line p-1 rounded flex flex-col justify-center items-center min-w-8 cursor-pointer hover:border-primary">
          {utils.localeDigits(1)}
        </button>
        <button className="border border-primary text-primary p-1 rounded flex flex-col justify-center items-center min-w-8 cursor-pointer">
          {utils.localeDigits(2)}
        </button>
        <button
          className="border border-border-line p-1 rounded flex flex-col justify-center items-center min-w-8 cursor-pointer hover:border-primary"
          onClick={nextPage}
        >
          <Svg
            SvgPath={<SvgPath.SvgChevronDown />}
            width="16"
            height="16"
            className="icon -rotate-90"
            viewBox={`0 0 24 24`}
          />
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
