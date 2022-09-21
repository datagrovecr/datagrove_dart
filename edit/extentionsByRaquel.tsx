// I have to delet this file
import {javascript} from "@codemirror/lang-javascript";
import {EditorView} from "@codemirror/view";
import {defaultHighlightStyle} from "@codemirror/highlight";
import {bracketMatching} from "@codemirror/language";

export const extentionsByRaquel = [
    bracketMatching(),
    defaultHighlightStyle.fallback,
    javascript(),
];