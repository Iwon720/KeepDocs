import React, { useCallback, useEffect, useRef } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

const TOOLBAR_OPTIONS = [
    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'font': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'align': [] }],
    ['image', 'blockquote', 'code-block'],
];

export default function TextEditor() {
    const wrapperRef = useCallback((wrapper) => {
        if (wrapper == null) return wrapper.innerHTML = '';
        const editor = document.createElement('div');
        wrapper.append(editor);
        new Quill(editor, { theme: 'snow', modules: { toolbar: TOOLBAR_OPTIONS }})
    }, [])
    return <div className='containerTE' ref={wrapperRef}></div>

}
