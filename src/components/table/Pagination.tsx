import {
  Pagination as PaginationCore,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React from "react";
import { Pagination as PaginationT } from "@/types/Common";
import { range } from "@/utils/ArrayUtils";

interface Props {
  pagination: PaginationT;
  basePath: string;
  perPage?: number;
}

function Pagination({ pagination, basePath, perPage = 12 }: Readonly<Props>) {
  const {totalCount, currentPage, hasNext } = pagination;
  const lastPage = Math.ceil(totalCount / perPage);

  const getFirstLength = () => {
    if (currentPage < 3) return 3;
    if (currentPage === 3) return 4;
    return 1;
  };

  const showMiddleNumbers = () => {
    return !(currentPage <= 3 || currentPage >= lastPage - 2);
  };

  const getLastLength = () => {
    if (currentPage === lastPage - 2) return 4;
    if (currentPage > lastPage - 2) return 3;
    return 1;
  };

  const getFirstRange = () => {
    return range(getFirstLength());
  };
  const getLastRange = () => {
    const length = getLastLength();

    return range(length, lastPage - length + 1);
  };

  const getIthPage = (i: number) => {
    return (
      <PaginationItem key={i}>
        <PaginationLink
          href={`${basePath}?page=${i}`}
          isActive={currentPage + 1 == i}
        >
          {i}
        </PaginationLink>
      </PaginationItem>
    );
  };

  const prevUrl = currentPage > 0 ? `${basePath}?page=${currentPage}` : "#";
  const nextUrl =
    currentPage < lastPage ? `${basePath}?page=${currentPage + 2}` : "#";

  return (
    <PaginationCore>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={prevUrl} disabled={currentPage == 0} />
        </PaginationItem>

        {lastPage < 7 && range(lastPage).map((i) => getIthPage(i))}

        {lastPage >= 7 && (
          <>
            {getFirstRange().map((i) => getIthPage(i))}

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>

            {showMiddleNumbers() && (
              <>
                {range(3, currentPage - 1).map((i) => getIthPage(i))}
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              </>
            )}

            {getLastRange().map((i) => getIthPage(i))}
          </>
        )}

        <PaginationItem>
          <PaginationNext href={nextUrl} disabled={!hasNext} />
        </PaginationItem>
      </PaginationContent>
    </PaginationCore>
  );
}

export default Pagination;
