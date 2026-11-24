export type TarotCard = {
  id: number;
  slug: string;
  name: string;
  arcana: "major" | "minor";
  suit?: "Wands" | "Cups" | "Swords" | "Pentacles";
  image: string;
};

const majorArcana = [
  ["the-fool", "The Fool"],
  ["the-magician", "The Magician"],
  ["the-high-priestess", "The High Priestess"],
  ["the-empress", "The Empress"],
  ["the-emperor", "The Emperor"],
  ["the-hierophant", "The Hierophant"],
  ["the-lovers", "The Lovers"],
  ["the-chariot", "The Chariot"],
  ["strength", "Strength"],
  ["the-hermit", "The Hermit"],
  ["wheel-of-fortune", "Wheel of Fortune"],
  ["justice", "Justice"],
  ["the-hanged-man", "The Hanged Man"],
  ["death", "Death"],
  ["temperance", "Temperance"],
  ["the-devil", "The Devil"],
  ["the-tower", "The Tower"],
  ["the-star", "The Star"],
  ["the-moon", "The Moon"],
  ["the-sun", "The Sun"],
  ["judgement", "Judgement"],
  ["the-world", "The World"],
] as const;

const ranks = [
  ["ace", "Ace"], ["two", "Two"], ["three", "Three"], ["four", "Four"],
  ["five", "Five"], ["six", "Six"], ["seven", "Seven"], ["eight", "Eight"],
  ["nine", "Nine"], ["ten", "Ten"], ["page", "Page"], ["knight", "Knight"],
  ["queen", "Queen"], ["king", "King"],
] as const;

const suits = ["Wands", "Cups", "Swords", "Pentacles"] as const;

const imagePath = (id: number, slug: string) => `/assets/cards/${String(id).padStart(2, "0")}-${slug}.jpg`;

const majorCards: TarotCard[] = majorArcana.map(([slug, name], id) => ({
  id,
  slug,
  name,
  arcana: "major",
  image: imagePath(id, slug),
}));

const minorCards: TarotCard[] = suits.flatMap((suit, suitIndex) =>
  ranks.map(([rankSlug, rankName], rankIndex) => {
    const id = majorArcana.length + suitIndex * ranks.length + rankIndex;
    const slug = `${rankSlug}-of-${suit.toLowerCase()}`;
    return { id, slug, name: `${rankName} of ${suit}`, arcana: "minor", suit, image: imagePath(id, slug) };
  }),
);

export const tarotCards: TarotCard[] = [...majorCards, ...minorCards];
