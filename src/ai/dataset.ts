export type TrainSample = {
  text: string;
  star: 1 | 2 | 3 | 4 | 5;
};

/**
 * هدف الداتا:
 * - دعم عربي/إنجليزي مع لهجات ومفردات مختلفة
 * - أمثلة قصيرة جدا (مثل: "لذيذ جدا") + أمثلة مركبة (مثل: "لذيذ بس صغير")
 * - إدخال كلمات لهجات: كتير، مرّة، اوي، يجنن، مو، مش، وايد، حيل...
 * - إدخال سلانغ إنجليزي: awesome, yummy, meh, sucks, trash...
 */
export const TRAIN_DATA: TrainSample[] = [
  // =========================
  // Arabic 5 stars (فصحى ولهجات)
  // =========================
  { text: "لذيذ جدا", star: 5 },
  { text: "طعمه لذيذ جدا", star: 5 },
  { text: "لذيذ كتير", star: 5 },           // شامية
  { text: "لذيذ مرّة", star: 5 },           // خليجي
  { text: "لذيذ اوي", star: 5 },            // مصري
  { text: "يجنن", star: 5 },                // شامية
  { text: "وايد حلو", star: 5 },            // خليجي
  { text: "حيل حلو", star: 5 },             // خليجي
  { text: "طعم خرافي", star: 5 },
  { text: "ممتاز جدا", star: 5 },
  { text: "رهيب", star: 5 },
  { text: "روعه", star: 5 },
  { text: "أحلى شي", star: 5 },
  { text: "افضل شي جربته", star: 5 },
  { text: "جودة عالية وطعم ممتاز", star: 5 },
  { text: "أنصح فيه بشدة", star: 5 },
  { text: "تقييم خمس نجوم", star: 5 },
  { text: "❤️ لذيذ", star: 5 },
  { text: "🔥 طعم ممتاز", star: 5 },

  // =========================
  // Arabic 4 stars
  // =========================
  { text: "لذيذ", star: 4 },
  { text: "حلو", star: 4 },
  { text: "جيد جدا", star: 4 },
  { text: "طعم جميل", star: 4 },
  { text: "حلو بس غالي شوي", star: 4 },
  { text: "لذيذ لكن السعر مرتفع", star: 4 },
  { text: "ممتاز لكن التوصيل تأخر شوي", star: 4 },
  { text: "جيد بس التغليف عادي", star: 4 },
  { text: "حلو مرّة بس حجمه متوسط", star: 4 },
  { text: "كتير طيب بس سعره عالي", star: 4 },

  // =========================
  // Arabic 3 stars (mixed/neutral)
  // =========================
  { text: "عادي", star: 3 },
  { text: "متوسط", star: 3 },
  { text: "لا بأس", star: 3 },
  { text: "لذيذ لكنه صغير", star: 3 },
  { text: "لذيذ بس صغير", star: 3 },       // لهجة
  { text: "حلو بس الكمية قليلة", star: 3 },
  { text: "طعم جيد لكن مو ممتاز", star: 3 },
  { text: "كويس بس مش زي ما توقعت", star: 3 }, // مصري/شامي
  { text: "مش بطال بس عادي", star: 3 },
  { text: "مو سيء بس مو حلو", star: 3 },

  // =========================
  // Arabic 2 stars
  // =========================
  { text: "سيء", star: 2 },
  { text: "مو حلو", star: 2 },
  { text: "مش حلو", star: 2 },
  { text: "ما عجبني", star: 2 },
  { text: "مش عاجبني", star: 2 },
  { text: "جودة ضعيفة", star: 2 },
  { text: "الطعم مو طيب", star: 2 },
  { text: "خدمة سيئة", star: 2 },
  { text: "خيبة", star: 2 },
  { text: "👎 مو حلو", star: 2 },

  // =========================
  // Arabic 1 star
  // =========================
  { text: "سيء جدا", star: 1 },
  { text: "سيئ للغاية", star: 1 },
  { text: "مقرف", star: 1 },
  { text: "خربان", star: 1 },
  { text: "أسوأ شي", star: 1 },
  { text: "زبالة", star: 1 },              // لهجة
  { text: "trash", star: 1 },              // كلمة شائعة حتى بالعربي
  { text: "لا أنصح أبدا", star: 1 },
  { text: "تجربة سيئة جدا", star: 1 },
  { text: "💔 سيء", star: 1 },

  // =========================
  // English 5 stars (slang)
  // =========================
  { text: "very delicious", star: 5 },
  { text: "so delicious", star: 5 },
  { text: "extremely tasty", star: 5 },
  { text: "amazing taste", star: 5 },
  { text: "perfect taste", star: 5 },
  { text: "awesome", star: 5 },
  { text: "so good", star: 5 },
  { text: "yummy", star: 5 },
  { text: "super yummy", star: 5 },
  { text: "love it", star: 5 },
  { text: "high quality and delicious", star: 5 },
  { text: "10/10 would buy again", star: 5 },
  { text: "fire 🔥", star: 5 },

  // =========================
  // English 4 stars
  // =========================
  { text: "delicious", star: 4 },
  { text: "really good", star: 4 },
  { text: "nice", star: 4 },
  { text: "tasty but expensive", star: 4 },
  { text: "good but a bit pricey", star: 4 },
  { text: "good but small", star: 4 },

  // =========================
  // English 3 stars (neutral/mixed)
  // =========================
  { text: "ok", star: 3 },
  { text: "average", star: 3 },
  { text: "meh", star: 3 },
  { text: "fine but expected more", star: 3 },
  { text: "tasty but small", star: 3 },
  { text: "not bad but not great", star: 3 },

  // =========================
  // English 2 stars
  // =========================
  { text: "not good", star: 2 },
  { text: "bad", star: 2 },
  { text: "poor quality", star: 2 },
  { text: "disappointing", star: 2 },
  { text: "would not recommend", star: 2 },
  { text: "👎 bad", star: 2 },

  // =========================
  // English 1 star
  // =========================
  { text: "terrible", star: 1 },
  { text: "very bad", star: 1 },
  { text: "worst", star: 1 },
  { text: "sucks", star: 1 },
  { text: "trash", star: 1 },
  { text: "waste of money", star: 1 },
];
