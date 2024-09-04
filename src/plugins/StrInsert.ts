import {addListToDropdown, Collection, createDropdown, ListDropdownItemDefinition, Plugin, ViewModel} from 'ckeditor5';

interface DropdownItem {
    id: string,
    label: string
}

interface StrInsertConfig {
    label: string;
    title: string;
    getItemsCb(): Promise<DropdownItem[]>
}

export default class StrInsert extends Plugin {

    static get pluginName() {
        return 'StrInsert';
    }

    static get toolbarName() {
        return 'strInsert';
    }

    init() {
        const config = <StrInsertConfig>this.editor.config.get(StrInsert.toolbarName);
        this.editor.ui.componentFactory.add(StrInsert.toolbarName, (locale) => {
            const dropdownView = createDropdown(locale);
            dropdownView.buttonView.set({
                // icon:
                label: config.label || 'Insert String',
                tooltip: config.title || config.label,
                withText: true,
            });

            const items: Collection<ListDropdownItemDefinition> = new Collection();
            if (config.getItemsCb) {
                config.getItemsCb()
                    .then(data => {
                        data.forEach(item => {
                            items.add( {
                                type: 'button',
                                model: new ViewModel({
                                    id: item.id,
                                    withText: true,
                                    label: item.label
                                })
                            } );
                        })
                        addListToDropdown(dropdownView, items);
                    });
            }
            dropdownView.on('execute', (eventInfo) => {
                const source: any = eventInfo.source;
                console.log('StrInsert', source.id, eventInfo);
                this.editor.model.change(writer => {
                    const insertPosition = this.editor.model.document.selection.getFirstPosition();
                    writer.insertText(source.id, insertPosition);
                });
            });
            return dropdownView;
        });
    }
}