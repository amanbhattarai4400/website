import base from "@reflexjs/preset-base"

export default {
  preset: base,
  colors: {
    background: "#F5F5FA",
    muted: "#FFFFFF",
    border: "#DADADA",
    postblock: "#EAEAEF",
    modes: {
      dark: {
        postblock: "#2A2A3C",
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
      bg: "postblock",
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