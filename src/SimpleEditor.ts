/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import {
    ClassicEditor as ClassicEditorBase,
    Essentials, PastePlainText, Paragraph, AccessibilityHelp,
    Undo, SelectAll
} from "ckeditor5";



export default class SimpleEditor extends ClassicEditorBase {
    public static builtinPlugins = [
        AccessibilityHelp,
        Essentials,
        PastePlainText,
        Paragraph,
        SelectAll,      // required for Essentials
        Undo            // required for Essentials
    ];

    public static defaultConfig = {
        toolbar: null,
        placeholder: ' ',		// remove placeholder default text
        language: 'en'
    };
}
