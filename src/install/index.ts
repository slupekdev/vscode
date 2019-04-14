import { Rule, apply, url, move, chain, branchAndMerge, mergeWith } from '@angular-devkit/schematics';

export function install(): Rule {
  const templateSource = apply(url('./files'), [
    move('/.vscode')
  ]);
  
  return chain([
    branchAndMerge(chain([
      mergeWith(templateSource)
    ])),
]);
}
