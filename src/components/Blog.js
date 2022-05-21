import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const PageComponent = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch("github_copilot.md")
        .then((res) => res.text())
        .then((text) => setContent(text));
    }, []);

    return (
        <div className="post">
        <ReactMarkdown children={content} />
        </div>
    );
};