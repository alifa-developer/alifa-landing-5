import { ReactNode } from "react";

export interface LabelAndValue<T = string> {
  label: string;
  value: T;
}


export interface LabelAndValueCurriculumId<T = string> {
  label: string;
  value: T;
  curriculumId:string;
}

export type ChildrenProp = Readonly<{
  children: ReactNode;
}>;

export interface Range<T = number> {
  min: T;
  max: T;
}

export type SelectedLabelAndValue = LabelAndValue & { isSelected: boolean };
export type SelectedLabelAndValueCurriculum = LabelAndValueCurriculumId & { isSelected: boolean };
export interface Pagination {
  totalCount: number;
  currentPage: number;
  currentPageTotalCount: number;
  hasNext: boolean;
}

export interface PageProp {
  searchParams?: {
    page: number;
  };
}

export type ColorCode = `#${string}`;
