import { Block } from '../../../../data/protocols/blocks';
import { ToHtml } from '../../../../domain/use-cases/to-html';
import { blockToInnerText } from '../../../helpers/block-to-inner-text';
import hljs from '../../../../config/highlightConfig.ts';


export class CodeBlockToHtml implements ToHtml {
  private readonly _block: Block;

  constructor(block: Block) {
    this._block = block;
  }
  async convert(): Promise<string> {
    const language = this._language ? this._language : 'plaintext';  // Fallback au texte brut si pas de langue spécifiée
    const languageClass = `language-${language}`;

    // Obtenir le texte du bloc et remplacer les tabulations par deux espaces
    const code = blockToInnerText(this._block).replace(/(\s{4}|\t)/g, '  ');

    // Appliquer la coloration syntaxique
    const highlightedCode = hljs.highlight(code, { language }).value;

    // Retourner le code HTML formaté
    return Promise.resolve(
        `<pre><code class="${languageClass}">${highlightedCode}</code></pre>`
    );
}
//  async convert(): Promise<string> {
//    const languageClass = this._language ? `class="language-${this._language}"` : '';
//
//    return Promise.resolve(
//      `<pre><code ${languageClass}>${blockToInnerText(this._block).replace(/(\s{4}|\t)/g, '  ')}</code></pre>`,
//    );
//  }

  private get _language(): string {
    return this._block.properties?.language?.toLowerCase().replace(/ /g, '');
  }
}
