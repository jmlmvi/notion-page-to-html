import { Block } from '../../../../data/protocols/blocks';
import { ToHtml } from '../../../../domain/use-cases/to-html';
import { blockToInnerText } from '../../../helpers/block-to-inner-text';

export class CodeBlockToHtml implements ToHtml {
  private readonly _block: Block;

  constructor(block: Block) {
    this._block = block;
  }
// Modification jmh 15/04/2024
//  async convert(): Promise<string> {
//    const languageClass = this._language ? `class="language-${this._language}"` : '';
//
//    return Promise.resolve(
//      `<pre><code ${languageClass}>${blockToInnerText(this._block).replace(/(\s{4}|\t)/g, '  ')}</code></pre>`,
//    );
//  }
async convert(): Promise<string> {
    const languageClass = this._language ? `class="language-${this._language}"` : '';

    // Obtient le texte du bloc et remplace les tabulations par deux espaces.
    // Aucun remplacement supplémentaire pour les retours à la ligne n'est nécessaire avec <pre>.
    const innerText = blockToInnerText(this._block).replace(/(\t)/g, '  ');

    return Promise.resolve(
      `<pre>JMHTEST<code ${languageClass}>${innerText}</code></pre>`
    );
}
// Fin Modification jmh 15/04/2024

  private get _language(): string {
    return this._block.properties?.language?.toLowerCase().replace(/ /g, '');
  }
}
