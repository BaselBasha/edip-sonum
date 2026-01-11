function normalizeArabic(text: string): string {
  // remove Arabic diacritics
  text = text.replace(/[\u064B-\u0652]/g, "");
  // normalize alef forms
  text = text.replace(/[إأآا]/g, "ا");
  // normalize yaa/alif maqsoora
  text = text.replace(/[ىي]/g, "ي");
  // normalize taa marbouta
  text = text.replace(/ة/g, "ه");
  // remove tatweel
  text = text.replace(/ـ/g, "");
  return text;
}

function normalizeSlang(text: string): string {
  // Arabic dialect synonyms -> more standard tokens
  const map: Array<[RegExp, string]> = [
    [/\bكتير\b/g, "جدا"],
    [/\bكتيرر+\b/g, "جدا"],
    [/\bمره\b/g, "جدا"],
    [/\bمرّة\b/g, "جدا"],
    [/\bاوي\b/g, "جدا"],
    [/\bاوى\b/g, "جدا"],
    [/\bاوف\b/g, "جدا"],
    [/\bحيل\b/g, "جدا"],
    [/\bوايد\b/g, "جدا"],
    [/\bمو\b/g, "ليس"],
    [/\bمش\b/g, "ليس"],
    [/\bمهو\b/g, "ليس"],
    [/\bيجنن\b/g, "رائع"],
    [/\bرهيب\b/g, "ممتاز"],
    [/\bزباله\b/g, "سيء"],
  ];

  for (const [re, rep] of map) text = text.replace(re, rep);

  // English slang normalization
  text = text.replace(/\byummy\b/g, "delicious");
  text = text.replace(/\bawesome\b/g, "amazing");
  text = text.replace(/\bmeh\b/g, "average");
  text = text.replace(/\bsucks\b/g, "terrible");
  text = text.replace(/\btrash\b/g, "terrible");

  // Emoji normalization to words (helps sentiment)
  text = text.replace(/❤️|😍|😋|🔥/g, " excellent");
  text = text.replace(/💔|👎|😡|🤮/g, " terrible");

  return text;
}

function collapseRepeats(text: string): string {
  // "coooool" -> "cool", "لذييييذ" -> "لذيذ"
  return text.replace(/(.)\1{2,}/g, "$1$1");
}

export function tokenize(text: string): string[] {
  let x = text.toLowerCase();
  x = normalizeArabic(x);
  x = collapseRepeats(x);
  x = normalizeSlang(x);

  return x
    .replace(/[^\p{L}\p{N}\s]+/gu, " ")
    .split(/\s+/)
    .filter(Boolean);
}

export function buildVocab(texts: string[], maxVocab = 2000): string[] {
  const freq = new Map<string, number>();
  for (const t of texts) {
    for (const w of tokenize(t)) {
      freq.set(w, (freq.get(w) ?? 0) + 1);
    }
  }
  return [...freq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxVocab)
    .map(([w]) => w);
}

export function vectorize(text: string, vocab: string[]): number[] {
  const idx = new Map<string, number>();
  vocab.forEach((w, i) => idx.set(w, i));
  const vec = new Array(vocab.length).fill(0);

  for (const w of tokenize(text)) {
    const i = idx.get(w);
    if (i !== undefined) vec[i] += 1;
  }

  // normalize
  const sum = vec.reduce((a, b) => a + b, 0);
  if (sum > 0) for (let i = 0; i < vec.length; i++) vec[i] /= sum;
  return vec;
}
