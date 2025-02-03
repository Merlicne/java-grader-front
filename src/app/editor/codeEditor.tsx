"use client"
import { useRef } from "react";
import Editor from "@monaco-editor/react";
import { editor as monacoEditor} from "monaco-editor";

export default function CodeEditor() {

    const editorRef = useRef<monacoEditor.IStandaloneCodeEditor | null>(null);

    function handleEditorDidMount(editor: monacoEditor.IStandaloneCodeEditor) {
        editorRef.current = editor;
    }

    function showValue() {
        if (editorRef.current) {
            alert(editorRef.current.getValue());
        }
    }

    const code = `public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello, World!");
        }
}`;

    return (
        <>
            <button onClick={showValue}>Show value</button>
            <Editor
                height="100vh"
                width="100vw"
                defaultLanguage="java"
                theme="vs-dark"
                defaultValue={code}
                onMount={handleEditorDidMount}
                options={{
                    formatOnType: true,
                }}
            />
        </>
    );
}