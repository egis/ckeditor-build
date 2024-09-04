import { Plugin } from 'ckeditor5';
export default class StrInsert extends Plugin {
    static get pluginName(): string;
    static get toolbarName(): string;
    init(): void;
}
