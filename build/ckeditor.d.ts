/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor as ClassicEditorBase, AccessibilityHelp, Alignment, Autoformat, AutoImage, AutoLink, Autosave, BlockQuote, Bold, CloudServices, Code, CodeBlock, Essentials, FindAndReplace, FontBackgroundColor, FontColor, FontFamily, FontSize, GeneralHtmlSupport, Heading, Highlight, HorizontalLine, HtmlComment, HtmlEmbed, ImageBlock, ImageCaption, ImageInline, ImageInsert, ImageInsertViaUrl, ImageResize, ImageStyle, ImageTextAlternative, ImageToolbar, ImageUpload, Indent, IndentBlock, Italic, Link, LinkImage, List, ListProperties, Markdown, MediaEmbed, Paragraph, PasteFromMarkdownExperimental, PasteFromOffice, RemoveFormat, SelectAll, Base64UploadAdapter, SpecialCharacters, SpecialCharactersArrows, SpecialCharactersCurrency, SpecialCharactersEssentials, SpecialCharactersLatin, SpecialCharactersMathematical, SpecialCharactersText, Strikethrough, Subscript, Superscript, Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar, TextTransformation, Title, Underline, Undo, MatcherObjectPattern } from "ckeditor5";
import { HeadingOption } from "@ckeditor/ckeditor5-heading/src/headingconfig";
import { LinkDecoratorAutomaticDefinition, LinkDecoratorManualDefinition } from "@ckeditor/ckeditor5-link/src/linkconfig";
import 'ckeditor5/ckeditor5.css';
export default class ClassicEditor extends ClassicEditorBase {
    static builtinPlugins: (typeof AccessibilityHelp | typeof Base64UploadAdapter | typeof Alignment | typeof TextTransformation | typeof Autoformat | typeof Autosave | typeof Superscript | typeof Subscript | typeof Bold | typeof Code | typeof Italic | typeof Strikethrough | typeof Underline | typeof BlockQuote | typeof CloudServices | typeof CodeBlock | typeof SelectAll | typeof Undo | typeof Essentials | typeof FindAndReplace | typeof FontBackgroundColor | typeof FontColor | typeof FontFamily | typeof FontSize | typeof Paragraph | typeof Heading | typeof Title | typeof Highlight | typeof HorizontalLine | typeof HtmlEmbed | typeof GeneralHtmlSupport | typeof HtmlComment | typeof AutoImage | typeof ImageBlock | typeof ImageCaption | typeof ImageInline | typeof ImageInsert | typeof ImageInsertViaUrl | typeof ImageResize | typeof ImageStyle | typeof ImageTextAlternative | typeof ImageToolbar | typeof ImageUpload | typeof Indent | typeof IndentBlock | typeof AutoLink | typeof Link | typeof LinkImage | typeof List | typeof ListProperties | typeof Markdown | typeof PasteFromMarkdownExperimental | typeof MediaEmbed | typeof PasteFromOffice | typeof RemoveFormat | typeof SpecialCharacters | typeof SpecialCharactersText | typeof SpecialCharactersArrows | typeof SpecialCharactersEssentials | typeof SpecialCharactersLatin | typeof SpecialCharactersCurrency | typeof SpecialCharactersMathematical | typeof Table | typeof TableCaption | typeof TableCellProperties | typeof TableColumnResize | typeof TableProperties | typeof TableToolbar)[];
    static defaultConfig: {
        toolbar: {
            items: string[];
            shouldNotGroupWhenFull: boolean;
        };
        fontFamily: {
            supportAllValues: boolean;
        };
        fontSize: {
            options: (string | number)[];
            supportAllValues: boolean;
        };
        heading: {
            options: HeadingOption[];
        };
        htmlSupport: {
            allow: MatcherObjectPattern[];
        };
        image: {
            toolbar: string[];
        };
        initialData: string;
        link: {
            addTargetToExternalLinks: boolean;
            defaultProtocol: string;
            decorators: {
                toggleDownloadable: LinkDecoratorAutomaticDefinition | LinkDecoratorManualDefinition;
            };
        };
        list: {
            properties: {
                styles: boolean;
                startIndex: boolean;
                reversed: boolean;
            };
        };
        title: {
            placeholder: string;
        };
        placeholder: string;
        table: {
            contentToolbar: string[];
        };
        language: string;
    };
}
