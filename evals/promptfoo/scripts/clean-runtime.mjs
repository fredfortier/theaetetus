import { readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const evalRoot = path.resolve(here, '..');
const codexHome = path.join(evalRoot, 'fixtures', 'codex-home');
for (const target of [path.join(evalRoot, '.runs'), path.join(evalRoot, 'results')]) {
  if (!target.startsWith(`${evalRoot}${path.sep}`)) throw new Error(`Unsafe cleanup target: ${target}`);
  await rm(target, { recursive: true, force: true });
}
for (const entry of await readdir(codexHome)) {
  if (entry !== '.gitignore') await rm(path.join(codexHome, entry), { recursive: true, force: true });
}
process.stdout.write('Removed generated runs, results, credentials, and Codex runtime state.\n');
