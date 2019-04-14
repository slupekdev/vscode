import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';

const collectionPath = path.join(__dirname, '../collection.json');

describe('ng-add', () => {
  it('new files were created', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = runner.runSchematic('ng-add', {}, Tree.empty());

    expect(tree.files).toEqual(['/.vscode/extensions.json', '/.vscode/launch.json']);
  });
});
