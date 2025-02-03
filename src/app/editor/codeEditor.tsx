"use client"
import { useRef } from "react";
import Editor from "@monaco-editor/react";
import { editor as monacoEditor } from "monaco-editor";

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

    const code = `
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        }
}`;

    return (
        <>
            <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                onClick={showValue}
            >
                Show Value
            </button>
            <div className="border-gray-300 dark:border-gray-700">

                <Editor
                    height="90vh"
                    width="90vw"
                    defaultLanguage="java"
                    theme="vs-dark"
                    defaultValue={code}
                    onMount={handleEditorDidMount}
                    options={{
                        formatOnType: true
                    }}
                />
            </div>
        </>
    );
}

