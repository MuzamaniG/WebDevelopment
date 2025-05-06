import React from "react"
import ReactMarkdown from "react-markdown"
import ReactDom from "react-dom"

export default function ClaudeRecipe(props) {
    return (
        <section>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>

    )
}