import React, {useState} from 'react';
import {Editor, EditorState } from 'draft-js';
import './RTE.css';

const RTE = (props) => {
	const [editorState, setEditorState] = useState(
		() => EditorState.createEmpty(),
		)
  return (
    <div>
    	<button id='bold'>B</button>
    	<button id='italic'>I</button>
    	<button id='underline'>U</button>
    	<Editor editorState={editorState} onChange={setEditorState} />
    </div>
  )
}

export default RTE;