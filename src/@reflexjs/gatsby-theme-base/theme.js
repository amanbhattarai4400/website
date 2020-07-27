import base from "@reflexjs/preset-base"

export default {
  preset: base,
  colors: {
    postblock: "#EBECED",
    modes: {
      dark: {
        postblock: "#1B1123",
      },
    },
  },
  styles: {
    root: {
      fontSize: ["lg", "xl"],
    },
    inlineCode: {
      fontFamily: "monospace",
      color: "primary",
      bg: "muted",
      p: "1",
      fontSize: ["md","lg"],
    },
    a: {
      textDecoration: "underline",
      textUnderlineOffset: "3px",
    },
  },
  blockquote: {
    bg: "muted",
    p: 1,
    pl: 5,
    ml: 0,
    width: "full",
    borderLeft: "5px solid",
    borderColor: "primary",
    borderRadius: "10px",
    fontStyle: "italic",
    lineHeight: "tight",
    fontSize: "lg",
  }
}