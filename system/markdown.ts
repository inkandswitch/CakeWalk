// Markdown
// Here, we initialize and configure the markdown renderer.

import MarkdownIt from "markdown-it"

export const Markdown = MarkdownIt({ html: true, typographer: true })
