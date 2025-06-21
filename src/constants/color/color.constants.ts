export type paletteType = {
  primaryNormal: string;
  primaryAlternative: string;

  backgroundNormal: string;
  backgroundNeutral: string;

  lineNormal: string;
  lineNeutral: string;
  lineAlternative: string;

  fillNormal: string;
  fillNeutral: string;
  fillAlternative: string;
  fillAssistive: string;

  labelNormal: string;
  labelNeutral: string;
  labelAlternative: string;
  labelAssistive: string;
  labelDisabled: string;

  statusNegative: string;
  statusInfo: string;
  statusWarning: string;
  statusPositive: string;
}

export const nokPalette: paletteType = {
  primaryNormal: "#7D46FD",
  primaryAlternative: "rgba(125, 70, 253, 0.75)",

  backgroundNormal: "#262423",
  backgroundNeutral: "#171615",

  lineNormal: "#434343",
  lineAlternative: "#383A3B",
  lineNeutral: "#48494A",

  fillNormal: "#6B6562",
  fillNeutral: "#22252D",
  fillAlternative: "rgba(255, 255, 255, 0.04)",
  fillAssistive: "#040B19",

  labelNormal: "#F5F5F5",
  labelNeutral: "#DCDDDE",
  labelAlternative: "#C4C5C6",
  labelAssistive: "#9B9D9F",
  labelDisabled: "#48494A",

  statusNegative: "#FF334B",
  statusInfo: "#4270ED",
  statusWarning: "#FAD21E",
  statusPositive: "#22BA4F"
}

