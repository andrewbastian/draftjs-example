import React, {useState} from 'react';
import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';
import createToolbarPlugin from '@draft-js-plugins/static-toolbar';
import rteStyles from './rteStyles.css';

const text = ''
const staticToolbar = createToolbarPlugin()
const {Toolbar} = staticToolbar
const plugins= [staticToolbar]

const RTE = (props) => {

	const [editorState, setEditorState] = useState(
		() => createEditorStateWithText(text),
		)
	const onFocus = (e)=> {
		e.target.focus()
	}
  return (
  		
    	<div className={rteStyles.editor} onClick={onFocus}>

    	

    	<Editor 
    	editorState={editorState} 
    	onChange={setEditorState} 
    	plugins={plugins}
    	ref={rteStyles.editor}
    	/>
    	<div className="toolbar">
			<Toolbar/>
			{/*<button style={{fontSize: '11px', height:'24px'}}>Save</button>*/}
    	</div>
    </div>
  )
}

export default RTE;