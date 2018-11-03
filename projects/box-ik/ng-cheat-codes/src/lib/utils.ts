
import { SpecialKey, UnusedKeys, InputTags } from './constants';
import { BoxIkCheatCode } from './types';

export function filterKeysWithModifiers(event: KeyboardEvent): boolean {
  return !(
    event.shiftKey ||
    event.ctrlKey ||
    event.altKey ||
    event.metaKey
  );
}

export function filterUnusedKeys(event: KeyboardEvent): boolean {
  return !UnusedKeys.includes(event.key);
}

export function filterAllWhenInputTagActive(): boolean {
  return !InputTags.includes(activeTag());
}

export function normalizeKey(key: string): string {
  return SpecialKey[key] || key.toLowerCase();
}

export function activeTag(): string {
  return document.activeElement.tagName.toLowerCase();
}

export function isLowerCase(key: string): boolean {
  return key.toLowerCase() === key;
}

export function sort(cheatCodes: BoxIkCheatCode[]): BoxIkCheatCode[] {
  return cheatCodes.sort((a, b) => {
    if (a[0] < b[0]) { return -1; }
    if (a[0] > b[0]) { return 1; }
    return 0;
  });
}