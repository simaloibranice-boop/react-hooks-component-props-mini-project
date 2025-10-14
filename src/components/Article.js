import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {

  const coffee = "☕️";
  const bento = "🍱";

  let emoji = "";
  if (minutes < 30) {
    const count = Math.ceil(minutes / 5);
    emoji = coffee.repeat(count);
  } else {
    const count = Math.ceil(minutes / 10);
    emoji = bento.repeat(count);
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {emoji} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
