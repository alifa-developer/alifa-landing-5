import { LabelAndValue, LabelAndValueCurriculumId, SelectedLabelAndValue, SelectedLabelAndValueCurriculum } from "@/types/Common";

export function arrayLast<T>(array: Array<T>) {
  return array[array.length - 1];
}

export function range(size: number, startAt = 1) {
  return Array(size)
    .fill(0)
    .map((v, i) => i + startAt);
}

export function addOrRemove<T>(arr: Array<T>, el: T, fn?: (item: T) => boolean) {
  const idx = fn ? arr.findIndex(fn) : arr.indexOf(el);
  if (idx >= 0) {
    arr.splice(idx, 1);
  } else {
    arr.push(el);
  }
  return [...arr];
}

export function remove<T>(arr: Array<T>, el?: T, fn?: (item: T) => boolean) {
  const idx = fn ? arr.findIndex(fn) : arr.indexOf(el!);

  if (idx >= 0) {
    arr.splice(idx, 1);
  }

  return [...arr];
}

export function setSelectedStateInLabelValueArray(
  all: LabelAndValue[],
  selected: LabelAndValue[]
): SelectedLabelAndValue[] {
  const selectedMap: Record<string, boolean> = selected.reduce((acc, curr) => {
    return {
      ...acc,
      [curr.value]: true,
    };
  }, {});

  return all.map((item) => {
    return {
      ...item,
      isSelected: selectedMap[item.value] ?? false,
    };
  });
}

export function setSelectedStateInLabelValueCurriculumIDArray(
  all: LabelAndValueCurriculumId[],
  selected: LabelAndValueCurriculumId[]
): SelectedLabelAndValueCurriculum[] {
  const selectedMap: Record<string, boolean> = selected.reduce((acc, curr) => {
    return {
      ...acc,
      [curr.value]: true,
    };
  }, {});

  return all.map((item) => {
    return {
      ...item,
      isSelected: selectedMap[item.value] ?? false,
    };
  });
}

