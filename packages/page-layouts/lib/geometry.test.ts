import test from "ava";
import {
  bottomRowKeys,
  digitRowKeys,
  homeRowKeys,
  leftHandKeys,
  rightHandKeys,
  topRowKeys,
} from "./geometry.ts";

test("geometry", (t) => {
  const emptySet = new Set();

  t.deepEqual(
    new Set(
      [...digitRowKeys, ...topRowKeys, ...homeRowKeys, ...bottomRowKeys].sort(),
    ),
    new Set([...leftHandKeys, ...rightHandKeys].sort()),
  );

  t.deepEqual(intersection(digitRowKeys, topRowKeys), emptySet);
  t.deepEqual(intersection(digitRowKeys, homeRowKeys), emptySet);
  t.deepEqual(intersection(digitRowKeys, bottomRowKeys), emptySet);
  t.deepEqual(intersection(topRowKeys, homeRowKeys), emptySet);
  t.deepEqual(intersection(topRowKeys, bottomRowKeys), emptySet);
  t.deepEqual(intersection(homeRowKeys, bottomRowKeys), emptySet);
  t.deepEqual(intersection(leftHandKeys, rightHandKeys), emptySet);
});

function intersection<T>(a: ReadonlySet<T>, b: ReadonlySet<T>): Set<T> {
  const result = new Set<T>();
  for (const value of a) {
    if (b.has(value)) {
      result.add(value);
    }
  }
  return result;
}
