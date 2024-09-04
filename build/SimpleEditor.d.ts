/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor as ClassicEditorBase, Essentials, PastePlainText, Paragraph, AccessibilityHelp, Undo, SelectAll } from "ckeditor5";
export default class SimpleEditor extends ClassicEditorBase {
    static builtinPlugins: (typeof AccessibilityHelp | typeof PastePlainText | typeof SelectAll | typeof Undo | typeof Essentials | typeof Paragraph)[];
    static defaultConfig: {
        toolbar: any;
        placeholder: string;
        language: string;
    };
}
