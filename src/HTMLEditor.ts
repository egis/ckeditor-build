/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import {
	ClassicEditor as ClassicEditorBase,
	AccessibilityHelp,
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	Autosave,
	BlockQuote,
	Bold,
	CloudServices,
	Code,
	CodeBlock,
	Essentials,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	GeneralHtmlSupport,
	Heading,
	Highlight,
	HorizontalLine,
	HtmlComment,
	HtmlEmbed,
	ImageBlock,
	ImageCaption,
	ImageInline,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	ListProperties,
	MediaEmbed,
	Paragraph,
	PasteFromMarkdownExperimental,
	PasteFromOffice,
	RemoveFormat,
	SelectAll,
	Base64UploadAdapter,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Subscript,
	Superscript,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextTransformation,
	Underline,
	Undo,
	MatcherObjectPattern
} from "ckeditor5";

import {HeadingOption} from "@ckeditor/ckeditor5-heading/src/headingconfig";
import {LinkDecoratorAutomaticDefinition, LinkDecoratorManualDefinition} from "@ckeditor/ckeditor5-link/src/linkconfig";

export default class HTMLEditor extends ClassicEditorBase {
	public static builtinPlugins = [
		AccessibilityHelp,	//"plugin":"AccessibilityHelp","requiredBy":"Essentials"
		Alignment,
		Autoformat,
		AutoImage,
		AutoLink,	//"plugin":"AutoLink","requiredBy":"Link"
		Autosave,
		BlockQuote,
		Bold,
		CloudServices,
		Code,
		CodeBlock,
		Essentials,
		FindAndReplace,
		FontBackgroundColor,
		FontColor,
		FontFamily,
		FontSize,
		GeneralHtmlSupport,
		Heading,
		Highlight,
		HorizontalLine,
		HtmlComment,
		HtmlEmbed,
		ImageBlock,
		ImageCaption,
		ImageInline,
		ImageInsert,
		ImageInsertViaUrl,
		ImageResize,
		ImageStyle,
		ImageTextAlternative,
		ImageToolbar,
		ImageUpload,
		Indent,
		IndentBlock,
		Italic,
		Link,
		LinkImage,
		List,
		ListProperties,
		MediaEmbed,
		Paragraph,
		PasteFromMarkdownExperimental,
		PasteFromOffice,
		RemoveFormat,
		SelectAll,
		Base64UploadAdapter,
		SpecialCharacters,
		SpecialCharactersArrows,
		SpecialCharactersCurrency,
		SpecialCharactersEssentials,
		SpecialCharactersLatin,
		SpecialCharactersMathematical,
		SpecialCharactersText,
		Strikethrough,
		Subscript,
		Superscript,
		Table,
		TableCaption,
		TableCellProperties,
		TableColumnResize,
		TableProperties,
		TableToolbar,
		TextTransformation,
		Underline,
		Undo
	];

	public static defaultConfig = {
		toolbar: {
			items: [
				'undo',
				'redo',
				'|',
				'findAndReplace',
				'selectAll',
				'|',
				'heading',
				'|',
				'fontSize',
				'fontFamily',
				'fontColor',
				'fontBackgroundColor',
				'|',
				'bold',
				'italic',
				'underline',
				'strikethrough',
				'subscript',
				'superscript',
				'code',
				'removeFormat',
				'|',
				'specialCharacters',
				'horizontalLine',
				'link',
				'insertImage',
				'mediaEmbed',
				'insertTable',
				'highlight',
				'blockQuote',
				'codeBlock',
				'htmlEmbed',
				'|',
				'alignment',
				'|',
				'bulletedList',
				'numberedList',
				'outdent',
				'indent',
				'|',
				'accessibilityHelp'
			],
			shouldNotGroupWhenFull: false
		},
		fontFamily: {
			supportAllValues: true
		},
		fontSize: {
			options: [8, 9, 10, 11, 12, 'default', 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72],
			supportAllValues: true
		},
		heading: {
			options: [
				<HeadingOption> {
					model: 'paragraph',
					title: 'Paragraph',
					class: 'ck-heading_paragraph'
				},
				<HeadingOption> {
					model: 'heading1',
					view: 'h1',
					title: 'Heading 1',
					class: 'ck-heading_heading1'
				},
				<HeadingOption> {
					model: 'heading2',
					view: 'h2',
					title: 'Heading 2',
					class: 'ck-heading_heading2'
				},
				<HeadingOption> {
					model: 'heading3',
					view: 'h3',
					title: 'Heading 3',
					class: 'ck-heading_heading3'
				},
				<HeadingOption> {
					model: 'heading4',
					view: 'h4',
					title: 'Heading 4',
					class: 'ck-heading_heading4'
				},
				<HeadingOption> {
					model: 'heading5',
					view: 'h5',
					title: 'Heading 5',
					class: 'ck-heading_heading5'
				},
				<HeadingOption> {
					model: 'heading6',
					view: 'h6',
					title: 'Heading 6',
					class: 'ck-heading_heading6'
				}
			]
		},
		htmlSupport: {
			allow: [
				<MatcherObjectPattern> {
					name: /^.*$/,
					styles: true,
					attributes: true,
					classes: true
				}
			]
		},
		image: {
			toolbar: [
				'toggleImageCaption',
				'imageTextAlternative',
				'|',
				'imageStyle:inline',
				'imageStyle:wrapText',
				'imageStyle:breakText',
				'|',
				'resizeImage'
			]
		},
		initialData: '',
		link: {
			addTargetToExternalLinks: true,
			defaultProtocol: 'https://',
			decorators: {
				toggleDownloadable: <LinkDecoratorAutomaticDefinition | LinkDecoratorManualDefinition> {
					mode: 'manual',
					label: 'Downloadable',
					attributes: {
						download: 'file'
					}
				}
			}
		},
		list: {
			properties: {
				styles: true,
				startIndex: true,
				reversed: true
			}
		},
		placeholder: ' ',		// remove placeholder default text
		table: {
			contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
		},
		// This value must be kept in sync with the language defined in webpack.config.js.
		language: 'en'
	};
}
