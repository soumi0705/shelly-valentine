export const ImageChange = {
  hearts: "Hearts",
  milkandmochalove: "Milk&Mocha",
  sad: "Sad",
} as const;
export type ImageChange = (typeof ImageChange)[keyof typeof ImageChange];

export const images = [
  {
    name: "Hearts",
    link: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3M1ZGowM3VnZ2thaXRrbW5odnQwNjQ3bmtoamduMHhtdGZ1MmQ1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/7TJXK0wFlYVeJYk3yH/giphy.gif",
  },
  {
    name: "Milk&Mocha",
    link: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjQ3dHZrdzBjeW9hOHNmbXZ1Y2R6Mnp2bDQxYjY1ZnBxeml2cjhsYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/fvN5KrNcKKUyX7hNIA/giphy.gif",
  },
  {
    name: "Sad",
    link: "https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyam5yaWN0eDZuOXFpNDE5aHNlMHRkNG4xb2h1MG40ZzBwa2xvcndkeSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/0eMumU6VJ01GPh9MI0/200w.gif",
  },
];

export function getImageByEnum(state: ImageChange) {
  return images.find((img) => img.name === state)?.link;
}

export const NoTexts = [
  "NO",
  "NO… but think about it again &#x1F633;",
  "NO… you’re really choosing violence today huh &#x1F62D;",
  "NO… don’t be heartless, hit YES &#x1F629;",
  "NO… I’ll cry fr fr &#x1F97A;",
  "NO… you sure you wanna do that &#x1F440;",
  "NO… but YES would make my whole day &#x1F97A;",
  "NO… don’t test my feelings like this &#x1F62D;",
  "NO… come on, be nice to me &#x1F648;",
  "NO… but imagine how cute YES would look &#x1F63C;",
  "NO… I’m literally begging at this point &#x1F629;",
  "NO… my dard‑e‑dil can’t take this &#x1F62D;",
  "NO… this feels like a full filmy betrayal &#x1F494;",
  "NO… even the background music just got sad &#x1F3B5;",
  "NO… hero ki entry tabhi hogi jab you press YES &#x2728;",
  "NO… don’t make me do a slow‑motion cry scene &#x1F97A;",
  "YES... but in another color &#x1F60F;",
];

export const getNoText = (index: number) => {
  return NoTexts[index];
};
