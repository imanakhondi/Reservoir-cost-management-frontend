import React, { useEffect, useState } from "react";

import utils from "../../utils";
import InputSelectPagination from "../form/InputSelectPagination";
import Svg, { SvgPath } from "../svg";
import { pageItems } from "../../types/options";
import { PAGE_ITEMS } from "../../types";

const TablePagination = ({ pagination, setPagination, onChangePageItems }) => {
  const [tablePagination, setTablePagination] = useState({
    pagesCount: 0,
    pages: [],
  });
  const { pagination: strings } = utils.getLSLocale();

  useEffect(() => {
    let pagesCount = Math.ceil(
      pagination?.count / pagination?.pageItems ?? PAGE_ITEMS.ITEMS_10
    );

    if (pagesCount > 0 && pagination.pageNo > pagesCount) {
      setPagination({ ...pagination, pageNo: 1 });

      return;
    }

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

    pages.sort((a, b) => a - b);
    setTablePagination({ pagesCount, pages });
  }, [pagination]);

  const getPage = (pageNo) => {
    if (pageNo >= 1 && pageNo <= tablePagination.pagesCount) {
      setPagination({ ...pagination, pageNo });
    }
  };

  const prevPage = () => {
    if (pagination.pageNo > 1) {
      setPagination({ ...pagination, pageNo: pagination.pageNo - 1 });
    }
  };

  const nextPage = () => {
    if (pagination.pageNo + 1 <= tablePagination.pagesCount) {
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
              tablePagination.pagesCount > 0 ? tablePagination.pagesCount : 1
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
          className="border border-border-line p-1 rounded flex flex-col justify-center items-center min-w-8 hover:border-primary"
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
        {tablePagination.pages[0] > 1 && (
          <button className="border border-border-line p-1 rounded flex flex-col justify-center items-center min-w-8">
            <Svg
              SvgPath={<SvgPath.SvgThreeDots />}
              width="14"
              height="3"
              className="icon-complex"
              viewBox={`0 0 14 3`}
            />
          </button>
        )}
        {tablePagination.pages?.map((page, index) => (
          <button
            key={index}
            className={`border p-1 rounded flex flex-col justify-center items-center min-w-8 hover:border-primary ${
              page === pagination.pageNo
                ? "border-primary"
                : "border-border-line"
            } ${page === pagination.pageNo ? "text-primary" : ""}`}
            onClick={() => {
              if (page !== pagination.pageNo) {
                getPage(page);
              }
            }}
          >
            {utils.localeDigits(page)}
          </button>
        ))}
        {tablePagination.pages[tablePagination.pages.length - 1] <
          tablePagination.pagesCount && (
          <button className="border border-border-line p-1 rounded flex flex-col justify-center items-center min-w-8">
            <Svg
              SvgPath={<SvgPath.SvgThreeDots />}
              width="14"
              height="3"
              className="icon-complex"
              viewBox={`0 0 14 3`}
            />
          </button>
        )}
        <button
          className="border border-border-line p-1 rounded flex flex-col justify-center items-center min-w-8 hover:border-primary"
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
