import { defineMessages } from "react-intl";

export const messages = defineMessages({
  averageSpeedLabel: {
    id: "metric.averageSpeed.label",
    description: "Label name.",
    defaultMessage: "Average typing speed",
  },
  averageSpeedTitle: {
    id: "metric.averageSpeed.title",
    description: "Label title.",
    defaultMessage:
      "Average typing speed in all lessons ({speedUnitName}). The more, the better.",
  },
  bestSpeedLabel: {
    id: "metric.bestSpeed.label",
    description: "Label name.",
    defaultMessage: "Best typing speed",
  },
  bestSpeedTitle: {
    id: "metric.bestSpeed.title",
    description: "Label title.",
    defaultMessage:
      "Best typing speed in all lessons ({speedUnitName}). The more, the better.",
  },
  lastSpeedLabel: {
    id: "metric.lastSpeed.label",
    description: "Label name.",
    defaultMessage: "Last typing speed",
  },
  lastSpeedTitle: {
    id: "metric.lastSpeed.title",
    description: "Label title.",
    defaultMessage:
      "Typing speed in the last lesson ({speedUnitName}). The more, the better.",
  },
  confidenceLevelLabel: {
    id: "metric.confidenceLevel.label",
    description: "Label name.",
    defaultMessage: "Confidence level",
  },
  confidenceLevelTitle: {
    id: "metric.confidenceLevel.title",
    description: "Label title.",
    defaultMessage: "How close you are to unlocking this key.",
  },
  learningRateLabel: {
    id: "metric.learningRate.label",
    description: "Label name.",
    defaultMessage: "Learning rate",
  },
  learningRateTitle: {
    id: "metric.learningRate.title",
    description: "Label title.",
    defaultMessage: "How your typing speed is changing with each lesson.",
  },
  learningRateValue: {
    id: "metric.learningRate.value",
    description: "Value format.",
    defaultMessage: "{learningRate} per lesson",
  },
  uncertainValue: {
    id: "metric.uncertainValue",
    description: "Value text.",
    defaultMessage: "Uncertain",
  },
  notCalibratedText: {
    id: "lesson.notCalibratedText",
    description: "Panel text.",
    defaultMessage: "Not calibrated, need more samples",
  },
  characterName: {
    id: "lesson.characterName",
    description: "Character details text.",
    defaultMessage: "Character ''{name}''",
  },
  boostedKeyText: {
    id: "lesson.boostedKeyText",
    description: "Character details text.",
    defaultMessage: "A key with boosted frequency.",
  },
  forcedKeyText: {
    id: "lesson.forcedKeyText",
    description: "Character details text.",
    defaultMessage: "A manually added key.",
  },
  wpmName: {
    id: "speedUnit.wpm.name",
    description: "Widget label.",
    defaultMessage: "Words per minute",
  },
  wpmDescription: {
    id: "speedUnit.wpm.description",
    description: "Widget title.",
    defaultMessage: "Measure typing speed in words per minute.",
  },
  cpmName: {
    id: "speedUnit.cpm.name",
    description: "Widget label.",
    defaultMessage: "Characters per minute",
  },
  cpmDescription: {
    id: "speedUnit.cpm.description",
    description: "Widget title.",
    defaultMessage: "Measure typing speed in characters per minute.",
  },
  cpsName: {
    id: "speedUnit.cps.name",
    description: "Widget label.",
    defaultMessage: "Characters per second",
  },
  cpsDescription: {
    id: "speedUnit.cps.description",
    description: "Widget title.",
    defaultMessage: "Measure typing speed in characters per second.",
  },
});
