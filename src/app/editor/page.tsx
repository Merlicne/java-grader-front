import CodeEditor from "./codeEditor";


export default function CodeEditorPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700">
            <CodeEditor/>
        </div>
    )
}