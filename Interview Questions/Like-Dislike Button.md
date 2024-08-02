# Like Dislike Button

---

Tags: #InterviewQuestion #Proxify
Company: Proxify
Questions:
1. MCQ on react optimisations
2. Mini react app for like-dislike button
3. Pagination in React

----

### Description

Create a simple like-dislike button component using React. The component should:
Display a like and dislike button
Update the like and dislike counts when clicked
Toggle the active state of the buttons
You can use a functional component or a class component. You can also use React Hooks if you prefer.


```tsx
import React from "react";

export default function LikeDislikeButton() {
  const [likeDislikeCount, setLikeDislikeCount] = React.useState({
    like: 0,
    dislike: 0,
  });

  const [activeButton, setActiveButton] = React.useState(0);

  const handleAction = (value) => {
    const newCount = { ...likeDislikeCount };
    newCount.like += value === 1 ? 1 : -1;
    newCount.dislike -= value === 1 ? 1 : -1;
    setLikeDislikeCount(newCount);
    setActiveButton(value);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
      }}
    >
      <button
        type="button"
        onClick={() => handleAction(1)}
        disabled={activeButton === 1}
        style={{ backgroundColor: activeButton === 1 ? "green" : "" }}
      >
        {likeDislikeCount.like}
      </button>
      <button
        type="button"
        onClick={() => handleAction(-1)}
        disabled={activeButton === -1}
        style={{ backgroundColor: activeButton === -1 ? "red" : "" }}
      >
        {likeDislikeCount.dislike}
      </button>
    </div>
  );
}
```
